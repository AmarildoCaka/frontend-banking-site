import { FaCreditCard, FaUnlock, FaLock, FaTrashAlt } from "react-icons/fa";

import { Card } from '../../../store/functInterfaces';

import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

const CardListElementComp = () => {

  const { showPopUpMessage } = useBankStore();

  const { cardsHistory, setSelectedCard, setShowCardDetails, setCardsHistory } = useConditionalBankStore();

  const openCardDetails = (card: Card) => {
  
    setSelectedCard(card);

    setShowCardDetails(true);
  
  };

  const toggleLockCard = (id: number) => {
  
    setCardsHistory(cardsHistory.map((card) => 
      
      (card.id === id)? { ...card, locked: !card.locked }: card
  
    ));
  
  };

  const handleRemoveCard = (id: number) => {
    
    const index = cardsHistory.findIndex((card) => card.id === id);
  
    if(index !== -1)
    {

      setCardsHistory(cardsHistory.filter((card) => card.id !== id));
  
      showPopUpMessage(`Card number #${index + 1} deleted successfully`, 'success');
  
    }
  
  };  

  return (

    <>
    
      {cardsHistory.map((card, index) => (
        
        <li key={card.id} className="flex justify-between items-center bg-gray-100 rounded-lg p-4">

          <span className="font-bold">{index + 1}</span>

          <span className="flex flex-row justify-between place-items-center gap-2 text-gray-700">
            
            <FaCreditCard className="text-indigo-400"/>
            
            {card.brand} •••• {card.last4} (Exp: {card.expiryData})
          
          </span>

          <div className="flex flex-row justify-between place-items-center text-center gap-2">

            <div>
            
              <button type="button" className='rounded-lg shadow-lg px-3 py-1 text-white font-bold bg-indigo-500 cursor-pointer transform transition duration-300 hover:scale-103 hover:bg-indigo-40' onClick={() => {
                  
                openCardDetails(card);
              
              }}>View Details</button>
            
            </div>

            <div className="border-l border-gray-600 h-5 mx-1"></div>

            <div>
            
              <button type="button" className={`text-lg cursor-pointer transform transition duration-300 hover:scale-121 ${(card.locked)? 'text-green-500': 'text-red-500'}`} onClick={() => {
                  
                toggleLockCard(card.id);

              }}>{(card.locked)? <FaUnlock/>: <FaLock/>}</button>
            
            </div>

            <div className="border-l border-gray-600 h-5 mx-1"></div>

            <div>
            
              <button type="button" className="text-red-500 text-lg cursor-pointer transform transition duration-300 hover:scale-121" onClick={() => {

                handleRemoveCard(card.id);
              
              }}>

                <FaTrashAlt/>

              </button>

            </div>

          </div>

        </li>

      ))}
    
    </>

  );

}

export default CardListElementComp;