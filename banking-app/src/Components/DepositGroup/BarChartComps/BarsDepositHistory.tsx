import { useBankStore } from "../../../store/useBankStore";

import BarsInnerDepositHistory from "./BarChartInnerComps/BarsInnerDepositHistory";

const BarsDepositHistory = () => {

  const { depositHistoryUnitState } = useBankStore();

  return (
    
    <>
    
      <div className="bg-white rounded-lg border border-gray-200 w-full p-5">
    
        <div className="flex flex-row justify-between place-items-center text-center gap-5">
    
          <h4 className="font-semibold text-gray-800 flex items-center">
    
            <span className="bg-green-500 w-3 h-3 rounded-full mr-2"></span>
    
            Deposits:
    
          </h4>

          <section className="flex flex-row justify-evenly place-items-center text-center p-1">
    
            <div className="w-[1px] h-5 bg-gray-300 ml-2 mr-2"></div>

            <p className="font-bold text-green-500">{depositHistoryUnitState.length}</p>
    
          </section>
    
        </div>

        <hr className="border-t border-gray-300 my-4"/>

        <div className="max-h-40 space-y-2 overflow-y-auto">

          <BarsInnerDepositHistory/>
        
        </div>
      
      </div>
    
    </>
    
  );

};

export default BarsDepositHistory;