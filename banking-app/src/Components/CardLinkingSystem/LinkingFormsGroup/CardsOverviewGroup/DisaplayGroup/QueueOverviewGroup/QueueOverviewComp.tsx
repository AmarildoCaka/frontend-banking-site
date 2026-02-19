import { Card } from "../../../../../../store/functInterfaces";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

import CardErasingWarningComp from "../QueueOverviewGroup/CardErasingWarning";
import CardDetailsComp from "./CardDetails";

const QueueOverviewComp = ({ cardElement }: { cardElement?: Card }) => {
  const { selectedCardDisplay, singleCardErasingState } =
    useConditionalBankStore();

  return (
    <>
      {selectedCardDisplay && (
        <>
          <CardDetailsComp />
        </>
      )}

      {singleCardErasingState && (
        <>
          <CardErasingWarningComp cardData={cardElement} />
        </>
      )}
    </>
  );
};

export default QueueOverviewComp;
