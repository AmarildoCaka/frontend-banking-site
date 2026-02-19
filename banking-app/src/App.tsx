import { Route, Routes, Navigate } from "react-router-dom";

import BankingLandingPage from "./Components/EnteranceComp";
import DepositComp from "./Components/DepositGroup/BankTransactionsGroup/DepositGroup/DepositComp";
import WithdrawComp from "./Components/DepositGroup/BankTransactionsGroup/WithdrawGroup/WithdrawComp";
import BalancesOverviewComp from "./Components/DepositGroup/BalancesOverviewComp";
import LoanDashboardComp from "./Components/GeneralPaymentGroup/GeneralActivityGroup/LoanDashboard";
import NavBarComp from './Components/NavBarGroup/NavBarComp';
import FooterComp from './Components/EntreanceComps/FooterComp';
import PageNotFoundComp from './Components/404NotFound';
import ToTopBtnComp from './Components/ToTopBtnGroup/ToTopBtn';
import AboutComp from './Components/GeneralComps/AboutGroup/AboutComp';
import SettingsComp from './Components/GeneralComps/SettingsGroup/SettingsComp';
import ContactUsPageComp from './Components/GeneralComps/ContactUsGroup/ContactUsComp';
import MsgPageComp from './Components/GeneralComps/MsgPageGroup/MsgPageComp';
import CardLinkingFormComp from "./Components/CardLinkingSystem/LinkingFormsGroup/CardLinkingForm";
import InnerLoanHistoryComp from "./Components/LoanCompsGroup/LoanHistoryGroup/InnerLoanHistory";
import PieChartComp from "./Components/LoanCompsGroup/DashboardGroup/PieChartGroup/PieChartComp";
import LoanApplicationComp from "./Components/LoanCompsGroup/DashboardGroup/LoanForms/LoanApply";
import CardsQueueMainComp from "./Components/CardLinkingSystem/LinkingFormsGroup/CardsOverviewGroup/CardsQueueComp";
import GeneralCardListComp from "./Components/CardLinkingSystem/GeneralCardList";
import MainComp from "./Components/GeneralPaymentGroup/GeneralActivityGroup/CompGroup/MainComp";
import TransactionHistoryComp from "./Components/GeneralPaymentGroup/GeneralActivityGroup/CompGroup/MainTransactionsHistory";
import PayBillsComp from "./Components/BillsGroup/BillsCompGroup/PayBillsGroup/PayBillsComp";
import BillCategoriesComp from "./Components/BillsGroup/BillsCompGroup/BillCategoriesComp";

import './App.css';

const App = () => {

  return (
    
    <>

      <NavBarComp/>

      <Routes>
      
        <Route path="/" element={<BankingLandingPage/>}/>

        <Route path="/about" element={<AboutComp/>}/>

        <Route path="/account-settings" element={<SettingsComp/>}/>

        <Route path="/client-opinions" element={<MsgPageComp/>}/>

        <Route path="/contact-us" element={<ContactUsPageComp/>}/>

        <Route path="/general-banking-actions" element={<LoanDashboardComp/>}>

          <Route index element={<Navigate to="balances-overview" replace/>}/>

          <Route path="/general-banking-actions/balances-overview" element={<BalancesOverviewComp/>}/>

          <Route path="/general-banking-actions/deposit-transaction" element={<DepositComp/>}/>

          <Route path="/general-banking-actions/withdraw-transaction" element={<WithdrawComp/>}/>

          <Route path="/general-banking-actions/loan-overview" element={<InnerLoanHistoryComp/>}/>

          <Route path="/general-banking-actions/loan-statistics" element={<PieChartComp/>}/>

          <Route path="/general-banking-actions/loan-application" element={<LoanApplicationComp/>}/>

          <Route path="/general-banking-actions/transactions-making" element={<MainComp/>}/>

          <Route path="/general-banking-actions/transactions-history" element={<TransactionHistoryComp/>}/>

          <Route path="/general-banking-actions/unpaid-bills" element={<PayBillsComp/>}/>

          <Route path="/general-banking-actions/bill-categories" element={<BillCategoriesComp/>}/>

          <Route path="/general-banking-actions/link-card" element={<CardLinkingFormComp/>}/>

          <Route path="/general-banking-actions/cards-overview" element={<CardsQueueMainComp/>}/>

          <Route path="/general-banking-actions/cards-history" element={<GeneralCardListComp/>}/>

        </Route>

        <Route path="*" element={<PageNotFoundComp/>}/>

      </Routes>

      <FooterComp/>

      <ToTopBtnComp/>

    </>

  );

};

export default App;