import { useBankStore } from '../../../store/useBankStore';

import { mainFunctionalityArrInterface } from '../../../store/functInterfaces';

import { eraseUsdAmount, eraseEuroAmount, eraseGbpAmount } from '../../GeneralLogic/generalList';

export const useMainFunctionalityArrHook = () => {

  // General:

  const balancesData = useBankStore((state) => state.balances);

  // First Obj:

  const firstAmountVisibilityData = useBankStore((state) => state.firstAmountVisibility);

  const setFirstAmountVisibilityFunctData = useBankStore((state) => state.setFirstAmountVisibilityFunct);

  const firstBalanceActivityStateData = useBankStore((state) => state.firstBalanceActivityState);

  const firstDepositStateFunctData = useBankStore((state) => state.firstDepositStateFunct);

  // Second Obj:

  const secondAmountVisibilityData = useBankStore((state) => state.secondAmountVisibility);

  const setSecondAmountVisibilityFunctData = useBankStore((state) => state.setSecondAmountVisibilityFunct);

  const secondBalanceActivityStateData = useBankStore((state) => state.secondBalanceActivityState);

  const secondDepositStateFunctData = useBankStore((state) => state.secondDepositStateFunct);

  // Third Obj:

  const thirdAmountVisibilityData = useBankStore((state) => state.thirdAmountVisibility);

  const setThirdAmountVisibilityFunctData = useBankStore((state) => state.setThirdAmountVisibilityFunct);

  const thirdBalanceActivityStateData = useBankStore((state) => state.thirdBalanceActivityState);

  const thirdDepositStateFunctData = useBankStore((state) => state.thirdDepositStateFunct);

  const mainFunctionalityArr: mainFunctionalityArrInterface[] = [
            
    {
  
      id: 0,
  
      labelKey: 'USD',
  
      currencySymbolKey: '$',
  
      amountKey: balancesData.USD,
  
      eraseFunctKey: () => eraseUsdAmount(),
  
      visibilityStateKey: firstAmountVisibilityData,
  
      amountVisibilityKey: () => setFirstAmountVisibilityFunctData(),
  
      balanceActivityData: firstBalanceActivityStateData,
  
      balanceActivityFunctKey: () => firstDepositStateFunctData(),
  
    }, {
  
      id: 1,
  
      labelKey: 'EURO',
  
      currencySymbolKey: '€',
  
      amountKey: balancesData.EUR,
  
      eraseFunctKey: () => eraseEuroAmount(),
  
      visibilityStateKey: secondAmountVisibilityData,
  
      amountVisibilityKey: () => setSecondAmountVisibilityFunctData(),
  
      balanceActivityData: secondBalanceActivityStateData,
  
      balanceActivityFunctKey: () => secondDepositStateFunctData(),
  
    }, {
  
      id: 2,
  
      labelKey: 'GBP',
  
      currencySymbolKey: '£',
  
      amountKey: balancesData.GBP,
  
      eraseFunctKey: () => eraseGbpAmount(),
  
      visibilityStateKey: thirdAmountVisibilityData,
  
      amountVisibilityKey: () => setThirdAmountVisibilityFunctData(),
  
      balanceActivityData: thirdBalanceActivityStateData,
  
      balanceActivityFunctKey: () => thirdDepositStateFunctData(),
  
    }
  
  ];

  return mainFunctionalityArr;

};