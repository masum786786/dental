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
    <div className="container ">
       <div className='card'>
        {/* <Image src="/Cosmetic.png"  width={50} height={50} /> */}
        <Image
          src={care}
          alt="Cosmetic "
          style={{ width: '30%', height: '30%' }}
          className='card-img'
        />
        <div>
          <h2 className='card-title'> Exceptional Dental Care</h2>
          <p className='card-des'> Let the root canal dentists at Story Dental provide you with the care you need to alleviate tooth pain and to save your smile. A root canal will treat the diseased tissue (pulp) while preserving the rest of the tooth. Studies show that bacteria from a diseased root canal can cause almost any type of illness such as arthritis, heart disease, kidney disease and others. </p>
        </div>

      </div>
      <div className='card'>
        {/* <Image src="/Cosmetic.png"  width={50} height={50} /> */}
        <Image
          src={dentistry}
          alt="Cosmetic "
          style={{ width: '30%', height: '30%' }}
          className='card-img'
        />
        <div>
          <h2 className='card-title'> General Dentistry</h2>
          <p className='card-des'> Choose our team at Story Dental as your general dentist in Irving. We are primary care dentists here to diagnose, treat and manage your oral health, including gum care, root canals, fillings, crowns, veneers, bridges, and preventive education.</p>
        </div>

      </div>
      <div className='card'>
        {/* <Image src="/Cosmetic.png"  width={50} height={50} /> */}
        <Image
          src={Cosmetic}
          alt="Cosmetic "
          style={{ width: '30%', height: '30%' }}
          className='card-img'
        />
        <div>
          <h2 className='card-title'> Cosmetic Dentistry</h2>
          <p className='card-des'> Story Dental provides cosmetic dentistry in Irving. Our services primarily focus on improving dental aesthetics such as color, position, shape, size, alignment, and overall smile appearance. Smile with confidence. You deserve it. </p>
        </div>

      </div>
      <div className='card'>
        {/* <Image src="/Cosmetic.png"  width={50} height={50} /> */}
        <Image
          src={ortho}
          alt="Cosmetic "
          style={{ width: '30%', height: '30%' }}
          className='card-img'
        />
        <div>
          <h2 className='card-title'> Orthodontics</h2>
          <p className='card-des'> Our orthodontic services in Irving focus on straighten your teeth, correcting your bite and malocclusion. We provide both traditional methods as well as Invisalign to give you the smile you’ve been waiting for on your time and budget. </p>
        </div>

      </div>
      <div className='card'>
        {/* <Image src="/Cosmetic.png"  width={50} height={50} /> */}
        <Image
          src={Root}
          alt="Cosmetic "
          style={{ width: '30%', height: '30%' }}
          className='card-img'
        />
        <div>
          <h2 className='card-title'> Root Canals</h2>
          <p className='card-des'> Let the root canal dentists at Story Dental provide you with the care you need to alleviate tooth pain and to save your smile. A root canal will treat the diseased tissue (pulp) while preserving the rest of the tooth. Studies show that bacteria from a diseased root canal can cause almost any type of illness such as arthritis, heart disease, kidney disease and others.</p>
        </div>

      </div>
      <div className='card'>
        {/* <Image src="/Cosmetic.png"  width={50} height={50} /> */}
        <Image
          src={Implants}
          alt="Cosmetic "
          style={{ width: '30%', height: '30%' }}
          className='card-img'
        />
        <div>
          <h2 className='card-title'> Dental Implants</h2>
          <p className='card-des'> Dental implants allow you to live the way you want to – confidently eating, smiling, laughing, talking, kissing, and enjoying all of your everyday activities without worrying about your teeth. Our Irving Dentists are dedicated to providing you with the strongest, most natural feeling smile. Dental implants are a great way to replace missing teeth. </p>
        </div>

      </div>
    </div>
  );
};

export default Slider;
