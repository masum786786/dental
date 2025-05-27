'use client'
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import banner1 from '@/app/assets/banner1.jpg';
import Image from 'next/image';
import ai from '@/app/assets/ai.jpg';


const UserForm = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    village: '',
    mobileNumber: '',
    problemDescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <Navbar />
      <div className=" mx-auto my-16 p-6 bg-white rounded-lg  shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-teal-700">Patient Information Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Section */}
          <div className=" items-center justify-center rounded-lg p-4">
            <Image src={ai}alt="Patient" className="max-w-full h-auto rounded-md" style={{height:'450px'}} />

          </div>
        

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Patient Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Age"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="number"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Mobile Number"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Village</label>
            <input
              type="text"
              name="village"
              value={formData.village}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter Village"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Describe Problem</label>
            <textarea
              name="problemDescription"
              value={formData.problemDescription}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Describe the problem"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
              onClick={() => router.push("/ThankYou")}
            >
              Submit
            </button>
          </div>
        </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserForm;
