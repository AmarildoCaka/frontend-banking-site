import { FaWpforms } from 'react-icons/fa';

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

import { useFormValidationSystemHook } from './firstFormLogic';

import FirstNameComp from './FirstNameComp';
import LastNameComp from './LastNameComp';
import JobTitleComp from './JobTitleComp';
import MonthlyIncomeComp from './MonthlyIncome';
import MonthlyIncomeCurrencyComp from './MonthlyIncomeCurrencyComp';
import ProgressBarComp from '../ProgressBarComp';

const FirstStepFormComp = () => {

  const { firstStepFormFieldErrors } = useConditionalBankStore();

  const { formValidationSystem } = useFormValidationSystemHook();

  const mainFormCondtion = firstStepFormFieldErrors.loanFirstName === true || firstStepFormFieldErrors.loanLastName === true || firstStepFormFieldErrors.jobTitle === true || firstStepFormFieldErrors.monthlyIncome === true;

  return (
    
    <>
    
      <section className="p-1">

        <h1 className="loan-first-form-text text-2xl font-bold mb-5">Loan Application</h1>

        <div className="flex flex-col justify-center place-items-center">

          <section className="loan-form shadow-md rounded-md p-5 w-2xl h-110 overflow-y-auto">

            <div className="flex flex-row justify-between place-items-center mb-5">

              <div className='flex flex-row items-center gap-3'>

                <div className='bg-indigo-600 text-white rounded-full w-9 h-9 text-center place-content-center font-bold'>1</div>

                <h1 className="loan-first-form-text text-xl font-bold mb-1">First Step Form</h1>

              </div>

              <div className='flex flex-row items-center gap-3'>

                <FaWpforms className='text-indigo-600 w-7 h-7'/>

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

              <ProgressBarComp/>

              <button type="button" className={`loan-first-form-btn w-full text-white font-semibold rounded-md cursor-pointer transform transation duration-300 hover:scale-102 py-3 px-4 ${(mainFormCondtion === true)? null: 'mt-1'}`} onClick={() => {
              
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