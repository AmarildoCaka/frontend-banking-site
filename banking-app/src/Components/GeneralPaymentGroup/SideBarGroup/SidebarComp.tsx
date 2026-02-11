import { useState } from "react";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import FirstListComp from './SideBarBtnGroup/FirstListComp';
import SecondListComp from './SideBarBtnGroup/SecondListComp';
import ThirdListComp from './SideBarBtnGroup/ThirdListComp';
import FourthListComp from './SideBarBtnGroup/FourthListComp';
import FaqComp from "../../LoanCompsGroup/FaqComp";
import LoanOverlayComp from "../../LoanCompsGroup/LoanOverlayGroup/LoanOverlay";

const SidebarComp = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
  
    <>
    
      {isOpen && (
      
        <>
        
          <div  className="fixed inset-0 bg-opacity-30 z-30 md:hidden" onClick={() => {

            setIsOpen(false);

          }}/>
        
        </>

      )}

      <button type="button" className={`md:hidden fixed top-24 left-0 z-50 w-8 h-8 flex items-center justify-center bg-indigo-600 text-white rounded-r shadow-lg transform transition-transform duration-300 ${(isOpen)? 'translate-x-64': 'translate-x-0'}`} onClick={() => {

        setIsOpen((prev) => !prev);

      }}>{(isOpen)? <FaChevronLeft/>: <FaChevronRight/>}</button>

      <aside className={`main-dashboard-wrapper mt-25 fixed md:static top-0 left-0 h-screen w-64 bg-gray-800 text-white z-40 flex flex-col transform transition-transform duration-300 ${(isOpen)? 'translate-x-0': '-translate-x-64 md:translate-x-0'} overflow-hidden`}>

        <div className="p-5 flex-shrink-0">

          <h1 className="text-2xl font-bold">Bank Actions</h1>
        
        </div>

        <nav className="space-y-5 overflow-y-auto overflow-x-hidden custom-scrollbar px-5 flex-1">
          
          <div>
        
            <h3 className='font-bold text-lg mb-2'>Loan Details</h3>
        
            <FirstListComp/>
        
          </div>

          <hr className="border-t border-gray-300 my-2"/>

          <div>
        
            <h3 className='font-bold text-lg mb-2'>Transactions</h3>
        
            <SecondListComp/>
        
          </div>

          <hr className="border-t border-gray-300 my-2"/>

          <div>
        
            <h3 className='font-bold text-lg mb-2'>Bill Details</h3>
        
            <ThirdListComp/>
        
          </div>

          <hr className="border-t border-gray-300 my-2"/>

          <div>
        
            <h3 className='font-bold text-lg mb-2'>Card Details</h3>
        
            <FourthListComp/>
        
          </div>

          <FaqComp/>

        </nav>

        <div className="flex-shrink-0">
        
          <LoanOverlayComp/>
        
        </div>

      </aside>
    
    </>
  
  );

};

export default SidebarComp;