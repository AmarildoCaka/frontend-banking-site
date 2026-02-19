import { FaEraser, FaRegCopy } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../../../../store/ThirdGroup/thirdBankStore";

import { useLoanFormTextLimitHook } from "../../../../GeneralLogicComps/GeneralLoanLogic";

const MainFormComp = () => {
  const { loanForm, setLoanForm, secondStepFormFieldErrors } =
    useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const { copyDescriptionFunct, emptyDescriptionFunct } =
    useLoanFormTextLimitHook();

  const loanPurposeGeneralValidationFunct = () => {
    if (loanForm === "" && secondStepFormFieldErrors.loanPurpose === true) {
      return (
        <p className="text-red-500 font-semibold text-md text-left mt-1">
          Empty loan description form, fill the form first
        </p>
      );
    } else if (secondStepFormFieldErrors.loanPurpose === false) {
      if (loanForm.length === 100) {
        return (
          <p className="text-red-500 font-semibold text-md text-left mt-1">
            Cannot have more than 100 characters
          </p>
        );
      } else if (loanForm.length < 100 || loanForm.length === 0) {
        return (
          <p className="text-green-500 font-semibold text-md text-left mt-1">
            Maximum character limit is 100
          </p>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  const setFormValueFunct = (value: string) => {

    if(/^[a-zA-Z0-9 ]*$/.test(value))
    {

      setLoanForm(value);
    
    }

  };

  return (
    <>
      <div className="loan-second-application-form-inner-wrapper mb-3 p-3 rounded-md">
        <h3 className="loan-second-application-form-text text-lg font-semibold mb-3">
          Loan Purpose
        </h3>

        <p className="loan-second-application-form-text text-sm mb-2 font-bold">
          Describe why you take this loan
        </p>

        <div className="relative w-full">
          <input
            type="text"
            value={loanForm}
            maxLength={100}
            className={`loan-second-application-form w-full font-medium border-2 rounded-md focus:border-indigo-500 focus:outline-none transition-colors pr-20 p-2 ${secondStepFormFieldErrors.loanPurpose === true ? "border-red-500" : "border-gray-300"}`}
            placeholder="Why I take this loan?"
            onChange={(e) => {
            
              setFormValueFunct(e.target.value);

            }}/>

          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <button
              type="button"
              className="loan-second-application-form-function-btn transform cursor-pointer transition duration-300 hover:scale-110 p-1"
              onClick={() => {
                copyDescriptionFunct();
              }}
            >
              <FaRegCopy className="w-5 h-5" />
            </button>

            <div className="w-px h-5 bg-gray-400"></div>

            <button
              type="button"
              className="loan-second-application-form-function-btn transform cursor-pointer transition duration-300 hover:scale-110 p-1"
              onClick={() => {
                emptyDescriptionFunct();
              }}
            >
              <FaEraser className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-between">
          {loanPurposeGeneralValidationFunct()}

          <p
            className={`text-xs font-semibold text-end mt-2 ${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"}`}
          >
            {loanForm.length} / 100
          </p>
        </div>
      </div>
    </>
  );
};

export default MainFormComp;
