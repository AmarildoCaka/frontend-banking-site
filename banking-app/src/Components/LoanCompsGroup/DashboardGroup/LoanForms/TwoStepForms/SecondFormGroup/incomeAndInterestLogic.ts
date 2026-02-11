import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

// Monthly Payment:

export const useMonthlyPaymentFunctHook = () => {
  
  const { loanAmount, loanTerm } = useConditionalBankStore();

  const monthlyPayment = (loanTerm > 0)? Number(((loanAmount / loanTerm) + loanAmount * 0.05).toFixed(2)): 0;

  return { monthlyPayment };

};

// Interest:

export const useInterestFunctHook = () => {

  const { loanAmount, loanTerm } = useConditionalBankStore();
  
  const isValid = loanAmount > 0 && loanTerm > 0;

  if(!isValid)
  {
  
    return { interest: 0 };
  
  }

  const monthlyPayment = Number((loanAmount / loanTerm + loanAmount * 0.05).toFixed(2));

  const interest = ((monthlyPayment * loanTerm) - loanAmount).toLocaleString();

  return { interest };

};