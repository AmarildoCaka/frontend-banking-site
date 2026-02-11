import { useState } from "react";

import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

import { useCurrencyValidationFunctHook } from "../GeneralLogicComp/generalTransactionLogic";

import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const SecondFormCurrencyComp = () => {

  const [currencySelectBtnState, setCurrencySelectBtnState] = useState<boolean>(false);

  const { showPopUpMessage, alertVisibility, alertType, alertMessage } = useBankStore();

  const { transactionCurrency, setTransactionCurrency, fieldErrors } = useConditionalBankStore();

  const currencyValidationFunctHook = useCurrencyValidationFunctHook;

  const selectBtnListenFunct = () => {

    setCurrencySelectBtnState(true);

    if(currencySelectBtnState === true)
    {
      
      showPopUpMessage(`Currency: ${transactionCurrency}`, "info");
    
    }
    
    else
    {

      return null;
    
    }

  };

  return (

    <>

      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <div className="flex flex-col justify-center mb-2">

        <div className="w-full text-left p-1">

          <p className="text-black font-semibold">Currency</p>
        
        </div>

        <select name="currency" id="currency" value={transactionCurrency} className={`w-[700px] rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 px-5 py-2 text-gray-900 text-base font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06)] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 placeholder-gray-400 transition-all duration-200 ease-in-out ${(fieldErrors.transactionCurrency)? "border border-red-500": "border border-black"} transform transition duration-300 hover:scale-101`} onChange={(e) => {
          
          setTransactionCurrency(e.target.value);
        
        }} onClick={() => {
        
          selectBtnListenFunct();
        
        }}>

          <option value="" disabled selected>Select Currency</option>

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

      </div>

    </>

  );

};

export default SecondFormCurrencyComp;