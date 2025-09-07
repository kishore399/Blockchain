import React from "react";

const Features = () => {
  return (
    <>
      <section className="w-full py-32 px-4 md:px-8 bg-[#1A1A2E]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-16">
            Our platform leverages blockchain technology to deliver unparalleled
            security and efficiency.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 bg-[#2E2E3A] rounded-2xl shadow-lg transition-transform hover:scale-105">
              <div className="text-blue-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield-check"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">Immutable Records</h3>
              <p className="text-zinc-400 text-center">
                All library transactions are recorded on a blockchain, ensuring
                they are tamper-proof and verifiable by anyone.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 bg-[#2E2E3A] rounded-2xl shadow-lg transition-transform hover:scale-105">
              <div className="text-purple-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-network"
                >
                  <path d="M8 12L2 12" />
                  <path d="M22 12L16 12" />
                  <path d="M16 12L16 2" />
                  <path d="M16 12L16 22" />
                  <path d="M8 12L8 2" />
                  <path d="M8 12L8 22" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Decentralized Trust
              </h3>
              <p className="text-zinc-400 text-center">
                Our decentralized network eliminates the need for a central
                authority, fostering trust and transparency among all users.
              </p>
            </div>

            <div className="flex flex-col items-center p-8 bg-[#2E2E3A] rounded-2xl shadow-lg transition-transform hover:scale-105">
              <div className="text-green-400 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                Transparent Transactions
              </h3>
              <p className="text-zinc-400 text-center">
                Every transaction, from check-out to return, is publicly visible
                on the blockchain, ensuring accountability for all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
