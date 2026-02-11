import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

import LoanHeaderComp from "../DashboardGroup/LoanOverviewGroup/LoanHeader";
import EmptyHistoryComp from './InnerHistoryGroup/EmptyHistoryComp';
import LoanHistoryListComp from './InnerHistoryGroup/LoanHistoryList';
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const InnerLoanHistoryComp = () => {

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { activeTab, loanUnit } = useConditionalBankStore();

  return (
  
    <>
    
      {(activeTab === "overview") && (

        <>

          <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

          <section className="flex flex-col mt-23">
          
            <h2 className="main-dashboard-text text-2xl font-bold">Loan Overview</h2>

            <LoanHeaderComp/>

            <div className="flex-1 overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">

              {(loanUnit.length === 0)? (

                <>
                
                  <EmptyHistoryComp/>
                
                </>

              ):(

                <>
                
                  <LoanHistoryListComp/>
                
                </>

              )}

            </div>
          
          </section>
  
        </>

      )}
  
    </>

  );

};

export default InnerLoanHistoryComp;