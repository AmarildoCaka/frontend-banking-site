import { useBankStore } from "../../../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../../../../store/ThirdGroup/thirdBankStore";

import TopAlertComp from "../../../../../GeneralLogic/TopAlertComp";

const LoanStatisticsActionsComp = () => {
  const { showPopUpMessage, alertVisibility, alertType, alertMessage } =
    useBankStore();

  const { generalLoanDetails, setGeneralLoanDetailsFunct } =
    useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const deleteLoanStatisticItemsFunct = () => {
    if (generalLoanDetails.length > 0) {
      setGeneralLoanDetailsFunct([]);

      showPopUpMessage(
        "Loan statistic history deleted successfully",
        "success",
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="flex flex-row justify-between w-full mt-5 p-1">
        <button
          type="button"
          className={`rounded-md font-bold border px-3 py-2 ${generalLoanDetails.length > 0 ? "text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer transform transition duration-300 hover:scale-105" : generalLoanDetails.length === 0 ? "text-gray-400 bg-gray-50 border-gray-200 cursor-not-allowed" : "text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer transform transition duration-300 hover:scale-105"}`}
          onClick={() => {
            deleteLoanStatisticItemsFunct();
          }}
        >
          Clear History
        </button>

        <p
          className={`text-bleck font-semibold p-1 ${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"}`}
        >
          Total:{" "}
          <span className="font-bold text-indigo-600">
            {generalLoanDetails.length}
          </span>
        </p>
      </section>
    </>
  );
};

export default LoanStatisticsActionsComp;