import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import { useGeneralInterestRateHook } from "../../../generalAppLogic";

const InterestComp = () => {
  const { depositAmount } = useConditionalBankStore();

  const interestRateData = useGeneralInterestRateHook();

  return (
    <>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Deposit Amount:</span>

            <span className="font-semibold">{depositAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Interest (1%):</span>

            <span className="font-semibold text-green-600">
              {interestRateData}
            </span>
          </div>

          <hr className="border-green-200" />

          <div className="flex justify-between text-sm font-bold">
            <span className="text-gray-800">Total Credit:</span>

            <span className="text-green-700">
              {depositAmount + interestRateData}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestComp;
