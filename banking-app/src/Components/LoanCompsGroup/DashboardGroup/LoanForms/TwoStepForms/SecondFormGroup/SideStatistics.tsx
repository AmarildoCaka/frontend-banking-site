import { FaCalculator, FaChartLine } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

import { useMonthlyPaymentFunctHook } from "./incomeAndInterestLogic";

const SideStatisticsComp = () => {
  const { loanAmount, loanTerm } = useConditionalBankStore();

  const { monthlyPayment } = useMonthlyPaymentFunctHook();

  return (
    <>
      <section className="flex flex-col w-sm mt-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Payment Summary
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Monthly Payment</p>

                <p className="text-2xl font-bold text-purple-600">
                  ${monthlyPayment}
                </p>
              </div>

              <FaCalculator className="w-8 h-8 text-purple-600" />
            </div>

            <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
              <div>
                <p className="text-sm text-gray-600">Interest</p>

                <p className="text-lg font-bold text-green-600">
                  ${(monthlyPayment * loanTerm - loanAmount).toLocaleString()}
                </p>
              </div>

              <FaChartLine className="w-8 h-8 text-green-600" />
            </div>

            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-6 text-white text-center">
              <h4 className="font-bold text-lg mb-2">Trusted Platform</h4>

              <p className="text-sm opacity-90">
                Trusted by users all around the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideStatisticsComp;
