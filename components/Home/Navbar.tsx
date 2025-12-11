'use client'

import { useState } from "react";
import SearchInput from "../SearchInput";

interface Navlink {
  label: string;
  href: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavlinkOptions: Navlink[] = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '#products' },
    { label: 'Customize', href: '#customize' },
    { label: 'How it works', href: '#howitworks' },
    { label: 'Contact', href: '#contact' },
    { label: 'Cart', href: '#cart' },
  ];

  return (
    <nav className="w-full overflow-hidden">
      <div className="flex items-center justify-between px-4 py-4">
        
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <a href="/" className="w-9">
            <img src="./Logo/Vector.png" alt="vector" />
          </a>
          <a href="/" className="w-[130px] mt-4">
            <img src="./Logo/Logo.png" alt="logo name" />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center font-semibold">
          {NavlinkOptions.map((option, index) => (
            <a key={index} href={option.href} className="nav-hover">
              {option.label}
            </a>
          ))}
          <SearchInput />
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col gap-[5px]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className="w-6 h-[3px] bg-black"></span>
          <span className="w-6 h-[3px] bg-black"></span>
          <span className="w-6 h-[3px] bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 font-semibold bg-white shadow-lg">
          {NavlinkOptions.map((option, index) => (
            <a key={index} href={option.href}>
              {option.label}
            </a>
          ))}
          <SearchInput />
        </div>
      )}
    </nav>
  );
}
