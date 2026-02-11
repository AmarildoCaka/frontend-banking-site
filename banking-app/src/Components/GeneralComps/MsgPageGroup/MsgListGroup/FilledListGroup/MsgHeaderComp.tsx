import { FaCopy, FaTrash } from "react-icons/fa";

import { User } from "lucide-react";

import { useBankStore } from "../../../../../store/useBankStore";

import { useThirdBankStore } from "../../../../../store/thirdBankStore";

import { useGeneralMsgPageLogicHook } from '../../generalMsgPageLogic';

import MsgPageOverlayComp from '../../MsgPageOverlayGroup/MsgPageOverlayComp';

interface msgHeaderCompInterface {

  indexData: number;

  idData: number;

  firstNameData: string;

  lastNameData: string;

};

const MsgHeaderComp: React.FC<msgHeaderCompInterface> = ({ indexData, idData, firstNameData, lastNameData }) => {

  const { showPopUpMessage } = useBankStore();

  const { opinionMsgList, setOpinionMsgList } = useThirdBankStore();

  const { copyOpinionMsgFunct } = useGeneralMsgPageLogicHook();

  const deleteSingleListElement = (id: number) => {

    const index = opinionMsgList.findIndex((unit) => unit.id === id);

    if(index !== -1)
    {
    
      setOpinionMsgList(opinionMsgList.filter((unit) => unit.id !== id));

      showPopUpMessage(`Opinion number #${index + 1} deleted successfully`, "success");
    
    }

  };

  return (

    <>

      <div className="rating-msg-header-wrapper flex items-center justify-between px-6 py-3 border-b">
                      
        <div className="flex items-center gap-3">

          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-semibold text-sm">{indexData + 1}</div>

          <div className="flex items-center gap-2">

            <User className="rating-msg-user-icon w-4 h-4"/>

            <h3 className="rating-msg-info text-lg font-semibold text-gray-900">{firstNameData} {lastNameData}</h3>

          </div>

          <div className="rating-msg-division w-px h-5"></div>

        </div>

        <div className="flex items-center gap-x-3">

          <button type="button" className="rating-msg-copy-btn cursor-pointer transform transition duration-300 hover:scale-110" onClick={() => {
            
            copyOpinionMsgFunct();
          
          }}>
            
            <FaCopy/>

          </button>

          <div className="rating-msg-division h-6 w-px"></div>

          <button type="button" className="rating-msg-delete-btn font-bold cursor-pointer transform transition duration-300 hover:scale-105" onClick={() => {
            
            deleteSingleListElement(idData);
          
          }}>
            
            <FaTrash/>
          
          </button>
        
        </div>

        <MsgPageOverlayComp/>

      </div>
    
    </>
  
  );

}

export default MsgHeaderComp;