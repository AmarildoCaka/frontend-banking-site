// import { ListOrdered } from 'lucide-react';

// import { useBankStore } from '../../../../../store/useBankStore';

// import { useConditionalBankStore } from "../../../../../store/secondBankStore";

// // import { useDeleteSpecificCardHook } from './cardQueueLogic';

// import QueueOverviewComp from './QueueOverviewGroup/QueueOverviewComp';

// const CardsListComp = () => {

//   const { showPopUpMessage } = useBankStore();

//   const { cards, setCards, setCardsDisplayState, setSingleCardErasingState } = useConditionalBankStore();

//   // const { deleteSpecificCardFunct } = useDeleteSpecificCardHook();

//   const generalCardErasingFunct = () => {

//     setCards([]);

//     showPopUpMessage('All your cards are erased successfully', 'success');

//   }

//   return (

//     <>
    
//       <div>
                
//         <div className="flex flex-row place-items-center justify-between">

//           <section className='flex flex-row justify-evenly gap-3'>

//             <ListOrdered size={24} className="text-black"/>

//             <h1 className="text-xl font-semibold text-black">Card List</h1>

//           </section>
      
//           <button type='button' className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 font-semibold rounded-md shadow-md transform transition duration-300 cursor-pointer hover:scale-105" onClick={() => {

//             setCardsDisplayState(false);

//           }}>
            
//             View in Queue
          
//           </button>

//         </div>

//         <hr className="border-t-1 border-gray-600 w-full my-4"/>
      
//         <div className="flex flex-row justify-between place-items-center p-4">

//           <p className="font-bold">Index</p>

//           <div className="border-l border-gray-500 h-6 mx-2"/>

//           <p className="font-bold">Card Brand</p>

//           <div className="border-l border-gray-500 h-6 mx-2"/>

//           <p className="font-bold">First Name</p>

//           <div className="border-l border-gray-500 h-6 mx-2"/>

//           <p className="font-bold">Last Name</p>

//           <div className="border-l border-gray-500 h-6 mx-2"/>

//           <p className="font-bold">Expiry Date</p>

//           <div className="border-l border-gray-500 h-6 mx-2"/>

//           <p className="font-bold">Expiry Date</p>

//           <div className="border-l border-gray-500 h-6 mx-2"/>

//           <p className="font-bold">Actions</p>

//         </div>

//         <div className="bg-white rounded-lg shadow-md max-h-96 overflow-y-auto">

//           {cards.map((card, index) => (
          
//             <div key={card.id} className="flex flex-row justify-between place-items-center p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">

//               <p className="font-semibold">#{index + 1}</p>

//               <h3 className="font-semibold">{card.brand}</h3>

//               <p className="font-semibold">{card.firstNameData}</p>

//               <p className="font-semibold">{card.lastNameData}</p>

//               <p className="font-semibold">{card.cardNumberData}</p>

//               <p className="font-semibold">{card.expiryData}</p>
          
//               <button type='button' className='text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300 font-bold text-sm border rounded-lg px-4 py-2' onClick={() => {

//                 setSingleCardErasingState(true);

//                 // deleteSpecificCardFunct(card.id);

//               }}>Erase</button>

//             </div>

//           ))}

//         </div>
    
//         <div className="flex justify-between w-full text-right mt-3 p-1">

//           <button type="button" className='text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300 font-bold text-sm border rounded-lg px-4 py-2' onClick={() => {

//             generalCardErasingFunct();

//           }}>Erase all</button>

//           <p className="font-bold">
            
//             Total:

//             {" "}

//             <span className="text-indigo-500 font-bold">{cards.length}</span>
            
//           </p>

//         </div>

//       </div>
    
//       <QueueOverviewComp/>

//     </>

//   );

// }

// export default CardsListComp;














import { ListOrdered } from 'lucide-react';
import { useBankStore } from '../../../../../store/useBankStore';
import { useConditionalBankStore } from "../../../../../store/secondBankStore";
import QueueOverviewComp from './QueueOverviewGroup/QueueOverviewComp';

