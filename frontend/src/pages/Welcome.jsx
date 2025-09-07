import Features from "../components/Features";
import Footer from "../components/Footer";
import Works from "../components/Works";
import Header from "../components/Header";
import Floatingbg from "../components/Floatingbg";
import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0E0E1A] text-white font-sans overflow-x-hidden">
      <Header />
      <header className="relative w-full h-screen flex flex-col items-center justify-center text-center p-8">
        <Floatingbg />

        <div className="relative z-10 flex flex-col justify-center items-center max-w-4xl mx-auto px-4 py-20 animate-fade-in-up">
          <div className="mb-6 text-blue-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-blocks mx-auto"
            >
              <rect width="7" height="7" x="14" y="3" rx="1" />
              <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Secure Library Management on the Blockchain
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-8">
            Revolutionize library record-keeping with a secure, transparent, and
            decentralized system. Track books, manage loans, and ensure data
            integrity like never before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleClick}
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </button>
            <button className="px-8 py-4 rounded-full border border-white hover:bg-white hover:text-black transition-colors transform hover:-translate-y-1">
              Learn More
            </button>
          </div>
        </div>
      </header>

      <Features />
      <Works />

      <Footer />
    </div>
  );
};

export default Welcome;
