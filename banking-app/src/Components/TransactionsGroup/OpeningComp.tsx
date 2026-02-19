import { useNavigate } from "react-router-dom";

const OpeningComp = () => {

  const navigate = useNavigate();

  const navigationFunct = () => {

    navigate('/general-banking-actions/transactions-making');

  }

  return (
  
    <>
    
      <div className="justify-center place-items-center text-center">

        <div className="transaction-element flex flex-col justify-center place-items-center w-full max-w-md rounded-2xl shadow-2xl space-y-4 px-8 py-8">

          <div className="transaction-icon rounded-full shadow-md p-5">

            <svg xmlns="http://www.w3.org/2000/svg" className="transaction-inner-icon w-10 h-10" fill="currentColor" viewBox="0 0 24 24">

              <path d="M17 1v2H6.41l4.3 4.29-1.42 1.42L2 2l7.29-7.29 1.42 1.42L6.41 1H17zM7 23v-2h10.59l-4.3-4.29 1.42-1.42L22 22l-7.29 7.29-1.42-1.42L17.59 23H7z" />

            </svg>

          </div>

          <h1 className="transaction-element-text text-center font-extrabold text-2xl leading-tight">Make Your Transactions Now!</h1>

          <p className="transaction-element-text text-center font-medium text-base leading-relaxed">

            Fast, secure, and seamless money transfers. Whether you're
            sending funds to family or paying for a service — we've got you
            covered.
          
          </p>

          <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside text-left w-full max-w-sm">

            <li className="transaction-element-text">No hidden fees</li>

            <li className="transaction-element-text">Instant confirmation</li>

            <li className="transaction-element-text">Full transaction history</li>

            <li className="transaction-element-text">24/7 support</li>

            <li className="transaction-element-text">Bank-grade security</li>
          
          </ul>

          <div className="transaction-reminder-section border rounded-lg p-4">
            
            <p className="transaction-reminder-text text-sm font-semibold">

              🔒 Reminder: Always double-check recipient details before
              confirming a transaction.

            </p>
          
          </div>

          <button type="button" className="transaction-start-btn font-bold bg-indigo-500 rounded-lg shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg px-6 py-3" onClick={() => {
            
            navigationFunct();

          }}>Get Started</button>

          <p className="text-xs text-gray-400 text-center">Trusted by users all around the world.</p>

        </div>

      </div>
    
    </>
  
  );

}

export default OpeningComp;