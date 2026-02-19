import { useBankStore } from "../../../store/FirstGroup/useBankStore";

const BalancesOverview = () => {
  const {
    firstBalanceActivityState,
    secondBalanceActivityState,
    thirdBalanceActivityState,
    balances,
  } = useBankStore();

  return (
    <>
      <section className="grid grid-cols-3 gap-4 mb-8">
        <div
          className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "bg-gray-300 border-gray-400" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "bg-yellow-50 border-yellow-200" : "bg-gray-300 border-gray-400"} p-3 rounded-lg border`}
        >
          <div
            className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "bg-gray-400" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "bg-yellow-500" : "bg-gray-400"} w-4 h-4 rounded-full mx-auto mb-2`}
          ></div>

          <p className="text-sm font-medium text-gray-600">USD</p>

          <p
            className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "text-gray-600" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "text-gray-800" : "text-gray-600"} text-lg font-bold`}
          >
            <span
              className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "text-gray-600" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "text-gray-800" : "text-gray-600"} text-lg font-bold`}
            >
              ${" "}
            </span>

            {firstBalanceActivityState &&
            secondBalanceActivityState &&
            thirdBalanceActivityState === "Disabled"
              ? "Frozen"
              : firstBalanceActivityState &&
                  secondBalanceActivityState &&
                  thirdBalanceActivityState === "Enabled"
                ? balances.USD.toLocaleString(undefined, {
                    minimumFractionDigits: 2,

                    maximumFractionDigits: 2,
                  })
                : "Frozen"}
          </p>
        </div>

        <div
          className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "bg-gray-300 border-gray-400" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "bg-blue-50 border-blue-200" : "bg-gray-300 border-gray-400"} p-3 rounded-lg border`}
        >
          <div
            className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "bg-gray-400" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "bg-blue-400" : "bg-gray-400"} w-4 h-4 rounded-full mx-auto mb-2`}
          ></div>

          <p className="text-sm font-medium text-gray-600">EURO</p>

          <p
            className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "text-gray-600" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "text-gray-800" : "text-gray-600"} text-lg font-bold`}
          >
            <span
              className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "text-gray-600" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "text-gray-800" : "text-gray-600"} text-lg font-bold`}
            >
              €{" "}
            </span>

            {firstBalanceActivityState &&
            secondBalanceActivityState &&
            thirdBalanceActivityState === "Disabled"
              ? "Frozen"
              : firstBalanceActivityState &&
                  secondBalanceActivityState &&
                  thirdBalanceActivityState === "Enabled"
                ? balances.EUR.toLocaleString(undefined, {
                    minimumFractionDigits: 2,

                    maximumFractionDigits: 2,
                  })
                : "Frozen"}
          </p>
        </div>

        <div
          className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "bg-gray-300 border-gray-400" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "bg-orange-50 border-orange-200" : "bg-gray-300 border-gray-400"} p-3 rounded-lg border`}
        >
          <div
            className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "bg-gray-400" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "bg-orange-500" : "bg-gray-400"} w-4 h-4 rounded-full mx-auto mb-2`}
          ></div>

          <p className="text-sm font-medium text-gray-600">GBP</p>

          <p
            className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "text-gray-600" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "text-gray-800" : "text-gray-600"} text-lg font-bold`}
          >
            <span
              className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "text-gray-600" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "text-gray-800" : "text-gray-600"} text-lg font-bold`}
            >
              £{" "}
            </span>

            {firstBalanceActivityState &&
            secondBalanceActivityState &&
            thirdBalanceActivityState === "Disabled"
              ? "Frozen"
              : firstBalanceActivityState &&
                  secondBalanceActivityState &&
                  thirdBalanceActivityState === "Enabled"
                ? balances.GBP.toLocaleString(undefined, {
                    minimumFractionDigits: 2,

                    maximumFractionDigits: 2,
                  })
                : "Frozen"}
          </p>
        </div>
      </section>
    </>
  );
};

export default BalancesOverview;
