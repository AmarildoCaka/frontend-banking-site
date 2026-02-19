import { FaDollarSign, FaCalendarAlt, FaChartLine } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

const HeaderDashboardComp = () => {
  const { loanAmount, loanTerm } = useConditionalBankStore();

  const monthlyPayment = (loanAmount / loanTerm + loanAmount * 0.05).toFixed(2);

  return (
    <>
      <div className="max-w-7xl mx-auto mb-1">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Apply for a loan here
              </h1>

              <p className="text-gray-600">
                Configure your loan details and get instant estimates
              </p>
            </div>

            <div className="hidden md:flex space-x-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <FaDollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />

                <p className="text-sm text-gray-600">Amount</p>

                <p className="font-bold text-blue-600">
                  ${loanAmount.toLocaleString()}
                </p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-xl">
                <FaCalendarAlt className="w-8 h-8 text-green-600 mx-auto mb-2" />

                <p className="text-sm text-gray-600">Term</p>

                <p className="font-bold text-green-600">{loanTerm} months</p>
              </div>

              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <FaChartLine className="w-8 h-8 text-purple-600 mx-auto mb-2" />

                <p className="text-sm text-gray-600">Monthly</p>

                <p className="font-bold text-purple-600">${monthlyPayment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDashboardComp;
