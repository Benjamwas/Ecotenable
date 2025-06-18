import React from 'react';
import { FiBell, FiSettings } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4  m-9 bg-green-100 text-green-900 shadow-md">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button className="relative">
          <FiBell size={22} className="hover:text-green-600" />
          <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-red-600 text-white text-xs flex items-center justify-center">3</span>
        </button>

        {/* Settings */}
        <button>
          <FiSettings size={22} className="hover:text-green-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
