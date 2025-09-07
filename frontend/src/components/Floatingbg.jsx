import React from "react";

const Floatingbg = () => {
  return (
    <div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E1A] via-[#1A1A2E] to-[#2E2E3A] opacity-80 animate-pulse-slow"></div>

      <ul className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <li
            key={i}
            className="absolute block bg-gray-600/10 animate-square"
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 200 + 150}px`,
              animationDelay: `${Math.random() * 0.3}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              borderRadius: "10px",
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Floatingbg;
