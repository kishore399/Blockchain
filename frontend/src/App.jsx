import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import { Navigate, Routes, Route } from "react-router";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
