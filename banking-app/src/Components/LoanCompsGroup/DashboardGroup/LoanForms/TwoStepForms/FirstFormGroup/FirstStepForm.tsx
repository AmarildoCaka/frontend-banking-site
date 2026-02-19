import { FaWpforms } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

import { useFormValidationSystemHook } from "./firstFormLogic";

import FirstNameComp from "./FirstNameComp";
import LastNameComp from "./LastNameComp";
import JobTitleComp from "./JobTitleComp";
import MonthlyIncomeComp from "./MonthlyIncome";
import MonthlyIncomeCurrencyComp from "./MonthlyIncomeCurrencyComp";

const FirstStepFormComp = () => {

  const { firstStepFormFieldErrors, loanProgressBarObj } = useConditionalBankStore();

  const { formValidationSystem } = useFormValidationSystemHook();

  const mainFormCondtion = firstStepFormFieldErrors.loanFirstName === true || firstStepFormFieldErrors.loanLastName === true || firstStepFormFieldErrors.jobTitle === true || firstStepFormFieldErrors.monthlyIncome === true;

  return (
    
    <>

      <section className="p-1">

        <h1 className="loan-first-form-text text-2xl font-bold mb-5">Loan Application</h1>

        <div className="flex flex-col justify-center place-items-center">
          
          <section className="loan-form shadow-md rounded-md p-5 w-2xl h-110 overflow-y-auto">
            
            <div className="flex flex-row justify-between place-items-center mb-5">
              
              <div className="flex flex-row items-center gap-3">
              
                <div className="bg-indigo-600 text-white rounded-full w-9 h-9 text-center place-content-center font-bold">1</div>

                <h1 className="loan-first-form-text text-xl font-bold mb-1">First Step Form</h1>
              
              </div>

              <div className="flex flex-row items-center gap-3">
               
                <FaWpforms className="text-indigo-600 w-7 h-7"/>
              
              </div>
            
            </div>

            <form className="space-y-4">

              <FirstNameComp/>

              <LastNameComp/>

              <JobTitleComp/>

              <MonthlyIncomeComp/>

              <MonthlyIncomeCurrencyComp/>

              <hr className="loan-first-form-divider w-full border rounded"/>

              <div className="text-center">

                {mainFormCondtion && (

                  <>
                  
                    <p className="text-red-500 font-semibold text-md">Fill all the fields before submittion</p>
                  
                  </>
                
                )}
              
              </div>

              <section>
                
                <div className="flex items-center justify-center mb-5">
                
                  <div className="flex items-center space-x-2">
                
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${(loanProgressBarObj.loanFirstStep === false)? "bg-gray-400 text-white": "bg-indigo-600 text-white"}`}>{(loanProgressBarObj.loanFirstStep === false)? "1": "✓"}</div>

                    <div className={`w-40 h-1 ${(loanProgressBarObj.loanFirstStep === false)? "bg-gray-400": "bg-indigo-600"}`}></div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${loanProgressBarObj.loanSecondStep === false ? "bg-gray-400 text-white" : "bg-indigo-600 text-white"}`}>{(loanProgressBarObj.loanSecondStep === false)? "2": "✓"}</div>
                
                  </div>
                
                </div>

              </section>

              <button type="button" className={`loan-first-form-btn bg-indigo-600 w-full text-white font-semibold rounded-md cursor-pointer transform transation duration-300 hover:scale-102 py-3 px-4 ${mainFormCondtion === true ? null : "mt-1"}`} onClick={() => {
                
                formValidationSystem();
              
              }}>Next Step</button>

            </form>

            <p className="text-xs text-gray-400 text-center mt-5">Trusted by users all around the world.</p>

          </section>
        
        </div>

      </section>

    </>

  );

};

export default FirstStepFormComp;