// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiHome,
  FiMail,
  FiBook,
  FiFileText,
  FiBarChart2,
  FiChevronDown,
  FiMenu,
  FiCloud,
  FiCpu
} from 'react-icons/fi';
import logo from '../assets/Logo-ecotenable.png'


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    // Perform logout logic here, e.g., clear user session, redirect to login page, etc.
    const token = localStorage.getItem('token');
    // Check if the token exists in local storage
    console.log(token);
    if (token) {
        localStorage.removeItem('token');
        window.location.href = '/login'; // Redirect to login page
        }
    }
  // This function handles the logout process by removing the token from local storage and redirecting to the login page.

  return (
    <>
      {/* Toggle Button */}
      <div className="md:hidden fixed top-32 left-1 z-50">
        <button
          className="p-2 rounded-md bg-green-700 text-white shadow-md"
          onClick={() => setOpen(!open)}
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`bg-green-100 md:min-h-80 text-green-900 h-320 w-62 p-5 pt-8 fixed top-28 left-1 z-40 transition-transform duration-300 ease-in-out shadow-lg overflow-y-auto 
        ${open ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        {/* Logo Area */}
        <div className="text-2xl font-bold mb-6 text-green-800">
            <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-21 w-auto " />
                
            </Link>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-base"
          />
        </div>

        {/* Navigation */}
        <nav className="space-y-2 text-lg font-medium">
          <div>
            <button
              className="flex justify-between items-center w-full px-4 py-2 hover:bg-green-200 rounded-md transition"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="flex items-center gap-3">
                <FiHome /> Overview
              </span>
              <FiChevronDown className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showDropdown && (
              <div className="ml-6 mt-2 space-y-2 text-base animate-fade-in">
                <Link to="/analytics" className="block px-2 py-1 hover:bg-green-200 rounded-md">Analytics</Link>
                <Link to="/bookings/total" className="block px-2 py-1 hover:bg-green-200 rounded-md">Total Bookings</Link>
                <Link to="/consultation" className="block px-2 py-1 hover:bg-green-200 rounded-md">Consultation</Link>
                <Link to="/charts" className="block px-2 py-1 hover:bg-green-200 rounded-md">Charts</Link>
              </div>
            )}
          </div>

          <Link to="/inbox" className="flex items-center gap-3 px-4 py-2 hover:bg-green-200 rounded-md transition">
            <FiMail /> Inbox
          </Link>

          <Link to="/dashboard/bookings" className="flex items-center gap-3 px-4 py-2 hover:bg-green-200 rounded-md transition">
            <FiBook /> Bookings
          </Link>

          <Link to="/dashboard/blogAdmin" className="flex items-center gap-3 px-4 py-2 hover:bg-green-200 rounded-md transition">
            <FiFileText /> Blogs
          </Link>
          <Link to="/" className='flex items-center gap-3 px-4 py-2 hover:bg-green-200 rounded-md transition'>
          <FiCloud /> Climate sector</Link>
          <Link to="/" className='flex items-center gap-3 px-4 py-2 hover:bg-green-200 rounded-md transition'>
          <FiCpu /> Technology</Link>
          
          <button
            className='ml-2 text-sm bg-green-700 mt-80 cursor-pointer text-white px-2 py-1 rounded-md transition-all duration-300 hover:bg-green-800'
            onClick={handleLogout}
            >Log Out</button>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
