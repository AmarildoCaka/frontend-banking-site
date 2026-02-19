import { useConditionalBankStore } from "../../../../../store/SecondGroup/secondBankStore";

import CardsQueueComp from "./CardsQueueComp";
import CardsListComp from "./CardsListComp";

const InnerQueueComp = () => {
  const { cardsDisplayState } = useConditionalBankStore();

  return (
    <>
      <section className="w-full">
        {cardsDisplayState === true ? (
          <>
            <CardsListComp />
          </>
        ) : (
          <>
            <CardsQueueComp />
          </>
        )}
      </section>
    </>
  );
};

export default InnerQueueComp;
