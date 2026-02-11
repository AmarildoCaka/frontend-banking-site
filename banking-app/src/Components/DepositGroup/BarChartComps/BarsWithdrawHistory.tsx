import { useBankStore } from "../../../store/useBankStore";

import BarsInnerWithdrawHistory from "./BarChartInnerComps/BarsInnerWithdrawHistory";

const BarsWithdrawHistory = () => {

  const { withdrawHistoryUnitState } = useBankStore();

  return (
  
    <>
    
      <div className="bg-white rounded-lg border border-gray-200 w-full p-5">
    
        <div className="flex flex-row justify-between place-items-center text-center gap-5">
    
          <h4 className="font-semibold text-gray-800 flex items-center">
    
            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
    
            Withdraws:
    
          </h4>

          <section className="flex flex-row justify-evenly place-items-center text-center p-1">
    
            <div className="w-[1.5px] h-5 bg-gray-300 ml-2 mr-2"></div>

            <p className="font-bold text-red-500">{withdrawHistoryUnitState.length}</p>
          
          </section>

        </div>

        <hr className="border-t border-gray-300 my-4"/>

        <div className="space-y-2 max-h-40 overflow-y-auto">
          
          <BarsInnerWithdrawHistory/>
        
        </div>
      
      </div>
    
    </>
  
  );

};

export default BarsWithdrawHistory;
