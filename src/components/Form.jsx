import React from 'react';

function Form() {
  return (
    <div className="form p-4 bg-white  ">
      <h2 className="text-xl font-bold mb-4">Personal info</h2>
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
        <div className="flex justify-end mt-10">
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

export default Form;
