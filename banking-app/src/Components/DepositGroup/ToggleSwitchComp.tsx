import { useBankStore } from "../../store/useBankStore";

import { FaInfoCircle, FaAddressCard, FaChartPie, FaChartBar, FaTh } from "react-icons/fa";

import AccountBalances from "./BalancesViewGroup/ViewBalances";
import DashboardComp from './DashboardBalancesGroup/DashboardComp';
import TimeCaptureChart from "./ChartComps/ChartTest";
import BarChartComp from "./BarChartComps/BarChart";
import TopAlertComp from "../GeneralLogic/TopAlertComp";

const ToggleSwitchComp = () => {

  const { isActiveState, toCardToggleSwitchBtn, toChartToggleSwitchBtn, toDashboardToggleSwitchBtn, toBarChartToggleSwitchBtn, firstBalanceActivityState, secondBalanceActivityState, thirdBalanceActivityState, alertVisibility, alertType, alertMessage, showPopUpMessage } = useBankStore();

  return (

    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <div className="flex flex-col justify-evenly place-items-center text-center gap-2 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] pt-10">
        
        <section className="text-center mb-7">
        
          <div className="flex items-center justify-center gap-3 mb-4">
        
            <div className="p-3 bg-blue-600 rounded-xl shadow-lg mt-20">
        
              <FaInfoCircle className="text-white text-2xl"/>
        
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mt-20">Account Overview</h1>
        
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">View your active accounts in real time</p>

          <div className="flex items-center justify-center gap-2 mt-4">

            <div className={`${(firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled")? "bg-gray-300": (firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled")? "bg-green-500": "bg-gray-300"} w-2 h-2 rounded-full animate-pulse`}></div>

            <span className={`${(firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled")? "text-gray-600": (firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled")? "text-gray-500 dark:text-gray-400": "text-gray-600"} text-sm`}>
              
              {(firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled")? "Frozen": (firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled")? "Secure Connection": "Frozen"}
            
            </span>

          </div>
        
        </section>

        <section className="flex flex-row justify-evenly place-items-center text-center w-150 bg-indigo-200 rounded-lg gap-2 px-2 py-2">
          
          <button type="button" className={`${(isActiveState === "card")? "text-white bg-indigo-500": "text-black bg-white border"} font-bold cursor-pointer rounded-lg w-36 transform transition duration-300 hover:scale-105 px-1 py-2`} onClick={() => {

            toCardToggleSwitchBtn();

            showPopUpMessage("Card Mode On", "info");
          
          }}>

            <span className="flex flex-row gap-3 ml-3 mr-3">
              
              <FaAddressCard className="mt-1"/>
            
              Card
            
            </span>
          
          </button>

          <button type="button" className={`${(isActiveState === "dashboard")? "text-white bg-indigo-500": "text-black bg-white border"} font-bold cursor-pointer rounded-lg w-36 transform transition duration-300 hover:scale-105 px-1 py-2`} onClick={() => {

            toDashboardToggleSwitchBtn();

            showPopUpMessage("Dashboard Mode On", "info");

          }}>

            <span className="flex flex-row gap-3 ml-3 mr-3">
              
              <FaTh  className="mt-1"/>

              Dashboard

            </span>

          </button>

          <button type="button" className={`${(isActiveState === "chart")? "text-white bg-indigo-500": "text-black bg-white border"} font-bold cursor-pointer rounded-lg w-36 transform transition duration-300 hover:scale-105 px-1 py-2`} onClick={() => {
            
            toChartToggleSwitchBtn();

            showPopUpMessage("Chart Mode On", "info");
          
          }}>

            <span className="flex flex-row gap-3 ml-3 mr-3">
              
              <FaChartPie className="mt-1"/>
              
              Chart
            
            </span>
          
          </button>

          <button type="button" className={`${(isActiveState === "bar-chart")? "text-white bg-indigo-500": "text-black bg-white border"} font-bold cursor-pointer rounded-lg w-36 transform transition duration-300 hover:scale-105 px-1 py-2`} onClick={() => {

            toBarChartToggleSwitchBtn();

            showPopUpMessage("Bar-Chart Mode On", "info");
          
          }}>

            <span className="flex flex-row gap-1 ml-2 mr-2">
              
              <FaChartBar className="mt-1"/>
              
              Bar Chart
            
            </span>
          
          </button>
        
        </section>

        <section className={`${(isActiveState === "bar-chart")? "text-left mt-5": "text-center mt-5"}`}>

          {(isActiveState === "card")? (

            <>
            
              <AccountBalances/>
            
            </>
          
          ):(isActiveState === "dashboard")? (
           
            <>
           
              <DashboardComp/>
            
            </>
          
          ):(isActiveState === "chart")? (
          
            <>
            
              <TimeCaptureChart/>
            
            </>
          
          ):(isActiveState === "bar-chart")? (

            <>
            
              <BarChartComp/>
            
            </>
          
          ):(

            <>
           
              <AccountBalances/>
            
            </>

          )}

        </section>

      </div>

    </>

  );

};

export default ToggleSwitchComp;