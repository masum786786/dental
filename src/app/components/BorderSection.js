import React from 'react';

const Services = () => {
  return (
    <div className="w-full py-8">

  {/* Heading */}
  <h2 className="text-center text-2xl font-bold mb-8 bg-blue-500 text-white p-4 rounded-lg">
    Available Facilities
  </h2>

  {/* Desktop Layout */}
  <div className="hidden md:flex space-x-4 px-4">
    
    {/* English List */}
    <div className="w-1/2 p-6 bg-white text-black shadow-xl rounded-xl hover:bg-blue-100 transition-all">
      <ul className="list-disc list-inside space-y-2">
        <li>Tooth extraction facility</li>
        <li>Medicine mixture filling facility</li>
        <li>RCT Facility</li>
        <li>X-Ray facility</li>
        <li>Fixed denture facility</li>
        <li>Facility to straighten crooked teeth</li>
      </ul>
    </div>

    {/* Hindi List */}
    <div className="w-1/2 p-6 bg-white text-black shadow-xl rounded-xl hover:bg-blue-100 transition-all">
      <ul className="list-disc list-inside space-y-2">
        <li>दांत निकालने की सुविधा</li>
        <li>औषधि मिश्रण भरने की सुविधा</li>
        <li>RCT की सुविधा</li>
        <li>X-Ray की सुविधा</li>
        <li>टेढ़े-मेढ़े दाँतों को सीधा करने की सुविधा</li>
      </ul>
    </div>
  </div>

  {/* Mobile Layout */}
  <div className="md:hidden px-4 space-y-4">
    
    <div className="w-full p-6 bg-white text-black shadow-xl rounded-xl hover:bg-blue-100 transition-all">
      <ul className="list-disc list-inside space-y-2">
        <li>Tooth extraction facility</li>
        <li>Medicine mixture filling facility</li>
        <li>RCT Facility</li>
        <li>X-Ray facility</li>
        <li>Fixed denture facility</li>
        <li>Facility to straighten crooked teeth</li>
      </ul>
    </div>

    <div className="w-full p-6 bg-white text-black shadow-xl rounded-xl hover:bg-blue-100 transition-all">
      <ul className="list-disc list-inside space-y-2">
        <li>दांत निकालने की सुविधा</li>
        <li>औषधि मिश्रण भरने की सुविधा</li>
        <li>RCT की सुविधा</li>
        <li>X-Ray की सुविधा</li>
        <li>टेढ़े-मेढ़े दाँतों को सीधा करने की सुविधा</li>
      </ul>
    </div>
  </div>

</div>

  );
};

export default Services;
