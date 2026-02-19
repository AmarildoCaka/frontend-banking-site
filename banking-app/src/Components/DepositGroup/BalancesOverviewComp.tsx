import { useBankStore } from "../../store/FirstGroup/useBankStore";

import { FaAddressCard, FaChartPie, FaChartBar, FaTh } from "react-icons/fa";

import AccountBalances from "./BalancesViewGroup/ViewBalances";
import DashboardComp from "./DashboardBalancesGroup/DashboardComp";
import TimeCaptureChart from "./ChartComps/ChartTest";
import BarChartComp from "./BarChartComps/BarChart";
import TopAlertComp from "../GeneralLogic/TopAlertComp";
import ExchangeRateTickerComp from "../ExchangeRateGroup/RateCarouselComp";

const BalancesOverviewComp = () => {
  const {
    isActiveState,
    toCardToggleSwitchBtn,
    toChartToggleSwitchBtn,
    toDashboardToggleSwitchBtn,
    toBarChartToggleSwitchBtn,
    alertVisibility,
    alertType,
    alertMessage,
    showPopUpMessage,
  } = useBankStore();

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="mt-23">
        <ExchangeRateTickerComp/>

        <div className="balances-overview-wrapper shadow-md h-[calc(100vh-12rem)] md:h-[calc(100vh-10rem)] lg:h-[calc(100vh-8rem)] rounded-md p-5 flex flex-col justify-evenly place-items-center text-center gap-2 mt-33">
          <div className="w-full text-left">
            <h1 className="main-dashboard-text text-2xl font-bold mb-7">
              Account Overview
            </h1>
          </div>

          <div className="balances-overview-btn-wrapper grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 justify-evenly place-items-center text-center bg-indigo-200 rounded-md gap-2 px-2 py-2">
            <button
              type="button"
              className={`${isActiveState === "card" ? "text-white bg-indigo-500" : "text-black bg-white border"} font-bold cursor-pointer rounded-md w-36 transform transition duration-300 hover:scale-105 px-1 py-2`}
              onClick={() => {
                toCardToggleSwitchBtn();

                showPopUpMessage("Card Mode On", "info");
              }}
            >
              <span className="flex flex-row gap-3 ml-3 mr-3">
                <FaAddressCard className="mt-1" />
                Card
              </span>
            </button>

            <button
              type="button"
              className={`${isActiveState === "dashboard" ? "text-white bg-indigo-500" : "text-black bg-white border"} font-bold cursor-pointer rounded-md w-36 transform transition duration-300 hover:scale-105 px-1 py-2`}
              onClick={() => {
                toDashboardToggleSwitchBtn();

                showPopUpMessage("Dashboard Mode On", "info");
              }}
            >
              <span className="flex flex-row gap-3 ml-3 mr-3">
                <FaTh className="mt-1" />
                Dashboard
              </span>
            </button>

            <button
              type="button"
              className={`${isActiveState === "chart" ? "text-white bg-indigo-500" : "text-black bg-white border"} font-bold cursor-pointer rounded-md w-36 transform transition duration-300 hover:scale-105 px-1 py-2`}
              onClick={() => {
                toChartToggleSwitchBtn();

                showPopUpMessage("Chart Mode On", "info");
              }}
            >
              <span className="flex flex-row gap-3 ml-3 mr-3">
                <FaChartPie className="mt-1" />
                Chart
              </span>
            </button>

            <button
              type="button"
              className={`${isActiveState === "bar-chart" ? "text-white bg-indigo-500" : "text-black bg-white border"} font-bold cursor-pointer rounded-md w-36 transform transition duration-300 hover:scale-105 px-1 py-2`}
              onClick={() => {
                toBarChartToggleSwitchBtn();

                showPopUpMessage("Bar-Chart Mode On", "info");
              }}
            >
              <span className="flex flex-row gap-1 ml-2 mr-2">
                <FaChartBar className="mt-1" />
                Bar Chart
              </span>
            </button>
          </div>

          <div
            className={`${isActiveState === "bar-chart" ? "text-left mt-5" : "text-center mt-5"} overflow-y-auto`}
          >
            {isActiveState === "card" ? (
              <>
                <AccountBalances />
              </>
            ) : isActiveState === "dashboard" ? (
              <>
                <DashboardComp />
              </>
            ) : isActiveState === "chart" ? (
              <>
                <TimeCaptureChart />
              </>
            ) : isActiveState === "bar-chart" ? (
              <>
                <BarChartComp />
              </>
            ) : (
              <>
                <AccountBalances />
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BalancesOverviewComp;
