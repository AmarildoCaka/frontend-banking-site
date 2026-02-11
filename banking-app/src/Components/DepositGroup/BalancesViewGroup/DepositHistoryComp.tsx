import { FaTimes, FaCopy, FaMinus } from 'react-icons/fa';

import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

import TopAlertComp from '../../GeneralLogic/TopAlertComp';

const DepositHistoryComp = () => {

  const { alertVisibility, alertType, alertMessage, showPopUpMessage, depositHistoryUnitState, copySingleDepositUnit, deleteSingleDepositUnit, setEmptyDepositHistoryUnit } = useBankStore();

  const { setDepositHistoryFunct } = useConditionalBankStore();

  const clearDepositHistoryFunct = () => {

    switch(true)
    {

      case depositHistoryUnitState.length > 0:
      
        setEmptyDepositHistoryUnit();

        showPopUpMessage('Deposit history deleted successfully', 'success');

        break;

      case depositHistoryUnitState.length === 0:

        showPopUpMessage('Deposit history empty, nothing to delete', 'error');

        break;
    
      default:
    
        return null;

    }

  }

  return (

    <>

      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>
    
      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40"></div>

      <div className="fixed inset-0 z-100 flex items-center justify-center">

        <div className='relative flex flex-col justify-center place-items-center text-center animate-fadeIn bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-100 w-[660px] h-[430px] space-y-2 rounded-2xl shadow-2xl overflow-x-auto gap-2'>

          <button type="button" className="absolute top-3 right-4 text-black font-bold text-md cursor-pointer transform transition duration-300 hover:scale-125 hover:text-red-500" onClick={() => {

            setDepositHistoryFunct();

          }}>

            <FaTimes/>

          </button>

          <div className={`flex flex-col justify-between place-items-center ${(depositHistoryUnitState.length === 0)? 'gap-25': null} p-1`}>

            <h1 className="text-2xl font-bold mb-4">Deposit History</h1>

            {(depositHistoryUnitState.length === 0)? (

              <>
              
                <div className='flex flex-col justify-between place-items-center self-center'>

                  <p className='text-gray-500 font-semibold text-lg text-center'>No deposits in your deposit history</p>
                  
                  <p className='text-gray-500 font-semibold text-lg text-center'>All the deposits made will appear here</p>

                </div>
              
              </>

            ):(depositHistoryUnitState.length > 0)? (

              <>
              
                <div className='flex flex-col justify-center place-items-center text-center h-64 overflow-y-auto p-1'>

                  {depositHistoryUnitState.map((deposit, index) => (

                    <div key={deposit.id} className="flex flex-row justify-between items-center w-full max-w-4xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 mb-3 p-6">
                              
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">

                        <span className="text-white font-bold text-lg">{index + 1}</span>

                      </div>

                      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 mx-6">

                        <div className="flex flex-col">
                        
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Amount</span>
                        
                          <span className="text-lg font-bold text-gray-900 dark:text-white">
                        
                          {deposit.amount} <span className="text-sm font-normal text-gray-600 dark:text-gray-300">{deposit.currency}</span>
                        
                          </span>
                        
                        </div>

                        <div className="flex flex-col">

                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Created</span>
                          
                          <span className="text-md font-bold text-gray-700 dark:text-gray-200">

                            {deposit.timeDisplayState}
                          
                          </span>
                        
                        </div>

                        <div className="flex flex-col">

                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Interest Earned</span>
                          
                          <span className="text-lg font-bold text-green-600 dark:text-green-400">

                            +{deposit.interest} <span className="text-sm font-normal text-gray-600 dark:text-gray-300">{deposit.currency}</span>
                          
                          </span>
                        
                        </div>

                      </div>

                      <div className="flex flex-col gap-2">

                        <button  type="button"  className="group flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg shadow-sm hover:shadow-md transform transition-all duration-200 hover:scale-105" title="Copy deposit details" onClick={() => {
                          
                          copySingleDepositUnit(deposit.id);

                          showPopUpMessage(`Deposit number ${index + 1} copied successfully!`, 'success');
                        
                        }}>

                          <FaCopy/>

                        </button>
                        
                        <button type="button" className="group flex items-center justify-center w-10 h-10 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 rounded-lg shadow-sm hover:shadow-md transform transition-all duration-200 hover:scale-105" title="Delete deposit" onClick={() => {
                          
                          deleteSingleDepositUnit(deposit.id);

                          showPopUpMessage(`Deposit number ${index + 1} deleted successfully!`, 'success');
                        
                        }}>

                          <FaMinus/>

                        </button>

                      </div>

                    </div>
                    
                  ))}

                </div>
              
              </>

            ): null}

            <div className={`flex flex-row ${(depositHistoryUnitState.length > 0)? 'justify-between':(depositHistoryUnitState.length === 0)? 'justify-center': null} place-items-center text-center w-full mt-3 p-1`}>

              <div className='p-1'>

                <p className='font-semibold'>
                  
                  Deposits made: <span className='font-bold text-lg'>{depositHistoryUnitState.length}</span>
                  
                </p>

              </div>

              {(depositHistoryUnitState.length > 0)? (

                <>

                  <div className='p-1'>

                    <button type='button' className='text-black font-bold text-center bg-red-500 rounded-lg shadow-xl cursor-pointer transform transition duration-300 hover:scale-105 hover:text-white px-3 py-2' onClick={() => {

                      clearDepositHistoryFunct();

                    }}>Clear Deposit History</button>

                  </div>

                </>

              ):(depositHistoryUnitState.length === 0)? null: null}

            </div>
          
          </div>

        </div>
        
      </div>
    
    </>

  );

}

export default DepositHistoryComp;