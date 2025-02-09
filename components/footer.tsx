import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/logo.png'
import { Facebook, Instagram, Linkedin, LucideProps } from 'lucide-react'

import SocialIcon from './social-icon'
import SocialIcons from './social-icons'

const Footer = () => {
  return (
    <footer className="flex pb-1 pt-6 w-full flex-col bg-white text-black">
      <nav
        className="lg:max-w-7xl w-full border-t pt-6 mx-auto flex flex-col items-center lg:flex-row lg:flex-grow lg:justify-center"
        role="navigation"
        aria-label="Footer"
      >
        <div className="flex flex-col-reverse lg:flex-row lg:space-x-24">
          <div className="text-center lg:text-left lg:mb-0">
            <Image
              src={logo}
              alt="WebTranslate logo"
              width={289}
              height={40}
              className="h-[32px] mx-auto mb-6 mt-4 lg:ml-0 lg:mt-0"
            />
            <SocialIcons size="small" withHoverEffect={true} />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-16">
            <FooterSection>
              <FooterSectionHeading>About Us</FooterSectionHeading>
              <FooterSectionLinks>
                <FooterSectionLink url="/about" name="Company" />
                <FooterSectionLink url="/team" name="Team" />
                <FooterSectionLink url="/blog" name="Blog" />
                <FooterSectionLink url="/faq" name="FAQ" />
              </FooterSectionLinks>
            </FooterSection>
            <FooterSection>
              <FooterSectionHeading>Translation Services</FooterSectionHeading>
              <FooterSectionLinks>
                <FooterSectionLink url="/services#documents" name="Documents" />
                <FooterSectionLink url="/services#legal" name="Legal" />
                <FooterSectionLink url="/services#sworn" name="Sworn" />
                <FooterSectionLink url="/services#on-site" name="On-Site" />
                <FooterSectionLink
                  url="/services#subtitling"
                  name="Subtitling"
                />
              </FooterSectionLinks>
            </FooterSection>
            <FooterSection>
              <FooterSectionHeading>Pricing</FooterSectionHeading>
              <FooterSectionLinks>
                <FooterSectionLink url="/pricing" name="Pricing Table" />
              </FooterSectionLinks>
            </FooterSection>
            <FooterSection>
              <FooterSectionHeading>Contact</FooterSectionHeading>
              <FooterSectionLinks>
                <FooterSectionLink url="/contact" name="Contact us" />
              </FooterSectionLinks>
            </FooterSection>
          </div>
        </div>
      </nav>
      <Copyright />
    </footer>
  )
}

const Copyright = () => {
  return (
    <div className="mt-6 text-center text-xs w-full mb-2">
      Copyright &copy; {new Date().getFullYear()} Jakub Ćwikowski | All rights
      Reserved
    </div>
  )
}

const FooterSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-6 text-center lg:text-left lg:mb-0">{children}</div>
}

const FooterSectionHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-[1rem] text-slate-700 font-bold mb-4 uppercase mt-1">
      {children}
    </h3>
  )
}

const FooterSectionLinks = ({ children }: { children: React.ReactNode }) => {
  return <ul>{children}</ul>
}

const FooterSectionLink = ({ name, url }: { name: string; url: string }) => {
  return (
    <li className="mb-1 text-sm">
      <Link href={url} className="hover:underline">
        {name}
      </Link>
    </li>
  )
}

export default Footer
