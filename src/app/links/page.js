import React from 'react';

const Page = () => {
  return (
    <div className="p-8 flex justify-center">
      <div className="w-full  max-w-md border-2 border-gray-300 rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Dental Life Line</h2>
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg font-medium">Dr. Arif Azad</p>
          <p className="text-base text-gray-700 text-center">Near JP Chowk Station Road Mirganj</p>
          <p className="text-base text-gray-700">
            Email: <a href="mailto:info@dentalclinic.com" className="text-blue-500 hover:underline">info@dentalclinic.com</a>
          </p>
          <p className="text-base text-gray-700">
            Phone: <a href="tel:+9456231226" className="text-blue-500 hover:underline">9456231226</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
