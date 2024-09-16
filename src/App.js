import React from 'react';
import Sidebar from './components/Sidebar';
import Form from './components/Form';

function App() {
  return (
    <div className="App flex justify-center items-center min-h-screen bg-light-blue">
      <div className="flex bg-white shadow-lg rounded-lg w-full max-w-4xl h-[60vh] p-8">

        <div className="w-1/3 pr-8 ">

        
          <Sidebar />
        </div>

        <div className="w-2/3 pl-8">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
