import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

const LoanHistoryComp = () => {
  const { showPopUpMessage } = useBankStore();

  const { loanUnit, setLoanUnit } = useConditionalBankStore();

  const clearHistoryFunct = () => {
    if (loanUnit.length > 0) {
      setLoanUnit([]);

      showPopUpMessage("Loan history deleted successfully", "success");
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40"></div>

      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[520px] bg-white rounded-xl shadow-2xl z-50 flex flex-col p-6 space-y-4">
        <h1 className="text-black font-extrabold text-3xl text-center">
          Loan History
        </h1>

        <div className="flex-shrink-0">
          <button
            type="button"
            className={`${loanUnit.length > 0 ? "text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300" : "text-gray-400 bg-gray-50 border-gray-200 cursor-not-allowed"} font-bold text-sm border rounded-lg px-4 py-2 whitespace-nowrap`}
            onClick={() => {
              clearHistoryFunct();
            }}
          >
            Clear History
          </button>
        </div>
      </div>
    </>
  );
};

export default LoanHistoryComp;
