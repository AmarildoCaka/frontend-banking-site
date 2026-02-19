import { FaTimes } from "react-icons/fa";

import { useEffect } from "react";

import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import AmountFormComp from "./AmountForm";
import ErrorMessageOverlayComp from "./ErrorMessageOverlayComp";
import AmountCurrencyComp from "./AmountCurrency";
import WithdrawBtnComp from "./WithdrawBtn";
import WithdrawBottomText from "./WithdrawBottomText";
import TopAlertComp from "../../../GeneralLogic/TopAlertComp";
import ExchangeRateTickerComp from "../../../ExchangeRateGroup/RateCarouselComp";

const WithdrawComp = () => {
  const { alertVisibility, alertType, alertMessage, balances } = useBankStore();

  const { currency, withdrawAmount, setDepositErrorMessageState } =
    useConditionalBankStore();

  useEffect(() => {
    document.body.style.backgroundImage =
      "linear-gradient(to bottom right, #f8fafc, #e2e8f0)";

    document.body.style.backgroundColor = "";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const withdrawAmountValidatorFunct = () => {
    if (currency === "USD" || currency === "EUR" || currency === "GBP") {
      if (
        balances.USD < withdrawAmount ||
        balances.EUR < withdrawAmount ||
        balances.GBP < withdrawAmount
      ) {
        return (
          <>
            <div className="flex flex-row place-items-center justify-between text-center w-full bg-gradient-to-r from-red-50 to-red-50 border border-red-100 rounded-md mb-2 p-5">
              <p className="text-red-500 font-bold">
                You do not have such amount in your deposit
              </p>

              <button
                type="button"
                className="text-red-500 cursor-pointer transform transition duration-300 hover:scale-105 hover:text-red-600"
                onClick={() => {
                  setDepositErrorMessageState(false);
                }}
              >
                <FaTimes />
              </button>
            </div>
          </>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <ExchangeRateTickerComp/>

      <section className="mt-23">
        <h1 className="main-dashboard-text text-2xl font-bold mb-7">
          Account Withdraws
        </h1>

        <div className="withdraw-form-wrapper max-w-lg mx-auto rounded-md shadow-sm m-5 px-5 py-5 h-109 overflow-y-auto">
          <AmountFormComp />

          <ErrorMessageOverlayComp />

          {withdrawAmountValidatorFunct()}

          <AmountCurrencyComp />

          <WithdrawBtnComp />

          <WithdrawBottomText />
        </div>
      </section>
    </>
  );
};

export default WithdrawComp;
