'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/app/assets/logo.jpeg'
import { FaUserShield } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-[78px]">
    <div className="container mx-auto flex justify-between items-center h-full px-4">
      <div className="flex items-center space-x-2">
        <Link href="/" passHref>
          <div className="flex items-center cursor-pointer">
            <Image src={logo} alt="Dental Life Line Logo" width={64} height={64} />
            <h1
              className="text-2xl font-bold text-blue-800 ml-2"
              style={{ fontFamily: "cursive" }}
            >
              Dental Life Line
            </h1>
          </div>
        </Link>
      </div>
  
      <ul className="hidden md:flex space-x-4 md:space-x-8 text-xl items-center">
        <li><Link href="/" className="text-gray-800 hover:text-blue-800 ">Home</Link></li>
        <li><Link href="/links/about" className="text-gray-800 hover:text-blue-800 ">About</Link></li>
        <li><Link href="/links/services" className="text-gray-800 hover:text-blue-800 ">Services</Link></li>
        <li><Link href="/links/patientDetails" className="text-gray-800 hover:text-blue-800 ">Book now</Link></li>
        <li>
          <Link href="/links/admin" className="text-gray-800 hover:text-blue-800  ">
            Admin
          </Link>
        </li>
      </ul>
  
      <div className="md:hidden">
        <button className="text-gray-800 focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  
    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden bg-white shadow-md ">
        <ul className="flex flex-col space-y-4 p-4">
          <li><Link href="/" className="text-gray-800 hover:text-blue-800 ">Home</Link></li>
          <li><Link href="/links/about" className="text-gray-800 hover:text-blue-800 ">About</Link></li>
          <li><Link href="/links/services" className="text-gray-800 hover:text-blue-800 ">Services</Link></li>
          <li><Link href="/links/patientDetails" className="text-gray-800 hover:text-blue-800 ">Book now</Link></li>
          <li>
            <Link href="/links/admin" className="text-gray-800 hover:text-blue-800  ">
              Admin
            </Link>
          </li>
        </ul>
      </div>
    )}
  </nav>

  );
};

export default Navbar;
