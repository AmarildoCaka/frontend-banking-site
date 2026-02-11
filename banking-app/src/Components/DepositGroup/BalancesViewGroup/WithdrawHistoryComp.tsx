import { FaTimes, FaCopy, FaMinus } from 'react-icons/fa';

import { useBankStore } from '../../../store/useBankStore';

import { useConditionalBankStore } from '../../../store/secondBankStore';

const WithdrawHistoryComp = () => {
  
  const { withdrawHistoryUnitState, setEmptyWithdrawHistoryUnit, showPopUpMessage, copySingleWithdrawUnit, deleteSingleWithdrawUnit } = useBankStore();

  const { setWithdrawHistoryFunct } = useConditionalBankStore();

  const clearWithdrawHistoryFunct = () => {

    switch(true)
    {

      case withdrawHistoryUnitState.length > 0:
      
        setEmptyWithdrawHistoryUnit();

        showPopUpMessage('Withdraw history deleted successfully', 'success');

        break;

      case withdrawHistoryUnitState.length === 0:

        showPopUpMessage('Withdraw history empty, nothing to delete', 'error');

        break;
    
      default:
    
        return null;

    }

  }

  return (
  
    <>
    
      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40"></div>

      <div className="fixed inset-0 z-100 flex items-center justify-center">

        <div className='relative flex flex-col justify-center place-items-center text-center animate-fadeIn bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-100 w-[660px] h-[430px] space-y-2 rounded-2xl shadow-2xl overflow-x-auto gap-2'>

          <button type="button" className="absolute top-3 right-4 text-black font-bold text-md cursor-pointer transform transition duration-300 hover:scale-125 hover:text-red-500" onClick={() => {

            setWithdrawHistoryFunct();

          }}>

            <FaTimes/>

          </button>

          <div className={`flex flex-col justify-between place-items-center text-center ${(withdrawHistoryUnitState.length === 0)? 'gap-25': null} p-1`}>

            <h1 className="text-2xl font-bold mb-4">Withdraw History</h1>

            {(withdrawHistoryUnitState.length === 0)? (

              <>
              
                <div className='flex flex-col justify-center place-items-center text-center p-1'>

                  <p className='text-gray-500 font-semibold text-lg text-center'>No withdraws in your withdraw history</p>
                  
                  <p className='text-gray-500 font-semibold text-lg text-center'>All the withdraws made will appear here</p>

                </div>
              
              </>

            ):(withdrawHistoryUnitState.length > 0)? (

              <>
              
                <div className='flex flex-col justify-center place-items-center text-center h-64 overflow-y-auto p-1'>

                  {withdrawHistoryUnitState.map((withdraw, index) => (

                    <>

                      <div key={withdraw.id} className="flex flex-row justify-between items-center w-[556px] max-w-4xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 mb-3 p-6">

                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">

                          <span className="text-white font-bold text-lg">{index + 1}</span>

                        </div>

                        <div className="grid justify-evenly grid-cols-1 md:grid-cols-2 gap-25">

                          <div className="flex flex-col">
                          
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Amount</span>
                          
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                          
                              {withdraw.withdrawAmount} <span className="text-sm font-normal text-gray-600 dark:text-gray-300">{withdraw.withdrawCurrency}</span>
                          
                            </span>
                          
                          </div>

                          <div className="flex flex-col">

                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">Created</span>
                            
                            <span className="font-bold text-md text-gray-700 dark:text-gray-200">

                              {withdraw.timeDisplayState}
                            
                            </span>
                          
                          </div>

                        </div>

                        <div className="flex flex-col gap-2">

                          <button  type="button" className="group flex items-center justify-center w-10 h-10 bg-gray-100 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg shadow-sm hover:shadow-md transform transition-all duration-200 hover:scale-105" title="Copy deposit details" onClick={() => {
                            
                            copySingleWithdrawUnit(withdraw.id);

                            showPopUpMessage(`Withdraw number ${index + 1} copied successfully!`, 'success');
                          
                          }}>

                            <FaCopy/>

                          </button>
                          
                          <button type="button" className="group flex items-center justify-center w-10 h-10 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 rounded-lg shadow-sm hover:shadow-md transform transition-all duration-200 hover:scale-105" title="Delete deposit" onClick={() => {
                            
                            deleteSingleWithdrawUnit(withdraw.id);

                            showPopUpMessage(`Withdraw number ${index + 1} deleted successfully!`, 'success');
                          
                          }}>

                            <FaMinus/>

                          </button>

                        </div>

                      </div>
                    
                    </>

                  ))}

                </div>
              
              </>

            ): null}

            <div className={`flex flex-row ${(withdrawHistoryUnitState.length > 0)? 'justify-between':(withdrawHistoryUnitState.length === 0)? 'justify-center': null} place-items-center text-center w-full mt-3 p-1`}>

              <div className='p-1'>

                <p className='font-semibold'>
                  
                  Withdraws made: <span className='font-bold text-lg'>{withdrawHistoryUnitState.length}</span>
                  
                </p>

              </div>

              {(withdrawHistoryUnitState.length > 0)? (

                <>

                  <div className='p-1'>

                    <button type='button' className='text-black font-bold text-center bg-red-500 rounded-lg shadow-xl cursor-pointer transform transition duration-300 hover:scale-105 hover:text-white px-3 py-2' onClick={() => {

                      clearWithdrawHistoryFunct();

                    }}>Clear Withdraw History</button>

                  </div>

                </>

              ):(withdrawHistoryUnitState.length === 0)? null: null}

            </div>

          </div>

        </div>
        
      </div>

    </>
  
  );

}

export default WithdrawHistoryComp;