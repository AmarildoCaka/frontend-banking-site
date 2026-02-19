import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const BarsInnerDepositHistory = () => {
  const {
    depositHistoryUnitState,
    deleteSingleDepositUnit,
    alertVisibility,
    alertType,
    alertMessage,
    showPopUpMessage,
  } = useBankStore();

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      {depositHistoryUnitState.length > 0 ? (
        depositHistoryUnitState.map((deposit, index) => (
          <div
            key={deposit.id}
            className="flex flex-row bg-green-50 justify-evenly rounded p-2"
          >
            <p className="text-green-500 font-bold border border-green-500 rounded-full w-7 h-7 text-center">
              {index + 1}
            </p>

            <span className="font-bold text-green-500">
              +${deposit.amount}{" "}
              <span className="text-green-500 font-medium">in</span>{" "}
              {deposit.currency}
            </span>

            <section className="text-green-500 font-bold">
              <span className="text-green-500 font-medium">at </span>

              {deposit.timeDisplayState}
            </section>

            <p className="font-bold text-green-500">
              <span className="text-green-500 font-medium">Interest: </span>

              {deposit.interest}
            </p>

            <div className="w-[1.5px] h-7 bg-gray-300 ml-2 mr-2"></div>

            <button
              type="button"
              className="text-green-500 font-bold bg-green-50 border border-green-500 rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:text-green-700 hover:border-green-700 px-2"
              onClick={() => {
                deleteSingleDepositUnit(deposit.id);

                showPopUpMessage(
                  `Deposit number ${index + 1} deleted successfully`,
                  "success",
                );
              }}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <>
          <div className="text-center mt-3">
            <p className="text-gray-400 text-md font-semibold">
              No deposits made this month
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default BarsInnerDepositHistory;
