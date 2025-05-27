import React from 'react';

const TopContent = () => {
    return (
        <div className="bg-blue-500 py-10 text-white mt-3">
            <h2 className="text-3xl font-bold text-center mb-4">Our Expertise</h2>
            <div className="text-2xl mx-auto p-6 shadow-lg rounded-lg bg-blue-600 max-w-78rem mx-auto cursor-pointer hover:bg-blue-700 transition-colors duration-300">
                <p className="text-lg leading-relaxed">
                    At our dental clinic, we pride ourselves on delivering exceptional care through our team of highly skilled dental specialists. Our doctors bring years of experience and advanced training in various fields of dentistry, ensuring that every patient receives personalized and comprehensive treatment.
                    From routine cleanings to complex procedures, our specialists are equipped with the latest technology and techniques to provide the highest standard of care.
                </p>
            </div>
        </div>
        
    );
};

export default TopContent;
