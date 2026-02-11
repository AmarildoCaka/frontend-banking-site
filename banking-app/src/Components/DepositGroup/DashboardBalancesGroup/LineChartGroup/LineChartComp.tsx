import { useBankStore } from "../../../../store/useBankStore";

import TransactionsLineChartComp from '../TransactionsLineChartComp';
import DashboardCardsComp from '../DashboardCards';

const LineChartComp = () => {

  const { showPopUpMessage, depositHistoryUnitState, withdrawHistoryUnitState, dashboardDataState, setDataToDashboardFunct, setDataToCardFunct } = useBankStore();

  const dashboardModeFunct = () => {

    if(dashboardDataState !== 'dashboard')
    {

      setDataToDashboardFunct();

      showPopUpMessage(`Dashboard mode`, 'info');

    }

    else if(dashboardDataState === 'dashboard')
    {

      showPopUpMessage(`You are in Dashboard mode`, 'info');

    }

    else
    {

      return null;

    }

  }

  const cardModeFunct = () => {

    if(dashboardDataState !== 'card')
    {

      setDataToCardFunct();

      showPopUpMessage(`Card mode`, 'info');

    }

    else if(dashboardDataState === 'card')
    {

      showPopUpMessage(`You are in Card mode`, 'info');

    }

    else
    {

      return null;

    }

  }

  return (
   
    <>
    
      <div className="flex flex-col bg-white dark:bg-[#2a2a2a] p-5 rounded-2xl shadow-md mb-10">

        <div className="flex flex-row justify-between items-center gap-10 mb-5">

          <h3 className="text-gray-700 text-2xl dark:text-gray-100 font-semibold text-left">Account Activity Overview</h3>

          <div className="flex flex-row text-center bg-indigo-200 rounded-lg gap-2 px-2 py-2">

            <button type="button" className={`${(dashboardDataState === 'dashboard')? 'text-white bg-indigo-500': 'text-black bg-white border'} font-bold cursor-pointer rounded-lg w-36 transform transition duration-300 hover:scale-105 px-1 py-2`} onClick={() => {

              dashboardModeFunct();

            }}>Dashboard</button>

            <button type="button" className={`${(dashboardDataState === 'card')? 'text-white bg-indigo-500': 'text-black bg-white border'} font-bold cursor-pointer rounded-lg w-36 transform transition duration-300 hover:scale-105 px-1 py-2`} onClick={() => {

              cardModeFunct();

            }}>Cards</button>

          </div>

        </div>

        <div>

          {(dashboardDataState === 'card')? (

            <>
            
              <DashboardCardsComp/>

            </>

          ):(dashboardDataState === 'dashboard')? (

            <>
            
              <TransactionsLineChartComp depositHistoryUnitState={depositHistoryUnitState} withdrawHistoryUnitState={withdrawHistoryUnitState}/>
            
            </>
            
          ):(

            <>
            
              <DashboardCardsComp/>
            
            </>

          )}

        </div>

      </div>
            
    </>
   
  );

}

export default LineChartComp;