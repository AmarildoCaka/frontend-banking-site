import { useBankStore } from "../../../store/useBankStore";

import MsgListComp from "./MsgListGroup/MsgListComp";
import BottomBtnComp from "./BottomBtnComp";
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const MsgPageComp = () => {

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  return (
  
    <>
  
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="rating-main-wrapper p-4 space-y-4">

        <div className="w-full text-left mt-23">
        
          <h1 className="rating-header-text font-bold text-3xl">Client Ratings & Opinions</h1>

          <p className="rating-description-text text-sm mt-1">See what our clients are saying about our services.</p>
        
        </div>

        <MsgListComp/>

        <BottomBtnComp/>
      
      </section>
    
    </>
  
  );

};

export default MsgPageComp;