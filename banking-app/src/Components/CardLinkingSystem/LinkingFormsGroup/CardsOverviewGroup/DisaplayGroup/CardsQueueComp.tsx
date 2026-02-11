import { Layers } from 'lucide-react';

import { useConditionalBankStore } from '../../../../../store/secondBankStore';

import { Card } from '../../../../../store/functInterfaces';

import QueueOverviewComp from './QueueOverviewGroup/QueueOverviewComp';

const CardsQueueComp = () => {

  const { cards, setSelectedCardDisplay, setCardsDisplayState, cardsDisplayState } = useConditionalBankStore();

  const toggleQueue = () => {

    setCardsDisplayState(!cardsDisplayState);

    setSelectedCardDisplay(null);

  }

  const selectCard = (card: Card) => {
    
    setSelectedCardDisplay(card);

    setCardsDisplayState(false);

  }

  return (

    <>
    
      <section className="">

        {(cards.length > 0) && (

          <>

            <section>

              <div className="flex flex-row place-items-center justify-between">
            
                <section className='flex flex-row justify-evenly gap-3'>

                  <div className='flex justify-evenly gap-3'>

                    <Layers size={24} className="text-black"/>

                    <h1 className="text-xl font-semibold text-black">Card Queue</h1>

                  </div>

                  <div className="border-l-1 border-gray-500 m-1"/>

                  <p className="bg-blue-100 text-blue-800 px-2 py-1 font-semibold rounded-md text-right text-sm">{cards.length} card/s</p>

                </section>

                <button type='button' className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 font-semibold rounded-md shadow-md transform transition duration-300 cursor-pointer hover:scale-105" onClick={() => {

                  toggleQueue();

                }}>View in list</button>

              </div>

              <hr className="border-t-1 border-gray-600 w-full my-4"/>
            
              <div className="flex justify-center items-center min-h-80 relative px-8">
            
                <section className="relative h-48 w-full max-w-6xl">

                  {cards.slice(0, 6).map((card, index) => (

                    <div key={card.id} className="absolute w-72 h-36 rounded-xl shadow-xl bg-gradient-to-r from-blue-700 to-indigo-900 text-white cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-2xl" style={{ left: "50%", top: "50%", transform: (cards.length === 1)? `translate(-50%, -50%) translateX(${index * 100}px)`:(cards.length > 1)? `translate(-50%, -50%) translateX(${(index - 2.5) * 55}px) translateY(${-index * 20}px) rotateZ(${3 - index * 1}deg)`: `translate(-50%, -50%) translateX(${(index - 2.5) * 55}px) translateY(${-index * 20}px) rotateZ(${3 - index * 1}deg)`, zIndex: cards.length - index }} onClick={(e) => {

                      e.stopPropagation();
                      
                      selectCard(card);
                    
                    }}>

                      <section className="p-4 h-full flex flex-col justify-between relative">
                                            
                        <div className="flex items-center justify-between">
                      
                          <div className="text-xs text-gray-200 font-mono tracking-wider">CARD #{index + 1}</div>
                      
                          <div className="w-8 h-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-sm opacity-80"></div>
                      
                        </div>
                      
                        <div className="flex-1 flex items-center">
                      
                          <h4 className="font-semibold text-sm text-white truncate leading-tight">{card.brand.toUpperCase()}</h4>
                      
                        </div>
                      
                        <div className="flex justify-between items-end text-xs">
                      
                          <section className="flex-1">
                      
                            <p className="text-gray-300 text-xs mb-1">CONTENT</p>
                      
                            <p className="text-xs font-medium truncate pr-2">{(card.firstNameData.length > 30)? `${card.firstNameData.substring(0, 30)}...`: card.firstNameData}</p>

                          </section>
                      
                          <section className="text-right">
                      
                            <p className="text-gray-300 text-xs mb-1">Expires</p>
                      
                            <p className="text-xs font-mono">{card.expiryData}</p>
                      
                          </section>
                      
                        </div>
                      
                      </section>
 
                    </div>
                  
                  ))}
                  
                </section>
              
              </div>

            </section>

          </>

        )}

      </section>

      <QueueOverviewComp/>
    
    </>

  );

}

export default CardsQueueComp;