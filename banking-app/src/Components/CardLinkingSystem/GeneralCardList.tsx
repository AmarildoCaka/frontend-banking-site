import { useBankStore } from "../../store/useBankStore";

import { useConditionalBankStore } from "../../store/secondBankStore";

import CardsListComp from "./CardListGroup/CardsList";
import TopAlertComp from "../GeneralLogic/TopAlertComp";

const GeneralCardListComp = () => {

  const { showPopUpMessage, alertVisibility, alertType, alertMessage } = useBankStore();

  const { activeTab, cards, setCards } = useConditionalBankStore();

  const cardListDeletingFunct = () => {

    if(cards.length > 0)
    {

      setCards([]);

      showPopUpMessage('Card history deleted successfully', 'success');

    }

    else
    {

      return null;

    }

  }

  return (
  
    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      {(activeTab === "cardCreationHistory") && (
        
        <>

          <section>

            <h1 className="text-black text-2xl font-bold text-left mb-6">Linked Card History</h1>

            <div className="flex flex-col justify-evenly place-items-center p-1 h-110 overflow-y-auto">

              <div className="flex justify-center items-center bg-white w-[800px] rounded-md shadow-md h-[430px] p-3">
                
                {(cards.length === 0)? (

                  <>
                
                    <p className="text-gray-500 font-semibold text-center">No cards linked yet.</p>
                
                  </>
                
                ):(

                  <>
                  
                    <CardsListComp/>
                  
                  </>
                
                )}
              
              </div>

              <div className="flex flex-row justify-between place-items-center gap-150 mt-1 text-center">

                <button type="button" className={`${(cards.length > 0)? 'text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300':(cards.length === 0)? 'text-gray-400 bg-gray-50 border-gray-200 cursor-not-allowed': 'text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300'} font-bold text-sm border rounded-lg px-4 py-2`} onClick={() => {

                  cardListDeletingFunct();

                }}>Delete All</button>

                <p className="text-black font-bold text-md mt-6">
                  
                  Total Cards:
                  
                  {" "}

                  <span className="text-indigo-500 font-bold">{cards.length}</span>
                  
                </p>

              </div>

            </div>

          </section>
        
        </>
      
      )}
    
    </>
    
  );

};

export default GeneralCardListComp;