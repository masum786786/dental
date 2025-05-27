import React from 'react'
import Image from 'next/image'
import dr2 from '@/app/assets/dr2.jpeg'


const ProfileSection = () => {
  return (
    <div>
        
      <div className="flex flex-col md:flex-row md:space-x-8 mx-8 mt-4 mb-10">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Dr. Aarif Azad</h2>
          <p className="text-base md:text-lg mb-4 font-sans">
          Dr. Aarif Azad is a highly skilled and respected dentist known for his expertise in comprehensive dental care. With a commitment to excellence.<br/> Dr. Azad offers a wide range of dental services, from preventive care to advanced restorative and cosmetic procedures. His patient-centered approach ensures that each individual receives personalized care tailored to their unique needs, helping them achieve optimal oral health and a confident smile.<br/> Dr. Azad is dedicated to staying updated with the latest advancements in dentistry, ensuring that his patients benefit from the most effective and modern treatments available.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={dr2}
            alt="Dental Clinic"
            className="img-profile"
            style={{ width: '70%', height: 'auto' }}
          />
        </div>



      </div>
      
    </div>
  )
}

export default ProfileSection
