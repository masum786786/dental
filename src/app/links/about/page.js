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
      <div className="relative h-screen">
        <Navbar />

        <div className="relative w-full h-full">
          <Image
            src={about}
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="text-center text-white p-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 hover:text-yellow-300 transition-colors duration-300">
                Meet Dr. Aarif Azad
              </h1>
              <p className="text-lg md:text-xl hover:text-yellow-300 transition-all duration-300">
                Top Tucson dentist with special training in advanced general, cosmetic, and full-mouth smile restoration.
              </p>
            </div>
          </div>
        </div>

      </div>

      
      <div className="flex flex-col md:flex-row md:space-x-8 mx-8 mt-4 mb-10">
        {/* Text Section */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Dr. Aarif Azad</h2>
          <p className="text-base md:text-lg mb-4 font-sans">
            Dr. Arif Azad is now the fifth dentist in his family, with his father, uncle, brother, and sister sharing in the profession. He recognized at an early age the amazing gift his father was able to share with the community and the appreciation and many friendships that developed through a lifetime of service in dentistry. Dr. Raymond attended the University of North Carolina at Chapel Hill and graduated from the honors program with a B.S. in Biology and attended Tufts University School of Dental Medicine. From his initial courses at Tufts, including the Spear Study Club and Pima Study Club. He is a graduate of the Kois Center in Seattle, WA, a distinction few dentists achieve. He continues his professional studies by attending local monthly study clubs, including the Spear Study Club and Pima Study Club. He is a graduate of the Kois Center in Seattle, WA, a distinction few dentists achieve.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={dr2}
            alt="Dental Clinic"
            className="rounded-lg shadow-md"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>



      </div>
      <div className='bg-red-100 p-8'>
        <div className="flex flex-col items-center">
          <Image
            src={doc2}
            alt="Certifications"
            className="w-32 h-32 rounded-full mb-4"
            style={{ objectFit: 'cover' }}
          />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Certifications & Professional Organizations</h2>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 mx-8 mt-4 mb-10">
          {/* Text Section */}
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">American Academy of Cosmetic Dentistry</h3>
            <p className="text-base md:text-lg mb-4 font-sans">
              The American Academy of Cosmetic Dentistry (AACD) strives to advance excellence in the field of cosmetic dentistry. AACD members have support from other experts around the globe. The organization is also at the cutting edge of dental technology.
            </p>
          </div>
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Digital Smile Design</h3>
            <p className="text-base md:text-lg mb-4 font-sans">
              DSD is a planning protocol that allows for complete analysis of the patient’s facial and dental structures through state-of-the-art videography, photo, and 3D imaging digital technology. The DSD approach is considered the most modern, patient-centered process for smile design and transformation.
            </p>
          </div>
        </div>
      </div>
      <Footer />


    </>
  );
};

export default Page;
