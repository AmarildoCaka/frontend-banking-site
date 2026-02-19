import { useBankStore } from "../../../store/FirstGroup/useBankStore";

const TotalBalancesAmount = () => {
  const {
    firstBalanceActivityState,
    secondBalanceActivityState,
    thirdBalanceActivityState,
    balances,
  } = useBankStore();

  const totalBalance = balances.USD + balances.EUR + balances.GBP;

  return (
    <>
      <section
        className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "bg-gray-300 border-gray-400" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "bg-indigo-50 border-indigo-200" : "bg-gray-300 border-gray-400"} rounded-lg border mb-2 p-5`}
      >
        <p
          className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "text-gray-600" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "text-indigo-600" : "text-gray-600"} text-sm font-medium`}
        >
          Total Combined Balances Value:
        </p>

        <p
          className={`${firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Disabled" ? "text-gray-600" : firstBalanceActivityState && secondBalanceActivityState && thirdBalanceActivityState === "Enabled" ? "text-indigo-800" : "text-gray-600"} text-2xl font-bold`}
        >
          {firstBalanceActivityState &&
          secondBalanceActivityState &&
          thirdBalanceActivityState === "Disabled"
            ? "Account Frozen"
            : firstBalanceActivityState &&
                secondBalanceActivityState &&
                thirdBalanceActivityState === "Enabled"
              ? totalBalance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,

                  maximumFractionDigits: 2,
                })
              : "Account Frozen"}{" "}
        </p>
      </section>
    </>
  );
};

export default TotalBalancesAmount;
