import { useEffect } from "react";

import { useBankStore } from "../../../../store/useBankStore";

import MainTextComp from './MainTextComp';
import AmountFormComp from './AmountForm';
import AmountCurrencyComp from './AmountCurrency';
import DepositsGlobalOverlayOverlayComp from './DepositsOverlay';
import DepositBtnComp from './DepositBtn';
import DepositBottomTextComp from './DepositBottomText';
import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const MultiCurrencyDeposit = () => {

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  useEffect(() => {
  
    document.body.style.backgroundImage = "linear-gradient(to bottom right, #f8fafc, #e2e8f0)";

    document.body.style.backgroundColor = "";

    return () => {

      document.body.style.backgroundImage = "";
    
    };
  
  }, []);

  return (
    
    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <MainTextComp/>

      <div className="max-w-lg mx-auto bg-white rounded-t-xl rounded-xl shadow-sm dark:bg-gray-800 dark:text-white m-5 px-6 py-4">
        
        <AmountFormComp/>

        <AmountCurrencyComp/>

        <DepositsGlobalOverlayOverlayComp/>

        <DepositBtnComp/>

        <DepositBottomTextComp/>
      
      </div>
    
    </>
  
  );

};

export default MultiCurrencyDeposit;