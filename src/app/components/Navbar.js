import React from 'react';
import vercel from '@/app/vercel.svg';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-6 px-4"> {/* Increased padding here */}
        <div className="flex items-center">
          {/* <Image src={vercel} alt="Logo" width={110} className="h-12 mr-4" /> */}
          <Link href="/" passHref>
            <h1 className="text-2xl font-bold text-blue-800 cursor-pointer" style={{ fontFamily: "cursive" }}>
              Dental Life Line
            </h1>
          </Link>
        </div>
        <ul className="hidden md:flex space-x-4 md:space-x-8">
          <li><a href="/" className="text-gray-800 hover:text-blue-800">Home</a></li>
          <li><a href="/links/about" className="text-gray-800 hover:text-blue-800">About</a></li>
          <li><a href="/links/services" className="text-gray-800 hover:text-blue-800">Services</a></li>
          <li><a href="/links/patientDetails" className="text-gray-800 hover:text-blue-800">Book now</a></li>
        </ul>
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            {/* Add your mobile menu icon here */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
