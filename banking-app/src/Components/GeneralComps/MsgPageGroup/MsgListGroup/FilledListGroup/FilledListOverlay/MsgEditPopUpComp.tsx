import { FaCheck, FaTimes } from "react-icons/fa";

import { useBankStore } from "../../../../../../store/useBankStore";

import { useThirdBankStore } from "../../../../../../store/thirdBankStore";

import TopAlertComp from "../../../../../GeneralLogic/TopAlertComp";

const MsgEditPopUpComp = () => {

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { opinionMsgList, setMsgEditUnit, editingId, setEditingId, editText, setEditText, setMsgAlertPopUpUnit } = useThirdBankStore();

  const messageToEdit = opinionMsgList.find((msg) => msg.id === editingId);
  
  if(!messageToEdit)
  {

    return null;

  }

  return (

    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="fixed flex flex-col justify-center place-items-center z-50 inset-0 bg-opacity-50 backdrop-blur-sm">
        
        <div className="rating-body-msg-edit-wrapper shadow-lg rounded-lg p-5 max-w-lg mx-auto mt-10 relative w-[650px]">

          <div className="w-full text-right">
        
            <button type="button" className="exit-btn cursor-pointer transform transition duration-300 hover:scale-110" onClick={() => {
              
              setMsgEditUnit(false);
              
              setEditingId(null);
            
            }}>

              <FaTimes/>
            
            </button>
          
          </div>

          <h2 className="rating-body-msg-edit-header text-2xl font-bold mb-5">Edit this message</h2>

          <div className="space-y-3">

            <div className="rating-body-msg-edit-border flex justify-between items-center border rounded-lg p-3">
            
              <input type="text" value={editText} className="rating-body-msg-edit-form border rounded-md p-2 w-full mr-2" autoFocus onChange={(e) => {

                setEditText(e.target.value);

              }}/>

              <button type="button" className="ml-2 p-2 text-green-600 hover:text-white hover:bg-green-600 rounded-full cursor-pointer transition" onClick={() => {

                setMsgAlertPopUpUnit(true);

              }}>

                <FaCheck/>
              
              </button>
            
            </div>
          
          </div>

        </div>

      </section>

    </>

  );

}

export default MsgEditPopUpComp;