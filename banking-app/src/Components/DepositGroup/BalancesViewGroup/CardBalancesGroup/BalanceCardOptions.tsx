import { useConditionalBankStore } from "../../../../store/secondBankStore";

interface balanceCardOptionsInterface {

  item: any;

  balanceActivityData: string;

  amountKey: number;

  visibilityStateKey: boolean;

  currencySymbolKey: string;

}

const BalanceCardOptions: React.FC<balanceCardOptionsInterface> = ({ item, balanceActivityData, amountKey, visibilityStateKey, currencySymbolKey }) => {

  const { setModalState } = useConditionalBankStore();

  const isEnabled = balanceActivityData === 'Enabled';

  const isDisabled = balanceActivityData === 'Disabled';

  return (

    <>
    
      <section className="flex flex-row justify-evenly items-center text-center px-2">
              
        <div className="flex-1">
        
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl p-4 border border-blue-200/50 dark:border-blue-600/30">
            
            <span className={`${(isEnabled)? "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent": (isDisabled)? "text-gray-400": "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"} text-3xl font-extrabold drop-shadow-sm`}>{currencySymbolKey}</span>

            <span className={`${(isDisabled)? "text-gray-400": (isEnabled)? "text-gray-800 dark:text-gray-100": "text-gray-800 dark:text-gray-100"} text-3xl font-extrabold inline-block overflow-x-auto overflow-y-hidden whitespace-nowrap max-w-[160px] px-1 custom-scrollbar`}>

              {(visibilityStateKey === true)? "••••••": (visibilityStateKey === false)? (amountKey === 0)? ` ${amountKey}`: (amountKey > 0)? amountKey: null: null}

            </span>
            
          </div>
        
        </div>

        <div className="w-px h-20 bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent mx-4 opacity-60"/>

        <div className="flex flex-col justify-evenly items-center text-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-blue-900/20 dark:via-slate-800/50 dark:to-blue-900/30 border border-gray-200 dark:border-blue-700/50 rounded-xl w-24 h-32 gap-3 p-3 shadow-lg">
          
          <button type="button" disabled={isDisabled} className={`${(isEnabled)? "text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-blue-400/20 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-2xl": (isDisabled)? "text-gray-600 bg-gray-400 cursor-not-allowed": "text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 border-blue-400/20 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-2xl"} font-bold text-sm text-center rounded-lg shadow-xl px-4 py-2.5 border border-blue-400/20`} onClick={() => {

            setModalState();
          
          }}>More</button>

          <button type="button" disabled={isDisabled} className={`${(isEnabled)? "text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-2xl border-red-400/20 border": (isDisabled)? "text-gray-600 bg-gray-400 cursor-not-allowed": "text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-2xl border-red-400/20 border"} font-bold text-sm text-center rounded-lg shadow-xl px-4 py-2.5`} onClick={() => {

            item.eraseFunctKey();

          }}>Erase</button>

        </div>
      
      </section>
    
    </>

  );

}

export default BalanceCardOptions;