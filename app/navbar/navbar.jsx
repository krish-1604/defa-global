'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ]
  const isActive = (path) => {
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-1 shadow-md"
        style={{background: 'linear-gradient(90deg, #001C34 0%, #003664 50%, #001C34 100%)'}}>
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="logo" width={50} height={50} />
          </Link>
          <span className="text-[160%] font-vertrio font-bold text-golden mt-1">DeFa Global</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link =>
            link.label === 'Contact' ? (
              <Link
                key={link.path}
                href={link.path}
                className="bg-golden text-darkblue font-hk px-4 py-0.5 rounded hover:opacity-90 text-[120%] cursor-pointer"
              >
                {link.label}
              </Link>
            ) : (
              <Link key={link.path} href={link.path}>
                <span className={`${isActive(link.path) ? 'text-golden' : 'text-darkblue'} font-hk text-[120%] cursor-pointer`}>
                  {link.label}
                </span>
              </Link>
            )
          )}
        </div>


        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg className="w-8 h-8 text-darkblue" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          w-3/5 max-w-xs z-50
        `}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="logo" width={40} height={40} />
            <span className="text-xl font-bold text-golden">DeFa Global</span>
          </div>
          <button
            className="text-darkblue focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-6 mt-8 px-6">
          {navLinks.map(link => (
            <Link key={link.path} href={link.path}>
              <span
                onClick={() => setIsOpen(false)}
                className={`${isActive(link.path) ? 'text-golden' : 'text-darkblue'} font-semibold cursor-pointer`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          aria-hidden="true"
        ></div>
      )}
    </>
  )
}
