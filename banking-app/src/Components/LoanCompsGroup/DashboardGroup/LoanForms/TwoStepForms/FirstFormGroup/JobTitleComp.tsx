import { FaEraser, FaRegCopy } from "react-icons/fa";

import { useBankStore } from "../../../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

import { useThirdBankStore } from "../../../../../../store/thirdBankStore";

import { useFormValidationSystemHook } from './firstFormLogic';

import TopAlertComp from '../../../../../GeneralLogic/TopAlertComp';

const JobTitleComp = () => {

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { jobTitle, setJobTitle, firstStepFormFieldErrors } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const { copyJobTitleFormFunct, emptyJobTitleFormFunct } = useFormValidationSystemHook();

  const generalValidationFunct = () => {

    if(firstStepFormFieldErrors.monthlyIncome === true)
    {

      return <p className="text-red-500 font-semibold text-md">Empty job title field, please fill this form</p>;

    }

    else if(firstStepFormFieldErrors.monthlyIncome === false)
    {

      if(jobTitle.length === 0)
      {

        return <p className="text-green-500 font-semibold text-md">Maximum number of characters is 20</p>;

      }

      else if(jobTitle.length === 20)
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

  const innerConditionData = firstStepFormFieldErrors.jobTitle === true;

  const mainConditionLogic = (theme === 'light' || theme === 'system')? (innerConditionData)? 'border-2 border-red-500': 'border-black':(theme === 'dark')? (innerConditionData)? 'border-2 border-red-500': 'border-white': (innerConditionData)? 'border-2 border-red-500': 'border-black';

  return (
    
    <>

      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="flex flex-col justify-evenly gap-2">
    
        <label className="job-title-label block text-md font-semibold">Job Title</label>

        <div className={`loan-job-title-form flex items-center w-full rounded-md overflow-hidden transform transition duration-300 hover:scale-102 border ${mainConditionLogic}`}>

          <input type="text" value={jobTitle} maxLength={20} className={`w-full rounded-md flex-grow p-2 outline-none ${(theme === "light" || theme === 'system')? 'text-black placeholder:text-black':(theme === 'dark')? 'text-white placeholder:text-white': 'text-black placeholder:text-black'}`} placeholder="Job Title..." onChange={(e) => {
            
            setJobTitle(e.target.value);
          
          }}/>

          <button type="button" className="loan-job-title-copy-btn cursor-pointer tarnsaform transition duration-300 hover:scale-110 px-3 py-2" onClick={() => {
                    
            copyJobTitleFormFunct();

          }}>

            <FaRegCopy/>

          </button>

          <div className="h-6 w-px bg-gray-300"></div>
                    
          <button type="button" className="loan-job-title-erase-btn cursor-pointer tarnsaform transition duration-300 hover:scale-110 px-3 py-2" onClick={() => {

            emptyJobTitleFormFunct();

          }}>

            <FaEraser/>

          </button>

        </div>

        {generalValidationFunct()}
      
      </section>
    
    </>
    
  );

}

export default JobTitleComp;