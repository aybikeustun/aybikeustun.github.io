import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <p>&copy; 2023 Aybike Ustun</p>
        <div className="flex items-center"> {/* Wrap icons in a flex container */}
          <a
            href="https://github.com/aybikeustun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/aybikeustun/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
