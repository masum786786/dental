import React from 'react';
import Image from 'next/image';
import Cosmetic from "@/app/assets/Cosmetic.png";
import care from "@/app/assets/care.png";
import ortho from "@/app/assets/ortho.png";
import Root from "@/app/assets/Root.png";
import dentistry from "@/app/assets/dentistry.png";
import Implants from "@/app/assets/Implants.png";
import { Container } from 'postcss';

const Slider = () => {
  return (
    <div className="w-full px-4 py-14 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Card Template */}
        {[
          {
            img: care,
            title: "Exceptional Dental Care",
            desc: "Let the root canal dentists at Story Dental provide you with the care you need to alleviate tooth pain and save your smile."
          },
          {
            img: dentistry,
            title: "General Dentistry",
            desc: "We diagnose, treat, and manage oral health, including gum care, fillings, crowns, veneers, and more."
          },
          {
            img: Cosmetic,
            title: "Cosmetic Dentistry",
            desc: "We improve smile aesthetics such as color, shape, alignment, and overall appearance."
          },
          {
            img: ortho,
            title: "Orthodontics",
            desc: "We straighten teeth and correct bites using traditional and Invisalign methods."
          },
          {
            img: Root,
            title: "Root Canals",
            desc: "A root canal removes diseased tissue while preserving the remaining tooth for a healthy smile."
          },
          {
            img: Implants,
            title: "Dental Implants",
            desc: "Live confidently with natural-feeling, strong dental implants that replace missing teeth."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl p-7 text-center 
        hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 group"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-contain drop-shadow-md group-hover:scale-110 transition-all duration-300"
              />
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

            <button className="mt-5 px-5 py-2 rounded-full bg-blue-600 text-white font-medium text-sm 
          shadow-md hover:bg-blue-700 transition-all">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Slider;
