import { useBankStore } from "../../../../../store/useBankStore";

import { useThirdBankStore } from "../../../../../store/thirdBankStore";

import MsgHeaderComp from './MsgHeaderComp';
import MsgBodyComp from './MsgBodyComp';
import MsgFooterComp from './MsgFooterComp';
import TopAlertComp from "../../../../GeneralLogic/TopAlertComp";

const FilledListComp = () => {

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { opinionMsgList } = useThirdBankStore();

  return (

    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <div className="max-h-[600px] overflow-y-auto space-y-2 mt-10">

        {opinionMsgList.map((element, index) => (

          <>

            <div key={element.id} className="w-full flex justify-center">

              <div className="w-full max-w-4xl">

                <div className="rating-msg-wrapper border rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  
                  <MsgHeaderComp indexData={index} idData={element.id} firstNameData={element.firstName} lastNameData={element.lastName}/>

                  <MsgBodyComp indexData={index + 1} idData={element.id} messageData={element.message} ratingData={element.rating}/>

                  <MsgFooterComp firstNameData={element.firstName} lastNameData={element.lastName} emailData={element.email}/>
                
                </div>

              </div>

            </div>

          </>

        ))}
      
      </div>

    </>

  );

}

export default FilledListComp;