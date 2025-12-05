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
      {/* HERO / BANNER SECTION */}
      <div className="relative h-screen w-full">
        <Navbar />

        <Image
          src={banner}
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 hover:text-yellow-300 transition-colors">
              Tucson Dental Services
            </h1>
            <p className="text-lg md:text-xl hover:text-yellow-300 transition-colors">
              When it comes to your dental care, the sky’s the limit!
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row md:space-x-10">

          {/* TEXT */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Dental Life Line?
            </h2>
            <p className="text-base md:text-lg leading-relaxed font-sans text-gray-700">
              We go above and beyond to provide high-end, advanced Tucson dental services
              for adult patients. We take a total-wellness approach to ensure that you enjoy
              a lifetime of great oral and overall health.
              <br /><br />
              Our comprehensive dental services provide the treatments you need to look and
              feel your best!
              <br /><br />
              We also take great pride in offering and accepting an array of financial
              options to complement your lifestyle and budget. We’re committed to helping
              all of our patients get dental care without cutting corners on quality.
              <br /><br />
              Don’t let your oral health fall by the wayside due to cost concerns.
              Get in touch with our office to review your payment options!
            </p>
          </div>

          {/* IMAGE */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={service}
              alt="Dental Clinic"
              className="rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};


export default Page;
