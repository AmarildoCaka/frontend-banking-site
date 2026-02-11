import { useBankStore } from "../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../store/secondBankStore";

import TransactionInnerHistoryComp from "../../../TransactionsGroup/InnerHistory";
import TransactionHistoryBtnComp from '../../../TransactionsGroup/TransactionHistoryBtn';
import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const TransactionHistoryComp = () => {
  
  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { transactions, activeTab } = useConditionalBankStore();

  return (

    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      {(activeTab === "transactionsHistory") && (

        <>

          <section className="p-1">

            <h1 className="text-2xl font-bold text-left mb-8">Transactions History</h1>

            <div className="flex flex-col justify-between place-items-center text-center bg-white w-full rounded-xl shadow-2xl p-5 overflow-y-auto h-96">

              {(transactions.length === 0)? (

                <>
                
                  <div className="p-1">
                
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-full h-12 text-gray-300 text-center">

                      <rect x="3" y="5" width="18" height="14" rx="2" ry="2" strokeWidth="2"/>
                    
                      <line x1="7" y1="9" x2="17" y2="9" strokeWidth="2"/>
                    
                      <line x1="7" y1="13" x2="17" y2="13" strokeWidth="2"/>
                    
                    </svg>

                    <p className="text-lg font-medium text-gray-600">No transactions yet</p>

                    <p className="text-sm text-gray-500 mt-1">All transactions will appear here</p>
                  
                  </div>
                
                </>
              
              ):(transactions.length > 0)? (

                <>
                
                  <TransactionInnerHistoryComp/>
                
                </>
              
              ): null}

              <TransactionHistoryBtnComp/>

            </div>

          </section>
        
        </>

      )}
    
    </>

  );
  
};

export default TransactionHistoryComp;