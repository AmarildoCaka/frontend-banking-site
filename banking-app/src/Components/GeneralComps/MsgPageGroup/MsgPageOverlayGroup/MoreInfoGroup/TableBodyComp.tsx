import { FaInbox, FaCopy, FaTrash } from "react-icons/fa";

import { useThirdBankStore } from "../../../../../store/thirdBankStore";

import { useMsgPageOverloadLogicHook } from '../MsgPageOverloadLogic';

const TableBodyComp = () => {

  const { opinionMsgList, ratingMessageData } = useThirdBankStore();

  const { copyOpinionMsgFunct, deleteSingleTimestamp, getTimestamp } = useMsgPageOverloadLogicHook();

  return (

    <>
    
      <div className="h-72 overflow-y-auto">

        {(ratingMessageData.length > 0)? (
          
          ratingMessageData.map((msg) => (

            <>
            
              <div key={msg.id} className="timestamp-table-body flex items-center justify-between py-2 px-3">

                <div className="timestamp-table-body-text flex-1 text-center font-medium">{msg.id + 1}</div>

                <div className="w-px bg-gray-400 h-6 mx-4"></div>

                <div className="flex-1 text-center">

                  {opinionMsgList.filter((data) => data.id === msg.id).map((item, idx) => (

                    <>
                  
                      <p key={idx} className="timestamp-table-body-text">{item.email}</p>
                  
                    </>
                  
                  ))}

                </div>

                <div className="w-px bg-gray-400 h-6 mx-4"></div>

                <div className="flex-1 text-center">

                  {opinionMsgList.filter((data) => data.id === msg.id).map((item, idx) => (
                    
                    <>
                    
                      <p key={idx} className="timestamp-table-body-text">{item.rating}</p>
                    
                    </>
                  
                  ))}
                
                </div>

                <div className="w-px bg-gray-400 h-6 mx-4"></div>

                <p className="timestamp-table-body-text flex-1 text-center">{getTimestamp(msg.id)}</p>

                <div className="w-px bg-gray-400 h-6 mx-4"></div>

                <div className="w-24 flex justify-center gap-3">

                  <button type="button" className="timestamp-table-copy-btn cursor-pointer transform transition duration-300 hover:scale-110" onClick={() => {
                  
                    copyOpinionMsgFunct();
                  
                  }}>

                    <FaCopy/>
                  
                  </button>

                  <button type="button" className="timestamp-table-delete-btn font-bold cursor-pointer transform transition duration-300 hover:scale-105" onClick={() => {
                    
                    deleteSingleTimestamp(msg.id);
                  
                  }}>

                    <FaTrash/>
                  
                  </button>
                
                </div>

              </div>

            </>
            
          ))
        
        ):(
        
          <>
          
            <section className="w-full flex place-content-center text-center">

              <div className="flex flex-col w-2xl items-center justify-center p-5 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 mt-20">
              
                <FaInbox className="text-gray-400 dark:text-gray-500 text-2xl mb-2"/>

                <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">No timestamps yet</p>

                <p className="text-gray-400 dark:text-gray-500 text-xs text-center">It is empty for now — submit your rating to see the timestamp!</p>
              
              </div>
            
            </section>
          
          </>

        )}
        
      </div>

    </>

  );

}

export default TableBodyComp;