import React from 'react';
import Navbar from '@/app/components/Navbar';
import banner from '@/app/assets/banner.jpg';
import service from "@/app/assets/service.jpg";
import Image from 'next/image';
import BorderSection from '@/app/components/BorderSection';
import Footer from '@/app/components/Footer';

const Page = () => {
  return (
    <>
      <div className="relative h-screen">
        <Navbar />

        {/* Banner Section */}
        <div className="relative w-full h-full">
          <Image
            src={banner}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="text-center text-white p-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hover:text-yellow-300 transition-colors duration-300">
                Tucson Dental Services
              </h1>
              <p className="text-lg md:text-xl hover:text-yellow-300 transition-all duration-300">
                When it comes to your dental care, the sky’s the limit!
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row md:space-x-8 mx-4 md:mx-8 mt-4 mb-10">
          {/* Text Section */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Dental Life Line?</h2>
            <p className="text-base md:text-lg mb-4 font-sans">
              We go above and beyond to provide high-end, advanced Tucson dental services for adult patients. We take a total-wellness approach to ensure that you enjoy a lifetime of great oral and overall health. Our team wants to be a part of your dental health journey for many years to come.
              <br /><br />
              At Skyline Dental, we want our patients to be able to enjoy the benefits of great oral health and a beautiful smile. Our comprehensive dental services provide the treatments you need to look and feel your best!
              <br /><br />
              We also take great pride in offering and accepting an array of financial options to complement your lifestyle and budget. We’re committed to helping all of our patients get dental care that doesn’t cut corners on quality. Don’t let your oral health fall by the wayside due to cost concerns. Get in touch with our office to go over your payment options!
            </p>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={service}
              alt="Dental Clinic"
              className="rounded-lg shadow-md"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

       <Footer/>
      </div>
    </>
  );
}

export default Page;
