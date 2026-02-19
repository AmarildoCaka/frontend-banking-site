import { useBankStore } from "../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../store/ThirdGroup/thirdBankStore";

import TopAlertComp from "../GeneralLogic/TopAlertComp";

const TransactionInnerHistoryComp = () => {
  const { showPopUpMessage, alertMessage, alertVisibility, alertType } =
    useBankStore();

  const { transactions, setTransactions } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const deleteSingleTransaction = (id: string) => {
    const newTransactions = transactions.filter((t) => t.id !== id);

    setTransactions(newTransactions);

    showPopUpMessage("Transaction deleted successfully", "success");
  };

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="p-5 flex flex-col overflow-y-auto justify-between gap-y-3">
        {transactions.map((tx, index) => (
          <div
            key={tx.id}
            className="transactions-history-element flex flex-col gap-6 w-full rounded-md shadow-md max-w-4xl mx-auto p-5 transition transfrm duration-300 hover:scale-101 hover:shadow-lg"
          >
            <div
              className={`w-full flex justify-between items-center border-b pb-3 ${theme === "light" || theme === "system" ? "border-gray-300" : theme === "dark" ? "border-white" : "border-gray-300"}`}
            >
              <div className="flex gap-2 items-center shrink-0 w-[70px]">
                <span className="transactions-history-element-text font-semibold">
                  No:
                </span>

                <p className="font-bold text-indigo-600">#{index + 1}</p>
              </div>

              <button
                type="button"
                className="text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100 border border-red-200 rounded-md shadow-md px-3 py-1 whitespace-nowrap cursor-pointer transform transition duration-300 hover:scale-107"
                onClick={() => {
                  deleteSingleTransaction(tx.id);
                }}
              >
                Delete
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-6 gap-5 text-start">
              <div className="flex flex-col min-w-0">
                <span className="transactions-data-label text-xs">From</span>

                <p className="transactions-data font-semibold truncate">
                  {tx.sender} {tx.senderLastName}
                </p>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="transactions-data-label text-xs">To</span>

                <p className="transactions-data font-semibold truncate">
                  {tx.receiver} {tx.receiverLastName}
                </p>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="transactions-data-label text-xs">Amount</span>

                <p className="transactions-data font-semibold truncate">
                  {tx.transactionAmount}
                </p>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="transactions-data-label text-xs">
                  Currency
                </span>

                <p className="transactions-data font-semibold truncate">
                  {tx.transactionCurrency}
                </p>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="transactions-data-label text-xs">
                  Description
                </span>

                <p className="transactions-data font-semibold truncate">
                  {tx.transactionDescription}
                </p>
              </div>

              <div className="flex flex-col min-w-0">
                <span className="transactions-data-label text-xs">Time</span>

                <p className="transactions-data font-semibold whitespace-nowrap overflow-y-auto">
                  {tx.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TransactionInnerHistoryComp;
