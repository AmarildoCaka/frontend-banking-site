import { Outlet } from "react-router-dom";

import SidebarComp from "../SideBarGroup/SidebarComp.tsx";

import ShowFaqPopUpComp from "../../LoanCompsGroup/LoanPopUpComps/ShowFaq.tsx";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore.ts";

const LoanDashboardComp = () => {
  const { showFAQ } = useConditionalBankStore();

  return (
    <>
      <div className="main-dashboard-content-wrapper flex min-h-screen overflow-x-hidden">
        <SidebarComp />

        <main className="flex-1 sm:p-6 md:p-8 overflow-x-hidden pt-22 md:ml-0">
          <Outlet />
        </main>

        {showFAQ && (
          <>
            <ShowFaqPopUpComp />
          </>
        )}
      </div>
    </>
  );
};

export default LoanDashboardComp;
