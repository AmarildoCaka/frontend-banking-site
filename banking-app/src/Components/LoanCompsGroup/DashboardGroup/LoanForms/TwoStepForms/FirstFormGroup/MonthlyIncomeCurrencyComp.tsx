import { FaChevronDown } from "react-icons/fa";

import { useState } from "react";

import { useBankStore } from "../../../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../../../../store/ThirdGroup/thirdBankStore";

import TopAlertComp from "../../../../../GeneralLogic/TopAlertComp";

const MonthlyIncomeCurrencyComp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const {
    firstStepFormFieldErrors,
    monthlyIncomeCurrency,
    setMonthlyIncomeCurrency,
  } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const incomeCurrencyGeneralValidationFunct = () => {
    if (
      monthlyIncomeCurrency === "" &&
      firstStepFormFieldErrors.monthlyIncomeCurrency === false
    ) {
      return (
        <p className="text-green-500 font-semibold text-md">
          Select 1 of 3 avaliable income currencies
        </p>
      );
    } else if (
      monthlyIncomeCurrency === "" &&
      firstStepFormFieldErrors.monthlyIncomeCurrency === true
    ) {
      return (
        <p className="text-red-500 font-semibold text-md">
          No income currency, please select an income currency first
        </p>
      );
    } else {
      return null;
    }
  };

  const innerConditionData =
    firstStepFormFieldErrors.monthlyIncomeCurrency === true;

  const mainConditionLogic =
    theme === "light" || theme === "system"
      ? innerConditionData
        ? "border-2 border-red-500"
        : "border-black"
      : theme === "dark"
        ? innerConditionData
          ? "border-2 border-red-500"
          : "border-white"
        : innerConditionData
          ? "border-2 border-red-500"
          : "border-black";

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="flex flex-col justify-evenly gap-2">
        <label className="loan-monthly-income-label block text-md font-semibold">
          Monthly Income Currency
        </label>

        <div
          className={`relative flex items-center w-full rounded-md overflow-hidden transform transition duration-300 hover:scale-102 border ${mainConditionLogic}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <select
            value={monthlyIncomeCurrency}
            className={`loan-income-currency-form w-full text-left p-1 cursor-pointer h-10 appearance-none ${theme === "light" || theme === "system" ? "text-black bg-white" : theme === "dark" ? "text-white bg-[#1e293b]" : "text-black bg-white"}`}
            onChange={(e) => {
              setMonthlyIncomeCurrency(e.target.value);
            }}
            onBlur={() => {
              setIsOpen(false);
            }}
          >
            <option value="" disabled className="font-bold">
              No monthly income currency yet
            </option>

            <option value="USD" className="font-bold">
              United States Dollars (USD)
            </option>

            <option value="EUR" className="font-bold">
              EURO (EUR)
            </option>

            <option value="GBP" className="font-bold">
              Great British Pound (GBP)
            </option>
          </select>

          <FaChevronDown
            className={`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-300 ${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"} ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>

        {incomeCurrencyGeneralValidationFunct()}
      </section>
    </>
  );
};

export default MonthlyIncomeCurrencyComp;
