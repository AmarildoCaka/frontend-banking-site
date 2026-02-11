import { FaTimes, FaInbox } from "react-icons/fa";

import { useEffect } from "react";

import { useThirdBankStore } from "../../../../../store/thirdBankStore";

import TableHeaderComp from './TableHeaderComp';
import TableBodyComp from './TableBodyComp';
import BottomBtnComp from './BottomBtnComp';

const MoreInfoComp = () => {

  const { setMsgPagePopUpUnit, opinionMsgList } = useThirdBankStore();

  useEffect(() => {

    document.body.style.overflow = "hidden";

    return () => {

      document.body.style.overflow = "auto";
    
    };
  
  }, []);

  return (

    <>
    
      <section className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-40 backdrop-blur-sm p-5">
       
        <div className="rating-timestamps-wrapper relative shadow-md rounded-md w-full max-w-3xl p-4 overflow-hidden">
          
          <button type="button" className="exit-btn timestamps-btn absolute top-3 right-3 transition transform duration-300 hover:scale-110 cursor-pointer" onClick={() => {
            
            setMsgPagePopUpUnit(false);
          
          }}>

            <FaTimes/>

          </button>

          <h2 className="rating-timestamps-header text-xl font-bold mb-4 text-center">Rating Timestamps</h2>

          <div>

            {(opinionMsgList.length === 0)? (

              <>
              
                <div className="flex flex-col items-center justify-center p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                  
                  <FaInbox className="text-gray-400 dark:text-gray-500 text-2xl mb-2" />

                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">No message timestamps yet</p>

                  <p className="text-gray-400 dark:text-gray-500 text-xs text-center">It looks empty for now — submit your first rating to get started!</p>
                
                </div>
              
              </>
            
            ):(opinionMsgList.length > 0)? (
             
              <>

                <div className="overflow-hidden dark:border-gray-700 rounded-lg">

                  <TableHeaderComp/>

                  <TableBodyComp/>

                  <BottomBtnComp/>

                </div>

              </>

            ): null}
          
          </div>
        
        </div>
      
      </section>
    
    </>
  
  );

};

export default MoreInfoComp;