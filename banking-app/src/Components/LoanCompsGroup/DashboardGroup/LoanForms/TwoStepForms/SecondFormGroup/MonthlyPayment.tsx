import { FaChevronDown } from 'react-icons/fa';

import { useState } from 'react';

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

import { useThirdBankStore } from "../../../../../../store/thirdBankStore";

interface paymentTermListInterface {

  idKey: number;

  valueKey: number;

  disabledKey: boolean;

  textKey: string;

}

const MonthlyPaymentComp = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { loanTerm, setLoanTerm, secondStepFormFieldErrors } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const paymentTermList: paymentTermListInterface[] = [{

    idKey: 1,

    valueKey: 0,

    disabledKey: true,

    textKey: 'No repayment term yet'

  }, {

    idKey: 2,

    valueKey: 12,

    disabledKey: false,

    textKey: '12 Months'

  }, {

    idKey: 3,

    valueKey: 24,

    disabledKey: false,

    textKey: '24 Months'

  }, {

    idKey: 4,

    valueKey: 36,

    disabledKey: false,

    textKey: '36 Months'

  }];

  const generalValidationFunct = () => {

    if(loanTerm === 0 && secondStepFormFieldErrors.loanPaymentTerm === false)
    {

      return <p className="text-green-500 font-semibold text-md mt-1">Select 1 of 3 avaliable payment terms</p>;

    }

    else if(loanTerm === 0 || secondStepFormFieldErrors.loanPaymentTerm === true)
    {

      return <p className="text-red-500 font-semibold text-md mt-1">No payment term, please select a payment term first</p>;

    }

    else
    {

      return <p className="text-green-500 font-semibold text-md mt-1">Select 1 of 3 avaliable payment terms</p>;

    }

  }

  return (
  
    <>
    
      <div className="relative mb-5 p-5 bg-gray-50 rounded-xl overflow-hidden" onClick={() => {

        setIsOpen(!isOpen);

      }}>

        <div className='text-left flex flex-col'>

          <h3 className="text-lg font-semibold text-gray-700 mb-2">Repayment Term</h3>

          <p className="text-gray-600 text-sm mb-1 font-bold">Choose your preferred repayment term</p>

        </div>

        <select value={loanTerm} className={`w-full mt-2 font-semibold border-2 appearance-none rounded-md cursor-pointer shadow-sm p-2 focus:outline-none transition-colors ${(secondStepFormFieldErrors.loanPaymentTerm === true)? 'border-red-500 focus:border-red-500': 'border-gray-300 focus:border-indigo-500'}`} onChange={(e) => {
            
          setLoanTerm(Number(e.target.value));

        }} onBlur={() => {
          
          setIsOpen(false);
          
        }}>
          
          {paymentTermList.map((i) => (

            <>
            
              <option key={i.idKey} disabled={i.disabledKey} value={i.valueKey} className={`font-bold ${(theme === 'light' || theme === 'system')? 'bg-white text-black':(theme === 'dark')? 'bg-black text-white': 'bg-white text-black'}`}>{i.textKey}</option>
            
            </>

          ))}
        
        </select>

        <FaChevronDown className={`absolute left-144 bottom-13 -translate-y-1/2 pointer-events-none transition-transform duration-300 ${(theme === 'light' || theme === 'system')? 'text-black':(theme === 'dark')? 'text-white': 'text-black'} ${(isOpen)? 'rotate-180': 'rotate-0'}`}/>

        {generalValidationFunct()}

      </div>
    
    </>
  
  );

}

export default MonthlyPaymentComp;