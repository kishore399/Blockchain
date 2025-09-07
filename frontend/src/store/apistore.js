import { create } from "zustand";
import axios from "axios";

const URL = "http://localhost:5000/api";

export const useApiStore = create((set, get) => ({
  user: null,
  error: null,
  isLoading: false,

  setError: (msg) => set({ error: msg }),

  stats: [
    { title: "Total Books", value: "2,450", icon: "📚" },
    { title: "Active Transactions", value: "128", icon: "🔄" },
    { title: "Unique Users", value: "897", icon: "👥" },
    { title: "Blockchain Height", value: "1,234,567", icon: "🔗" },
  ],
  transactions: [
    {
      txId: "0xabc123...",
      user: "Alice",
      book: "The Great Gatsby",
      type: "return",
      date: "2 mins ago",
    },
    {
      txId: "0xdef456...",
      user: "Bob",
      book: "1984",
      type: "borrow",
      date: "10 mins ago",
    },
    {
      txId: "0xghi789...",
      user: "Charlie",
      book: "Moby Dick",
      type: "borrow",
      date: "30 mins ago",
    },
    {
      txId: "0xklm012...",
      user: "Dana",
      book: "To Kill a Mockingbird",
      type: "return",
      date: "1 hour ago",
    },
    {
      txId: "0xefg456...",
      user: "Erica",
      book: "Dune",
      type: "borrow",
      date: "1 hour ago",
    },
    {
      txId: "0xhij789...",
      user: "Frank",
      book: "Sapiens",
      type: "borrow",
      date: "2 hours ago",
    },
    {
      txId: "0xklm012...",
      user: "Grace",
      book: "The Martian",
      type: "return",
      date: "3 hours ago",
    },
  ],
  signup: async (email, password, fullName) => {
    set({ isLoading: true, error: null });
    try {
      const res = await axios.post(`${URL}/signup`, {
        email,
        password,
        fullName,
      });
      set({ user: res.data.userInfo, isLoading: false });
      console.log(res.data.userInfo);
    } catch (err) {
      set({
        error: err.response?.data?.message || "Error signing up",
        isLoading: false,
      });
      throw err;
    }
  },

  login: async (email, password) => {
    set({ error: null, isLoading: true });
    try {
      const res = await axios.post(`${URL}/login`, { email, password });
      set({ user: res.data.userInfo, isLoading: false });
      console.log(res.data.userInfo);
    } catch (err) {
      set({
        error: err.response?.data?.message || "Error Logging in",
        isLoading: false,
      });
      throw err;
    }
  },
  addTransaction: async (userId, book, type) => {
    const temp = {
      txId: `0x${Math.random().toString(16).slice(2, 8)}`,
      user: userId,
      book,
      type,
      date: "just now",
    };
    set({ transactions: [temp, ...get().transactions] });

    const updatedStats = get().stats.map((stat) => {
      if (stat.title === "Active Transactions") {
        const current = parseInt(stat.value.replace(/,/g, ""), 10);
        const newValue =
          type === "borrow" ? current + 1 : Math.max(current - 1, 0);
        return { ...stat, value: newValue.toLocaleString() };
      }
      return stat;
    });
    set({
      stats: get().stats.map((s) => {
        if (s.title === "Active Transactions") {
          let curr = parseInt(s.value.replace(/,/g, ""), 10);
          let val = type === "return" ? curr - 1 : curr + 1;
          return { ...s, value: val };
        }
        return s;
      }),
    });
    id = get().user._id;
    set({ error: null, isLoading: true });
    try {
      const res = await axios.post(`${URL}/transaction`, {
        id,
        userId,
        book,
        type,
      });
      set({ isLoading: false });
      console.log(res.data.newTransaction);
    } catch (err) {
      set({
        error: err.response?.data?.message || "Error Logging transaction",
        isLoading: false,
      });
    }
  },

  getInfo: async () => {
    const userId = get().user._id;
    console.log(userId);
    set({ error: null, isLoading: true });
    try {
      const res = await axios.post(`${URL}/info`, { userId });
      set({
        transactions: res.data.info.transactions,
        isLoading: false,
      });
      console.log(res.data);
    } catch (err) {
      set({
        error: err.response?.data?.message || "Error Logging transaction",
        isLoading: false,
      });
    }
  },
}));
