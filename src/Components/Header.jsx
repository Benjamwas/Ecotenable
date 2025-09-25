import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="bg-blue-500 h-20 sm:h-16 flex flex-wrap items-center justify-between px-4 w-full fixed top-0 left-0 z-10 mb-24">
      {/* Contact Info Section */}
      <div className="text-gray-800 text-sm sm:text-lg italic flex items-center space-x-2">
        <FaPhoneAlt className="text-black text-xl sm:text-2xl" />
        <h2 className="text-white">0739433017 / +44 7399 286 116</h2>
      </div>

      {/* Social Icons Section */}
      <div className="flex items-center space-x-4">
        <p className="text-xs sm:text-sm text-gray-800 italic">Follow us on:</p>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-white hover:text-gray-300" />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white hover:text-gray-300" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-white hover:text-gray-300" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white hover:text-gray-300" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-gray-300" />
        </a>
      </div>
    </div>
  )
}

export default Header