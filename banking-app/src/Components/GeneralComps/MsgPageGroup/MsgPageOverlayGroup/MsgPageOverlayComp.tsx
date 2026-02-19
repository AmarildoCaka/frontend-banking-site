import { useThirdBankStore } from "../../../../store/ThirdGroup/thirdBankStore";

import MoreInfoComp from "./MoreInfoGroup/MoreInfoComp";

const MsgPageOverlayComp = () => {
  const { msgPagePopUpUnit } = useThirdBankStore();

  return (
    <>
      {msgPagePopUpUnit && (
        <>
          <MoreInfoComp />
        </>
      )}
    </>
  );
};

export default MsgPageOverlayComp;
