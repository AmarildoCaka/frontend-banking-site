import { useBankStore } from "../../store/useBankStore";

import { useConditionalBankStore } from "../../store/secondBankStore";

const TransactionHistoryBtnComp = () => {

  const { showPopUpMessage } = useBankStore();

  const { transactions, setTransactions } = useConditionalBankStore();

  const clearTransactionHistory = () => {

    if(transactions.length > 0)
    {

      setTransactions([]);

      showPopUpMessage("Transactions history deleted successfully", "success");
    
    }

  };

  return (
  
    <>
    
      <div className="flex flex-row justify-between place-items-center w-full text-center gap-5 mt-2 p-1">

        <button type="button" className={`${(transactions.length === 0)? 'text-gray-600 bg-gray-50 border-gray-200 cursor-not-allowed':(transactions.length > 0)? 'text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer transform transition duration-300 hover:scale-105': 'text-gray-600 bg-gray-50 border-gray-200 cursor-not-allowed'} text-sm border font-bold text-center rounded-lg shadow-2xl px-4 py-2`} onClick={() => {

          clearTransactionHistory();

        }}>Clear History</button>

        <p className="font-bold text-right p-1">
          
          Transactions:{""}
          
          <span className="text-indigo-500 font-bold text-center p-1">{transactions.length}</span>
        
        </p>

      </div>
    
    </>
  
  );

}

export default TransactionHistoryBtnComp;