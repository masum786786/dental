'use client';
import React from 'react';
import Image from 'next/image';
// import banner from '@/app/assets/banner.jpg';
import ai from '@/app/assets/ai.jpg';
import Link from 'next/link';


const Banner = () => {
  return (
    <div className="relative w-full h-screen" style={{ height: '600px' }}>
      <div className="relative h-full overflow-hidden rounded-lg">
        <Image
          src={ai}
          alt="Banner"
          className="object-cover w-full h-full"
          style={{ width: '100%', height: '100%' }}
          priority
        />
        <div className="banner-overlay">
          <button className="book-now-button">
            <Link href='/links/patientDetails'>Book Now </Link>
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
