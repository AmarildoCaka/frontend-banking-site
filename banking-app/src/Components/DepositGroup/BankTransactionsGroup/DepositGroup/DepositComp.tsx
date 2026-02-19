import { useEffect } from "react";

import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import AmountFormComp from "./AmountForm";
import ErrorMessageOverlayComp from "../WithdrawGroup/ErrorMessageOverlayComp";
import AmountCurrencyComp from "./AmountCurrency";
import DepositsGlobalOverlayComp from "./DepositsOverlay";
import DepositBtnComp from "./DepositBtn";
import DepositBottomTextComp from "./DepositBottomText";
import TopAlertComp from "../../../GeneralLogic/TopAlertComp";
// import ExchangeRateTickerComp from "../../../ExchangeRateGroup/RateCarouselComp";

const DepositComp = () => {
  const { alertVisibility, alertType, alertMessage } = useBankStore();

  useEffect(() => {
    document.body.style.backgroundImage =
      "linear-gradient(to bottom right, #f8fafc, #e2e8f0)";

    document.body.style.backgroundColor = "";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="mt-30">
        {/* <ExchangeRateTickerComp/> */}

        <h1 className="main-dashboard-text text-2xl font-bold mb-7">
          Account Deposits
        </h1>

        <div className="deposit-form-wrapper max-w-lg mx-auto rounded-md shadow-sm m-5 px-5 py-5 h-100 overflow-y-auto">
          <AmountFormComp />

          <ErrorMessageOverlayComp />

          <AmountCurrencyComp />

          <DepositsGlobalOverlayComp />

          <DepositBtnComp />

          <DepositBottomTextComp />
        </div>
      </section>
    </>
  );
};

export default DepositComp;
