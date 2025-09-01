import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-50 bg-[#1E1E2E] bg-opacity-80 backdrop-blur-md transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">

            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                LibraryChain
              </span>
            </div>

            <div className="flex items-center">
              <button className="px-6 py-2 rounded-full hover:border font-bold hover:bg-white hover:text-black transition-colors transform hover:-translate-y-1">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;