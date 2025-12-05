import React from 'react';
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import BodySection from '@/app/components/BodySection'
import Slider from "@/app/components/Slider"
import TopContent from "@/app/components/TopContent"
import BorderSection from "@/app/components/BorderSection"
import ProfileSection from "@/app/components/ProfileSection"
import Image from 'next/image';
// import banner from "@/app/banner.jpg";
import dr1 from "@/app/assets/dr1.jpeg";
import dr2 from "@/app/assets/dr2.jpeg";
import patient from "@/app/assets/patient.jpg"
import Carousel from "@/app/components/Carousel"
import Location from "@/app/components/Location"





// const Banner = () => {
//   return (
//     <div className="relative h-60 md:h-80">
//       <Image
//         src={banner}
//         alt="Dental Clinic Banner"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="relative flex items-center justify-center h-full text-white bg-black bg-opacity-50">
//         <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: "cursive" }}>Welcome to Dental Life Line</h2>
//       </div>
//     </div>
//   );
// };





const Page = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ProfileSection/>
      <TopContent/>
      <Slider/>
      {/* <Banner /> */}
      <BorderSection/>

      <BodySection />
      <Location/>
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
