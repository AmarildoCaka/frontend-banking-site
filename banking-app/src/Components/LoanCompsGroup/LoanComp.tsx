import { useState, useEffect } from "react";

import { useBankStore } from "../../store/useBankStore";

import { useConditionalBankStore } from "../../store/secondBankStore";

import LoanEntranceComp from "./LoanEntranceComp";
import TopAlertComp from "../GeneralLogic/TopAlertComp";

const LoanPlan = () => {

  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { showFAQ, loanUnit, setLoanUnit } = useConditionalBankStore();

  useEffect(() => {

    if (showFAQ) {
    
      document.body.classList.add("overflow-hidden");
    
    } else {
    
      document.body.classList.remove("overflow-hidden");
    
    }

    return () => {
    
      document.body.classList.remove("overflow-hidden");
    
    };
  
  }, [showFAQ]);

  useEffect(() => {
  
    const savedLoans = localStorage.getItem("loan");

    if (savedLoans) {
  
      setLoanUnit(JSON.parse(savedLoans));
  
    }

    setIsInitialized(true);
  
  }, [setLoanUnit]);

  useEffect(() => {
  
    if (isInitialized) {
  
      localStorage.setItem("loan", JSON.stringify(loanUnit));
  
    }
  
  }, [loanUnit, isInitialized]);

  return (
    
    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="text-center p-1">

        <LoanEntranceComp/>

      </section>

    </>

  );

};

export default LoanPlan;