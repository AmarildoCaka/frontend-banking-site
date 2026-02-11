import { FaChevronDown } from 'react-icons/fa';

import { useState } from 'react';

import { useBankStore } from '../../../../../../store/useBankStore';

import { useConditionalBankStore } from '../../../../../../store/secondBankStore';

import { useThirdBankStore } from '../../../../../../store/thirdBankStore';

import TopAlertComp from '../../../../../GeneralLogic/TopAlertComp';

interface loanCurrencyListInterface {

  idKey: number;

  valueKey: string;

  disabledKey: boolean;

  textKey: string;

}

const LoanCurrencyComp = () => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { secondStepFormFieldErrors, loanCurrency, setLoanCurrency } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const loanCurrencyList: loanCurrencyListInterface[] = [{

    idKey: 1,

    valueKey: '',

    disabledKey: true,

    textKey: 'No loan currency yet'

  }, {

    idKey: 2,

    valueKey: 'USD',

    disabledKey: false,

    textKey: 'United States Dollars (USD)'

  }, {

    idKey: 3,

    valueKey: 'EUR',

    disabledKey: false,

    textKey: 'EURO (EUR)'

  }, {

    idKey: 4,

    valueKey: 'GBP',

    disabledKey: false,

    textKey: 'Great British Pound (GBP)'

  }];

  const loanCurrencyGeneralValidationFunct = () => {

    if(loanCurrency === '' && secondStepFormFieldErrors.loanCurrency === false)
    {

      return <p className="text-green-500 font-semibold text-md text-left">Select 1 of 3 avaliable loan currencies</p>;

    }

    else if(loanCurrency === '' && secondStepFormFieldErrors.loanCurrency === true)
    {

      return <p className="text-red-500 font-semibold text-md text-left">No loan currency, please select a loan currency first</p>;

    }

    else
    {

      return null;

    }

  }

  return (
  
    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <div className="relative mb-5 p-5 bg-gray-50 rounded-xl overflow-hidden" onClick={() => {

        setIsOpen(!isOpen);

      }}>

        <div className='text-left flex flex-col'>

          <h3 className="text-lg font-semibold text-gray-700 mb-2">Loan Currency</h3>

          <p className="text-gray-600 text-sm mb-1 font-bold">Choose the currency of the loan you borrow</p>

        </div>

        <select value={loanCurrency} className={`w-full mt-2 appearance-none font-semibold border-2 rounded-md transition-colors focus:outline-none cursor-pointer shadow-sm p-2 ${(secondStepFormFieldErrors.loanCurrency === true)? 'border-red-500 focus:border-red-500': 'border-gray-300 focus:border-indigo-500'}`} onChange={(e) => {

          setLoanCurrency(e.target.value);

        }} onBlur={() => {
          
          setIsOpen(false);
          
        }}>

          {loanCurrencyList.map((i) => (

            <>
            
              <option key={i.idKey} value={i.valueKey} disabled={i.disabledKey} className="font-bold">{i.textKey}</option>
            
            </>

          ))}

        </select>

        <FaChevronDown className={`absolute right-9 bottom-13 -translate-y-1/2 pointer-events-none transition-transform duration-300 ${(theme === 'light' || theme === 'system')? 'text-black':(theme === 'dark')? 'text-white': 'text-black'} ${(isOpen)? 'rotate-180': 'rotate-0'}`}/>

        {loanCurrencyGeneralValidationFunct()}

      </div>

    </>
  
  );

}

export default LoanCurrencyComp;