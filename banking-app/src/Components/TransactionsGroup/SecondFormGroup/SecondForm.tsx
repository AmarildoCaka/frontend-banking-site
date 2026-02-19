import { useState, useEffect } from "react";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import SecondFormAmountComp from "./SecondFormAmount";
import SecondFormCurrencyComp from "./SecondFormCurrency";
import SecondFormDescriptionComp from "./SecondFormDescription";
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const SecondFormComp = () => {
  const [currencySelectBtnState, setCurrencySelectBtnState] =
    useState<boolean>(false);

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { transactions } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  useEffect(() => {
    localStorage.setItem("transaction", JSON.stringify(transactions));
  }, [transactions]);

  if (currencySelectBtnState === true) {
    setTimeout(() => {
      setCurrencySelectBtnState(false);
    }, 2000);
  }

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="flex flex-col justify-center place-items-center text-center gap-1">
        <SecondFormAmountComp />

        <SecondFormCurrencyComp />

        <section className="flex flex-col justify-center mt-2 w-full">
          <h1 className="transaction-text font-bold text-left text-lg">
            Description
          </h1>

          <div className="flex flex-col justify-center place-items-center text-center mt-3 mb-5">
            <div className="relative w-full">
              <SecondFormDescriptionComp />

              <div className="w-full mt-2">
                <p
                  className={`font-semibold text-sm text-right ${theme === "light" || theme === "system" ? "text-indigo-600" : theme === "dark" ? "text-white" : "text-indigo-600"}`}
                >
                  2 / 2
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default SecondFormComp;
