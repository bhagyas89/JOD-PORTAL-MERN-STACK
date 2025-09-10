import React from 'react';
import Navbar from '../components_lite/Navbar';
import bhagyaImage from "../../assets/bhagya.png";


const Creator = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={bhagyaImage}
              alt="Bhagya_Shree"
              className="h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bhagya Shree</h2>
            <p className="text-gray-600 mb-2">
              A passionate developer currently pursuing B.Tech in Computer Science and Engineering (IoT and Data Analytics) at GITAM University.
            </p>
            <p className="text-gray-600 mb-2">
              Enthusiastic about building smart solutions and creating impactful user experiences through modern technologies.
            </p>
            <p className="text-gray-600">
              Areas of interest include AI, embedded systems, full-stack web development, and automation projects.
            </p>
          </div>
        </div>
      </div>

      <hr className="w-full border-gray-300 my-6" />

      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Built with 💻 React + Tailwind</h2>
        <p className="text-gray-600 text-sm">© 2025 Bhagya Shree. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Creator;
