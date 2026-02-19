import { useEffect } from "react";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import { useCardLinkingSystemHook } from "../cardLinkingLogic";

import FirstNameFormComp from "./FirstNameForm";
import LastNameFormComp from "./LastNameForm";
import CardNumberFormComp from "./CardNumberForm";
import CardExpiryDateComp from "./CardExpiryDate";
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const CardLinkingFormComp = () => {
  
  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { setActiveTab } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  useEffect(() => {

    setActiveTab("createCard");

  }, [setActiveTab]);

  const { handleAddCard } = useCardLinkingSystemHook();

  return (

    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="flex flex-col jsutify-center place-items-center p-1 mt-18">

        <div className="w-full p-1">
        
          <h1 className="card-linking-text text-2xl font-bold text-left mb-6">Link Your Card</h1>
        
        </div>

        <div className="card-linking-form-wrapper w-[800px] rounded-md shadow-md p-3 h-110 overflow-y-auto">

          <section className="flex flex-col gap-1 p-1">

            <FirstNameFormComp/>

            <LastNameFormComp/>

            <hr className={`border-t w-[700px] m-4 ${(theme === "light" || theme === "system")? "text-black": (theme === "dark")? "text-white": "text-black"}`}/>

            <CardNumberFormComp/>

            <CardExpiryDateComp/>
          
          </section>

          <section className="w-full text-center p-1">
            
            <button type="button" className="text-white font-semibold text-center bg-indigo-600 w-60 rounded-md shadow-md cursor-pointer transform transition duration-300 hover:scale-103 hover:bg-indigo-600 mt-5 py-2" onClick={() => {
              
              handleAddCard();
            
            }}>Add Card</button>

          </section>
        
        </div>

      </section>
    
    </>

  );

};

export default CardLinkingFormComp;