import { useEffect } from "react";

import { useBankStore } from "../../store/useBankStore";

import { useConditionalBankStore } from "../../store/secondBankStore";

import MainBtnComp from "./MainBtnComp";
import CardLinkingOverlayComp from "./CardOverlayGroup/CardLinkingOverlay";
import TopAlertComp from "../GeneralLogic/TopAlertComp";

const CardLinkingSystem = () => {

  const { cardLinkingSystemFunct, alertVisibility, alertType, alertMessage } = useBankStore();

  const { cards } = useConditionalBankStore();

  useEffect(() => {

    cardLinkingSystemFunct(cards);
 
  }, [cards, cardLinkingSystemFunct]);

  return (

    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="card-linking-element max-w-2xl mx-auto shadow-2xl rounded-2xl p-5 text-center">
        
        <h2 className="card-linking-element-text text-gray-800 text-center text-3xl font-bold mb-5">Manage Your Linked Cards</h2>

        <p className="card-linking-element-text text-gray-600 text-lg max-w-md mx-auto">Securely view, manage, and control all your linked cards in one place.</p>

        <div className="flex justify-center">

          <MainBtnComp/>
        
        </div>
      
      </section>

      <CardLinkingOverlayComp/>
    
    </>
  
  );

};

export default CardLinkingSystem;