'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import banner1 from "@/app/assets/banner1.jpg";
import cr1 from "@/app/assets/cr1.jpg";
import cr2 from "@/app/assets/cr2.jpg";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [banner1, cr1, cr2]; // Array of carousel items (can be different images)

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-screen" data-carousel="static">
      <div className="relative h-full overflow-hidden rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute block w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
            data-carousel-item={index === activeIndex ? 'active' : ''}
          >
            <Image src={item} alt={`Carousel item ${index + 1}`} className="block w-full h-full object-cover" style={{width:'100%',height:'100%'}}/>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/30 group-hover:bg-gray-500/50 group-focus:ring-4 group-focus:ring-gray-500/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500/30 group-hover:bg-gray-500/50 group-focus:ring-4 group-focus:ring-gray-500/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
