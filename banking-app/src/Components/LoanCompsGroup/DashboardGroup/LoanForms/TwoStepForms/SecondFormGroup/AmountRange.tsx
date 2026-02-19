import { FaChartLine } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

import { useMonthlyPaymentFunctHook } from "./incomeAndInterestLogic";

import { useInterestFunctHook } from "./incomeAndInterestLogic";

const AmountRangeComp = () => {
  const { loanAmount, setLoanAmount, secondStepFormFieldErrors } =
    useConditionalBankStore();

  const { interest } = useInterestFunctHook();

  const { monthlyPayment } = useMonthlyPaymentFunctHook();

  const loanAmountRangeGeneralValidationFunct = () => {
    if (
      loanAmount === 0 &&
      secondStepFormFieldErrors.loanRangeAmount === true
    ) {
      return (
        <>
          <p className="text-red-500 font-semibold text-md text-center mt-3">
            Loan amount has to be bigger than 0
          </p>
        </>
      );
    } else if (
      loanAmount === 0 &&
      secondStepFormFieldErrors.loanRangeAmount === false
    ) {
      return (
        <>
          <p className="text-green-500 font-semibold text-md text-center mt-3">
            Maximum borrowable amount is 50,000 (in your chosen currency)
          </p>
        </>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="loan-second-application-form-inner-wrapper flex flex-col justify-center place-items-center text-center gap-2 mb-3 p-3 rounded-md">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="text-left flex flex-col p-1">
            <h3 className="loan-second-application-form-text text-lg font-semibold mb-2">
              Loan Amount
            </h3>

            <p className="loan-second-application-form-text text-sm mb-2 font-bold">
              Slide to choose your loan amount
            </p>
          </div>

          <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-full border border-green-300 mb-8">
            <FaChartLine className="text-green-600 w-4 h-4" />

            <span className="text-xs font-semibold text-green-700">
              Pre-approved
            </span>
          </div>
        </div>

        <div>
          <p className="loan-second-application-form-text text-md text-center mb-2">
            Choose loan amount:
            <span className="text-indigo-500 font-bold text-2xl">
              {" "}
              ${loanAmount}
            </span>
          </p>

          <input
            type="range"
            min={0}
            max={50000}
            step={500}
            value={loanAmount}
            className="w-sm text-indigo-500 h-1 bg-blue-200 rounded-lg appearance-none cursor-pointer slider"
            onChange={(e) => {
              setLoanAmount(Number(e.target.value));
            }}
          />

          <div className="grid grid-cols-4 gap-3 mt-4">
            {[10000, 20000, 35000, 50000].map((amount) => (
              <>
                <button
                  type="button"
                  key={amount}
                  className={`cursor-pointer py-3 rounded-md font-semibold text-sm transition transform duration-300 ${loanAmount === amount ? "bg-indigo-600 text-white shadow-lg scale-105" : "bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-105"}`}
                  onClick={(e) => {
                    e.preventDefault();

                    setLoanAmount(amount);
                  }}
                >
                  ${amount / 1000}K
                </button>
              </>
            ))}
          </div>

          <div className="flex flex-row place-content-center gap-5 p-1 mt-4">
            <div className="bg-green-50 border-1 w-full h-18 border-green-300 rounded-md p-3 pt-2 text-left">
              <h3 className="font-semibold mb-1">Interest</h3>

              <p className="font-semibold text-lg text-green-600">{interest}</p>
            </div>

            <div className="bg-indigo-50 border-1 w-full h-18 border-indigo-300 rounded-md p-3 pt-2 text-left">
              <h3 className="font-semibold mb-1">Mothly Payment</h3>

              <p className="font-semibold text-lg text-indigo-600">
                {monthlyPayment}
              </p>
            </div>
          </div>

          {loanAmountRangeGeneralValidationFunct()}
        </div>

        <div className="mt-1 w-full bg-indigo-50 border border-indigo-300 rounded-md p-3">
          <p className="text-xs text-indigo-700 text-left">
            💡 <span className="font-semibold">Tip:</span> Lower amounts have
            faster approval times
          </p>
        </div>
      </div>
    </>
  );
};

export default AmountRangeComp;
