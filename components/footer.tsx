import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="flex pb-1 pt-6 w-full flex-col bg-[#477050] text-white">
      <nav
        className="lg:max-w-4xl w-full mx-auto flex flex-col items-center lg:items-start lg:flex-row lg:flex-grow lg:justify-between"
        role="navigation"
        aria-label="Footer"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="mb-6 text-center lg:text-left lg:mb-0 lg:mr-12">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <ul>
              <li className="mb-1 text-sm">
                <Link href={'/about'} className="hover:underline">
                  Company
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <Link href={'/team'} className="hover:underline">
                  Team
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <Link href={'/blog'} className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 text-center lg:text-left lg:mb-0 lg:mr-12">
            <h3 className="text-xl font-bold mb-2">Translation Services</h3>
            <ul>
              <li className="mb-1 text-sm">
                <Link href={'#'} className="hover:underline">
                  Documents
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <Link href={'#'} className="hover:underline">
                  Legal
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <Link href={'#'} className="hover:underline">
                  Sworn
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <Link href={'#'} className="hover:underline">
                  On-Site
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <Link href={'#'} className="hover:underline">
                  Subtitling
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-6 text-center lg:text-left lg:mb-0 lg:mr-12">
            <h3 className="text-xl font-bold mb-2">Support</h3>
            <ul>
              <li className="mb-1 text-sm">
                <Link href={'#'} className="hover:underline">
                  Contact us
                </Link>
              </li>
              <li className="mb-1 text-sm">
                <Link href={'#'} className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 lg:mt-0 lg:ml-auto flex flex-col justify-between h-full">
          <h3 className="hidden lg:block text-xl font-bold mb-2">
            Follow us on Social Media:
          </h3>
          <ul className="flex flex-row space-x-3">
            <li>
              <a href="#">
                <Facebook size={24} className="inline" />
              </a>
            </li>
            <li>
              <a href="#">
                <Linkedin size={24} className="inline" />
              </a>
            </li>
            <li>
              <a href="#">
                <Instagram size={24} className="inline" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mt-4 text-center text-xs w-full mb-2">
        Copyright &copy; {new Date().getFullYear()} Jakub Ćwikowski | All rights
        Reserved
      </div>
    </footer>
  )
}

export default Footer
