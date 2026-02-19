import { useThirdBankStore } from "../../../../store/ThirdGroup/thirdBankStore";

import FirstOverlayModal from "./FirstOverlayModal";
import SecondOverlayModal from "./SecondOverlayModal";
import ThirdOverlayModal from "./ThirdOverlayModal";

const AboutOverlayComp = () => {
  const { firstModalState, secondModalState, thirdModalState } =
    useThirdBankStore();

  return (
    <>
      {firstModalState && (
        <>
          <FirstOverlayModal />
        </>
      )}

      {secondModalState && (
        <>
          <SecondOverlayModal />
        </>
      )}

      {thirdModalState && (
        <>
          <ThirdOverlayModal />
        </>
      )}
    </>
  );
};

export default AboutOverlayComp;