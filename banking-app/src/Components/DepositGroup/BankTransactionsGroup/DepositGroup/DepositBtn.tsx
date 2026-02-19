import { useState, useEffect } from "react";

import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import { depositHistoryInterface } from "../../../../store/functInterfaces";

import { useGeneralInterestRateHook } from "../../../generalAppLogic";

const DepositBtnComp = () => {
  const [depositHistoryUnit, setDepositHistoryUnitChange] = useState<
    depositHistoryInterface[]
  >([]);

  const [timeDisplayState, setTimeDisplayState] = useState<string | null>(null);

  const {
    timeCapturingFunct,
    showPopUpMessage,
    deposit,
    loadSavedTime,
    capturedTimeData,
    setDepositHistoryUnit,
    timeStatementUpdateFunct,
  } = useBankStore();

  const {
    depositAmount,
    setDepositAmount,
    currency,
    setCurrency,
    setDepositErrorMessageState,
  } = useConditionalBankStore();

  const interestRateData = useGeneralInterestRateHook();

  const interest = interestRateData;

  useEffect(() => {
    loadSavedTime();

    setTimeDisplayState(capturedTimeData);
  }, [loadSavedTime, capturedTimeData]);

  useEffect(() => {
    setDepositHistoryUnit(depositHistoryUnit);
  }, [depositHistoryUnit, setDepositHistoryUnit]);

  const depositHistoryUnitCreation = () => {
    const newDepositUnitObj: depositHistoryInterface = {
      id: crypto.randomUUID(),

      depositAmount,

      currency,

      timeDisplayState,

      interest,
    };

    setDepositHistoryUnitChange((prev) => [...prev, newDepositUnitObj]);
  };

  const depositValidationFunct = () => {
    switch (true) {
      case depositAmount === 0:
        setDepositErrorMessageState(true);

        showPopUpMessage("Amount is 0. Specify your amount first", "error");

        break;

      case depositAmount > 0:
        deposit(depositAmount, currency);

        timeStatementUpdateFunct();

        depositHistoryUnitCreation();

        showPopUpMessage(
          `Deposit made successfully, deposited ${depositAmount} in ${currency}`,
          "success",
        );

        setDepositAmount(0);

        setCurrency("USD");

        setDepositErrorMessageState(false);

        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="text-center">
        <button
          type="button"
          className={`${depositAmount > 0 ? "text-white bg-indigo-600 cursor-pointer" : depositAmount === 0 ? "text-gray-400 bg-gray-300 cursor-not-allowed" : "text-gray-400 bg-gray-300 cursor-not-allowed"} font-bold w-full rounded-md transform transition duration-300 hover:scale-105 py-3`}
          onClick={() => {
            depositValidationFunct();

            timeCapturingFunct();
          }}
        >
          Deposit Amount
        </button>
      </div>
    </>
  );
};

export default DepositBtnComp;
