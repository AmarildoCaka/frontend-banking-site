import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { Doughnut } from "react-chartjs-2";

import { chartData, chartOptions } from "../../GeneralLogic/compsLogic";

const AmountAvailability = () => {
  const {
    firstBalanceActivityState,
    secondBalanceActivityState,
    thirdBalanceActivityState,
    balances,
  } = useBankStore();

  const accountAvailabilityFunct = () => {
    if (
      firstBalanceActivityState &&
      secondBalanceActivityState &&
      thirdBalanceActivityState === "Disabled"
    ) {
      return <p className="font-bold text-3xl text-gray-600">Account Frozen</p>;
    } else if (
      firstBalanceActivityState &&
      secondBalanceActivityState &&
      thirdBalanceActivityState === "Enabled"
    ) {
      return balances.USD || balances.EUR || balances.GBP > 0 ? (
        <>
          <section className="h-80">
            <Doughnut data={chartData} options={chartOptions} />
          </section>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-evenly place-items-center text-center p-5">
            <p className="text-gray-400 text-2xl font-bold">
              Your balances are empty
            </p>

            <p className="text-gray-400 text-md font-semibold">
              Cannot display the amounts on Chart Mode
            </p>
          </div>
        </>
      );
    } else {
      return <p className="font-bold text-3xl text-gray-600">Frozen</p>;
    }
  };

  return (
    <>
      <section className="h-full mb-6">{accountAvailabilityFunct()}</section>
    </>
  );
};

export default AmountAvailability;