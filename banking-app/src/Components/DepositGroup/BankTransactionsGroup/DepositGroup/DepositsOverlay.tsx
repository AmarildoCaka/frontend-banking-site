import { useConditionalBankStore } from '../../../../store/secondBankStore';

import InterestComp from './InterestComp';

const DepositsGlobalOverlayOverlayComp = () => {

  const finalSubmissionStateData = useConditionalBankStore((state) => state.finalSubmissionState);

  return (

    <>
    
      {finalSubmissionStateData && (

        <>
        
          <InterestComp/>
        
        </>

      )}
    
    </>

  );

}

export default DepositsGlobalOverlayOverlayComp;