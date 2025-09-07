import { useApiStore } from "../store/apistore";

const Transaction = () => {
  const transactions = useApiStore((s) => s.transactions);

  return (
    <>
      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Recent Transactions
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-700 text-gray-400 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Transaction ID</th>
                <th className="py-3 px-6 text-left">User</th>
                <th className="py-3 px-6 text-left">Book</th>
                <th className="py-3 px-6 text-left">Type</th>
                <th className="py-3 px-6 text-left">Time</th>
              </tr>
            </thead>
            <tbody className="text-white text-sm font-light">
              {transactions.map((tx, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <span className="font-medium text-teal-400">{tx.txId}</span>
                  </td>
                  <td className="py-3 px-6 text-left">{tx.user}</td>
                  <td className="py-3 px-6 text-left">{tx.book}</td>
                  <td className="py-3 px-6 text-left">
                    <span
                      className={`py-1 px-3 rounded-full text-xs font-semibold ${tx.type === "borrow" ? "bg-blue-600 text-blue-100" : "bg-green-600 text-green-100"}`}
                    >
                      {tx.type}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-left">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Transaction;
