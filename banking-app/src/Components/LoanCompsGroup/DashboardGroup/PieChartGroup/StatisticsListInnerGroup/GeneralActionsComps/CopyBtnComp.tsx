import { FaRegCopy } from "react-icons/fa";

import { useBankStore } from "../../../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

const CopyBtnComp = ({ loanItem }: { loanItem: any }) => {

  const { showPopUpMessage } = useBankStore();

  const { generalLoanDetails } = useConditionalBankStore();

  const copyStatisticUnitFunct = async (id: string) => {

    const index = generalLoanDetails.findIndex((t) => t.id === id);
    
    const findUnit = generalLoanDetails[index];
  
    if(!findUnit)
    {
      
      showPopUpMessage(`Loan statistic not found`, 'error');
      
      return;
    
    }
  
    const rankedUnit = {

      ...findUnit,

      number: index + 1,

    };

    const formattedString = Object.entries(rankedUnit).map(([key, value]) => `${key}: ${value}`).join(", ");
  
    await navigator.clipboard.writeText(formattedString);
  
    showPopUpMessage(`Loan statistic copied successfully`, 'success');

  };  

  return (

    <>

      <button type="button" className="border-1 border-gray-300 bg-gray-200 font-bold rounded-md cursor-pointer transform transition duration-300 hover:scale-107 px-3 py-1 p-1" onClick={() => {

        copyStatisticUnitFunct(loanItem.id);

      }}>

        <FaRegCopy/>

      </button>

    </>

  );

}

export default CopyBtnComp;