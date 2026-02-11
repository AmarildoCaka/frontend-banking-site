import { useConditionalBankStore } from "../../../store/secondBankStore";

import { useAmountValidationFunctHook } from "../GeneralLogicComp/generalTransactionLogic";

const SecondFormAmountComp = () => {

  const { transactionAmount, setTransactionAmount, fieldErrors } = useConditionalBankStore();

  const amountValidationFunctHook = useAmountValidationFunctHook;

  return (

    <>

      <section className="flex flex-col justify-center mt-2">

        <h1 className="text-black font-bold text-left text-lg">Amount & Currency</h1>
        
        <div className="flex flex-col place-content-center mt-2">

          <div className="flex flex-col justify-center mb-2">

            <div className="w-full text-left p-1">

              <p className="text-black text-left font-semibold">Amount</p>
              
            </div>

            <input type="number" value={transactionAmount} max={10000} step={0.01} maxLength={5} className={`w-[700px] rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 px-5 py-2 text-gray-900 text-base font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06)] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 placeholder-gray-400 transition-all duration-200 ease-in-out ${(fieldErrors.transactionAmount)? "border border-red-500": "border border-black"} transform transition duration-300 hover:scale-101`} placeholder="Amount here..." onChange={(e) => {

              setTransactionAmount(parseFloat(e.target.value));

            }}/>

            {amountValidationFunctHook()}

          </div>

        </div>

      </section>

    </>

  );

};

export default SecondFormAmountComp;