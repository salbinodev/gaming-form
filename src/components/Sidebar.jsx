import React from 'react';
import backgroundImage from './../assets/images/bg-sidebar-desktop.svg'; // Update the path as needed

function Sidebar() {
  return (
    <div 
      className="p-6 bg-gray-200 h-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ul className="space-y-6 text-white">
        <li className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white font-bold text-lg">
            1
          </div>
          <div>
            <div className="text-xs mb-1">Step 1</div>
            <a href="#step1" className="text-white">Your Info</a>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white font-bold text-lg">
            2
          </div>
          <div>
            <div className="text-xs mb-1">Step 2</div>
            <a href="#step2" className="text-white">Select Plan</a>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white font-bold text-lg">
            3
          </div>
          <div>
            <div className="text-xs mb-1">Step 3</div>
            <a href="#step3" className="text-white">Add-Ons</a>
          </div>
        </li>
        <li className="flex items-start space-x-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white text-white font-bold text-lg">
            4
          </div>
          <div>
            <div className="text-xs mb-1">Step 4</div>
            <a href="#step4" className="text-white">Summary</a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
