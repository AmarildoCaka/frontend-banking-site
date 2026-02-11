import { FaEraser, FaRegCopy } from "react-icons/fa";

import { useBankStore } from "../../../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

import { useThirdBankStore } from "../../../../../../store/thirdBankStore";

import { useFormValidationSystemHook } from './firstFormLogic';

import TopAlertComp from '../../../../../GeneralLogic/TopAlertComp';

const LastNameComp = () => {

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { loanLastName, setLoanLastName, firstStepFormFieldErrors } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const { emptyLastNameFormFunct, copyLastNameFormFunct } = useFormValidationSystemHook();

  const generalValidationFunct = () => {

    if(firstStepFormFieldErrors.monthlyIncome === true)
    {

      return <p className="text-red-500 font-semibold text-md">Empty last name field, please fill this form</p>;

    }

    else if(firstStepFormFieldErrors.monthlyIncome === false)
    {

      if(loanLastName.length === 0)
      {

        return <p className="text-green-500 font-semibold text-md">Maximum number of characters is 20</p>;

      }

      else if(loanLastName.length === 20)
      {

        return <p className="text-red-500 font-semibold text-md">Cannot have more than 20 characters</p>;

      }

      else
      {

        return null;

      }

    }

    else
    {

      return null;

    }

  }

  const innerConditionData = firstStepFormFieldErrors.loanLastName === true;

  const mainConditionLogic = (theme === 'light' || theme === 'system')? (innerConditionData)? 'border-2 border-red-500': 'border-black':(theme === 'dark')? (innerConditionData)? 'border-2 border-red-500': 'border-white': (innerConditionData)? 'border-2 border-red-500': 'border-black';

  return (
  
    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="flex flex-col justify-evenly gap-2">

        <label className="last-name-label block text-md font-semibold">Last Name</label>

        <div className={`loan-last-name-form flex items-center w-full rounded-md overflow-hidden transform transition duration-300 hover:scale-102 border ${mainConditionLogic}`}>

          <input type="text" value={loanLastName} maxLength={20} className={`w-full rounded-md flex-grow p-2 outline-none ${(theme === "light" || theme === 'system')? 'text-black placeholder:text-black':(theme === 'dark')? 'text-white placeholder:text-white': 'text-black placeholder:text-black'}`} placeholder="Last Name..." onChange={(e) => {
            
            setLoanLastName(e.target.value);
          
          }}/>

          <button type="button" className="loan-last-name-copy-btn cursor-pointer tarnsaform transition duration-300 hover:scale-110 px-3 py-2" onClick={() => {
          
            copyLastNameFormFunct();

          }}>

            <FaRegCopy/>

          </button>

          <div className="h-6 w-px bg-gray-300"></div>
          
          <button type="button" className="loan-last-name-erase-btn cursor-pointer tarnsaform transition duration-300 hover:scale-110 px-3 py-2" onClick={() => {

            emptyLastNameFormFunct();

          }}>

            <FaEraser/>

          </button>

        </div>

        {generalValidationFunct()}
      
      </section>
    
    </>

  );

}

export default LastNameComp;