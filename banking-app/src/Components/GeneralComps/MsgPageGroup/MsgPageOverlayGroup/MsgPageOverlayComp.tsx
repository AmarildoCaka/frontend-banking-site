import { useThirdBankStore } from "../../../../store/thirdBankStore";

import MoreInfoComp from "./MoreInfoGroup/MoreInfoComp";

const MsgPageOverlayComp = () => {

  const { msgPagePopUpUnit } = useThirdBankStore();

  return (

    <>
    
      {msgPagePopUpUnit && (

        <>
        
          <MoreInfoComp/>
        
        </>
      
      )}
    
    </>
  
  );

};

export default MsgPageOverlayComp;