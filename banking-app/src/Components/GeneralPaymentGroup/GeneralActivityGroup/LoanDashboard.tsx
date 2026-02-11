import { Outlet } from "react-router-dom";

import SidebarComp from "../SideBarGroup/SidebarComp.tsx";

// import InnerLoanHistoryComp from "../../LoanCompsGroup/LoanHistoryGroup/InnerLoanHistory.tsx";
// import PieChartComp from "../../LoanCompsGroup/DashboardGroup/PieChartGroup/PieChartComp.tsx";
// import LoanApplicationComp from "../../LoanCompsGroup/DashboardGroup/LoanForms/LoanApply.tsx";
// import MainComp from "./CompGroup/MainComp.tsx";
// import TransactionHistoryComp from "./CompGroup/MainTransactionsHistory.tsx";
// import CardLinkingFormComp from "../../CardLinkingSystem/LinkingFormsGroup/CardLinkingForm.tsx";
// import GeneralCardListComp from "../../CardLinkingSystem/GeneralCardList.tsx";
// import CardsQueueMainComp from "../../CardLinkingSystem/LinkingFormsGroup/CardsOverviewGroup/CardsQueueComp.tsx";
// import BillCategoriesComp from "../../BillsGroup/BillsCompGroup/BillCategoriesComp.tsx";
// import PayBillsComp from "../../BillsGroup/BillsCompGroup/PayBillsGroup/PayBillsComp.tsx";

const LoanDashboardComp = () => {
  
  return (

    <>
    
      <div className="main-dashboard-content-wrapper flex min-h-screen overflow-x-hidden">
            
        <SidebarComp/>

        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-x-hidden pt-22 md:ml-0">
          
          {/* <div className="space-y-4 sm:space-y-6 max-w-full">

            <InnerLoanHistoryComp/>
            
            <PieChartComp/>
            
            <LoanApplicationComp/>
            
            <CardLinkingFormComp/>
            
            <CardsQueueMainComp/>
            
            <GeneralCardListComp/>
            
            <MainComp/>
            
            <TransactionHistoryComp/>
            
            <PayBillsComp/>
            
            <BillCategoriesComp/>
          
          </div> */}

          <Outlet/>

        </main>
        
      </div>
    
    </>

  );

};

export default LoanDashboardComp;