import { useState, useEffect } from "react";

import { useBankStore } from "../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../store/secondBankStore";

import { withdrawHistoryInterface } from '../../../../store/functInterfaces';

const WithdrawBtnComp = () => {
  
  const [withdrawHistoryUnit, setWithdrawHistoryUnitChange] = useState<withdrawHistoryInterface[]>([]);

  const [timeDisplayState, setTimeDisplayState] = useState<string | null>("");

  const { balances, withdraw, timeCapturingFunct, timeStatementUpdateFunct, showPopUpMessage, loadSavedTime, capturedTimeData, setWithdrawHistoryUnit } = useBankStore();

  const { withdrawAmount, withdrawCurrency, setErrorMessageState } = useConditionalBankStore();

  useEffect(() => {

    loadSavedTime();

    setTimeDisplayState(capturedTimeData);
  
  }, [loadSavedTime, capturedTimeData]);

  useEffect(() => {
  
    setWithdrawHistoryUnit(withdrawHistoryUnit);
  
  }, [withdrawHistoryUnit, setWithdrawHistoryUnit]);

  const withdrawHistoryUnitCreation = () => {
  
    const newDepositUnitObj: withdrawHistoryInterface = {

      id: crypto.randomUUID(),

      withdrawAmount,

      withdrawCurrency,

      timeDisplayState,
    
    };

    setWithdrawHistoryUnitChange((prev) => [...prev, newDepositUnitObj]);
  
  };

  const withdrawInUSD = () => {
  
    if(balances.USD >= withdrawAmount)
    {
  
      withdraw(withdrawAmount, withdrawCurrency);
  
      timeStatementUpdateFunct();
  
      withdrawHistoryUnitCreation();
  
      showPopUpMessage(`Withdraw Successful. Withdrew ${withdrawAmount} ${withdrawCurrency}.`, "success");
    
    }
    
    else
    {
  
      showPopUpMessage("Cannot withdraw such amount", "error");
    
    }
  
  };
  
  const withdrawInEURO = () => {
  
    if(balances.EUR >= withdrawAmount)
    {
  
      withdraw(withdrawAmount, withdrawCurrency);
  
      timeStatementUpdateFunct();
  
      withdrawHistoryUnitCreation();
  
      showPopUpMessage(`Withdraw Successful. Withdrew ${withdrawAmount} ${withdrawCurrency}.`, "success");
    
    }
    
    else
    {
    
      showPopUpMessage("Cannot withdraw such amount", "error");
    
    }
  
  };
  
  const withdrawInGBP = () => {
  
    if(balances.GBP >= withdrawAmount)
    {
  
      withdraw(withdrawAmount, withdrawCurrency);
  
      timeStatementUpdateFunct();
  
      withdrawHistoryUnitCreation();
  
      showPopUpMessage(`Withdraw Successful. Withdrew ${withdrawAmount} ${withdrawCurrency}.`, "success");
    
    }
    
    else
    {
  
      showPopUpMessage("Cannot withdraw such amount", "error");
    
    }
  
  };

  const withdrawInvocationFunct = () => {

    switch(true)
    {

      case withdrawCurrency === "USD":
      
        if(withdrawAmount > 0)
        {

          withdrawInUSD();
        
        }
        
        else if(withdrawAmount === 0)
        {

          setErrorMessageState(true);

          showPopUpMessage("Cannot make a withdraw with no amount, set amount first", "error");

        }
        
        else
        {

          return null;
        
        }

        break;

      case withdrawCurrency === "EUR":
        
        if(withdrawAmount > 0)
        {
          
          withdrawInEURO();
        
        }
        
        else if(withdrawAmount === 0)
        {

          setErrorMessageState(true);

          showPopUpMessage("Cannot make a withdraw with no amount, set amount first", "error");

        }
        
        else
        {

          return null;
        
        }

        break;

      case withdrawCurrency === "GBP":

        if(withdrawAmount > 0)
        {

          withdrawInGBP();
        
        }
        
        else if(withdrawAmount === 0)
        {

          setErrorMessageState(true);

          showPopUpMessage("Cannot make a withdraw with no amount, set amount first", "error");
        
        }
        
        else
        {

          return null;
        
        }

        break;

      default:

        break;

    }

  };

  return (
  
    <>
    
      <div className="text-center p-1">

        <button type="button" className={`${(withdrawAmount > 0)? "text-white bg-indigo-600 cursor-pointer":(withdrawAmount === 0)? "text-gray-400 bg-gray-300 cursor-not-allowed": "text-gray-400 bg-gray-300 cursor-not-allowed"} font-bold w-full rounded-lg transform transition duration-300 hover:scale-105 py-3`} onClick={() => {
          
          withdrawInvocationFunct();

          timeCapturingFunct();

        }}>Withdraw Amount</button>

      </div>
    
    </>
    
  );

}

export default WithdrawBtnComp;