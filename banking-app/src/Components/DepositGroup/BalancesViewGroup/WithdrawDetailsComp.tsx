import { FaTimes } from "react-icons/fa";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

const WithdrawDetailsComp = () => {
  const { withdrawHistoryUnitState, withdrawState, capturedTimeData } =
    useBankStore();

  const { setWithdrawGeneralDetailsState, setWithdrawHistoryFunct } =
    useConditionalBankStore();

  const lastWithdrawCurrencyFunct = () => {
    if (withdrawHistoryUnitState.length === 0) {
      const withdrawData = localStorage.getItem("withdrawCurrencyData");

      return withdrawData ? JSON.parse(withdrawData) : null;
    }

    const lastCurrency =
      withdrawHistoryUnitState[withdrawHistoryUnitState.length - 1]
        .withdrawCurrency;

    localStorage.setItem("withdrawCurrencyData", JSON.stringify(lastCurrency));

    return lastCurrency;
  };

  return (
    <>
      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40"></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative flex flex-col justify-center place-items-center text-center w-[500px] h-[320px] rounded-2xl shadow-2xl overflow-x-auto space-y-4 animate-fadeIn bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-100 gap-2">
          <button
            type="button"
            className="absolute top-3 right-4 text-black font-bold text-md cursor-pointer transform transition duration-300 hover:scale-125 hover:text-red-500"
            onClick={() => {
              setWithdrawGeneralDetailsState();
            }}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col justify-between gap-7">
            <section className="text-center border-b border-gray-300 p-3">
              <h1 className="text-black font-bold text-3xl p-1">
                Withdraw Details
              </h1>
            </section>

            <section className="flex flex-row justify-between place-items-center text-center gap-40">
              <div className="flex flex-col text-start">
                <p className="text-black font-bold p-1">
                  Last Amount Withdrawn:
                </p>

                <p className="text-black font-bold p-1">Withdraw Currency:</p>

                <p className="text-black font-bold p-1">
                  Last withdraw made at:
                </p>
              </div>

              <div className="flex flex-col text-end">
                <p className="text-blue-600 text-lg font-bold p-1">
                  {withdrawState}
                </p>

                <p className="text-blue-600 text-lg font-bold p-1">
                  {lastWithdrawCurrencyFunct()}
                </p>

                <p className="text-blue-600 text-lg font-bold p-1">
                  {capturedTimeData}
                </p>
              </div>
            </section>

            <section className="text-center w-full border-t border-gray-300 p-5">
              <button
                type="button"
                className="text-black font-bold text-center bg-[#e5de00] w-[300px] rounded-lg shadow-2xl cursor-pointer transfoprm transition duration-300 hover:scale-105 px-3 py-2"
                onClick={() => {
                  setWithdrawHistoryFunct();
                }}
              >
                View Withdraw History
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithdrawDetailsComp;
