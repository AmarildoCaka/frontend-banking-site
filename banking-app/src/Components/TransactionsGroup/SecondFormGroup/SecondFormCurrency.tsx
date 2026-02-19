import { useState } from "react";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import { useCurrencyValidationFunctHook } from "../GeneralLogicComp/generalTransactionLogic";

import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const SecondFormCurrencyComp = () => {
  const [currencySelectBtnState, setCurrencySelectBtnState] =
    useState<boolean>(false);

  const { showPopUpMessage, alertVisibility, alertType, alertMessage } =
    useBankStore();

  const { transactionCurrency, setTransactionCurrency, fieldErrors } =
    useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const currencyValidationFunctHook = useCurrencyValidationFunctHook;

  const selectBtnListenFunct = () => {
    setCurrencySelectBtnState(true);

    if (currencySelectBtnState === true) {
      showPopUpMessage(`Currency: ${transactionCurrency}`, "info");
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

      <section className="flex flex-col w-full">
        <div className="text-left p-1">
          <p className="transaction-text font-semibold">Currency</p>
        </div>

        <select
          name="currency"
          id="currency"
          value={transactionCurrency}
          className={`transaction-form w-full cursor-pointer rounded-md border px-5 py-2 pr-10 text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 transition duration-300 ${theme === "light" || theme === "system" ? "border-black" : theme === "dark" ? "border-white" : "border-black"} ${fieldErrors.transactionCurrency ? "border border-red-500" : "border border-black"} transform transition duration-300 hover:scale-101`}
          onChange={(e) => {
            setTransactionCurrency(e.target.value);
          }}
          onClick={() => {
            selectBtnListenFunct();
          }}
        >
          <option value="" disabled selected>
            Select Currency
          </option>

          <option value="USD">USD - US Dollar</option>

          <option value="EUR">EUR - Euro</option>

          <option value="GBP">GBP - British Pound Sterling</option>

          <option value="CAD">CAD - Canadian Dollar</option>

          <option value="AUD">AUD - Australian Dollar</option>

          <option value="JPY">JPY - Japanese Yen</option>

          <option value="CHF">CHF - Swiss Franc</option>

          <option value="CNY">CNY - Chinese Yuan (Renminbi)</option>
        </select>

        {currencyValidationFunctHook()}
      </section>
    </>
  );
};

export default SecondFormCurrencyComp;
