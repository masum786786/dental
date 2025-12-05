import React from 'react';
import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import about from '@/app/assets/about.jpg'; // Update with your background image path
import dr2 from "@/app/assets/dr2.jpeg"
import doc2 from "@/app/assets/doc2.jpeg"
import Footer from '@/app/components/Footer';

const Page = () => {
  return (
   <>
  {/* HERO SECTION */}
  <div className="relative h-screen w-full">
    <Navbar />

    <Image
      src={about}
      alt="Background"
      fill
      className="object-cover"
      quality={100}
    />

    {/* Overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4">
      <div className="text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 hover:text-yellow-300 transition-colors">
          Meet Dr. Aarif Azad
        </h1>
        <p className="text-lg md:text-2xl hover:text-yellow-300 transition-colors">
          Top Tucson dentist with advanced general, cosmetic, and full-mouth restoration expertise.
        </p>
      </div>
    </div>
  </div>

  {/* PROFILE SECTION */}
  <div className="w-full py-16 bg-gray-50">
    <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center md:space-x-10">

      {/* TEXT */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Dr. Aarif Azad</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Dr. Arif Azad is now the fifth dentist in his family, with his father, uncle,
          brother, and sister sharing in the profession. He recognized at an early age the
          amazing gift his father was able to share with the community.
          <br /><br />
          Dr. Raymond attended the University of North Carolina at Chapel Hill and graduated
          with a B.S. in Biology, then continued at Tufts University School of Dental Medicine.
          <br /><br />
          He is a graduate of the Kois Center in Seattle, WA—a distinction few dentists achieve.
          He continues his studies through monthly study clubs including Spear Study Club and
          Pima Study Club.
        </p>
      </div>

      {/* IMAGE */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src={dr2}
          alt="Dental Clinic"
          className="rounded-2xl shadow-xl object-cover hover:scale-105 transition-transform"
          style={{ width: "100%", maxWidth: "500px", height: "auto" }}
        />
      </div>
    </div>
  </div>

  {/* CERTIFICATIONS SECTION */}
  <div className="w-full bg-red-100 py-16">
    <div className="flex flex-col items-center mb-12 px-4">
      <Image
        src={doc2}
        alt="Certifications"
        className="w-32 h-32 rounded-full shadow-lg object-cover mb-4"
      />
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Certifications & Professional Organizations
      </h2>
    </div>

    <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row md:space-x-10">

      {/* LEFT */}
      <div className="md:w-1/2 bg-white shadow-lg rounded-xl p-8 mb-10 md:mb-0">
        <h3 className="text-xl font-semibold mb-2">American Academy of Cosmetic Dentistry</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          The AACD strives to advance excellence in cosmetic dentistry and supports
          dentists worldwide. They lead the industry in new technologies and patient care standards.
        </p>
      </div>

      {/* RIGHT */}
      <div className="md:w-1/2 bg-white shadow-lg rounded-xl p-8">
        <h3 className="text-xl font-semibold mb-2">Digital Smile Design</h3>
        <p className="text-gray-700 text-lg leading-relaxed">
          DSD analyzes facial and dental structure using videography, photography, and 3D
          imaging. It is the most modern and patient-centered technology for smile transformation.
        </p>
      </div>

    </div>
  </div>

  <Footer />
</>

  );
};

export default Page;
