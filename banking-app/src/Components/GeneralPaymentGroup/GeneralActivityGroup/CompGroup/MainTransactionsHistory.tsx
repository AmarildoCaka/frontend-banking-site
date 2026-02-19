import { useEffect } from "react";

import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import TransactionInnerHistoryComp from "../../../TransactionsGroup/InnerHistory";

import TransactionHistoryBtnComp from "../../../TransactionsGroup/TransactionHistoryBtn";

import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const TransactionHistoryComp = () => {
  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { transactions, setActiveTab } = useConditionalBankStore();

  useEffect(() => {
    setActiveTab("transactionsHistory");
  }, [setActiveTab]);

  return (
    <>
      #4F46E5
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />
      <section className="p-1 mt-18">
        <h1 className="transactions-text text-2xl font-bold text-left mb-8">
          Transactions History
        </h1>

        <div className="transactions-history-wrapper flex flex-col justify-between place-items-center text-center w-full rounded-md shadow-md p-4 sm:p-5 min-h-[430px] max-h-[70vh]">
          {transactions.length === 0 ? (
            <>
              <div className="p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="transactions-history-text w-full h-12 text-center"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    ry="2"
                    strokeWidth="2"
                  />

                  <line x1="7" y1="9" x2="17" y2="9" strokeWidth="2" />

                  <line x1="7" y1="13" x2="17" y2="13" strokeWidth="2" />
                </svg>

                <p className="transactions-history-text text-lg font-medium">
                  No transactions yet
                </p>

                <p className="transactions-history-text text-sm mt-1">
                  All transactions will appear here
                </p>
              </div>
            </>
          ) : (
            <>
              <TransactionInnerHistoryComp />
            </>
          )}

          <TransactionHistoryBtnComp />
        </div>
      </section>
    </>
  );
};

export default TransactionHistoryComp;
