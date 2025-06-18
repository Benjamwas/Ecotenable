import React from 'react'
import logo from '../assets/Logo-ecotenable.png'
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bottom-0  left-0 bg-white shadow-md border-t border-gray-200 z-50">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 space-y-4 md:space-y-0">
        {/* Logo & Name */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="EcoTenable" className="h-10 w-auto" />
          <span className="text-2xl font-bold" style={{ color: '#0B2F3A' }}>
            EcoTenable
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col text-center space-y-1 font-medium">
          <h3 className="text-lg font-semibold" style={{ color: '#0B2F3A' }}>Quick Links</h3>
          {['Home', 'Services', 'Blog', 'Contact'].map((label) => (
            <a
              key={label}
              href={`/${label.toLowerCase()}`}
              className="hover:underline underline-offset-4"
              style={{ color: '#0B2F3A' }}
              onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
              onMouseLeave={(e) => (e.target.style.color = '#0B2F3A')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center space-y-1">
          <p className="text-sm text-gray-600 italic">Follow us on:</p>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaEnvelope className="text-[#0B2F3A] hover:text-[#FFD700]" /></a>
            <a href="#"><FaInstagram className="text-[#0B2F3A] hover:text-[#FFD700]" /></a>
            <a href="#"><FaFacebook className="text-[#0B2F3A] hover:text-[#FFD700]" /></a>
            <a href="#"><FaTwitter className="text-[#0B2F3A] hover:text-[#FFD700]" /></a>
            <a href="#"><FaLinkedin className="text-[#0B2F3A] hover:text-[#FFD700]" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 italic py-2 border-t border-gray-100 bg-white">
        <p>© 2025 EcoTenable. All rights reserved. | Designed by Benjamin</p>
      </div>
    </footer>
  )
}

export default Footer
