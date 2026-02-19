import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

const MoreActionsComp = () => {
  const {
    setModalState,
    setDepositGeneralDetailsState,
    setWithdrawGeneralDetailsState,
    setAmountErasingHistory,
  } = useConditionalBankStore();

  return (
    <>
      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40"></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="relative flex flex-col justify-center place-items-center text-center w-[500px] h-[320px] rounded-2xl shadow-2xl overflow-x-auto space-y-4 animate-fadeIn bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-100 gap-2">
          <button
            type="button"
            className="absolute top-3 right-4 text-black font-bold text-md cursor-pointer transform transition duration-300 hover:scale-125 hover:text-red-500"
            onClick={() => {
              setModalState();
            }}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col justify-between gap-8">
            <section className="text-center gap-5">
              <h1 className="text-black font-bold text-3xl text-center mb-4 p-1">
                More Actions
              </h1>

              <p className="text-gray-600 font-semibold text-wrap">
                Select an operation below to proceed with management
              </p>
            </section>

            <hr className="border-t border-gray-300 dark:border-gray-600" />

            <section className="flex flex-col justify-evenly place-items-center text-center gap-y-3 p-1">
              <div className="flex flex-row justify-evenly place-items-center text-center gap-4 p-1">
                <button
                  type="button"
                  className="flex items-center gap-3 text-white font-bold text-sm bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl px-6 py-3 animate-buttonGlow"
                  onClick={() => {
                    setDepositGeneralDetailsState();

                    setModalState();
                  }}
                >
                  <FaPlus />
                  Deposit Details
                </button>

                <button
                  type="button"
                  className="flex items-center gap-3 text-white font-bold text-sm bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl px-6 py-3 animate-buttonGlow"
                  onClick={() => {
                    setWithdrawGeneralDetailsState();

                    setModalState();
                  }}
                >
                  <FaMinus />
                  Withdraw Details
                </button>
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-3 text-white font-bold text-sm bg-gradient-to-r from-red-500 to-rose-600 w-64 rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl px-6 py-3 animate-buttonGlow"
                onClick={() => {
                  setAmountErasingHistory();

                  setModalState();
                }}
              >
                <FaTrash />
                Erasing Details
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreActionsComp;
