import React from 'react';
import Image from 'next/image';
import Cosmetic from "@/app/assets/Cosmetic.png";
import care from "@/app/assets/care.png";
import ortho from "@/app/assets/ortho.png";
import Root from "@/app/assets/Root.png";
import dentistry from "@/app/assets/dentistry.png";
import Implants from "@/app/assets/Implants.png";

const cardData = [
  {
    Image: care,
    title: 'Exceptional Dental Care',
    subtitle: 'Let the root canal dentists at Story Dental provide you with the care you need to alleviate tooth pain and to save your smile. A root canal will treat the diseased tissue (pulp) while preserving the rest of the tooth. Studies show that bacteria from a diseased root canal can cause almost any type of illness such as arthritis, heart disease, kidney disease and others.',
  },
  {
    Image: dentistry,
    title: 'General Dentistry',
    subtitle: 'Choose our team at Story Dental as your general dentist in Irving. We are primary care dentists here to diagnose, treat and manage your oral health, including gum care, root canals, fillings, crowns, veneers, bridges, and preventive education.',
  },
  {
    Image: ortho,
    title: 'Orthodontics',
    subtitle: 'Our orthodontic services in Irving focus on straighten your teeth, correcting your bite and malocclusion. We provide both traditional methods as well as Invisalign to give you the smile you’ve been waiting for on your time and budget.',
  },
  {
    Image: Cosmetic,
    title: 'Cosmetic Dentistry',
    subtitle: 'Story Dental provides cosmetic dentistry in Irving. Our services primarily focus on improving dental aesthetics such as color, position, shape, size, alignment, and overall smile appearance. Smile with confidence. You deserve it.',
  },
  {
    Image: Root,
    title: 'Root Canals',
    subtitle: 'Let the root canal dentists at Story Dental provide you with the care you need to alleviate tooth pain and to save your smile. A root canal will treat the diseased tissue (pulp) while preserving the rest of the tooth. Studies show that bacteria from a diseased root canal can cause almost any type of illness such as arthritis, heart disease, kidney disease and others.',
  },
  {
    Image: Implants,
    title: 'Dental Implants',
    subtitle: 'Dental implants allow you to live the way you want to – confidently eating, smiling, laughing, talking, kissing, and enjoying all of your everyday activities without worrying about your teeth. Our Irving Dentists are dedicated to providing you with the strongest, most natural feeling smile. Dental implants are a great way to replace missing teeth.',
  },
];

const Slider = () => {
  return (
    <div className="container mx-auto p-4 h-[80vh]">
      <section className="slider-section flex overflow-x-scroll space-x-4 h-full">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="min-w-[100%] md:min-w-[40%] bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-2"
          >
            <div className="text-4xl">
              {typeof card.Image === 'string' ? (
                card.Image
              ) : (
                <Image src={card.Image} alt={card.title} className="w-16 h-16" />
              )}
            </div>
            <h2 className="text-xl font-semibold">{card.title}</h2>
            <p className="text-gray-500">{card.subtitle}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Slider;
