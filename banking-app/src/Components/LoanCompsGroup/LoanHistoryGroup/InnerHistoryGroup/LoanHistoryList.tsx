import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const LoanHistoryListComp = () => {
  const { showPopUpMessage, alertVisibility, alertType, alertMessage } =
    useBankStore();

  const { loanUnit, setLoanUnit, generalLoanDetails } =
    useConditionalBankStore();

  const deleteSingleLoanFunct = (id: string) => {
    const newLoans = loanUnit.filter((t) => t.id !== id);

    setLoanUnit(newLoans);

    showPopUpMessage("Loan deleted successfully", "success");
  };

  const interestData = generalLoanDetails.at(-1)?.interest ?? 0;

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <div className="mt-2 space-y-5 overflow-y-auto h-96 p-5">
        {loanUnit.map((loan, index) => (
          <div
            key={loan.id}
            className="loan-element flex flex-col gap-6 w-full rounded-lg shadow-md max-w-4xl mx-auto p-6 transition hover:shadow-xl"
          >
            <div className="w-full flex justify-between items-center border-b border-gray-100 pb-3">
              <p className="loan-element-number text-gray-700 font-semibold text-sm">
                Loan No:
                <span className="font-bold text-md text-indigo-600">
                  {" "}
                  #{index + 1}
                </span>
              </p>

              <button
                type="button"
                className="text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100 border border-red-200 rounded-md px-3 py-1.5 transition transform duartion-300 hover:scale-105 cursor-pointer"
                onClick={() => {
                  deleteSingleLoanFunct(loan.id);
                }}
              >
                Delete
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
              <div>
                <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                  Description
                </p>

                <p className="loan-data font-bold text-sm line-clamp-2">
                  {loan.loanForm}
                </p>
              </div>

              <div>
                <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                  First Name
                </p>

                <p className="loan-data font-bold text-sm">
                  {loan.loanFirstName}
                </p>
              </div>

              <div>
                <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                  Last Name
                </p>

                <p className="loan-data font-bold text-sm">
                  {loan.loanLastName}
                </p>
              </div>

              <div>
                <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                  Job Title
                </p>

                <p className="loan-data font-bold text-sm">{loan.jobTitle}</p>
              </div>

              <div>
                <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                  Monthly Income
                </p>

                <p className="loan-data font-bold text-sm">
                  {loan.monthlyIncome.toLocaleString()} in{" "}
                  {loan.monthlyIncomeCurrency}
                </p>
              </div>

              <div>
                <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                  Loan Amount
                </p>

                <p className="loan-data font-bold text-base">
                  {loan.loanAmount.toLocaleString()} in {loan.loanCurrency}
                </p>
              </div>

              <div>
                <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                  Payment Term
                </p>

                <p className="loan-data font-bold text-base">
                  {loan.loanTerm} months
                </p>
              </div>

              <div>
                <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                  Interest
                </p>

                <p className="loan-data font-bold text-base">{interestData}</p>
              </div>

              <div>
                <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                  Monthly Payment
                </p>

                <p className="loan-data font-bold text-base">
                  {loan.secondMonthlyPayment}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LoanHistoryListComp;
