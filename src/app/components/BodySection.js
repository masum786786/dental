import React from 'react'
import patient from '@/app/assets/patient.jpg'
import dr1 from "@/app/assets/dr1.jpeg"
import Image from 'next/image';
import cr3 from "@/app/assets/cr3.jpg"


const BodySection = () => {
  return (
    <div className=" mx-auto my-3 p-3 md:p-10">

      {/* First Section */}
      <div className="flex flex-col md:flex-row md:space-x-12 items-center bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
        
        {/* TEXT */}
        <div className="md:w-1/2 order-2 md:order-1 mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-8 font-bold text-gray-800 leading-snug">
            What can I do to prevent losing teeth in the future?
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-4 font-sans leading-relaxed">
            While missing teeth can be caused by genetic factors and other things outside of your control, here are some healthy habits to reduce your risk:
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base md:text-lg">
            <li>Eat a healthy, unprocessed diet and avoid acidic foods</li>
            <li>Practice consistent daily dental hygiene</li>
            <li>Visit us for regular cleanings & exams</li>
            <li>Avoid smoking</li>
            <li>Maintain overall health, especially with chronic conditions</li>
          </ul>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
          <Image
            src={patient}
            alt="Dental Clinic"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row md:space-x-12 items-center mt-16 bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">

        {/* IMAGE */}
        <div className="md:w-1/2 order-2 md:order-1 flex justify-center mb-8 md:mb-0">
          <Image
            src={cr3}
            alt="Dental Technology"
            className="rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
            style={{ height: "350px" }}
          />
        </div>

        {/* TEXT */}
        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl mb-4 md:mb-8 font-bold text-gray-800 leading-snug">
            Using Various Modern Technology
          </h2>

          <p className="text-gray-600 text-base md:text-lg mb-4 leading-relaxed">
            At our dental clinic, we are committed to providing exceptional dental care in a warm and welcoming environment. Our experienced team uses advanced technology to ensure accuracy and comfort.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Whether you need routine cleaning, cosmetic dentistry, or complex procedures, we ensure a smooth, friendly, and professional experience every time.
          </p>
        </div>
      </div>

    </div>
  );
};


export default BodySection
