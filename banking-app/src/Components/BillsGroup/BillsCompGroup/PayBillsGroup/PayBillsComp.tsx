import { useEffect } from "react";

import { FaInfoCircle } from "react-icons/fa";

import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import { useFourthBankStore } from "../../../../store/FourthGroup/fourthBankStore";

import { useBillsLogicCustomHook } from "../../billsGroupLogic";

import UnpaidBillsComp from "./UnpaidBillsComp";
import UnpaidBillsInfoComp from "../../BillsOverlayGroup/UnpaidBillsInfoComp";
import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const PayBillsComp = () => {
  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { setActiveTab } = useConditionalBankStore();

  const {
    generalBillsElement,
    selectedBills,
    paidBills,
    setUnpaidBillsInfoState,
  } = useFourthBankStore();

  const { billCheckingFunct, handlePaySelected } = useBillsLogicCustomHook();

  useEffect(() => {
    setActiveTab("billsPayment");
  }, [setActiveTab]);

  const totalSelected = selectedBills.reduce((sum, id) => {
    const bill = generalBillsElement.find((b) => b.id === id);

    return sum + (bill ? bill.amount : 0);
  }, 0);

  const unpaidBills = generalBillsElement.filter(
    (bill) => !paidBills.includes(bill.id),
  );

  const getUncheckBtnStyle = (enabled: boolean) =>
    enabled
      ? "bg-gray-200 text-gray-600 border border-gray-600 cursor-not-allowed"
      : "bg-indigo-100 text-indigo-600 border border-indigo-600 cursor-pointer duration-300 transform transition hover:scale-105";

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section>
        <h1 className="loan-first-form-text text-2xl font-bold mt-18 mb-5">
          Unpaid Bills
        </h1>

        <div className="p-5">
          <div className="mb-5 bg-blue-50 border border-blue-200 rounded-md p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg text-blue-600 font-semibold">
                  Selected for Payment
                </p>

                <p className="text-2xl font-bold text-blue-600">
                  ${totalSelected.toFixed(2)}
                </p>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  disabled={selectedBills.length === 0}
                  className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-slate-300 cursor-pointer transform transition duration-300 hover:scale-105 disabled:cursor-not-allowed"
                  onClick={() => {
                    handlePaySelected(generalBillsElement);
                  }}
                >
                  Pay Selected{" "}
                  {generalBillsElement.length === 1
                    ? "Bill"
                    : generalBillsElement.length > 1
                      ? "Bills"
                      : "Bill"}
                </button>

                <p className="font-semibold text-indigo-600 mt-1">
                  ({selectedBills.length}{" "}
                  {selectedBills.length === 1
                    ? "bill"
                    : selectedBills.length > 1
                      ? "bills"
                      : "bill"}{" "}
                  selected)
                </p>
              </div>
            </div>
          </div>

          <hr className="w-full" />

          <div className="flex flex-row justify-between items-center my-2 p-1">
            <div className="flex flex-row justify-evenly items-center gap-2">
              <div className="bg-indigo-600 w-2 h-2 rounded-full mt-1"></div>

              <h1 className="bills-text text-lg font-semibold">
                Pending Bills
              </h1>

              <div className="border-l border-gray-500 h-5"></div>

              <div className="text-center">
                <button
                  type="button"
                  className="text-indigo-600 rounded-full cursor-pointer transform transition duration-300 hover:scale-105 mt-1"
                  onClick={() => {
                    setUnpaidBillsInfoState(true);
                  }}
                >
                  <FaInfoCircle size={20} />
                </button>
              </div>
            </div>

            <div className="flex flex-row justify-evenly items-center gap-3">
              <button
                type="button"
                className="text-sm font-semibold text-center bg-indigo-100 text-indigo-600 border border-indigo-600 rounded-md cursor-pointer duration-300 transform transition hover:scale-105 px-2 py-1"
                onClick={() => {
                  billCheckingFunct("check");
                }}
              >
                Check all bills
              </button>

              <div className="border-l border-gray-500 h-5"></div>

              <button
                type="button"
                className={`text-sm font-semibold text-center border rounded-md px-2 py-1 ${getUncheckBtnStyle(selectedBills.length === 0)}`}
                onClick={() => {
                  billCheckingFunct("uncheck");
                }}
              >
                Uncheck all bills
              </button>

              <div className="border-l border-gray-500 h-5"></div>

              <div className="flex flex-row justify-evenly items-center gap-2">
                <div className="bg-indigo-600 w-2 h-2 rounded-full mt-1"></div>

                <div>
                  <span className="bills-text font-semibold">Total Bills:</span>{" "}
                  <span className="font-bold text-indigo-600">
                    {unpaidBills.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-full" />

          <UnpaidBillsComp />

          <UnpaidBillsInfoComp />
        </div>
      </section>
    </>
  );
};

export default PayBillsComp;
