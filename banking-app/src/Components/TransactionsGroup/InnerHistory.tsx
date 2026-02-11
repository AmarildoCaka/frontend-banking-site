import { FaCheck, FaEllipsisV } from "react-icons/fa";

import { useBankStore } from "../../store/useBankStore";

import { useConditionalBankStore } from "../../store/secondBankStore";

import MoreActionsComp from './TransactionPopUps/MoreActions';
import TransactionDetailsComp from './TransactionPopUps/TransactionDetails';
import TopAlertComp from "../GeneralLogic/TopAlertComp";

const TransactionInnerHistoryComp = () => {

  const { showPopUpMessage, alertMessage, alertVisibility, alertType } = useBankStore();

  const { transactions, setTransactions, transactionDetails, moreActionsState, setMoreActionsState } = useConditionalBankStore();

  const deleteSingleTransaction = (id: string) => {

    const newTransactions = transactions.filter((t) => t.id !== id);
    
    setTransactions(newTransactions);
  
    showPopUpMessage("Transaction deleted successfully", "success");
  
  };

  return (
  
    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="p-7">

        {transactions.map((tx, index) => (

          <div key={tx.id} className="flex flex-row justify-between place-items-center gap-2 text-center w-[800px] border-b border-gray-200 bg-white text-sm p-2 mb-2">

            <p className="text-black font-bold">#{index + 1}</p>

            <section className="flex flex-col justify-center place-items-center gap-2">
              
              <div className="flex flex-row justify-center place-items-center gap-3">
              
                <p className="font-semibold text-gray-900">{tx.transactionDescription}</p>

                <span className="text-xs font-semibold bg-green-100 text-green-500 border border-green-500 rounded-full p-1">
                  
                  <FaCheck/>
                
                </span>
              
              </div>

              <p className="text-gray-500 text-xs">{tx.date}</p>

            </section>

            <section className="flex flex-row justify-center place-content-center gap-3 text-center p-1">
              
              <button type="button" className="text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg shadow-2xl cursor-pointer transform transition duration-300 hover:scale-105 px-2 py-1" onClick={() => {
                  
                deleteSingleTransaction(tx.id);
              
              }}>Delete</button>

              <div className="border-l border-gray-400 h-6"></div>

              <button type="button" className="text-black font-semibold text-lg cursor-pointer transform transition duration-300 hover:scale-105" onClick={() => {

                setMoreActionsState(true);
              
              }}>

                <FaEllipsisV/>
              
              </button>
            
            </section>

            {moreActionsState && (

              <>

                <MoreActionsComp transactionData={tx.id}/>

              </>

            )}

            {transactionDetails && (

              <>

                <TransactionDetailsComp transactionData={tx}/>

              </>

            )}
        
          </div>

        ))}

      </section>
    
    </>
  
  );

}

export default TransactionInnerHistoryComp;