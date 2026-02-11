import { FaTimes } from "react-icons/fa";

import { useEffect } from "react";

import { useFourthBankStore } from "../../../store/FourthGroup/fourthBankStore";

const UnpaidBillsInfoComp = () => {

  const { unpaidBillsInfoState, setUnpaidBillsInfoState } = useFourthBankStore();

  useEffect(() => {

    if(unpaidBillsInfoState)
    {

      document.body.style.overflow = "hidden";

    }
    
    else
    {

      document.body.style.overflow = "auto";

    }

    return () => {

      document.body.style.overflow = "auto";

    };

  }, [unpaidBillsInfoState]);

  if(!unpaidBillsInfoState)
  {

    return null;

  }

  return (

    <>
    
      <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-40 flex justify-center items-center">
    
        <div className="bg-white rounded-md shadow-md p-5 w-100 max-w-full relative z-50">
    
          <h1 className="text-xl text-indigo-600 font-bold mb-2">Unpaid Bills Info</h1>
    
          <p className="text-gray-600 mb-4">The most recent bills appear at the top of the list. You can scroll to see older bills below. Please make sure to pay bills on time to avoid any late fees.</p>
    
          <button type="button" className="absolute top-2 right-2 text-gray-500 hover:text-red-600 cursor-pointer transform transition duration-300 hover:scale-105" onClick={() => {
          
            setUnpaidBillsInfoState(false);

          }}>
            
            <FaTimes/>

          </button>
        
        </div>

      </div>
    
    </>
  
  );

};

export default UnpaidBillsInfoComp;