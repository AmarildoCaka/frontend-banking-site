import { useBankStore } from "../../../../store/useBankStore";

import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const BarsInnerWithdrawHistory = () => {

  const { withdrawHistoryUnitState, deleteSingleWithdrawUnit, alertVisibility, alertType, alertMessage, showPopUpMessage } = useBankStore();

  return (

    <>

      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>  

      {(withdrawHistoryUnitState.length > 0)? (

        withdrawHistoryUnitState.map((withdraw, index) => (
        
          <div key={withdraw.id} className="flex flex-row bg-red-50 justify-evenly rounded p-2">
              
            <p className="text-red-500 font-bold border border-red-500 rounded-full w-7 h-7 text-center">{index + 1}</p>

            <span className="font-bold text-red-500">

              -${withdraw.amount}{" "}
              
              <span className="text-red-500 font-medium">in</span>{" "}
              
              {withdraw.currency}
            
            </span>

            <section className="text-red-500 font-bold">
            
              <span className="text-red-500 font-medium">at </span>

              {withdraw.timeDisplayState}
              
            </section>

            <section className="w-[1.5px] h-7 bg-gray-300 ml-2 mr-2"></section>

            <button type="button" className="text-red-500 font-bold bg-red-50 border border-red-500 rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:text-red-700 hover:border-red-700 px-2" onClick={() => {
                
              deleteSingleWithdrawUnit(withdraw.id);

              showPopUpMessage(`Withdraw number ${index + 1} deleted successfully`, "success");

            }}>Delete</button>

          </div>

        ))

      ): (

        <>
        
          <div className="text-center mt-3">
        
            <p className="text-gray-400 text-md font-semibold">No withdraws made this month</p>
        
          </div>
        
        </>

      )}

    </>

  );
  
};

export default BarsInnerWithdrawHistory;