import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

const AccountSumComp = () => {

  const { generalAccountState, depositHistoryUnitState, withdrawHistoryUnitState } = useBankStore();

  const { accountPremissionState, setToTrueAccountBlockingState } = useConditionalBankStore();

  return (
  
    <>
    
      <section className="glass-card rounded-2xl shadow-xl bg-white p-5">

        <div className="flex flex-row justify-between place-items-center mb-4">

          <h3 className={`${(generalAccountState === 'Disabled')? 'text-gray-400':(generalAccountState === 'Enabled')? 'text-gray-900 dark:text-white': 'text-gray-400'} text-xl font-bold`}>Account Summary</h3>

          <section className='flex flex-row justify-between place-items-center gap-2 p-1'>

            <button type='button' className='text-white bg-indigo-500 font-semibold text-center rounded-lg shadow-xl cursor-pointer transform transition duration-300 hover:scale-105 px-2 py-1' onClick={() => {

              setToTrueAccountBlockingState();

            }}>{accountPremissionState}</button>

          </section>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className={`${(generalAccountState === 'Disabled')? 'bg-gray-300':(generalAccountState === 'Enabled')? 'bg-gradient-to-br from-green-50 to-green-100 dark:from-blue-900/20 dark:to-blue-800/20': 'bg-gray-300'} text-center p-4 rounded-xl`}>

            <p className={`${(generalAccountState === 'Disabled')? 'text-gray-600': (generalAccountState === 'Enabled')? 'text-black': 'text-gray-600'} text-sm font-medium dark:text-gray-300 mb-1`}>Total Deposits this Month</p>

            <p className={`${(generalAccountState === 'Disabled')? 'text-gray-600':(generalAccountState === 'Enabled')? 'text-green-600 dark:text-blue-400': 'text-gray-600'} text-2xl font-bold`}>{depositHistoryUnitState.length}</p>

          </div>

          <div className={`${(generalAccountState === 'Disabled')? 'bg-gray-300':(generalAccountState === 'Enabled')? 'bg-gradient-to-br from-red-50 to-red-100 dark:from-green-900/20 dark:to-green-800/20': 'bg-gray-300'} text-center p-4 rounded-xl`}>

            <p className={`${(generalAccountState === 'Disabled')? 'text-gray-600':(generalAccountState === 'Enabled')? 'text-black': 'text-gray-600'} text-sm font-medium dark:text-gray-300 mb-1`}>Total Withdraws this Month</p>

            <p className={`${(generalAccountState === 'Disabled')? 'text-gray-600':(generalAccountState === 'Enabled')? 'text-red-600 dark:text-green-400': 'text-gray-600'} text-2xl font-bold`}>{withdrawHistoryUnitState.length}</p>

          </div>

          <div className={`${(generalAccountState === 'Disabled')? 'bg-gray-300':(generalAccountState === 'Enabled')? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-purple-900/20 dark:to-purple-800/20': 'bg-gray-300'} text-center p-4 rounded-xl`}>

            <p className={`${(generalAccountState === 'Disabled')? 'text-gray-600':(generalAccountState === 'Enabled')? 'text-black': 'text-gray-600'} text-sm font-medium dark:text-gray-300 mb-1`}>Security Level</p>

            <p className={`${(generalAccountState === 'Disabled')? 'text-gray-600':(generalAccountState === 'Enabled')? 'text-indigo-600 dark:text-purple-400': 'text-gray-600'} text-2xl font-bold`}>High</p>

          </div>

        </div>

        <div className='flex justify-end text-right mt-5'>

          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          
            <div className={`${(generalAccountState === 'Disabled')? 'bg-gray-300':(generalAccountState === 'Enabled')? 'bg-blue-500': 'bg-gray-300'} w-2 h-2 rounded-full animate-pulse`}></div>

            Updated: {(generalAccountState === 'Disabled')? 'Frozen':(generalAccountState === 'Enabled')? 'Just now': 'Frozen'}

          </div>

        </div>

      </section>
    
    </>
    
  );

}

export default AccountSumComp;