import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import CarouselPopUpComp from "../CarouselPopUp";

const CarouselOverloadComp = () => {
  const { popUpState } = useBankStore();

  return (
    <>
      {popUpState && (
        <>
          <CarouselPopUpComp />
        </>
      )}
    </>
  );
};

export default CarouselOverloadComp;
