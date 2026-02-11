import { useConditionalBankStore } from "../../store/secondBankStore";

import FirstFormComp from "./FirstFormGroup/FirstForm";
import SecondFormComp from "./SecondFormGroup/SecondForm";

const FormComp = () => {

  const { firstStepForm, secondStepForm } = useConditionalBankStore();

  return (
  
    <>

      <form className="h-110 overflow-y-auto">

        {firstStepForm && (
    
          <>
          
            <FirstFormComp/>
          
          </>
        
        )}

        {secondStepForm && (
        
          <>
          
            <SecondFormComp/>
          
          </>
        
        )}
      
      </form>
    
    </>
  
  );

};

export default FormComp;