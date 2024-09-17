import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Step1 from './components/Pages/Step1';
import Step2 from './components/Pages/Step2'; 
import Step3 from './components/Pages/Step3';
import Step4 from './components/Pages/Step4'; 

function App() {
  
  const [currentPage, setCurrentPage] = useState('step1');

  // Render the appropriate component based on the currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'step1':
        return <Step1 />;
      case 'step2':
        return <Step2 />;
      case 'step3':
        return <Step3 />;
      case 'step4':
        return <Step4 />;
      default:
        return <Step1 />; 
    }
  };

  return (
    <div className="App flex justify-center items-center min-h-screen bg-light-blue">
      <div className="flex flex-col lg:flex-col sm:flex-row   bg-white shadow-lg rounded-lg w-full max-w-4xl h-[65vh] p-4 lg:p-8">
        {/* Sidebar */}
        <div className="pr-6 lg:w-1/3 lg:pr-4 lg:pb-0 mr-2">
          <Sidebar />
        </div>

        <div className="w-full lg:w-3/4 lg:pl-4 lg:pt-0 flex  ">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
