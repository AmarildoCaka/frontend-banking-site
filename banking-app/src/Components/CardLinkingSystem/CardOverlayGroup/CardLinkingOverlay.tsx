import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import CardDetailsComp from "../CardDetails";

const CardLinkingOverlayComp = () => {
  const { showCardDetails, selectedCard } = useConditionalBankStore();

  return (
    <>
      {showCardDetails && selectedCard && (
        <>
          <CardDetailsComp />
        </>
      )}
    </>
  );
};

export default CardLinkingOverlayComp;
