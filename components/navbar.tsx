'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/logo.png'
import { XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-transparent py-4 pl-1 pr-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href={'/'}>
            <Image
              src={logo}
              alt="logo"
              width={289}
              height={40}
              className="h-[32px] mr-4"
            />
          </Link>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex list-none justify-center items-center gap-8 text-black font-bold">
            <li>
              <Link
                href={'/'}
                className="hover:text-[#CE2939] transition-colors duration-150 block h-full"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={'/about'}
                className="hover:text-[#CE2939] transition-colors duration-150"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={'/projects'}
                className="hover:text-[#CE2939] transition-colors duration-150"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={'/contact'}
                className="hover:text-[#CE2939] transition-colors duration-150"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto w-80 bg-white transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}}`}
        >
          <div className="w-full mt-2 px-1 flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-black focus:outline-none"
            >
              <XMarkIcon className="size-6 text-gray-400" />
            </button>
          </div>
          <ul className="flex flex-col items-end gap-6 text-black font-bold text-lg px-6 mt-4">
            <li className="w-full text-left border-b pb-2">
              <Link
                href={'/'}
                className="hover:text-[#CE2939] transition-colors duration-150"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full text-left border-b pb-2">
              <Link
                href={'/about'}
                className="hover:text-[#CE2939] transition-colors duration-150"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li className="w-full text-left border-b pb-2">
              <Link
                href={'/projects'}
                className="hover:text-[#CE2939] transition-colors duration-150"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="w-full text-left border-b pb-2">
              <Link
                href={'/contact'}
                className="hover:text-[#CE2939] transition-colors duration-150"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
