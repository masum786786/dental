'use client'
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ai from '@/app/assets/ai.jpg';

const UserForm = () => {
  const router = useRouter();

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
    router.push("/ThankYou");
  };

  return (
    <div>
      <Navbar />

      <div className=" mx-auto my-16 p-8 bg-white rounded-2xl shadow-lg border">

        <h2 className="text-3xl font-bold mb-10 text-center text-teal-700">
          Patient Information Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Image Section */}
          <div className="flex items-center mb-16 justify-center">
            <Image
              src={ai}
              alt="Patient"
              className="rounded-lg shadow-md"
              style={{ height: '450px', width: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Patient Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Patient Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter Patient Name"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter Age"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter Mobile Number"
              />
            </div>

            {/* Village */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Village <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="village"
                value={formData.village}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter Village"
              />
            </div>

            {/* Problem Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Describe Problem <span className="text-red-500">*</span>
              </label>
              <textarea
                name="problemDescription"
                value={formData.problemDescription}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Describe the problem"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all"
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
