import { useThirdBankStore } from "../../../../store/thirdBankStore";

import RatingInfoComp from "./RatingInfoGroup/RatingInfoComp";

const ContactUsOverLoadComp = () => {

  const { ratingInfoUnit } = useThirdBankStore();

  return (
  
    <>
  
      {ratingInfoUnit && (
    
        <>
        
          <RatingInfoComp/>
        
        </>
      
      )}
    
    </>
  
  );

};

export default ContactUsOverLoadComp;