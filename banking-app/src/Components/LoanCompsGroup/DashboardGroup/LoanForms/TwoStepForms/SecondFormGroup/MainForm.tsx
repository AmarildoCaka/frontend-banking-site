import { FaEraser, FaRegCopy } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

import { useLoanFormTextLimitHook } from '../../../../GeneralLogicComps/GeneralLoanLogic';

const MainFormComp = () => {

  const { loanForm, setLoanForm, secondStepFormFieldErrors } = useConditionalBankStore();

  const { copyDescriptionFunct, emptyDescriptionFunct } = useLoanFormTextLimitHook();

  const loanPurposeGeneralValidationFunct = () => {

    if(loanForm === "" && secondStepFormFieldErrors.loanPurpose === true)
    {

      return <p className="text-red-500 font-semibold text-md text-left mt-1">Empty loan description form, fill the form first</p>;

    }

    else if(secondStepFormFieldErrors.loanPurpose === false)
    {

      if(loanForm.length === 100)
      {
        
        return <p className="text-red-500 font-semibold text-md text-left mt-1">Cannot have more than 100 characters</p>;
      
      }
      
      else if(loanForm.length < 100 || loanForm.length === 0)
      {

        return <p className="text-green-500 font-semibold text-md text-left mt-1">Maximum character limit is 100</p>;

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

  return (

    <>
    
      <div className="mb-3 p-3 bg-gray-50 rounded-xl">
              
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Loan Purpose</h3>
              
        <p className="text-gray-600 text-sm mb-2 font-bold">Describe why you take this loan</p>

        <div className="relative w-full">
    
          <input type="text" value={loanForm} maxLength={100} className={`w-full text-gray-700 font-medium border-2 rounded-md focus:border-indigo-500 focus:outline-none transition-colors pr-20 p-2 ${(secondStepFormFieldErrors.loanPurpose === true)? 'border-red-500': 'border-gray-300'}`} placeholder="Why I take this loan?" onChange={(e) => {
          
            setLoanForm(e.target.value);

          }}/>

          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">

            <button type="button" className="text-black transform transition duration-300 hover:scale-105 p-1" onClick={() => {
              
              copyDescriptionFunct();

            }}>
              
              <FaRegCopy className="text-black w-5 h-5"/>
            
            </button>

            <div className="w-px h-5 bg-gray-400"></div>

            <button type="button" className="text-black transform transition duration-300 hover:scale-105 p-1" onClick={() => {

              emptyDescriptionFunct();
            
            }}>

              <FaEraser className="text-black w-5 h-5"/>
          
            </button>

          </div>

        </div>

        <div className="flex flex-row justify-between">

          {loanPurposeGeneralValidationFunct()}

          <p className="text-gray-400 text-xs text-end mt-2">{loanForm.length} / 100</p>

        </div>
                            
      </div>
    
    </>

  );

}

export default MainFormComp;