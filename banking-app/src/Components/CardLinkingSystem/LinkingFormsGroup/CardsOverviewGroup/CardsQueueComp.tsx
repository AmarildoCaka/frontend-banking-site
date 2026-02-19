// import { useConditionalBankStore } from "../../../../store/secondBankStore";

// import NoCardsComp from './DisaplayGroup/NoCardsComp';
// import InnerQueueComp from './DisaplayGroup/InnerQueueComp';

// const CardsQueueMainComp = () => {

//   const { activeTab, cards } = useConditionalBankStore();

//   const displayFunct = () => {

//     if(cards.length === 0)
//     {

//       return <NoCardsComp/>;

//     }

//     else
//     {

//       return <InnerQueueComp/>;

//     }

//   }

//   return (

//     <>

//       {(activeTab === "cards") && (

//         <>

//           <section className="flex flex-col justify-evenly place-items-center p-1">

//             <div className="w-full text-left">

//               <h1 className="text-2xl font-bold text-left mb-8">Cards Overview</h1>

//             </div>

//             {displayFunct()}

//           </section>

//         </>

//       )}

//     </>

//   );

// }

// export default CardsQueueMainComp;

import { useEffect } from "react";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import NoCardsComp from "./DisaplayGroup/NoCardsComp";
import InnerQueueComp from "./DisaplayGroup/InnerQueueComp";

const CardsQueueMainComp = () => {
  const { setActiveTab, cards } = useConditionalBankStore();

  useEffect(() => {
    setActiveTab("cards");
  }, [setActiveTab]);

  const displayFunct = () => {
    if (cards.length === 0) {
      return <NoCardsComp />;
    } else {
      return <InnerQueueComp />;
    }
  };

  return (
    <>
      <section className="flex-1 overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 mt-18">
        <div className="w-full text-left">
          <h1 className="cards-overview-text text-2xl font-bold text-left mb-8">
            Cards Overview
          </h1>
        </div>

        {displayFunct()}
      </section>
    </>
  );
};

export default CardsQueueMainComp;
