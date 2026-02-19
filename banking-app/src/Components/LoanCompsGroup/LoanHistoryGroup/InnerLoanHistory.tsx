import { useEffect } from "react";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import LoanHeaderComp from "../DashboardGroup/LoanOverviewGroup/LoanHeader";
import EmptyHistoryComp from "./InnerHistoryGroup/EmptyHistoryComp";
import LoanHistoryListComp from "./InnerHistoryGroup/LoanHistoryList";
import TopAlertComp from "../../GeneralLogic/TopAlertComp";

const InnerLoanHistoryComp = () => {
  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { setActiveTab, loanUnit } = useConditionalBankStore();

  useEffect(() => {
    setActiveTab("overview");
  }, [setActiveTab]);

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="flex flex-col mt-23">
        <h1 className="main-dashboard-text text-2xl font-bold">
          Loan Overview
        </h1>

        <LoanHeaderComp />

        <div className="flex-1 overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          {loanUnit.length === 0 ? (
            <>
              <EmptyHistoryComp />
            </>
          ) : (
            <>
              <LoanHistoryListComp />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default InnerLoanHistoryComp;
