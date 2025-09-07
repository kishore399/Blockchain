import { useEffect } from "react";
import { useApiStore } from "../store/apistore";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import AddTransaction from "../components/AddTransaction";
import Transaction from "../components/Transaction";

const Home = () => {
  const getInfo = useApiStore((s) => s.getInfo);

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Navbar />
      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 md:mb-8 text-center md:text-left">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Dashboard />
          </div>
          <div className="md:col-span-1">
            <AddTransaction />
          </div>
        </div>
        <Transaction />
      </div>
    </div>
  );
};

export default Home;
