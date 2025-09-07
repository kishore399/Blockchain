import React, { useState } from "react";
import { useApiStore } from "../store/apistore";
import toast from "react-hot-toast";

const AddTransaction = () => {
  const [bookId, setBookId] = useState("");
  const [userId, setUserId] = useState("");
  const [transactionType, setTransactionType] = useState("borrow");

  const addTransaction = useApiStore((s) => s.addTransaction);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!bookId || !userId) return;

    addTransaction(userId, bookId, transactionType);
    setBookId("");
    setUserId("");
    setTransactionType("borrow");
    toast.success("Transaction logged successfully!");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold mb-4 text-white">
        New Transaction
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-400 text-sm font-bold mb-2"
            htmlFor="bookId"
          >
            Book ID
          </label>
          <input
            id="bookId"
            type="text"
            placeholder="e.g., BK-12345"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-teal-500"
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
            id="userId"
            type="text"
            placeholder="e.g., USR-67890"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-teal-500"
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
            id="type"
            value={transactionType}
            onChange={(e) => setTransactionType(e.target.value)}
            className="w-full bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-teal-500"
          >
            <option value="borrow">Borrow</option>
            <option value="return">Return</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg"
        >
          Log Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
