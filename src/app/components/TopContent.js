import React from 'react';

const TopContent = () => {
    return (
        <div className="bg-blue-500 py-14 text-white mt-6">
            <h2 className="text-4xl font-bold text-center mb-8 tracking-wide">
                Our Expertise
            </h2>

            <div className="
                max-w-5xl mx-auto 
                p-8 
                bg-white/10 backdrop-blur-xl 
                rounded-2xl shadow-xl
                cursor-pointer 
                transition-all duration-300 
                hover:bg-white/20 hover:shadow-2xl
            ">
                <p className="text-lg md:text-xl leading-relaxed text-blue-50">
                    At our dental clinic, we pride ourselves on delivering exceptional care
                    through our team of highly skilled dental specialists. Our doctors bring
                    years of experience and advanced training in various fields of dentistry,
                    ensuring that every patient receives personalized and comprehensive
                    treatment. <br /><br />
                    From routine cleanings to complex procedures, our specialists are equipped
                    with the latest technology and techniques to provide the highest standard
                    of care.
                </p>
            </div>
        </div>
    );
};

export default TopContent;
