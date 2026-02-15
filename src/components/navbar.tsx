"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-xl font-bold tracking-wide">
            <img src="/assets/images/imperial-kost-logo.png" alt="Imperial Logo" className="h-14 w-auto inline-block mr-2" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#location"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Location/Contact
            </a>
            <a
              href="#rooms"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Rooms
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block text-gray-300 hover:text-white px-3 py-2 text-sm" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#location" className="block text-gray-300 hover:text-white px-3 py-2 text-sm" onClick={() => setIsOpen(false)}>
              Location/Contact
            </a>
            <a href="#rooms" className="block text-gray-300 hover:text-white px-3 py-2 text-sm" onClick={() => setIsOpen(false)}>
              Rooms
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}