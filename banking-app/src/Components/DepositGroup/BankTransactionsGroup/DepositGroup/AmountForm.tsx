import { FaRegCopy } from "react-icons/fa";

import { useBankStore } from "../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../store/secondBankStore";

import DepositTopTextComp from './DepositTopText';

const AmountFormComp = () => {

  const { setAmountState, showPopUpMessage } = useBankStore();

  const { setFinalSubmissionState, amount, setAmount } = useConditionalBankStore();

  const equalisingAmountFunct = () => {

    switch(true)
    {

      case amount > 0:
      
        setAmountState(Number(amount));

        break;
      
      case amount === 0:
      
        return null;

      default:
      
        break;
    
    }
  
  };

  const backToZeroFunct = () => {

    switch(true)
    {
    
      case amount > 0:
    
        setAmount(0);

        showPopUpMessage("Amount is back to 0", "info");

        break;

      case amount === 0:
      
        showPopUpMessage("Your amount is already 0", "error");

        break;

      default:
        
        return null;
    
    }
  
  };

  const copyAmountFunct = () => {

    switch(true)
    {

      case amount > 0:
      
        navigator.clipboard.writeText(JSON.stringify(amount));

        showPopUpMessage("Amount Copied Successfully", "success");

        break;

      case amount === 0:
        
        showPopUpMessage("Your amount is 0", "error");

        break;

      default:
        
        return null;
    
    }
  
  };

  return (
  
    <>

      <DepositTopTextComp/>

      <hr className="border-t-2 border-gray-400 my-4"/>
    
      <div className="mb-4">
      
        <label className="block font-semibold mb-2">Enter Amount</label>

        <div className="relative w-full">
        
          <input type="number" value={amount} className="text-left text-gray-700 font-bold w-full border border-gray-400 rounded-lg cursor-pointer transform transition duration-300 hover:scale-103 pr-16 p-4" onChange={(e) => {

            setAmount(Number(e.target.value));

            equalisingAmountFunct();

            setFinalSubmissionState();
          
          }}/>

          <button type="button" className="absolute right-10 top-1/2 -translate-y-1/2 text-black font-bold text-lg text-center cursor-pointer transform transition durarion-300 hover:scale-105" onClick={() => {

            backToZeroFunct();
          
          }}>⌫</button>

          <button type="button" className="absolute right-18 top-1/2 -translate-y-1/2 text-black font-bold text-lg text-center cursor-pointer transform transition durarion-300 hover:scale-105" onClick={() => {
              
            copyAmountFunct();

          }}>

            <FaRegCopy/>

          </button>

        </div>

      </div>

    </>
    
  );

}

export default AmountFormComp;