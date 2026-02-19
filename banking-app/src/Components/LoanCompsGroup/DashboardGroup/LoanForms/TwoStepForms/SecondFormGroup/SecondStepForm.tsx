import { FaWpforms } from "react-icons/fa";

import { useBankStore } from "../../../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

import { useSubmitEstimatedLoanHook } from "../../../../GeneralLogicComps/GeneralLoanLogic";

import MainFormComp from "./MainForm";
import AmountRangeComp from "./AmountRange";
import MonthlyPaymentComp from "./MonthlyPayment";
import LoanCurrencyComp from "./LoanCurrencyComp";
import TopAlertComp from "../../../../../GeneralLogic/TopAlertComp";

const SecondStepFormComp = () => {
  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { setFirstLoanForm, setSecondLoanForm, loanProgressBarObj } = useConditionalBankStore();

  const { submitEstimatedLoan } = useSubmitEstimatedLoanHook();

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="p-1">
        <h1 className="loan-first-form-text text-2xl font-bold mb-5">
          Loan Application
        </h1>

        <div className="flex flex-col justify-center place-items-center">
          <section className="loan-form shadow-md rounded-md p-5 w-2xl h-110 overflow-y-auto">
            <div className="flex flex-row justify-between place-items-center mb-5">
              <div className="flex flex-row items-center gap-3">
                <div className="bg-indigo-600 text-white rounded-full w-9 h-9 text-center place-content-center font-bold">
                  2
                </div>

                <h1 className="loan-first-form-text text-xl font-bold mb-1">
                  Second Step Form
                </h1>
              </div>

              <div className="flex flex-row items-center gap-3">
                <FaWpforms className="text-indigo-600 w-7 h-7" />
              </div>
            </div>

            <form className="space-y-4">
              <MainFormComp />

              <AmountRangeComp />

              <LoanCurrencyComp />

              <MonthlyPaymentComp />

              <section>
                
                <div className="flex items-center justify-center mb-5">
                
                  <div className="flex items-center space-x-2">
                
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${(loanProgressBarObj.loanFirstStep === false)? "bg-gray-400 text-white": "bg-indigo-600 text-white"}`}>{(loanProgressBarObj.loanFirstStep === false)? "1": "✓"}</div>

                    <div className={`w-40 h-1 ${(loanProgressBarObj.loanFirstStep === false)? "bg-gray-400": "bg-indigo-600"}`}></div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${loanProgressBarObj.loanSecondStep === false ? "bg-gray-400 text-white" : "bg-indigo-600 text-white"}`}>{(loanProgressBarObj.loanSecondStep === false)? "2": "✓"}</div>
                
                  </div>
                
                </div>

              </section>

              <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 p-1">
                <button
                  type="button"
                  className="w-full bg-gray-100 text-black font-bold rounded-md cursor-pointer transform transation duration-300 hover:scale-102 px-3 py-2"
                  onClick={() => {
                    setFirstLoanForm(true);

                    setSecondLoanForm(false);
                  }}
                >
                  Back
                </button>

                <button
                  type="button"
                  className="w-full bg-indigo-500 text-white font-bold rounded-md cursor-pointer transform transation duration-300 hover:scale-102 px-3 py-2"
                  onClick={() => {
                    submitEstimatedLoan();
                  }}
                >
                  Set Estimated Loan
                </button>
              </div>
            </form>

            <p className="text-xs text-gray-400 text-center mt-5">
              Trusted by users all around the world.
            </p>
          </section>
        </div>
      </section>
    </>
  );
};

export default SecondStepFormComp;