import { useConditionalBankStore } from "../../../store/secondBankStore";

import ShowFaqPopUpComp from '../LoanPopUpComps/ShowFaq';
import LoanHistoryComp from '../LoanHistoryGroup/LoanHistory';

const LoanOverlayComp = () => {

  const { showFAQ, loanHistory } = useConditionalBankStore();

  return (
  
    <>

      {showFAQ && (

        <>

          <ShowFaqPopUpComp/>

        </>

      )}

      {loanHistory && (

        <>

          <LoanHistoryComp/>

        </>

      )}
    
    </>
    
  );

}

export default LoanOverlayComp;