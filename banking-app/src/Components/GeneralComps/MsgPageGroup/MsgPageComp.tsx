import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import MsgListComp from "./MsgListGroup/MsgListComp";
import BottomBtnComp from "./BottomBtnComp";
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const MsgPageComp = () => {

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  return (
  
    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="rating-main-wrapper p-5 space-y-4">
        
        <div className="w-full text-left pt-23">
          
          <h1 className="rating-header-text text-3xl font-bold">Client Ratings & Opinions</h1>

          <p className="rating-description-text font-semibold mt-1">See what our clients are saying about our services.</p>

        </div>

        <MsgListComp/>

        <BottomBtnComp/>
  
      </section>
  
    </>

  );

};

export default MsgPageComp;