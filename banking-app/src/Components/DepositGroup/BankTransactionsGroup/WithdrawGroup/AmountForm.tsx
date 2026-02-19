import { FaRegCopy } from "react-icons/fa";

import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import WithdrawTopTextComp from "./WithdrawTopText";

const AmountFormComp = () => {
  const { setWithdrawState, showPopUpMessage } = useBankStore();

  const {
    withdrawAmount,
    setWithdrawAmount,
    withdrawErrorMessageState,
    setWithdrawErrorMessageState,
  } = useConditionalBankStore();

  const equalisingAmountFunct = () => {
    switch (true) {
      case withdrawAmount > 0:
        setWithdrawState(Number(withdrawAmount));

        break;

      case withdrawAmount === 0:
        return null;

      default:
        break;
    }
  };

  const backToZeroFunct = () => {
    switch (true) {
      case withdrawAmount > 0:
        setWithdrawAmount(0);

        showPopUpMessage("Amount is back to 0", "info");

        break;

      case withdrawAmount === 0:
        showPopUpMessage("Your amount is already 0", "error");

        break;

      default:
        return null;
    }
  };

  const copyAmountFunct = () => {
    switch (true) {
      case withdrawAmount > 0:
        navigator.clipboard.writeText(JSON.stringify(withdrawAmount));

        showPopUpMessage("Amount Copied Successfully", "success");

        break;

      case withdrawAmount === 0:
        showPopUpMessage("Your amount is 0", "info");

        break;

      default:
        return null;
    }
  };

  return (
    <>
      <WithdrawTopTextComp />

      <hr className="border-t-2 border-gray-400 my-4" />

      <div className="space-y-2">
        <label className="withdraw-form-label block font-semibold">
          Enter Amount
        </label>

        <div className="relative w-full">
          <input
            type="number"
            value={withdrawAmount}
            className="withdraw-form text-left text-gray-700 font-bold w-full border border-gray-400 rounded-md cursor-pointer transform transition duration-300 hover:scale-103 pr-16 p-4"
            placeholder="Enter your amount here"
            onChange={(e) => {
              setWithdrawAmount(Number(e.target.value));

              equalisingAmountFunct();

              return withdrawErrorMessageState === true
                ? setWithdrawErrorMessageState(false)
                : null;
            }}
          />

          <button
            type="button"
            className="withdraw-form-function-btn absolute right-10 top-1/2 -translate-y-1/2 text-black font-bold text-lg text-center cursor-pointer transform transition durarion-300 hover:scale-105"
            onClick={() => {
              backToZeroFunct();
            }}
          >
            ⌫
          </button>

          <button
            type="button"
            className="withdraw-form-function-btn absolute right-18 top-1/2 -translate-y-1/2 text-black font-bold text-lg text-center cursor-pointer transform transition durarion-300 hover:scale-105"
            onClick={() => {
              copyAmountFunct();
            }}
          >
            <FaRegCopy />
          </button>
        </div>
      </div>
    </>
  );
};

export default AmountFormComp;
