import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Social</h4>
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Services</h4>
            <ul>
              <li className="hover:underline">General Dentistry</li>
              <li className="hover:underline">Cosmetic Dentistry</li>
              <li className="hover:underline">Orthodontics</li>
              <li className="hover:underline">Periodontics</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4">Contact Us</h4>
            <p>Dr. Arif Azad</p>
            <p>Near JP Chowk Station Road Mirganj</p>
            <p>Email: info@dentalclinic.com</p>
            <p>Phone: 9456231226</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Dental Clinic. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  

export default Footer
