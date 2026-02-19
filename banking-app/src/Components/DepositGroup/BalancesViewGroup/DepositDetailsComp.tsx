import { FaTimes } from "react-icons/fa";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

const DepositDetailsComp = () => {
  const { amountState, depositHistoryUnitState, capturedTimeData } =
    useBankStore();

  const { setDepositGeneralDetailsState, setDepositHistoryFunct } =
    useConditionalBankStore();

  const lastDepositCurrencyFunct = () => {
    if (depositHistoryUnitState.length === 0) {
      const depositData = localStorage.getItem("depositCurrencyData");

      return depositData ? JSON.parse(depositData) : null;
    }

    const lastCurrency =
      depositHistoryUnitState[depositHistoryUnitState.length - 1].currency;

    localStorage.setItem("depositCurrencyData", JSON.stringify(lastCurrency));

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
              setDepositGeneralDetailsState();
            }}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col justify-between gap-7">
            <section className="text-center border-b border-gray-300 p-3">
              <h1 className="text-black font-bold text-3xl p-1">
                Deposit Details
              </h1>
            </section>

            <section className="flex flex-row justify-between place-items-center text-center gap-40">
              <div className="flex flex-col text-start">
                <p className="text-black font-bold p-1">
                  Last Amount Deposited:
                </p>

                <p className="text-black font-bold p-1">Deposit Currency:</p>

                <p className="text-black font-bold p-1">
                  Last deposit made at:
                </p>
              </div>

              <div className="flex flex-col text-end">
                <p className="text-blue-600 text-lg font-bold p-1">
                  {amountState}
                </p>

                <p className="text-blue-600 text-lg font-bold p-1">
                  {lastDepositCurrencyFunct()}
                </p>

                <p className="text-blue-600 text-lg font-bold p-1">
                  {capturedTimeData}
                </p>
              </div>
            </section>

            <section className="text-center border-t border-gray-300 w-full p-5">
              <button
                type="button"
                className="text-black font-bold bg-[#e5de00] w-[300px] rounded-md shadow-2xl cursor-pointer transfoprm transition duration-300 hover:scale-105 px-3 py-2"
                onClick={() => {
                  setDepositHistoryFunct();

                  setDepositGeneralDetailsState();
                }}
              >
                View Deposit History
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepositDetailsComp;
