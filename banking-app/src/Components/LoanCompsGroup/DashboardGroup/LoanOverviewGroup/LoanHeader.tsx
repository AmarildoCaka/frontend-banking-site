import { useBankStore } from "../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../store/secondBankStore";

const LoanHeaderComp = () => {

  const { showPopUpMessage } = useBankStore();

  const { loanUnit, setLoanUnit } = useConditionalBankStore();
  
  const clearHistoryFunct = () => {
    
    if(loanUnit.length > 0)
    {

      setLoanUnit([]);

      showPopUpMessage("Loan history deleted successfully", "success");

    }
  
    else
    {

      return null;

    }

  };

  return (
  
    <>
    
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full my-5">
                  
        <div className="flex-shrink-0">

          <button type="button" className={`${(loanUnit.length > 0) ? 'text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300' : 'text-gray-400 bg-gray-50 border-gray-200 cursor-not-allowed'} font-bold text-sm border rounded-lg px-4 py-2 whitespace-nowrap`} onClick={() => {

            clearHistoryFunct();

          }}>Clear History</button>
        
        </div>

        <div className="flex flex-row gap-2 sm:gap-3 w-full sm:w-auto flex-1 sm:flex-initial">

          <section className="loan-totals-element shadow rounded-xl px-2 sm:px-4 py-2 sm:py-3 text-center flex-1 min-w-0">
        
            <p className="loan-totals-header text-xs sm:text-sm whitespace-nowrap">Total Loans</p>

            <p className="loan-totals-text font-bold text-base sm:text-lg whitespace-nowrap">{loanUnit.length}</p>

          </section>

          <section className="loan-totals-element shadow rounded-xl px-2 sm:px-4 py-2 sm:py-3 text-center flex-1 min-w-0">

            <p className="loan-totals-header text-xs sm:text-sm whitespace-nowrap">Loan Total</p>
            
            <p className="loan-totals-text font-bold text-base sm:text-lg whitespace-nowrap">${loanUnit.reduce((acc, loan) => acc + loan.loanAmount, 0).toLocaleString()}</p>

          </section>

        </div>
      
      </header>
    
    </>
    
  );

}

export default LoanHeaderComp;