import React from 'react'
import Image from 'next/image'
import dr2 from '@/app/assets/dr2.jpeg'

const ProfileSection = () => {
  return (
    <div className="w-full mb-3">

      <div className="flex flex-col md:flex-row items-center md:space-x-10 bg-white shadow-xl rounded-none p-8 md:p-12 hover:shadow-2xl transition-all duration-300 w-full">
        
        {/* TEXT */}
        <div className="md:w-1/2 w-full mb-8 md:mb-0 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Dr. Aarif Azad
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed font-sans">
            Dr. Aarif Azad is a highly skilled and respected dentist known for his 
            expertise in comprehensive dental care. With a commitment to excellence, 
            he offers a wide range of services—from preventive care to advanced 
            restorative and cosmetic procedures.
            <br /><br />
            His patient-centered approach ensures personalized care tailored to each 
            individual's unique needs, helping them achieve optimal oral health and 
            a confident smile.
            <br /><br />
            Dr. Azad stays updated with the latest advancements in dentistry, ensuring 
            his patients benefit from the most modern and effective treatments available.
          </p>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/2 w-full flex justify-center px-4 md:px-8">
          <Image
            src={dr2}
            alt="Dr. Aarif Azad"
            className="rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 object-cover"
            style={{ width: "80%", height: "auto" }}
          />
        </div>
      </div>

    </div>
  )
}

export default ProfileSection
