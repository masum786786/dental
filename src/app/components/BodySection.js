import React from 'react'
import patient from '@/app/assets/patient.jpg'
import dr1 from "@/app/assets/dr1.jpeg"
import Image from 'next/image';
import cr3 from "@/app/assets/cr3.jpg"


const BodySection = () => {
  return (
    <div className="container mx-auto my-8 p-4 px-8">
      {/* First Section */}
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 order-2 md:order-1 mb-8 md:mb-0">
          <h2 className="text-xl md:text-2xl text-center mb-4 md:mb-10 font-semibold">
            What can I do to prevent losing teeth in the future?
          </h2>
          <p className="text-base md:text-lg mb-4 font-sans">
            While missing teeth can be caused by genetic factors and other things outside of your control, there are some behavioral and lifestyle changes you can make to limit the risk of losing a tooth:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Eat a healthy, unprocessed diet and avoid overly acidic or difficult-to-eat foods</li>
            <li>Practice consistent daily dental hygiene by brushing and flossing daily</li>
            <li>Visit us for regular cleanings and exams</li>
            <li>Avoid smoking</li>
            <li>Take care of your overall health and well-being, especially if you suffer from diabetes or other chronic health conditions</li>
          </ul>
        </div>
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
          <Image src={patient} alt="Dental Clinic" className="rounded-lg shadow-md" />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row md:space-x-8 mt-10 md:mt-20">
        <div className="md:w-1/2 order-2 md:order-1 flex justify-center mb-8 md:mb-0">
          <Image src={cr3} alt="Dental Clinic" className="rounded-lg shadow-md" style={{ height: "350px" }} />
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="text-xl md:text-2xl mb-4 md:mb-10 font-semibold">
            Using Various Modern Technology
          </h2>
          <p className="text-base md:text-lg mb-4 font-sans">
            At our dental clinic, we are committed to providing exceptional dental care in a comfortable and friendly environment. Our team of experienced professionals uses the latest technology and techniques to ensure your visit is as efficient and effective as possible.
          </p>
          <p className="text-base md:text-lg mb-4 font-sans">
            Whether you need a routine cleaning, cosmetic dentistry, or more complex procedures, we are here to help. Your oral health is our top priority, and we strive to make every visit a positive experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodySection
