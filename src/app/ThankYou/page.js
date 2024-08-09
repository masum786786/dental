'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const ThankYou = () => {

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-700 mb-6">Your submission has been received successfully.</p>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ThankYou;
