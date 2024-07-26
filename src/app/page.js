import React from 'react';
import Image from 'next/image';
import vercel from '@/app/vercel.svg';
import banner from "@/app/banner.jpg";
import dr1 from "@/app/assets/dr1.jpeg";
import dr2 from "@/app/assets/dr2.jpeg";
import patient from "@/app/assets/patient.jpg"
const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src={vercel} alt="Logo" className="h-12 mr-4" />
          <h1 className="text-2xl font-bold text-blue-800" style={{ fontFamily: "cursive" }}>Dental Life Line</h1>
        </div>
        <ul className="flex space-x-4 md:space-x-8">
          <li><a href="#home" className="text-gray-800 hover:text-blue-800">Home</a></li>
          <li><a href="http://localhost:3000/links/about" className="text-gray-800 hover:text-blue-800">About</a></li>
          <li><a href="http://localhost:3000/links/services" className="text-gray-800 hover:text-blue-800">Services</a></li>
          <li><a href="http://localhost:3000/links" className="text-gray-800 hover:text-blue-800">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const Banner = () => {
  return (
    <div className="relative h-60 md:h-80">
      <Image
        src={banner}
        alt="Dental Clinic Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative flex items-center justify-center h-full text-white bg-black bg-opacity-50">
        <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: "cursive" }}>Welcome to Dental Life Line</h2>
      </div>
    </div>
  );
};

const BodySection = () => {
  return (
    <div className="container mx-auto my-8 p-4  px-8">
      <div className="flex flex-col md:flex-row md:space-x-8">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-xl md:text-2xl text-center mb-4 md:mb-10 font-semibold">What can I do to prevent losing teeth in the future?</h2>
          <p className="text-base md:text-lg mb-4 font-sans">
            While missing teeth can be caused by genetic factors and other things outside of your control, there are some behavioral and lifestyle changes you can make to limit the risk of losing a tooth:
          </p>
          <ul className="list-disc list-inside space-y-2"><li>Eat healthy, unprocessed diet and avoid overly acidic or difficult-to-eat foods</li>
            <li>Practice consistent daily dental hygiene by brushing and flossing daily</li>
            <li>Visit us for regular cleanings and exams</li>
            <li>Avoid smoking</li>
            <li>Take care of your overall health and well-being, especially if you suffer from diabetes or other chronic health conditions</li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image src={patient} alt="Dental Clinic" className="rounded-lg shadow-md" style={{ height: "350px", width: "350px", maxHeight: "350px", maxWidth: "350px" }} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-8 mt-10 md:mt-20">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <Image src={dr1} alt="Dental Clinic" className="rounded-lg shadow-md" style={{ height: "350px", width: "350px", maxHeight: "350px", maxWidth: "350px" }} />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl md:text-2xl  mb-4 md:mb-10 font-semibold">Using varius Modern technology</h2>
          <p className="text-base md:text-lg mb-4 font-sans">
            At our dental clinic, we are committed to providing exceptional dental care in a comfortable and friendly environment. Our team of experienced professionals uses the latest technology and techniques to ensure your visit is as efficient and effective as possible.
          </p>
          <p className="text-base md:text-lg font-sans">
            Whether you need a routine cleaning, cosmetic dentistry, or more complex procedures, we are here to help. Your oral health is our top priority, and we strive to make every visit a positive experience.
          </p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-lg md:text-xl font-bold mb-4">Social</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-bold mb-4">Services</h4>
          <ul>
            <li className="hover:underline">General Dentistry</li>
            <li className="hover:underline">Cosmetic Dentistry</li>
            <li className="hover:underline">Orthodontics</li>
            <li className="hover:underline">Periodontics</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg md:text-xl font-bold mb-4">Contact Us</h4>
          <p>Dr. Arif Azad</p>
          <p>Near JP Chowk Station Road Mirganj</p>
          <p>Email: info@dentalclinic.com</p>
          <p>Phone: 9456231226</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Dental Clinic. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Page = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <BodySection />
      <Footer />
    </div>
  );
};

export default Page;

export function generateMetadata() {
  return {
    title: "Dental Life Line",
  };
}
