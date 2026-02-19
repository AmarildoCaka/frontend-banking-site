import { useNavigate } from "react-router-dom";

const LoanEntranceComp = () => {

  const navigate = useNavigate();

  const navigationFunct = () => {

    navigate('/general-banking-actions/loan-application');

  }

  return (
  
    <>
    
      <div className="loan-plan-element flex flex-col place-items-center w-full max-w-md rounded-2xl shadow-2xl space-y-8 m-10 px-8 py-10">
        
        <div className="loan-plan-icon rounded-full shadow-md p-4">
        
          <svg xmlns="http://www.w3.org/2000/svg" className="loan-plan-inner-icon w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M5 6h14l-7-3-7 3zM4 10v10h16V10M10 14h4"/>
        
          </svg>
        
        </div>

        <h1 className="loan-plan-text text-gray-900 text-center font-bold text-2xl leading-tight">Start Your Loan Journey</h1>

        <p className="loan-plan-text text-gray-600 text-center font-semibold text-base leading-relaxed">Secure, easy, and fast loan management tailored for you.</p>

        <button type="button" className="loan-plan-btn text-white font-bold bg-indigo-500 rounded-xl shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg px-6 py-3" onClick={() => {
        
          navigationFunct();

        }}>Apply for a Loan</button>

      </div>
    
    </>

  );

}

export default LoanEntranceComp;