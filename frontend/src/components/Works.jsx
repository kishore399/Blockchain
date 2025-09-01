

const Works = () => {
  return (
    <>

      <section className="w-full my-3 py-20 px-4 md:px-8 bg-[#0E0E1A]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-16">
            Our process is designed to be intuitive and efficient, making blockchain technology accessible for everyone.
          </p>

          <div className="relative flex flex-col items-center">
            {/* The line connecting the steps */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-600 top-0"></div>

            {/* Step 1 */}
            <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 p-8 mb-12 md:mb-20 bg-[#1A1A2E] rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:bg-[#2A2A4E] transform hover:-translate-y-2">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center p-4 rounded-full bg-purple-600 shadow-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-check">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <polyline points="16 11 18 13 22 9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1">1. Authenticate & Log In</h3>
                  <p className="text-zinc-400">
                    Securely sign in using your credentials to access your personal library dashboard.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 p-8 mb-12 md:mb-20 bg-[#1A1A2E] rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:bg-[#2A2A4E] transform hover:-translate-y-2">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center p-4 rounded-full bg-blue-600 shadow-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-check">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    <path d="m9 11 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1">2. Manage Your Books</h3>
                  <p className="text-zinc-400">
                    Librarians can easily check books in or out, with each transaction recorded on the blockchain.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 p-8 bg-[#1A1A2E] rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:bg-[#2A2A4E] transform hover:-translate-y-2">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center p-4 rounded-full bg-green-600 shadow-lg text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-fingerprint">
                    <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 4.9 1.45" />
                    <path d="M10.83 6A6 6 0 0 1 22 12c0 2.5-1.2 4.7-3.2 6" />
                    <path d="M12 10a2 2 0 0 0-2 2" />
                    <path d="M2 12s2-2 4-2s6 2 8 2s4-2 4-2" />
                    <path d="M12 22s-2-2-4-2s-6 2-8 2" />
                    <path d="M15.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-1">3. Verify with Transparency</h3>
                  <p className="text-zinc-400">
                    All transactions are recorded on an immutable ledger, providing a transparent and verifiable history for every book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;