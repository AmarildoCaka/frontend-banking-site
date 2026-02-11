import { FaCopy, FaEye, FaEyeSlash, FaEraser } from 'react-icons/fa';

import { useBankStore } from '../../../store/useBankStore';

import { useMainFunctionalityArrHook } from '../BalancesViewGroup/balanceViewLogic';

const DashboardCardsComp = () => {

  const { showPopUpMessage, generalAccountState } = useBankStore();

  const mainFunctionalityArr = useMainFunctionalityArrHook();

  const copyFunct = (depositAmount: number) => {

    if(depositAmount > 0)
    {

      navigator.clipboard.writeText(JSON.stringify(depositAmount));

      showPopUpMessage('Amount copied successfully', 'success');

    }

    else if(depositAmount === 0)
    {

      showPopUpMessage('Amount is 0, nothing to copy', 'error');

    }

    else
    {

      showPopUpMessage('Something went wrong, could not copy the amount', 'error');

    }

  }

  const amountEraserFunct = (depositAmount: number, depositAmouintEraserFunct: () => void) => {

    if(depositAmount > 0)
    {

      depositAmouintEraserFunct();

      showPopUpMessage('Amount erased successfully', 'success');

    }

    else
    {

      showPopUpMessage('Amount is 0, nothing to erase', 'error');

    }

  }

  return (

    <>
    
      <section className='flex flex-col bg-gray-50 rounded-lg'>

        <div className='w-full px-5'>

          <h3 className='font-semibold text-lg text-left text-gray-800 dark:text-gray-200 mt-3'>Account Balance</h3>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5">

          {mainFunctionalityArr.map((element) => (

            <>
              
              <section key={element.id} className="bg-white dark:bg-[#2a2a2a] p-5 rounded-2xl shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300">
            
                <div className="flex flex-row gap-3 w-full justify-end">

                  <button type="button" disabled={generalAccountState === "Disabled"} className={`${(generalAccountState === "Enabled")? 'text-black hover:text-indigo-500 transform transition duration-300 hover:scale-105 cursor-pointer':(generalAccountState === "Disabled")? 'text-gray-500 cursor-not-allowed': 'text-black hover:text-indigo-500 transform transition duration-300 hover:scale-105 cursor-pointer'} top-5`} onClick={() => element.amountVisibilityKey()}>{(element.visibilityStateKey === true)? <FaEyeSlash/>: <FaEye/>}</button>

                  <div className="w-[2px] h-5 bg-gray-300 dark:bg-gray-600"></div>

                  <button type="button" disabled={generalAccountState === "Disabled"} className={`${(generalAccountState === "Enabled")? 'text-black hover:text-indigo-500 cursor-pointer transform transition duration-300 hover:scale-105':(generalAccountState === "Disabled")? 'text-gray-500 cursor-not-allowed': 'text-black hover:text-indigo-500 cursor-pointer transform transition duration-300 hover:scale-105'} top-5`} onClick={() => {

                    copyFunct(element.amountKey);

                  }}>
                    
                    <FaCopy/>
                    
                  </button>

                  <div className="w-[2px] h-5 bg-gray-300 dark:bg-gray-600"></div>

                  <button type="button" disabled={generalAccountState === "Disabled"} className={`${(generalAccountState === "Enabled")? "text-black hover:text-red-500 transform transition duration-300 hover:scale-105 cursor-pointer":(generalAccountState === "Disabled")? "text-gray-500 cursor-not-allowed": "text-black hover:text-red-500 transform transition duration-300 hover:scale-105 cursor-pointer"} top-5`} onClick={() => {

                    amountEraserFunct(element.amountKey, element.eraseFunctKey);

                  }}>

                    <FaEraser/>

                  </button>

                </div>

                <div className="flex items-center gap-3 mb-2">
            
                  {element.labelKey}
            
                </div>
            
                <p className={`${(generalAccountState === "Enabled")? "text-indigo-600":(generalAccountState === "Disabled")? "text-gray-500": "text-indigo-600"} text-2xl text-left font-bold dark:text-indigo-400 overflow-y-auto`}>
            
                  {(element.visibilityStateKey)? `${(element.currencySymbolKey === "$")? "$":(element.currencySymbolKey === "€")? "€": "£"}${element.amountKey}`: "•••••"}
            
                </p>

              </section>
            
            </>

          ))}

        </div>

      </section>
    
    </>

  );

}

export default DashboardCardsComp;