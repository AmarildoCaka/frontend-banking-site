import { useConditionalBankStore } from "../store/SecondGroup/secondBankStore";

export const useGeneralInterestRateHook = () => {

  const depositAmountData = useConditionalBankStore((state) => state.depositAmount);

  const interestRate = 0.01;

  const interest = depositAmountData * interestRate;

  return interest;

};