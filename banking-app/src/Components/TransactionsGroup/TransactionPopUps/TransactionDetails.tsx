import { FaCopy } from "react-icons/fa";

import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

const TransactionDetailsComp = ({ transactionData }: { transactionData: any }) => {

  const { showPopUpMessage } = useBankStore();

  const { setTransactionsDetails, setMoreActionsState } = useConditionalBankStore();

  return (
  
    <>
    
      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
                    
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 flex flex-col space-y-6">
          
          <h2 className="text-2xl font-extrabold text-gray-900 text-center">Transaction Details</h2>

          <section className="text-center space-y-2">

            <p className="text-gray-800 text-lg font-semibold">
            
              <strong>{transactionData.sender} {transactionData.senderLastName}</strong>{" "}

              <span className="text-indigo-600">sent</span>{" "}
              
              <strong>{transactionData.transactionCurrency}{" "} {transactionData.transactionAmount.toLocaleString()}</strong>{" "}
              
              <span className="text-indigo-600">to</span>{" "}
              
              <strong>{transactionData.receiver} {transactionData.receiverLastName}</strong>
            
            </p>
          
          </section>

          {transactionData.transactionDescription && (

            <>
            
              <section className="bg-indigo-50 rounded-lg p-4">
            
                <h3 className="text-indigo-700 font-semibold mb-1 text-center">Description</h3>

                <p className="text-gray-700 text-center">{transactionData.transactionDescription}</p>
            
              </section>
            
            </>

          )}

          <hr className="border-gray-300"/>

          <div className="flex items-center justify-between text-gray-600 text-sm font-medium">

            <section>

              <p className="uppercase tracking-wide">Made At</p>

              <p className="mt-1 text-gray-800">{new Date(transactionData.date).toLocaleString()}</p>

            </section>

            <section className="flex flex-row justify-center place-items-center gap-1">

              <div className="border-l border-gray-400 h-6"></div>

              <button type="button" className="p-2 rounded-full cursor-pointer transform transition duration-300 hover:scale-107" aria-label="Copy transaction time" title="Copy transaction time" onClick={() => {

                navigator.clipboard.writeText(new Date(transactionData.date).toLocaleString());

                showPopUpMessage("Time copied", "info");
              
              }}>

                <FaCopy className="text-indigo-500 w-5 h-5"/>
              
              </button>
            
            </section>
          
          </div>

          <section className="flex justify-between items-center">

            <button type="button" className="text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg px-4 py-2 shadow-2xl cursor-pointer transform transition duration-300 hover:scale-105" onClick={() => {
                
              setTransactionsDetails(false);

              setMoreActionsState(true);
            
            }}>Go Back</button>

            <p className="text-gray-500 font-semibold text-sm">2 / 2</p>

          </section>
        
        </div>

      </div>
    
    </>
  
  );

}

export default TransactionDetailsComp;