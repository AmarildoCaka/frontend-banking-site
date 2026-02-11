import LoanPlan from "../LoanCompsGroup/LoanComp";

const LoanPlanComp = () => {

  return (
  
    <>

      <section className="loan-plan-section flex flex-col justify-center place-items-center text-center">
    
        <h2 className="loan-plan-title font-bold text-center text-3xl mt-10">Set up a Loan</h2>

        <p className="loan-plan-description font-semibold text-lg text-center mt-5">Set up loans in the easiest and most secure way possible with our loan service</p>

        <LoanPlan/>
    
      </section>
    
    </>
  
  );

};

export default LoanPlanComp;