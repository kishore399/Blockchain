import { create } from "zustand";
import axios from "axios";

const URL = "http://localhost:5000/api";

export const useApiStore = create((set, get) => ({
    user: null,
    error: null,
    isLoading: false,

    setError: (msg) => set({error: msg}),

    signup: async ( email, password, fullName ) => {
        set({ isLoading: true, error: null });
        try {
            const res = await axios.post(`${URL}/signup`,{ email, password, fullName });
            set({user : res.data.userInfo, isLoading: false});
            console.log(res.data.userInfo);
        } catch(err) {
            set({ error: err.response?.data?.message || "Error signing up", isLoading: false });
            throw err;
        }
    },

    login : async (email, password) => {
        set({error: null, isLoading: true});
        try {
            const res = await axios.post(`${URL}/login`,{ email, password });
            set({user : res.data.userInfo, isLoading: false});
            console.log(res.data.userInfo);
        } catch(err) {
            set({ error: err.response?.data?.message || "Error Logging in", isLoading: false });
            throw err;
        }
    },
}))
