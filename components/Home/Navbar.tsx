'use client'

import { useState } from "react";
import SearchInput from "../SearchInput";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full overflow-hidden">
      <div className="flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <a href="/" className="w-[36px]"><img src="./Logo/Vector.png" alt="vector" /></a>
          <a href="/" className="w-[130px] mt-4"><img src="./Logo/Logo.png" alt="logo name" /></a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 items-center font-semibold ">
          <a href="/" className="nav-hover">Home</a>
          <a href="/" className="nav-hover">Products</a>
          <a href="/" className="nav-hover">Customize</a>
          <a href="/" className="nav-hover">How it Works</a>
          <a href="/" className="nav-hover">Contact</a>
          <a href="/" className="nav-hover">Cart</a>
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
          <a href="/">Home</a>
          <a href="/">Products</a>
          <a href="/">Customize</a>
          <a href="/">How it Works</a>
          <a href="/">Contact</a>
          <a href="/">Cart</a>
          <SearchInput />
        </div>
      )}
    </nav>
  );
}
