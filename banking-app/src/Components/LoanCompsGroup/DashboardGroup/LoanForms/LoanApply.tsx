import { useEffect } from "react";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import FirstStepFormComp from "./TwoStepForms/FirstFormGroup/FirstStepForm";
import SecondStepFormComp from "./TwoStepForms/SecondFormGroup/SecondStepForm";

const LoanApplicationComp = () => {
  const { setActiveTab, firstLoanForm, secondLoanForm } =
    useConditionalBankStore();

  useEffect(() => {
    setActiveTab("apply");
  }, [setActiveTab]);

  const loanFormRenderingFunct = () => {
    if (firstLoanForm === true) {
      return <FirstStepFormComp />;
    } else if (firstLoanForm === false && secondLoanForm === true) {
      return <SecondStepFormComp />;
    } else {
      return null;
    }
  };

  return (
    
    <>
      <section className="text-left mt-23">{loanFormRenderingFunct()}</section>
    </>
  );
};

export default LoanApplicationComp;