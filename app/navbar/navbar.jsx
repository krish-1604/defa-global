'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '#' }, // Special case handled manually
  ]

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <>
      {/* Top Navbar */}
      <nav
        className="fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-3 shadow-md h-16 sm:h-18 md:h-20"
        style={{ background: 'linear-gradient(90deg, #001C34 0%, #003664 50%, #001C34 100%)' }}
      >
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="logo" width={52} height={52} />
          </Link>
          <span className="text-[165%] font-vertrio font-bold text-golden mt-1">DeFa Global</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link =>
            link.label === 'Contact' ? (
              <span
                key={link.label}
                onClick={onContactClick}
                className="bg-golden text-darkblue font-hk px-4 py-0.5 rounded hover:opacity-90 text-[130%] cursor-pointer"
              >
                {link.label}
              </span>
            ) : (
              <Link key={link.path} href={link.path}>
                <span
                  className={`${isActive(link.path) ? 'text-golden' : 'text-white'} font-hk text-[130%] cursor-pointer`}
                >
                  {link.label}
                </span>
              </Link>
            )
          )}
        </div>

        {/* Hamburger Icon for Mobile */}
        {!isOpen ? (
          <button
            className="md:hidden flex items-center focus:outline-none"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <svg className="w-8 h-8 text-golden" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        ) : (
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-16 sm:top-18 md:top-20 left-0 w-full transform transition-transform duration-300 ease-in-out z-40 shadow-lg
        ${isOpen ? 'translate-y-0' : '-translate-y-full'}
        max-h-[45vh] sm:max-h-[40vh] md:max-h-[35vh] min-h-fit overflow-y-auto
      `}
        style={{ background: 'linear-gradient(180deg, #001C34 0%, #003664 50%, #001C34 100%)' }}
      >
        <nav className="flex flex-col px-6 py-2">
          {navLinks.map(link => (
            <div key={link.label} className="border-b border-white/10 last:border-b-0">
              {link.label === 'Contact' ? (
                <div className="py-3">
                  <span
                    onClick={() => {
                      setIsOpen(false)
                      onContactClick()
                    }}
                    className="bg-golden text-darkblue font-semibold px-3 py-1.5 rounded inline-block cursor-pointer hover:opacity-90 text-sm"
                  >
                    {link.label}
                  </span>
                </div>
              ) : (
                <Link href={link.path}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-lg font-semibold cursor-pointer transition-colors ${
                      isActive(link.path) ? 'text-golden' : 'text-white hover:text-golden'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Dark overlay when mobile menu is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          aria-hidden="true"
        />
      )}
    </>
  )
}
