import { useBankStore } from "../../../store/useBankStore";

import CarouselPopUpComp from '../CarouselPopUp';

const CarouselOverloadComp = () => {

  const { popUpState } = useBankStore();

  return (

    <>
    
      {popUpState && (

        <>
        
          <CarouselPopUpComp/>
        
        </>

      )}
    
    </>
  
  );

}

export default CarouselOverloadComp;