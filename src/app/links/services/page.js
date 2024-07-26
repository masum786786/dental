import React from 'react';

const Page = () => {
  return (
    <div className="p-8 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl border-2 border-gray-300 rounded-lg p-6 shadow-lg bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <ul className="list-disc list-inside">
            <li className="font-medium">General Dentistry</li>
            <p className="ml-4">Routine check-ups, cleanings, and preventive care to keep your teeth healthy.</p>

            <li className="font-medium">Cosmetic Dentistry</li>
            <p className="ml-4">Enhance your smile with teeth whitening, veneers, and other cosmetic procedures.</p>

            <li className="font-medium">Orthodontics</li>
            <p className="ml-4">Correct misaligned teeth and jaws with braces or clear aligners.</p>

            <li className="font-medium">Oral Surgery</li>
            <p className="ml-4">Wisdom teeth removal, dental implants, and other surgical procedures.</p>

            <li className="font-medium">Pediatric Dentistry</li>
            <p className="ml-4">Specialized dental care for children, including preventive and restorative treatments.</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Page;
