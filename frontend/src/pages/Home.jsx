import { useState } from "react";

const Home = () => {
  // State for the Book ID and User ID input fields
  const [bookId, setBookId] = useState("");
  const [userId, setUserId] = useState("");

  // Placeholder data for the dashboard stats
  const stats = [
    { title: "Total Books", value: "2,450", icon: "📚" },
    { title: "Active Transactions", value: "128", icon: "🔄" },
    { title: "Unique Users", value: "897", icon: "👥" },
    { title: "Blockchain Height", value: "1,234,567", icon: "🔗" },
  ];

  // Placeholder data for the recent transactions table
  const transactions = [
    {
      txId: "0xabc123...",
      user: "Alice",
      book: "The Great Gatsby",
      type: "Borrow",
      date: "2 mins ago",
    },
    {
      txId: "0xdef456...",
      user: "Bob",
      book: "1984",
      type: "Return",
      date: "10 mins ago",
    },
    {
      txId: "0xghi789...",
      user: "Charlie",
      book: "Moby Dick",
      type: "Borrow",
      date: "30 mins ago",
    },
    {
      txId: "0xklm012...",
      user: "Dana",
      book: "To Kill a Mockingbird",
      type: "Return",
      date: "1 hour ago",
    },
  ];

  // The single App component contains all the UI and logic.
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Navbar component - placed inline within the App component */}
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-400">LibraChain</div>
          <div className="flex items-center space-x-4">
            <span className="text-sm hidden sm:inline text-gray-400">
              Librarian's Portal
            </span>
            <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
              LP
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 md:mb-8 text-center md:text-left">
          Library DApp Dashboard
        </h1>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dashboard section */}
          <div className="md:col-span-2">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                Dashboard Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg flex items-center justify-between transition-transform duration-300 hover:scale-105"
                  >
                    <div>
                      <p className="text-sm text-gray-400">{stat.title}</p>
                      <p className="text-2xl font-bold text-teal-400">
                        {stat.value}
                      </p>
                    </div>
                    <div className="text-3xl">{stat.icon}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Transaction Volume
                </h3>
                <div className="h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500 text-center">
                  <span className="p-4">
                    [Placeholder for a future line chart to visualize
                    transaction data]
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Form section */}
          <div className="md:col-span-1">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl mb-6">
              <h2 className="text-2xl font-semibold mb-4 text-white">
                New Transaction
              </h2>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-400 text-sm font-bold mb-2"
                    htmlFor="bookId"
                  >
                    Book ID
                  </label>
                  <input
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:border-teal-500 transition-colors duration-200"
                    id="bookId"
                    type="text"
                    placeholder="e.g., BK-12345"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-400 text-sm font-bold mb-2"
                    htmlFor="userId"
                  >
                    User ID
                  </label>
                  <input
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:border-teal-500 transition-colors duration-200"
                    id="userId"
                    type="text"
                    placeholder="e.g., USR-67890"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-400 text-sm font-bold mb-2"
                    htmlFor="type"
                  >
                    Transaction Type
                  </label>
                  <select
                    className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:border-teal-500 transition-colors duration-200"
                    id="type"
                  >
                    <option value="borrow">Borrow</option>
                    <option value="return">Return</option>
                  </select>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Log Transaction
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Recent Transactions table */}
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
                      <span className="font-medium text-teal-400">
                        {tx.txId}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-left">{tx.user}</td>
                    <td className="py-3 px-6 text-left">{tx.book}</td>
                    <td className="py-3 px-6 text-left">
                      <span
                        className={`py-1 px-3 rounded-full text-xs font-semibold ${tx.type === "Borrow" ? "bg-blue-600 text-blue-100" : "bg-green-600 text-green-100"}`}
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
      </div>
    </div>
  );
};

export default Home;
