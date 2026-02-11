import { FaStar, FaEdit } from "react-icons/fa";

import { MessageSquare } from "lucide-react";

import { useThirdBankStore } from "../../../../../store/thirdBankStore";

import FilledListOverlayComp from './FilledListOverlay/FilledListOverlayComp';

interface msgBodyCompInterface {

  indexData: number;

  idData: number;

  messageData: string;

  ratingData: number;

}

const MsgBodyComp: React.FC<msgBodyCompInterface> = ({ indexData, idData, messageData, ratingData }) => {

  const { ratingStarList, setMsgEditUnit, setEditText, setEditingId } = useThirdBankStore();

  const handleEdit = (id: number, text: string) => {

    setEditingId(id);
    
    setEditText(text);
  
  };

  return (

    <>
    
      <div className="flex flex-row justify-between place-items-center text-center p-1">

        <div className="px-6 py-4">

          <div className="flex items-start gap-3 text-left">

            <MessageSquare className="rating-msg-body-icon w-5 h-5 mt-0.5 flex-shrink-0"/>

            <div className="flex-1">

              <div className="flex flex-row justify-center place-items-center gap-2 text-center p-1">

                <p className="rating-msg-body-text text-sm font-medium mb-1">Message</p>

                <button type="button" className="rating-msg-body-btn text-semibold cursor-pointer transform transition duration-300 hover:scale-110" onClick={() => {

                  handleEdit(idData, messageData);

                  setMsgEditUnit(true);

                }}>

                  <FaEdit/>

                </button>

              </div>

              <p className="rating-msg-body-message-data leading-relaxed">{messageData}</p>

            </div>

          </div>

        </div>

        <div className="px-6">

          <div className="flex items-start gap-3">

            <div className="flex flx-row justify-center place-items-center gap-2">

              <p className="rating-msg-body-rated-text font-semibold mb-6">Rated:</p>

              <div className="flex-1 text-right">

                <div className="flex flex-row text-right space-x-1 items-center">
          
                  {ratingStarList.map((star) => (
          
                    <>
                    
                      <FaStar key={star} size={25} className={`transition-transform duration-200 ${(ratingData >= star)? "text-yellow-400 scale-125": "text-gray-300"}`}/>
                  
                    </>

                  ))}

                </div>

                <p className="rating-msg-body-stars-color text-gray-700 font-semibold text-center leading-relaxed">({ratingData} {(ratingData === 1)? "star": "stars"})</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      <FilledListOverlayComp indexData={indexData}/>

    </>

  );

}

export default MsgBodyComp;