import { useConditionalBankStore } from '../../../../../../store/secondBankStore';

import CardErasingWarningComp from '../QueueOverviewGroup/CardErasingWarning';
import CardDetailsComp from './CardDetails';

const QueueOverviewComp = () => {

  const { selectedCardDisplay, singleCardErasingState } = useConditionalBankStore();

  return (

    <>
    
      {selectedCardDisplay && (

        <>
        
          <CardDetailsComp/>
        
        </>

      )}
    
      {singleCardErasingState && (

        <>
        
          <CardErasingWarningComp/>

        </>

      )}

    </>

  );

}

export default QueueOverviewComp;