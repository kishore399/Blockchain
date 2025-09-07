import User from "../models/model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullName: name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long" });
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return res.status(400).json({ message: "Invalid Email Format" });
  }

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exits with this Email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    const userInfo = {
      _id: user._id,
      email: user.email,
      fullName: user.name,
      createdAt: user.createdAt,
    };

    return res
      .status(201)
      .json({ userInfo, message: "account created seccessfully" });
  } catch (err) {
    console.log("error in signup controller", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return res.status(400).json({ message: "Invalid Email Format" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const userInfo = {
      _id: user._id,
      email: user.email,
      fullName: user.name,
      createdAt: user.createdAt,
    };
    return res.status(200).json({ userInfo });
  } catch (err) {
    console.log("Error in login controller", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getData = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(userId);
    if (!userId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const info = {
      transactions: user.transactions,
    };

    return res.status(200).json({ info });
  } catch (err) {
    console.log("Error in getData controller", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logTransaction = async (req, res) => {
  try {
    const { id, userId, book, type } = req.body;

    if (!userId || !book || !type) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const newTransaction = {
      txId: `0x${Math.random().toString(16).slice(2, 10)}...`,
      book,
      user: userId,
      type,
      date: new Date().toISOString(),
    };

    user.transactions.push(newTransaction);

    console.log(newTransaction);

    await user.save();

    return res.status(200).json({ newTransaction });
  } catch (err) {
    console.error("Error in logTransaction controller:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
