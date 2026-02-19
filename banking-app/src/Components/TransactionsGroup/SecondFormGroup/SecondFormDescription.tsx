import { FaInfoCircle, FaCopy, FaEraser } from "react-icons/fa";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import {
  useDescriptionValidationFunctHook,
  useCopyMechanismFunctHook,
  useEmptyDescriptionFieldFunctHook,
  useDescriptionTextLengthCheckHook,
} from "../GeneralLogicComp/generalTransactionLogic";

import CautionComp from "../CautionComp";
import SubmissionBtnComp from "./SubmissionBtn";

const SecondFormDescriptionComp = () => {
  const {
    transactionDescription,
    setTransactionDescription,
    descriptionInformation,
    setDescriptionInformation,
    fieldErrors,
  } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const { copyMechanismFunct } = useCopyMechanismFunctHook();

  const { emptyDescriptionFieldFunct } = useEmptyDescriptionFieldFunctHook();

  const descriptionValidationFunctHookData = useDescriptionValidationFunctHook;

  const descriptionTextLengthCheckHook = useDescriptionTextLengthCheckHook;

  const setFormValueFunct = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {

    if(/^[a-zA-Z0-9 ]*$/.test(value))
    {
    
      setter(value);
    
    }
  
  };

  return (
    <>
      <section>
        <input
          type="text"
          value={transactionDescription}
          maxLength={100}
          className={`transaction-form w-full rounded-md border px-5 py-2 pr-10 text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 transition duration-300 ${theme === "light" || theme === "system" ? "border-black" : theme === "dark" ? "border-white" : "border-black"} ${fieldErrors.transactionDescription ? "border border-red-500" : "border border-black"} transform transition duration-300 hover:scale-101`}
          placeholder="Description here (optional)..."
          onChange={(e) => {

            setFormValueFunct(e.target.value, setTransactionDescription);

            descriptionTextLengthCheckHook();
          
          }}
        />

        <div className="absolute right-3 top-5 -translate-y-1/2 flex flex-row justify-center place-items-center text-center gap-2">
          <button
            type="button"
            className="transaction-form-btn font-bold text-center cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => {
              copyMechanismFunct();
            }}
          >
            <FaCopy />
          </button>

          <div
            className={`w-[1px] h-4 ${theme === "light" || theme === "system" ? "bg-black" : theme === "dark" ? "bg-white" : "bg-black"}`}
          />

          <button
            type="button"
            className="transaction-form-btn font-bold text-center cursor-pointer transform transition duration-300 hover:scale-105 p-1"
            onClick={() => {
              emptyDescriptionFieldFunct();
            }}
          >
            <FaEraser />
          </button>

          <div
            className={`w-[1px] h-4 ${theme === "light" || theme === "system" ? "bg-black" : theme === "dark" ? "bg-white" : "bg-black"}`}
          />

          <button
            type="button"
            className="transaction-form-btn font-bold text-center cursor-pointer transform transition duration-300 hover:scale-105 p-1"
            onClick={() => {
              setDescriptionInformation(true);
            }}
          >
            <FaInfoCircle />
          </button>
        </div>

        {descriptionValidationFunctHookData()}

        {descriptionInformation && (
          <>
            <CautionComp />
          </>
        )}

        <SubmissionBtnComp />
      </section>
    </>
  );
};

export default SecondFormDescriptionComp;
