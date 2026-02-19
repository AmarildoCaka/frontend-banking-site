import { FaChevronDown } from "react-icons/fa";

import { useState } from "react";

import { useBankStore } from "../../../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../../../../store/ThirdGroup/thirdBankStore";

import TopAlertComp from "../../../../../GeneralLogic/TopAlertComp";

interface loanCurrencyListInterface {

  idKey: number;

  valueKey: string;

  disabledKey: boolean;

  textKey: string;

};

const LoanCurrencyComp = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { secondStepFormFieldErrors, loanCurrency, setLoanCurrency } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const loanCurrencyList: loanCurrencyListInterface[] = [

    { idKey: 1, valueKey: "", disabledKey: true, textKey: "No loan currency yet" },

    { idKey: 2, valueKey: "USD", disabledKey: false, textKey: "United States Dollars (USD)" },
    
    { idKey: 3, valueKey: "EUR", disabledKey: false, textKey: "EURO (EUR)" },
    
    { idKey: 4, valueKey: "GBP", disabledKey: false, textKey: "Great British Pound (GBP)" }
  
  ];

  const loanCurrencyGeneralValidationFunct = () => {

    if(loanCurrency === "" && secondStepFormFieldErrors.loanCurrency === false)
    {

      return (

        <p className="text-green-500 font-semibold text-md mt-1 text-left">Select 1 of 3 avaliable loan currencies</p>
      
      );
    
    }
    
    else if(loanCurrency === "" && secondStepFormFieldErrors.loanCurrency === true)
    {
    
      return (
      
        <p className="text-red-500 font-semibold text-md mt-1 text-left">No loan currency, please select a loan currency first</p>

      );
    
    }
    
    else
    {
    
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

      <div
        className="loan-second-application-form-inner-wrapper relative mb-5 p-5 rounded-md overflow-hidden"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="text-left flex flex-col">
          <h3 className="loan-second-application-form-text text-lg font-semibold mb-2">
            Loan Currency
          </h3>

          <p className="loan-second-application-form-text text-sm mb-1 font-bold">
            Choose the currency of the loan you borrow
          </p>
        </div>

        <select
          value={loanCurrency}
          className={`loan-second-applciation-form-dropdown w-full mt-2 appearance-none font-semibold border-2 rounded-md transition-colors focus:outline-none cursor-pointer p-2 ${secondStepFormFieldErrors.loanCurrency === true ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-indigo-500"}`}
          onChange={(e) => {
            setLoanCurrency(e.target.value);
          }}
          onBlur={() => {
            setIsOpen(false);
          }}
        >
          {loanCurrencyList.map((i) => (
            <>
              <option
                key={i.idKey}
                value={i.valueKey}
                disabled={i.disabledKey}
                className={`font-bold ${(theme === 'light' || theme == 'system')? 'bg-white text-black':(theme === 'dark')? 'bg-slate-700 text-white': 'bg-white text-blace'}`}
              >
                {i.textKey}
              </option>
            </>
          ))}
        </select>

        <FaChevronDown className={`absolute right-9 bottom-13 -translate-y-1/2 pointer-events-none transition-transform duration-300 ${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"} ${isOpen ? "rotate-180" : "rotate-0"}`}/>

        {loanCurrencyGeneralValidationFunct()}
  
      </div>

    </>

  );

};

export default LoanCurrencyComp;