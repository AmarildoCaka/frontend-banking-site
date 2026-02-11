import { useState, useEffect, createContext } from "react";

import { Route, Routes, Navigate } from "react-router-dom";

import BankingLandingPage from "./Components/EnteranceComp";
import SignUp from "./Components/SignUpComp";
import Login from "./Components/LoginComp";
import Profile from "./Components/ProfileComp";
import MultiCurrencyDeposit from "./Components/DepositGroup/BankTransactionsGroup/DepositGroup/DepositComp";
import WithdrawComp from "./Components/DepositGroup/BankTransactionsGroup/WithdrawGroup/WithdrawComp";
import ToggleSwitchComp from "./Components/DepositGroup/ToggleSwitchComp";
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

export const AuthContext = createContext();

interface timestampInterface {

  seconds?: number;

  minutes?: number;

  hour?: number;

  date?: number;

  day?: string;

  month?: string;

  year?: number;

}

const App = () => {

  const [user, setUser] = useState<null>(null);

  const [timestamp, setTimestamp] = useState<timestampInterface>({});

  useEffect(() => {
  
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(storedUser)
    {

      setUser(storedUser);
    
    }
  
  }, []);

  const trackSubmissionTime = () => {

    const now = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    setTimestamp(
      
      {

        seconds: now.getSeconds(),

        minutes: now.getMinutes(),

        hour: now.getHours(),

        date: now.getDate(),

        day: days[now.getDay()],

        month: months[now.getMonth()],

        year: now.getFullYear()

      }
    
    );

  };

  const seconds = timestamp.seconds;

  const minutes = timestamp.minutes;

  const hours = timestamp.hour;

  const date = timestamp.date;

  const day = timestamp.day;

  const month = timestamp.month;

  const year = timestamp.year;

  const signUp = (userData) => {

    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);

    trackSubmissionTime();
  
  };

  const login = (credentials) => {
    
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(storedUser && storedUser.firstName === credentials.firstName && storedUser.lastName === credentials.lastName && storedUser.email === credentials.email && storedUser.password === credentials.password && storedUser.age === credentials.age && storedUser.gender === credentials.gender && storedUser.birthDay === credentials.birthDay && storedUser.birthMonth === credentials.birthMonth && storedUser.birthYear === credentials.birthYear && storedUser.accountNumber === credentials.accountNumber && storedUser.iban === credentials.iban && storedUser.accoundId === credentials.accountId)
    {

      setUser(storedUser);

      return true;
    
    }

    return false;
  
  };

  const logout = () => {

    setUser(null);

  };

  return (
    
    <>

      <AuthContext.Provider value={{ user, signUp, login, logout, seconds, minutes, hours, date, day, month, year }}>
        
        <NavBarComp/>

        <Routes>
        
          <Route path="/" element={<BankingLandingPage/>}/>

          <Route path="/signup" element={<SignUp/>}/>

          <Route path="/login" element={<Login/>}/>

          <Route path="/profile" element={(user)? <Profile/>: <Navigate to="/login"/>}/>

          <Route path="/about" element={<AboutComp/>}/>

          <Route path="/account-settings" element={<SettingsComp/>}/>

          <Route path="/client-opinions" element={<MsgPageComp/>}/>

          <Route path="/contact-us" element={<ContactUsPageComp/>}/>

          <Route path="/depositComp" element={<MultiCurrencyDeposit/>}/>

          <Route path="/withdrawComp" element={<WithdrawComp/>}/>

          <Route path="/viewBalances" element={<ToggleSwitchComp/>}/>

          <Route path="/general-banking-actions" element={<LoanDashboardComp/>}>

            {/* <Route index element={<Navigate to="/general-banking-actions/loan-overview" replace/>}/> */}

            <Route path="loan-overview" element={<InnerLoanHistoryComp/>}/>

            <Route path="loan-statistics" element={<PieChartComp/>}/>

            <Route path="loan-application" element={<LoanApplicationComp/>}/>

            <Route path="transactions-making" element={<MainComp/>}/>

            <Route path="transactions-history" element={<TransactionHistoryComp/>}/>

            <Route path="unpaid-bills" element={<PayBillsComp/>}/>

            <Route path="bill-categories" element={<BillCategoriesComp/>}/>

            <Route path="link-card" element={<CardLinkingFormComp/>}/>

            <Route path="cards-overview" element={<CardsQueueMainComp/>}/>

            <Route path="cards-history" element={<GeneralCardListComp/>}/>

          </Route>

          <Route path="*" element={<PageNotFoundComp/>}/>

        </Routes>

        <FooterComp/>

      </AuthContext.Provider>
    
      <ToTopBtnComp/>

    </>

  );

};

export default App;