import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-600 shadow mb-2">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">About</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">Services</a>
            <a href="#" className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium">Contact</a>
          </div>
          <div className="flex items-center">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
              Signup
            </button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