const CardsListComp = () => {
  const { showPopUpMessage } = useBankStore();
  const { cards, setCards, setCardsDisplayState, setSingleCardErasingState } = useConditionalBankStore();

  const generalCardErasingFunct = () => {
    setCards([]);
    showPopUpMessage('All your cards are erased successfully', 'success');
  }

  return (
    <>
      <div className="min-h-screen w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-5 2xl:px-10">
        {/* Header Section */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6">
            <section className='flex flex-row items-center gap-2 sm:gap-3'>
              <ListOrdered size={20} className="text-black sm:w-6 sm:h-6 md:w-7 md:h-7"/>
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black">Card List</h1>
            </section>
        
            <button 
              type='button' 
              className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 font-semibold rounded-md shadow-md transform transition duration-300 cursor-pointer hover:scale-105 text-xs sm:text-sm md:text-base" 
              onClick={() => setCardsDisplayState(false)}
            >
              View in Queue
            </button>
          </div>

        <hr className="border-t border-gray-400 sm:border-gray-500 md:border-gray-600 w-full mb-4 sm:mb-6"/>
      
        {/* Desktop Table Header - Hidden on mobile */}
        <div className="hidden lg:flex flex-row justify-between items-center p-3 md:p-4 lg:p-5 xl:p-6 bg-gray-50 rounded-t-lg">
          <p className="font-bold text-xs sm:text-sm md:text-base">Index</p>
          <div className="border-l border-gray-500 h-4 md:h-5 lg:h-6 mx-1 sm:mx-2"/>
          <p className="font-bold text-xs sm:text-sm md:text-base">Card Brand</p>
          <div className="border-l border-gray-500 h-4 md:h-5 lg:h-6 mx-1 sm:mx-2"/>
          <p className="font-bold text-xs sm:text-sm md:text-base">First Name</p>
          <div className="border-l border-gray-500 h-4 md:h-5 lg:h-6 mx-1 sm:mx-2"/>
          <p className="font-bold text-xs sm:text-sm md:text-base">Last Name</p>
          <div className="border-l border-gray-500 h-4 md:h-5 lg:h-6 mx-1 sm:mx-2"/>
          <p className="font-bold text-xs sm:text-sm md:text-base">Card Number</p>
          <div className="border-l border-gray-500 h-4 md:h-5 lg:h-6 mx-1 sm:mx-2"/>
          <p className="font-bold text-xs sm:text-sm md:text-base">Expiry Date</p>
          <div className="border-l border-gray-500 h-4 md:h-5 lg:h-6 mx-1 sm:mx-2"/>
          <p className="font-bold text-xs sm:text-sm md:text-base">Actions</p>
        </div>

        {/* Cards Container */}
        <div className="bg-white rounded-lg shadow-md max-h-80 sm:max-h-96 md:max-h-[28rem] lg:max-h-[32rem] xl:max-h-[36rem] 2xl:max-h-[40rem] overflow-y-auto">
          {cards.map((card, index) => (
            <div key={card.id}>
              {/* Desktop Layout - Hidden on mobile/tablet */}
              <div className="hidden lg:flex flex-row justify-between items-center p-3 md:p-4 lg:p-5 xl:p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                <p className="font-semibold text-xs sm:text-sm md:text-base">#{index + 1}</p>
                <h3 className="font-semibold text-xs sm:text-sm md:text-base">{card.brand}</h3>
                <p className="font-semibold text-xs sm:text-sm md:text-base">{card.firstNameData}</p>
                <p className="font-semibold text-xs sm:text-sm md:text-base">{card.lastNameData}</p>
                <p className="font-semibold text-xs sm:text-sm md:text-base font-mono">{card.cardNumberData}</p>
                <p className="font-semibold text-xs sm:text-sm md:text-base">{card.expiryData}</p>
                <button 
                  type='button' 
                  className='text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300 font-bold text-xs sm:text-sm border rounded-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2' 
                  onClick={() => setSingleCardErasingState(true)}
                >
                  Erase
                </button>
              </div>

              {/* Mobile/Tablet Card Layout - Hidden on desktop */}
              <div className="lg:hidden p-2 sm:p-3 md:p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-200">
                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  <div className="flex items-center gap-1 sm:gap-2 min-w-0 flex-1">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-1.5 py-0.5 rounded-full flex-shrink-0">
                      #{index + 1}
                    </span>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 truncate">{card.brand}</h3>
                  </div>
                  <button 
                    type='button' 
                    className='text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300 font-bold text-xs border rounded px-2 py-1 flex-shrink-0 ml-2' 
                    onClick={() => setSingleCardErasingState(true)}
                  >
                    Erase
                  </button>
                </div>
                
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex flex-col xs:flex-row xs:justify-between">
                    <span className="text-gray-500 font-medium text-xs sm:text-sm">Name:</span>
                    <span className="font-semibold text-gray-900 break-words">{card.firstNameData} {card.lastNameData}</span>
                  </div>
                  
                  <div className="flex flex-col xs:flex-row xs:justify-between">
                    <span className="text-gray-500 font-medium text-xs sm:text-sm">Card Number:</span>
                    <span className="font-semibold font-mono text-xs sm:text-sm break-all">{card.cardNumberData}</span>
                  </div>
                  
                  <div className="flex flex-col xs:flex-row xs:justify-between">
                    <span className="text-gray-500 font-medium text-xs sm:text-sm">Expiry Date:</span>
                    <span className="font-semibold text-gray-900">{card.expiryData}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Empty State */}
          {cards.length === 0 && (
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-center text-gray-500">
              <ListOrdered size={32} className="mx-auto mb-3 text-gray-300 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"/>
              <p className="text-base sm:text-lg md:text-xl font-medium">No cards available</p>
              <p className="text-xs sm:text-sm md:text-base">Add some cards to see them here</p>
            </div>
          )}
        </div>
    
        {/* Footer */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-3 md:gap-4 w-full mt-3 sm:mt-4 md:mt-6 p-1 sm:p-2">
          <button 
            type="button" 
            className='w-full sm:w-auto text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300 font-bold text-xs sm:text-sm md:text-base border rounded-lg px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 order-2 sm:order-1' 
            onClick={generalCardErasingFunct}
          >
            Erase all
          </button>

          <p className="font-bold text-center sm:text-right order-1 sm:order-2 text-sm sm:text-base md:text-lg">
            Total: <span className="text-indigo-500 font-bold">{cards.length}</span>
          </p>
        </div>
      </div>
    
        </div>

      <QueueOverviewComp/>
    </>
  );
}

export default CardsListComp;