import { useConditionalBankStore } from "../../../store/secondBankStore";

import { useInterestFunctHook } from "./LoanForms/TwoStepForms/SecondFormGroup/incomeAndInterestLogic";

export const useDashboardLogicHook = () => {
  
  const loanInterestRate = useConditionalBankStore((state) => state.loanInterestRate);

  const loanAmount = useConditionalBankStore((state) => state.loanAmount);

  const loanTerm = useConditionalBankStore((state) => state.loanTerm);

  const { interest } = useInterestFunctHook();

  const monthlyRate = loanInterestRate / 100 / 12;

  const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);

  const totalPayable = emi * loanTerm;

  const dataObj = {

    monthlyRateKey: monthlyRate,

    totalPayableKey: totalPayable,

    totalInterestKey: interest,
  
  };

  return { dataObj };

};