import React from 'react';

const Services = () => {
    return (
        <div className="p-4">
            {/* Heading with blue background */}
            <h2 className="text-center text-2xl font-bold mb-8 bg-blue-500 text-white p-4 rounded-lg">
                Available Facilities
            </h2>

            {/* Container for columns */}
            <div className="flex space-x-4">
                {/* English Column */}
                <div className="w-1/2 p-4 bg-blue-500 text-white shadow-lg rounded-lg">
                    <ul>
                        <li>Service 1</li>
                        <li>Service 2</li>
                        <li>Service 3</li>
                        <li>Service 4</li>
                        <li>Service 5</li>
                    </ul>
                </div>

                {/* Hindi Column */}
                <div className="w-1/2 p-4 bg-blue-500 text-white shadow-lg rounded-lg">
                    <ul>
                        <li>सेवा 1</li>
                        <li>सेवा 2</li>
                        <li>सेवा 3</li>
                        <li>सेवा 4</li>
                        <li>सेवा 5</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Services;
