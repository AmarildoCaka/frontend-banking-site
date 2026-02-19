import { FaTimes } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

const ErrorMessageOverlayComp = () => {
  const {
    depositErrorMessageState,
    withdrawErrorMessageState,
    setDepositErrorMessageState,
    setWithdrawErrorMessageState,
  } = useConditionalBankStore();

  if (depositErrorMessageState === true) {
    setTimeout(() => {
      setDepositErrorMessageState(false);
    }, 10000);
  }

  if (withdrawErrorMessageState === true) {
    setTimeout(() => {
      setWithdrawErrorMessageState(false);
    }, 10000);
  }

  return (
    <>
      <div className="flex flex-col justify-center place-items-center text-center p-1 mt-2">
        {depositErrorMessageState && (
          <>
            <div className="flex flex-row place-items-center justify-between text-center w-full bg-gradient-to-r from-red-50 to-red-50 border border-red-100 rounded-md mb-2 p-5">
              <p className="text-red-500 font-bold">
                Empty amount form, please enter an amount
              </p>

              <button
                type="button"
                className="text-red-500 cursor-pointer transform transition duration-300 hover:scale-105 hover:text-red-600"
                onClick={() => {
                  setDepositErrorMessageState(false);
                }}
              >
                <FaTimes />
              </button>
            </div>
          </>
        )}

        {withdrawErrorMessageState && (
          <>
            <div className="flex flex-row place-items-center justify-between text-center w-full bg-gradient-to-r from-red-50 to-red-50 border border-red-100 rounded-md mb-2 p-5">
              <p className="text-red-500 font-bold">
                Empty amount form, please enter an amount
              </p>

              <button
                type="button"
                className="text-red-500 cursor-pointer transform transition duration-300 hover:scale-105 hover:text-red-600"
                onClick={() => {
                  setWithdrawErrorMessageState(false);
                }}
              >
                <FaTimes />
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ErrorMessageOverlayComp;
