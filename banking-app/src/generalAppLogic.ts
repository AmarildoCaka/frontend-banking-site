import { useConditionalBankStore } from "./store/secondBankStore";

export const useGeneralInterestRateHook = () => {

  const depositAmountData = useConditionalBankStore((state) => state.amount);

  const interestRate = 0.01;

  const interest = depositAmountData * interestRate;

  return interest;

};