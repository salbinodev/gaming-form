import React from 'react';

function Step1() {
  return (
    <div className="form p-4 bg-white  w-full  font-ubuntu  ">
      
      <h2 className="text-xl font-bold mb-4 font-ubuntu  text-marine-blue ">Personal info</h2>
      <p className='text-xs font-regular mb-4 font-ubuntu  text-cool-gray'>Please provide your name, your adress and your phone number</p>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="border rounded-md p-2 w-full  text-marine-blue"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email Adress</label>
          <input
            id="email"
            type="email"
            className="border rounded-md p-2 w-full  text-marine-blue"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Phone Number</label>
          <input
            id="phone"
            type="phone"
            className="border rounded-md p-2 w-full text-marine-blue"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="flex justify-end mt-[8rem]">
          <button
            type="submit"
            className="bg-marine-blue text-white px-4 py-2 rounded-md"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}

export default Step1;
