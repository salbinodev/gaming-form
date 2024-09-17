// src/components/Sidebar.js
import React from 'react';
import backgroundImage from './../assets/images/bg-sidebar-desktop.svg';


const Sidebar = () => {
  return (
    <div
      className="p-8 bg-gray-200 h-full rounded-md "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ul className="space-y-6 text-white flex sm:flex-col">
        <li className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white font-bold text-lg">
            1
          </div>
          <div className="hidden sm:block lg:block">
            <div className="text-xs mb-1">Step 1</div>
            <a href="#step1" className="text-white font-bold ">Your Info</a>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white font-bold text-lg">
            2
          </div>
          <div className="hidden sm:block lg:block">
            <div className="text-xs mb-1">Step 2</div>
            <a href="#step2" className="text-white font-bold ">Select Plan</a>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white font-bold text-lg">
            3
          </div>
          <div className="hidden sm:block lg:block"> 
            <div className="text-xs mb-1">Step 3</div>
            <a href="#step3" className="text-white font-bold ">Add-Ons</a>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white font-bold text-lg">
            4
          </div>
          <div className="hidden sm:block lg:block">
            <div className="text-xs mb-1">Step 4</div>
            <a href="#step4" className="text-white font-bold ">Summary</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
