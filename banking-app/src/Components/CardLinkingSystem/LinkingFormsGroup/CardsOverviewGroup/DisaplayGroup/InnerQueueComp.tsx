import { useConditionalBankStore } from "../../../../../store/secondBankStore";

import CardsQueueComp from './CardsQueueComp';
import CardsListComp from './CardsListComp';

const InnerQueueComp = () => {

  const { cardsDisplayState } = useConditionalBankStore();

  return (

    <>
    
      <section className="bg-white rounded-md shadow-md w-[900px] p-5">

        {(cardsDisplayState === true)? (

          <>

            <CardsListComp/>

          </>

        ):(

          <>

            <CardsQueueComp/>

          </>

        )}

      </section>
    
    </>

  );

}

export default InnerQueueComp;