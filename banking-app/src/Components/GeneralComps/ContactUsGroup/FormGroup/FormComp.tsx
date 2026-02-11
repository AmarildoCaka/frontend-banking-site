import { FaInfoCircle } from "react-icons/fa";

import { useThirdBankStore } from "../../../../store/thirdBankStore";

import { useGeneralLogicHook } from "../generalContactUsLogic";

import FirstNameComp from './FirstNameComp';
import LastNameComp from './LastNameComp';
import EmailComp from './EmailComp';
import DescriptionComp from './DescriptionComp';
import StarRatingComp from "../StarRatingComp";
import ContactUsOverLoadComp from '../ContactUsOverloadGroup/ContactUsOverloadComp';

const FormComp = () => {

  const { submitted, errors, isSubmitted, setRatingInfoUnit } = useThirdBankStore();

  const { handleSubmit } = useGeneralLogicHook();

  const responsiveFormLogic = errors.firstName === true || errors.lastName === true || errors.email === true || errors.message === true;

  const submitLogicFunct = () => {

    if(responsiveFormLogic === true)
    {

      return <p className="font-semibold text-center text-red-500 mt-3">Details are missing or invalid. Please review the form and try again.</p>;

    }

    else
    {

      if(submitted)
      {
  
        return <p className="font-semibold text-center text-green-600 mt-3">Your rating has been submitted. Thank you for sharing your feedback!</p>;
  
      }

    }

  }

  return (
    
    <>

      <div className={`rating-form shadow-lg rounded-xl p-5 ${(isSubmitted === true)? 'h-[640px] overflow-y-auto': 'h-[610px]'}`}>
    
        <h1 className="rating-form-text text-black text-xl font-bold dark:text-white mb-5">Leave us your opinion</h1>

        <form onSubmit={handleSubmit}>

          <FirstNameComp/>

          <LastNameComp/>

          <EmailComp/>

          <DescriptionComp/>

          <hr className="rating-form-divider w-full border-t my-1"/>

          <div className="flex flex-row justify-between place-items-center text-left w-full p-1 mb-1">

            <h1 className="rating-form-text text-lg font-semibold">How would you rate your experience with us?</h1>

            <div className="flex text-center gap-2 p-1">

              <div className="rating-form-info-divider w-px h-5"></div>

              <button type="button" className="rating-form-info-btn cursor-pointer transform transition duration-300 hover:text-indigo-500 hover:scale-105 p-1" onClick={() => {

                setRatingInfoUnit(true);

              }}>

                <FaInfoCircle/>

              </button>

            </div>

          </div>

          <StarRatingComp/>

          <button type="submit" className="rating-form-submit-btn text-white font-bold text-lg w-full rounded-md cursor-pointer transform transition duration-300 hover:bg-indigo-600 hover:scale-105 mt-4 p-2">Submit your opinion</button>

          <p className="rating-form-text text-sm text-center mt-2">Your feedback helps us improve</p>

          {submitLogicFunct()}

        </form>

        <ContactUsOverLoadComp/>

      </div>

    </>

  );

};

export default FormComp;