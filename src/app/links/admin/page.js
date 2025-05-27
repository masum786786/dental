'use client'
import React from 'react';

const patients = [
  {
    patientName: 'John Doe',
    age: '45',
    village: 'Greenfield',
    mobileNumber: '1234567890',
    problemDescription: 'Tooth pain in upper jaw',
  },
  {
    patientName: 'Jane Smith',
    age: '32',
    village: 'Riverside',
    mobileNumber: '9876543210',
    problemDescription: 'Cavity in lower molar',
  },
  {
    patientName: 'Mohit Kumar',
    age: '29',
    village: 'Lakshmanpur',
    mobileNumber: '7788996655',
    problemDescription: 'Swelling and sensitivity',
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Patient List</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Patient Name</th>
              <th className="px-4 py-3 text-left">Age</th>
              <th className="px-4 py-3 text-left">Village</th>
              <th className="px-4 py-3 text-left">Mobile Number</th>
              <th className="px-4 py-3 text-left">Problem Description</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr
                key={index}
                className="border-b hover:bg-blue-50 transition duration-200"
              >
                <td className="px-4 py-3">{patient.patientName}</td>
                <td className="px-4 py-3">{patient.age}</td>
                <td className="px-4 py-3">{patient.village}</td>
                <td className="px-4 py-3">{patient.mobileNumber}</td>
                <td className="px-4 py-3">{patient.problemDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
