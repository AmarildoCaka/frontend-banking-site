import {
  depositHistoryInterface,
  withdrawHistoryInterface,
} from "../../../../store/functInterfaces";

import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

const TransactionsOverviewComp = () => {
  const { depositHistoryUnitState, withdrawHistoryUnitState } = useBankStore();

  const totalTransactionAmountFunct = (
    depositTransactions: depositHistoryInterface[],
    withdrawTransactions: withdrawHistoryInterface[],
  ) => {
    if (depositTransactions.length === 0 && withdrawTransactions.length === 0) {
      return "No transactions yet";
    } else {
      const transactionsTotal =
        depositTransactions.length + withdrawTransactions.length;

      return transactionsTotal;
    }
  };

  const lastTransactionsMadeFunct = () => {
    if (depositHistoryUnitState.length === 0) {
      return "No last transactions";
    } else if (depositHistoryUnitState.length > 0) {
      const lastDepositTimeData = localStorage.getItem("capturedTime");

      return lastDepositTimeData;
    } else {
      return "No last transactions";
    }
  };

  const highestDepositFunct = (arr, key: string) => {
    if (!arr.length) {
      return "No deposit yet";
    }

    return arr.reduce((maxObj, currentObj) => {
      return currentObj[key] > maxObj[key] ? currentObj : maxObj;
    }, arr[0])[key];
  };

  const highestWithdrawFunct = (arr, key: string) => {
    if (!arr.length) {
      return "No withdrawals yet";
    }

    return arr.reduce((maxObj, currentObj) => {
      return currentObj[key] > maxObj[key] ? currentObj : maxObj;
    }, arr[0])[key];
  };

  return (
    <>
      <div className="bg-white dark:bg-[#2a2a2a] rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300">
        <div className="flex flex-row gap-2">
          <svg
            className="w-5 h-5 mt-2 text-indigo-500 dark:text-indigo-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 14l-4 4m0 0l4 4m-4-4h14" />

            <path d="M15 10l4-4m0 0l-4-4m4 4H5" />
          </svg>

          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Account Transactions Overview
          </h3>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Total Transactions:
          </span>

          <span className="text-gray-700 dark:text-gray-300 font-semibold">
            {totalTransactionAmountFunct(
              depositHistoryUnitState,
              withdrawHistoryUnitState,
            )}
          </span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Last transaction made at:
          </span>

          <span className="text-gray-700 dark:text-gray-300 font-semibold">
            {lastTransactionsMadeFunct()}
          </span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Highest deposit made:
          </span>

          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            {highestDepositFunct(depositHistoryUnitState, "amount")}
          </span>
        </div>

        <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Highest withdraw made:
          </span>

          <span className="text-rose-600 dark:text-rose-400 font-semibold">
            {highestWithdrawFunct(withdrawHistoryUnitState, "withdrawAmount")}
          </span>
        </div>
      </div>
    </>
  );
};

export default TransactionsOverviewComp;
