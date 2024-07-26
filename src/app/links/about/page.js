import React from 'react';

const Page = () => {
  return (
    <div className="p-8 flex justify-center">
      <div className="w-full max-w-2xl border-2 border-gray-300 rounded-lg p-6 shadow-lg bg-white">
        <h2 className="text-3xl font-semibold text-center mb-6">About</h2>
        <div className="text-lg text-gray-700 space-y-4">
          <p>Welcome to our dental clinic! We are committed to providing the highest quality dental care in a friendly and comfortable environment. Our experienced team of dentists and hygienists are here to help you maintain and improve your oral health.</p>
          <p>Our clinic is equipped with the latest technology and we follow the most up-to-date procedures to ensure your safety and comfort. Whether you need a routine check-up, a filling, or a more complex procedure, we are here to meet all your dental needs.</p>
          <p>Thank you for choosing our clinic. We look forward to serving you!</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
