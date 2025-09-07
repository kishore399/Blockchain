import React, { useRef, useEffect } from "react";
import { useApiStore } from "../store/apistore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineController
);

const Dashboard = () => {
  const stats = useApiStore((s) => s.stats);
  const transactions = useApiStore((s) => s.transactions);

  const chartRef = useRef(null);

  useEffect(() => {
    const labels = [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Today",
    ];
    const mockBorrows = [10, 15, 8, 12, 14, 11];
    const mockReturns = [5, 7, 4, 9, 6, 8];

    const todayBorrowCount = transactions.filter(
      (tx) => tx.type === "borrow"
    ).length;
    const todayReturnCount = transactions.filter(
      (tx) => tx.type === "return"
    ).length;

    const borrowsData = [...mockBorrows, todayBorrowCount];
    const returnsData = [...mockReturns, todayReturnCount];
    const totalData = borrowsData.map((b, i) => b + returnsData[i]);

    const data = {
      labels,
      datasets: [
        {
          label: "Total Transactions",
          data: totalData,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.4,
        },
        {
          label: "Borrows",
          data: borrowsData,
          borderColor: "rgb(54, 162, 235)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          tension: 0.4,
        },
        {
          label: "Returns",
          data: returnsData,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          tension: 0.4,
        },
      ],
    };

    const config = {
      type: "line",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top", labels: { color: "white" } },
          title: {
            display: true,
            text: "Borrow, Return, and Total Transactions",
            color: "white",
          },
        },
        scales: {
          x: {
            ticks: { color: "white" },
            grid: { color: "rgba(255,255,255,0.1)" },
          },
          y: {
            ticks: { color: "white", stepSize: 1, precision: 0 },
            grid: { color: "rgba(255,255,255,0.1)" },
          },
        },
      },
    };

    if (chartRef.current) {
      const existingChart = ChartJS.getChart(chartRef.current);
      if (existingChart) existingChart.destroy();
      new ChartJS(chartRef.current, config);
    }
  }, [transactions]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-gray-700 p-4 rounded-lg flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-400">{stat.title}</p>
              <p className="text-2xl font-bold text-teal-400">{stat.value}</p>
            </div>
            <div className="text-3xl">{stat.icon}</div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 text-white">
          Transaction Volume
        </h3>
        <div className="h-48 bg-gray-700 rounded-lg flex items-center justify-center p-4">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
