import React, { useState, useEffect } from 'react'
import Home from '../Pages/Home'
import Services from '../Pages/Services'
import logo from '../assets/Logo-ecotenable.png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', path: '/Home' },
    { label: 'Services', path: '/Services' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0  mt-12  left-0 w-full z-30 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 shadow-lg backdrop-blur-md py-2'
            : 'bg-white/50 backdrop-blur-md py-4'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="EcoTenable" className="h-10 w-auto" />
            <span className="text-2xl font-bold" style={{ color: '#0B2F3A' }}>
              EcoTenable
            </span>
          </div>

          {/* Nav Links */}
          <ul className="hidden md:flex justify-center space-x-8 font-medium">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="transition hover:underline underline-offset-8"
                  style={{
                    color: '#0B2F3A',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
                  onMouseLeave={(e) => (e.target.style.color = '#0B2F3A')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button
              className="font-semibold px-4 py-2 rounded transition"
              style={{
                backgroundColor: '#FFD700',
                color: '#0B2F3A',
              }}
            >
              Login
            </button>
            <button
              className="px-4 py-2 rounded transition"
              style={{
                backgroundColor: '#0B2F3A',
                color: '#fff',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FFD700'
                e.target.style.color = '#0B2F3A'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#0B2F3A'
                e.target.style.color = '#fff'
              }}
            >
              Register
            </button>
          </div>

          {/* Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none" style={{ color: '#0B2F3A' }}>
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m4 6H4" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold" style={{ color: '#0B2F3A' }}>Menu</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-red-500">
              ✕
            </button>
          </div>
          <ul className="space-y-4 font-medium">
            {['Home', 'Services', 'Blog', 'Contact'].map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="transition hover:underline underline-offset-8"
                  style={{ color: '#0B2F3A' }}
                  onMouseEnter={(e) => (e.target.style.color = '#FFD700')}
                  onMouseLeave={(e) => (e.target.style.color = '#0B2F3A')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 space-y-2">
            <button
              className="w-full py-2 rounded"
              style={{ backgroundColor: '#FFD700', color: '#0B2F3A' }}
            >
              Login
            </button>
            <button
              className="w-full py-2 rounded transition"
              style={{ backgroundColor: '#0B2F3A', color: '#fff' }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FFD700'
                e.target.style.color = '#0B2F3A'
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#0B2F3A'
                e.target.style.color = '#fff'
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation
