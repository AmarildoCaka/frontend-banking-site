import { useState, useEffect } from "react";

import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

import SecondFormAmountComp from "./SecondFormAmount";
import SecondFormCurrencyComp from "./SecondFormCurrency";
import SecondFormDescriptionComp from "./SecondFormDescription";
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const SecondFormComp = () => {

  const [currencySelectBtnState, setCurrencySelectBtnState] = useState<boolean>(false);

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { transactions } = useConditionalBankStore();

  useEffect(() => {

    localStorage.setItem("transaction", JSON.stringify(transactions));
  
  }, [transactions]);

  if(currencySelectBtnState === true)
  {
  
    setTimeout(() => {
  
      setCurrencySelectBtnState(false);
  
    }, 2000);
  
  }

  return (

    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="flex flex-col justify-center place-items-center text-center gap-1">

        <SecondFormAmountComp/>

        <SecondFormCurrencyComp/>
      
        <div>

          <h1 className="text-black font-bold text-left text-lg">Description</h1>
      
          <div className="flex flex-col justify-center place-items-center text-center mt-3 mb-5">

            <div className="relative">
            
              <SecondFormDescriptionComp/>

              <div className="w-full mt-2">
    
                <p className="text-gray-500 font-semibold text-sm text-right">2 / 2</p>
    
              </div>
    
            </div>
    
          </div>

        </div>

      </section>

    </>

  );

};

export default SecondFormComp;