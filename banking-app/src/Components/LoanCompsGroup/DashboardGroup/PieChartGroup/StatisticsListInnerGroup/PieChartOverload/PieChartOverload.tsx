import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

import PieChartOptionsComp from './PieChartOptions';

const PieChartOverloadComp = ({ loanItem }: { loanItem: any }) => {

  const { pieChartBtnState } = useConditionalBankStore();

  return (
  
    <>
    
      {pieChartBtnState && (

        <>
        
          <PieChartOptionsComp loanItem={loanItem}/>
        
        </>

      )}
    
    </>
  
  );

}

export default PieChartOverloadComp;