import { FaInfoCircle, FaCopy, FaEraser } from "react-icons/fa";

import { useConditionalBankStore } from "../../../store/secondBankStore";

import {
  useDescriptionValidationFunctHook,
  useCopyMechanismFunctHook,
  useEmptyDescriptionFieldFunctHook,
  useDescriptionTextLengthCheckHook,
} from "../GeneralLogicComp/generalTransactionLogic";

import CautionComp from "../CautionComp";
import SubmissionBtnComp from "./SubmissionBtn";

const SecondFormDescriptionComp = () => {

  const { transactionDescription, setTransactionDescription, descriptionInformation, setDescriptionInformation, fieldErrors } = useConditionalBankStore();

  const { copyMechanismFunct } = useCopyMechanismFunctHook();

  const { emptyDescriptionFieldFunct } = useEmptyDescriptionFieldFunctHook();

  const descriptionValidationFunctHookData = useDescriptionValidationFunctHook;

  const descriptionTextLengthCheckHook = useDescriptionTextLengthCheckHook;

  return (

    <>
    
      <section>
    
        <input type="text" value={transactionDescription} maxLength={100} className={`w-[700px] rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 px-5 py-2 text-gray-900 text-base font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06)] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 placeholder-gray-400 transition-all duration-200 ease-in-out ${(fieldErrors.transactionDescription)? "border border-red-500": "border border-black"} transform transition duration-300 hover:scale-101`} placeholder="Description here (optional)..." onChange={(e) => {
          
          setTransactionDescription(e.target.value);

          descriptionTextLengthCheckHook();
        
        }}/>

        <div className="absolute right-3 top-5 -translate-y-1/2 flex flex-row justify-center place-items-center text-center gap-2">

          <div className="group relative inline-block">

            <button type="button" className="text-black font-bold text-center cursor-pointer transform transition duration-300 hover:scale-105" onClick={() => {

              copyMechanismFunct();
            
            }}>

              <FaCopy/>
            
            </button>

            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white text-nowrap bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Copy</span>

          </div>

          <div className="w-[1px] h-4 bg-black"/>

          <div className="group relative inline-block">

            <button type="button" className="text-black font-bold text-center cursor-pointer transform transition duration-300 hover:scale-105 p-1" onClick={() => {
              
              emptyDescriptionFieldFunct();
            
            }}>

              <FaEraser/>

            </button>

            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white text-nowrap bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Empty Field</span>

          </div>

          <div className="w-[1px] h-4 bg-black"/>

          <div className="group relative inline-block">

            <button type="button" className="text-black font-bold text-center cursor-pointer transform transition duration-300 hover:scale-105 p-1" onClick={() => {

              setDescriptionInformation(true);
            
            }}>

              <FaInfoCircle/>
            
            </button>

            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white text-nowrap bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Info</span>
          
          </div>

        </div>

        {descriptionValidationFunctHookData()}

        {(descriptionInformation) && (

          <>
          
            <CautionComp/>
          
          </>
        
        )}

        <SubmissionBtnComp/>
      
      </section>
    </>
    
  );

};

export default SecondFormDescriptionComp;