import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import LoanHistoryComp from "../LoanHistoryGroup/LoanHistory";

const LoanOverlayComp = () => {
  const { loanHistory } = useConditionalBankStore();

  return (
    <>
      {loanHistory && (
        <>
          <LoanHistoryComp />
        </>
      )}
    </>
  );
};

export default LoanOverlayComp;
