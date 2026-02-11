import { FaCopy } from "react-icons/fa";

import { useBankStore } from "../../../store/useBankStore"; 

import { useConditionalBankStore } from "../../../store/secondBankStore";

const MoreActionsComp = ({ transactionData }: { transactionData: string }) => {

  const { showPopUpMessage } = useBankStore();

  const { transactions, setMoreActionsState, setTransactionsDetails,  } = useConditionalBankStore();

  const copySingleTransactionFunct = async (id: string) => {

    const transaction = transactions.find((t) => t.id === id);

    if(!transaction)
    {
      
      showPopUpMessage("Transaction not found, please enter a trabsaction first", "error");

      return;
    
    }

    const { id: _, ...rest } = transaction;

    const formatted = Object.entries(rest).map(([key, value]) => `${key}: ${value}`).join(", ");

    try
    {

      await navigator.clipboard.writeText(formatted);

      showPopUpMessage("Transaction copied", "info");
    
    }
    
    catch(error)
    {

      console.error("Copy failed:", error);

      showPopUpMessage("Failed to copy tarnsaction, please try again", "error");
    
    }

  };

  return (
  
    <>
    
      <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center backdrop-blur-sm z-50">
                      
        <div className="w-full h-56 max-w-md flex flex-col justify-between place-items-center gap-1 bg-white shadow-2xl rounded-xl text-center p-4">
          
          <h1 className="text-black font-bold text-2xl mb-4">More Actions</h1>

          <div className="flex flex-row justify-between place-items-center text-center gap-3 mt-2 p-1">
            
            <button type="button" className="text-white font-bold text-center bg-indigo-500 w-[130px] rounded-lg shadow-2xl cursor-pointer transform transition duration-300 hover:scale-105 px-4 py-2" onClick={() => {

              setMoreActionsState(false);

              setTransactionsDetails(true);
            
            }}>See Details</button>

            <div className="w-px h-5 bg-black mx-auto"/>

            <div className="group relative flex flex-col justify-end items-end text-right">

              <button type="button" className="text-black font-bold text-lg cursor-pointer transform transition duration-300 hover:scale-105 p-1" onClick={() => {
                
                copySingleTransactionFunct(transactionData);
              
              }}>
            
                <FaCopy/>
            
              </button>

              <span className="absolute z-50 bottom-full right-0 text-white text-sm font-semibold bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-1 px-2 max-w-[150px]">Copy</span>
            
            </div>
          
          </div>

          <button type="button" className="text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg shadow-2xl cursor-pointer transform transition duration-300 hover:scale-105 mt-8 px-4 py-2" onClick={() => {
            
            setMoreActionsState(false);
          
          }}>Close</button>

          <div className="w-full">

            <p className="text-black font-bold text-right">1/2</p>

          </div>
        
        </div>
      
      </div>
    
    </>

  );

}

export default MoreActionsComp;