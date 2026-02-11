import { useBankStore } from "../../../store/useBankStore";

import { useThirdBankStore } from "../../../store/thirdBankStore";

import { useGeneralMsgPageLogicHook } from './generalMsgPageLogic';

import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const BottomBtnComp = () => {
  
  const { showPopUpMessage, alertVisibility, alertType, alertMessage } = useBankStore();

  const { opinionMsgList, setGeneratedIdNum } = useThirdBankStore();

  const { opinionMsgDeletionFunct, ratingMsgTimeDeletionFunct } = useGeneralMsgPageLogicHook();

  const generalRatingListDeletionFunct = () => {

    try
    {

      opinionMsgDeletionFunct();

      ratingMsgTimeDeletionFunct();

      showPopUpMessage('Opinion list deleted successfully', 'success');

    }
    
    catch(error)
    {
      
      showPopUpMessage('Cannot delete opinion messages from the opinion list', 'error');

      console.log('Error: ', error);

    }

  }

  return (
    
    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mx-auto mt-4 gap-4">

        <button type="button" className={`${(opinionMsgList.length > 0)? 'text-red-600 bg-red-50 hover:bg-red-100 border-red-200 transition transform duration-300 hover:scale-105 cursor-pointer':(opinionMsgList.length === 0)? 'text-gray-600 bg-gray-50 border-gray-200 cursor-not-allowed': 'text-red-600 bg-red-50 hover:bg-red-100 border-red-200 transition transform duration-300 hover:scale-105 cursor-pointer'} font-bold text-sm border w-32 rounded-lg px-3 py-2`} onClick={() => {

          generalRatingListDeletionFunct();

          setGeneratedIdNum(0);

        }}>Delete All</button>

        <p className="rating-total-text font-bold text-gray-800 dark:text-gray-200 text-right text-sm">

          Total opinions: {" "}
          
          <span className="text-indigo-500 font-bold">{opinionMsgList.length}</span>

        </p>

      </div>
    
    </>

  );

}

export default BottomBtnComp;