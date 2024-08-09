import React from 'react';

const Services = () => {
  return (
    <div className="p-4">
      {/* Heading with blue background */}
      <h2 className="text-center text-2xl font-bold mb-8 bg-blue-500 text-white p-4 rounded-lg">
        Available Facilities
      </h2>

      {/* Container for columns */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        {/* English Column */}
        <div className="w-full md:w-1/2 p-4 bg-white text-black shadow-lg rounded-lg hover:bg-blue-100 transition-colors md:block hidden">
          <ul className="list-disc list-inside">
            <li>Tooth extraction facility</li>
            <li>Medicine mixture filling facility</li>
            <li>RCT Facility</li>
            <li>X-Ray facility</li>
            <li>Fixed denture facility</li>
            <li>Facility to straighten crooked teeth</li>
          </ul>
        </div>

        {/* Hindi Column */}
        <div className="w-full md:w-1/2 p-4 bg-white text-black shadow-lg rounded-lg hover:bg-blue-100 transition-colors md:block hidden">
          <ul className="list-disc list-inside">
            <li>दांत निकालने की सुविधा</li>
            <li>औषधि मिश्रण भरने की सुविधा</li>
            <li>RCT की सुविधा</li>
            <li>X-Ray की सुविधा</li>
            <li>टेढ़े-मेढ़े दाँतों को सीधा करने की सुविधा</li>
          </ul>
        </div>

        {/* Mobile View: Show one column at a time */}
        <div className="md:hidden">
          {/* Toggle between columns based on screen size */}
          <div className="w-full p-4 bg-white text-black shadow-lg rounded-lg hover:bg-blue-100 transition-colors">
            <ul className="list-disc list-inside">
              <li>Tooth extraction facility</li>
              <li>Medicine mixture filling facility</li>
              <li>RCT Facility</li>
              <li>X-Ray facility</li>
              <li>Fixed denture facility</li>
              <li>Facility to straighten crooked teeth</li>
            </ul>
          </div>

          <div className="w-full p-4 bg-white text-black shadow-lg rounded-lg hover:bg-blue-100 transition-colors mt-4">
            <ul className="list-disc list-inside">
              <li>दांत निकालने की सुविधा</li>
              <li>औषधि मिश्रण भरने की सुविधा</li>
              <li>RCT की सुविधा</li>
              <li>X-Ray की सुविधा</li>
              <li>टेढ़े-मेढ़े दाँतों को सीधा करने की सुविधा</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
