import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import BarsComp from "./BarsComp";
import MonthSelectComp from "./MonthSelectComp";
import BarsDepositHistory from "./BarsDepositHistory";
import BarsWithdrawHistory from "./BarsWithdrawHistory";

const BarChartComp = () => {
  const { selectedYear } = useBankStore();

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <section className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Financial Analytics Dashboard
          </h1>

          <p className="text-gray-600">
            Track your deposits and withdrawals throughout{" "}
            {JSON.stringify(selectedYear)}
          </p>
        </section>

        <hr className="border-t border-gray-300 mb-6" />

        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Monthly Transaction Overview
        </h2>

        <BarsComp />
      </div>

      <div className="flex flex-col bg-white rounded-xl shadow-lg gap-7 p-6 mb-8">
        <MonthSelectComp />

        <hr className="border-t border-gray-300" />

        <div className="rounded-xl shadow-lg p-5">
          <h1 className="font-bold text-xl mt-5">Transactions History</h1>

          <div className="grid justify-evenly sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-3 mt-5">
            <BarsDepositHistory />

            <BarsWithdrawHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default BarChartComp;
