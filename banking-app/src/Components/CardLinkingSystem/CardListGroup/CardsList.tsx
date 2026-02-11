import { useBankStore } from "../../../store/useBankStore";

import CardLinkingOverlayComp from "../CardOverlayGroup/CardLinkingOverlay";
import CardListElementComp from "./CardListElement";
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const CardsListComp = () => {

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  return (
  
    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section>

        <ul className="space-y-3 h-[400px] overflow-y-auto overflow-x-hidden w-[760px]">
        
          <CardListElementComp/>
        
        </ul>

        <CardLinkingOverlayComp/>

      </section>
    
    </>

  );

};

export default CardsListComp;