import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Navigate, Routes, Route } from "react-router";

function App() {
  return (
    <div className="bg-[#1E1E2E] text-white">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
