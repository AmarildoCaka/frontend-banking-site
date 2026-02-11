import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

import { useCardLinkingSystemHook } from "../cardLinkingLogic";

import FirstNameFormComp from './FirstNameForm';
import LastNameFormComp from './LastNameForm';
import CardNumberFormComp from './CardNumberForm';
import CardExpiryDateComp from './CardExpiryDate';
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const CardLinkingFormComp = () => {

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { activeTab } = useConditionalBankStore();

  const cardLinkingFunctData = useCardLinkingSystemHook();

  return (

    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      {(activeTab === "createCard") && (

        <>
        
          <section className="flex flex-col jsutify-center place-items-center p-1 mt-23">
            
            <div className="w-full p-1">

              <h1 className="text-black text-2xl font-bold text-left mb-6">Link Your Card</h1>
            
            </div>

            <div className="bg-white w-[800px] rounded-md shadow-md p-3 h-110 overflow-y-auto">

              <section className="flex flex-col gap-1 p-1">

                <FirstNameFormComp/>

                <LastNameFormComp/>

                <hr className="border-t border-gray-600 w-[700px] m-4"/>

                <CardNumberFormComp/>

                <CardExpiryDateComp/>

              </section>

              <section className="w-full text-center p-1">

                <button type="button" className="text-white font-bold text-center bg-indigo-500 w-70 rounded-md cursor-pointer transform tarnsition duration-300 hover:scale-103 hover:bg-indigo-600 mt-5 py-2" onClick={() => {
                  
                  cardLinkingFunctData();
                
                }}>Add Card</button>

              </section>

            </div>

          </section>
        
        </>
      
      )}
    
    </>
  
  );

};

export default CardLinkingFormComp;