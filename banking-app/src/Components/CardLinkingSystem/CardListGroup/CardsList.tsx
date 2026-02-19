import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import CardLinkingOverlayComp from "../CardOverlayGroup/CardLinkingOverlay";

import CardListElementComp from "./CardListElement";

import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const CardsListComp = () => {
  const { alertVisibility, alertType, alertMessage } = useBankStore();

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="w-full flex flex-col items-center">
        <ul className="space-y-3 h-96 overflow-y-auto w-full max-w-4xl p-2 md:p-4">
          <CardListElementComp />
        </ul>

        <CardLinkingOverlayComp />
      </section>
    </>
  );
};

export default CardsListComp;
