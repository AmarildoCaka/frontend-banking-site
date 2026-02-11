import { useBankStore } from "../../../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

const DeleteSingleUnitBtnComp = ({ loanItem }: { loanItem: any }) => {

  const { showPopUpMessage } = useBankStore();

  const { generalLoanDetails, setGeneralLoanDetailsFunct } = useConditionalBankStore();

  const deleteSingleStatisticsUnitFunct = (id: string) => {

    const newLoans = generalLoanDetails.filter((t) => t.id !== id);

    setGeneralLoanDetailsFunct(newLoans);

    showPopUpMessage("Loan deleted successfully", "success");
  
  };

  return (

    <>
    
      <section className="">

        <button type="button" className="text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg px-3 py-1.5 transition transform duartion-300 hover:scale-105 cursor-pointer" onClick={() => {

          deleteSingleStatisticsUnitFunct(loanItem.id);

        }}>Delete</button>

      </section>
    
    </>

  );

}

export default DeleteSingleUnitBtnComp;