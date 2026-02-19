import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import InterestComp from "./InterestComp";

const DepositsGlobalOverlayComp = () => {
  const finalSubmissionStateData = useConditionalBankStore(
    (state) => state.finalSubmissionState,
  );

  return (
    <>
      {finalSubmissionStateData && (
        <>
          <InterestComp />
        </>
      )}
    </>
  );
};

export default DepositsGlobalOverlayComp;
