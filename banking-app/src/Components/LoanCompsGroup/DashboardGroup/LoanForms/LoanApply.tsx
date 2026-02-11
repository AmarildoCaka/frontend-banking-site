import { useConditionalBankStore } from "../../../../store/secondBankStore";

import FirstStepFormComp from "./TwoStepForms/FirstFormGroup/FirstStepForm";
import SecondStepFormComp from "./TwoStepForms/SecondFormGroup/SecondStepForm";

const LoanApplicationComp = () => {

  const { activeTab, firstLoanForm, secondLoanForm } = useConditionalBankStore();

  const loanFormRenderingFunct = () => {

    if(firstLoanForm === true)
    {

      return <FirstStepFormComp/>;
      
    }

    else if(firstLoanForm === false && secondLoanForm === true)
    {

      return <SecondStepFormComp/>;

    }

    else
    {

      return null;

    }

  }

  return (

    <>

      <section className="text-left mt-23">

        {(activeTab === "apply") && loanFormRenderingFunct()}

      </section>

    </>
  
  );

};

export default LoanApplicationComp;