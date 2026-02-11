import { FaExclamationTriangle } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

import { useDeleteSpecificCardHook } from '../cardQueueLogic';

const CardErasingWarningComp = () => {

  const { setSingleCardErasingState } = useConditionalBankStore();

  const { deleteSpecificCardFunct } = useDeleteSpecificCardHook();

  const confirmationBtnFunct = () => {

    deleteSpecificCardFunct(card.id);

    setSingleCardErasingState(false);

  }

  return (

    <>
    
      <section className="fixed inset-0 bg-opacity-50 flex items-center justify-center backdrop-blur-sm z-50">

        <div className="w-[500px] h-72 flex flex-col justify-between place-items-center gap-1 bg-white shadow-2xl rounded-xl text-center p-4">

          <FaExclamationTriangle className="text-red-500 text-3xl"/>

          <h1 className="text-red-500 font-bold text-2xl mb-4">Are you sure you want to delete this card?</h1>
          
          <p className="text-black font-semibold mb-2">

            Are you sure you want to delete this card? This action cannot be undone. Press OK to permanently remove the card, or Cancel to go back.

          </p>

          <hr className="my-3 w-full border-t-1 border-gray-500"/>

          <div className="flex flex-row justify-evenly place-items-center gap-10">

            <button type="button" className="text-green-600 bg-green-50 hover:green-red-100 border-green-200 cursor-pointer hover:scale-105 transition-transform duration-300 font-bold text-sm border rounded-md px-4 py-1" onClick={() => {

              confirmationBtnFunct();

            }}>Yes</button>
            
            <button type="button" className="text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300 font-bold text-sm border rounded-md px-4 py-1" onClick={() => {

              setSingleCardErasingState(false);

            }}>No</button>

          </div>

        </div>

      </section>
    
    </>

  );

}

export default CardErasingWarningComp;