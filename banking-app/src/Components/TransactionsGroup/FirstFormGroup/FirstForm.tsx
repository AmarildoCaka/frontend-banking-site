import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import { useFirstStepFormBlockFunctHook } from "../GeneralLogicComp/generalTransactionLogic";

import SenderInnerFormComp from "./SenderInnerForm";
import ReceiverInnerFormComp from "./ReceiverInnerForm";
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const FirstFormComp = () => {

  const { alertVisibility, alertMessage, alertType } = useBankStore();

  const { theme } = useThirdBankStore();

  const { firstStepFormBlockFunct } = useFirstStepFormBlockFunctHook();

  const firstFormSubmitFunct = (e: React.FormEvent) => {
  
    e.preventDefault();

    firstStepFormBlockFunct();
  
  };

  return (

    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <div className="flex flex-col justify-center place-items-center text-center">
        
        <SenderInnerFormComp/>

        <hr className={`border-t w-full my-4 ${(theme === "light" || theme === "system")? "border-black": (theme === "dark")? "border-white": "border-black"}`}/>

        <ReceiverInnerFormComp/>

        <button type="button" className="text-white font-semibold bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 w-[500px] rounded-lg duration-300 mt-3 py-2.5 shadow-sm cursor-pointer transform transition hover:scale-105" onClick={firstFormSubmitFunct}>Forward</button>

        <div className="w-full mt-2">
          
          <p className={`font-semibold text-sm text-right ${(theme === "light" || theme === "system")? "text-indigo-600": (theme === "dark")? "text-white": "text-indigo-600"}`}>1 / 2</p>
      
        </div>
      
      </div>

    </>

  );

};

export default FirstFormComp;