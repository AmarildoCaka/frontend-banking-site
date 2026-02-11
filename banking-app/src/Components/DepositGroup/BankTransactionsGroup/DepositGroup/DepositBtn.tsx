import { useState, useEffect } from "react";

import { useBankStore } from "../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../store/secondBankStore";

import { depositHistoryInterface } from '../../../../store/functInterfaces';

import { useGeneralInterestRateHook } from '../../../../generalAppLogic';

const DepositBtnComp = () => {

  const [depositHistoryUnit, setDepositHistoryUnitChange] = useState<depositHistoryInterface[]>([]);

  const [timeDisplayState, setTimeDisplayState] = useState<string | null>(null);

  const { timeCapturingFunct, showPopUpMessage, deposit, loadSavedTime, capturedTimeData, setDepositHistoryUnit, timeStatementUpdateFunct } = useBankStore();

  const { amount, setAmount, currency, setCurrency } = useConditionalBankStore();

  const interestRateData = useGeneralInterestRateHook();

  const interest = interestRateData;

  useEffect(() => {

    loadSavedTime();

    setTimeDisplayState(capturedTimeData);
  
  }, [loadSavedTime, capturedTimeData]);

  useEffect(() => {
  
    setDepositHistoryUnit(depositHistoryUnit);
  
  }, [depositHistoryUnit, setDepositHistoryUnit]);

  const depositHistoryUnitCreation = () => {
  
    const newDepositUnitObj: depositHistoryInterface = {

      id: crypto.randomUUID(),

      amount,

      currency,

      timeDisplayState,

      interest,
    
    };

    setDepositHistoryUnitChange((prev) => [...prev, newDepositUnitObj]);
  
  };

  const depositValidationFunct = () => {

    switch(true)
    {
    
      case amount === 0:
    
        showPopUpMessage("Amount is 0. Specify your amount first", "error");

        break;

      case amount > 0:
      
        deposit(amount, currency);

        timeStatementUpdateFunct();

        depositHistoryUnitCreation();

        showPopUpMessage(`Deposit made successfully, deposited ${amount} in ${currency}`, "success");

        setAmount(0);

        setCurrency("USD");

        break;

      default:

        break;
    
    }
  
  };

  return (

    <>
    
      <div className="text-center">
          
        <button type="button" className={`${(amount > 0)? "text-white bg-indigo-600 cursor-pointer": (amount === 0)? "text-gray-400 bg-gray-300 cursor-not-allowed": "text-gray-400 bg-gray-300 cursor-not-allowed"} font-bold w-full rounded-lg transform transition duration-300 hover:scale-105 py-3`} onClick={() => {
          
          depositValidationFunct();

          timeCapturingFunct();
        
        }}>Deposit Amount</button>
      
      </div>
    
    </>

  );

}

export default DepositBtnComp;