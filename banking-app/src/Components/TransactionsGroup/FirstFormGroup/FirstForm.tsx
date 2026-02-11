import { useBankStore } from "../../../store/useBankStore";

import { useFirstStepFormBlockFunctHook } from "../GeneralLogicComp/generalTransactionLogic";

import SenderInnerFormComp from "./SenderInnerForm";
import ReceiverInnerFormComp from "./ReceiverInnerForm";
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const FirstFormComp = () => {

  const { alertVisibility, alertMessage, alertType } = useBankStore();

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

        <hr className="border-t w-[700px] border-gray-600 my-4"/>

        <ReceiverInnerFormComp/>

        <button type="button" className="text-white font-semibold bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 w-[500px] rounded-lg duration-300 mt-3 py-2.5 shadow-sm cursor-pointer transform transition hover:scale-105" onClick={firstFormSubmitFunct}>Forward</button>

        <div className="w-full mt-2">
  
          <p className="text-gray-500 font-semibold text-sm text-right">1 / 2</p>
  
        </div>
  
      </div>
  
    </>

  );

};

export default FirstFormComp;