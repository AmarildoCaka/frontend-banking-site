import { FaEye, FaEyeSlash, FaChartLine } from "react-icons/fa";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { useMainFunctionalityArrHook } from "./balanceViewLogic";

import BalanceCardOptions from "./CardBalancesGroup/BalanceCardOptions";
import CardStatusComp from "./CardBalancesGroup/CardStatusComp";

const CardBalancesComp = () => {
  const {
    setSelectedDepositId,
    setConfirmDepositState,
    cardAvailabilityBtnFunct,
  } = useConditionalBankStore();

  const mainArrData = useMainFunctionalityArrHook();

  return (
    <>
      <section className="flex flex-wrap justify-center place-items-center text-center gap-5">
        {mainArrData.map((i) => (
          <div
            key={i.id}
            className={`${i.balanceActivityData === "Enabled" ? "transition hover:scale-105 duration-200" : null} flex flex-col justify-evenly gap-3 bg-white dark:bg-[#1c3e6a] rounded-lg shadow p-5 w-full sm:w-[400px]`}
          >
            <section className="flex flex-row justify-between items-center gap-2 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/40 dark:via-indigo-900/40 dark:to-purple-900/40 border-b border-gray-200 dark:border-gray-600 rounded-t-2xl w-full p-3 shadow-sm">
              <div className="flex items-center justify-center gap-3 p-1">
                <h2
                  className={`${i.balanceActivityData === "Enabled" ? "text-gray-800 dark:text-white" : i.balanceActivityData === "Disabled" ? "text-gray-400" : "text-gray-800 dark:text-white"} text-lg font-bold tracking-wide`}
                >
                  {i.labelKey} Balance
                </h2>

                <button
                  type="button"
                  disabled={i.balanceActivityData === "Disabled"}
                  className={`${i.balanceActivityData === "Enabled" ? "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-800/30 cursor-pointer" : i.balanceActivityData === "Disabled" ? "text-gray-600 cursor-not-allowed" : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transform transition-all duration-300 hover:scale-110 hover:bg-blue-100 dark:hover:bg-blue-800/30 cursor-pointer"} rounded-full p-2`}
                  onClick={() => i.amountVisibilityKey()}
                >
                  {i.visibilityStateKey === true ? (
                    <>
                      <FaEye className="text-lg" />
                    </>
                  ) : (
                    <>
                      <FaEyeSlash className="text-lg" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                {i.balanceActivityData === "Enabled" ? (
                  <>
                    <FaChartLine className="text-green-500 text-lg drop-shadow-sm" />
                  </>
                ) : i.balanceActivityData === "Disabled" ? (
                  <>
                    <FaChartLine className="text-gray-500 text-lg drop-shadow-sm" />
                  </>
                ) : (
                  <>
                    <FaChartLine className="text-green-500 text-lg drop-shadow-sm" />
                  </>
                )}

                <button
                  type="button"
                  className="cursor-pointer transform transition duration-300 hover:scale-106"
                  onClick={() => {
                    setSelectedDepositId(i.id);

                    setConfirmDepositState();

                    cardAvailabilityBtnFunct();
                  }}
                >
                  <span
                    className={`${i.balanceActivityData === "Enabled" ? "text-green-700 dark:text-green-300 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 border-green-200 dark:border-green-700 border" : i.balanceActivityData === "Disabled" ? "text-gray-600 bg-gray-300" : "text-green-700 dark:text-green-300 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 border-green-200 dark:border-green-700 border"} text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm`}
                  >
                    {i.balanceActivityData}
                  </span>
                </button>
              </div>
            </section>

            <section>
              <BalanceCardOptions
                item={i}
                balanceActivityData={i.balanceActivityData}
                amountKey={i.amountKey}
                visibilityStateKey={i.visibilityStateKey}
                currencySymbolKey={i.currencySymbolKey}
              />
            </section>

            <section>
              <CardStatusComp balanceActivityData={i.balanceActivityData} />
            </section>
          </div>
        ))}
      </section>
    </>
  );
};

export default CardBalancesComp;
