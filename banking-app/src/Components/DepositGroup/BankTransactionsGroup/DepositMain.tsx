import { useState } from "react";

import { useNavigate } from "react-router-dom";

const DepositMainComp = () => {

  const [depositComponentRenderState, setDepositComponentRenderState] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleDepositNavigation = () => {

    navigate('/general-banking-actions/deposit-transaction');

  }

  const handleWithdrawNavigation = () => {

    navigate('/general-banking-actions/withdraw-transaction');

  }

  const handleBalancesNavigation = () => {

    navigate('/general-banking-actions/balances-overview');

  }

  return (

    <>
    
      {(depositComponentRenderState === true)? (

        <>
          
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 md:grid-rows-2 gap-8 w-full max-w-6xl mx-auto mt-12 p-8">

            <div className="transaction-pop-up flex flex-col items-center text-center rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 transform hover:-translate-y-1">

              <div className="text-6xl mb-5">💰</div>

              <h4 className="transaction-pop-up-text text-2xl font-semibold mb-3">Deposit</h4>

              <p className="transaction-pop-up-text text-base mb-7 max-w-xs">Add funds in your preferred currency with ease and security.</p>

              <button type="button" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-10 rounded-xl cursor-pointer shadow-lg hover:scale-105 transition tarnsform duration-300" onClick={() => {

                handleDepositNavigation();

              }}>Deposit</button>

            </div>

            <div className="transaction-pop-up flex flex-col items-center text-center rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 transform hover:-translate-y-1">
              
              <div className="text-6xl mb-5">💸</div>
              
              <h4 className="transaction-pop-up-text text-2xl font-semibold mb-3">Withdraw</h4>
              
              <p className="transaction-pop-up-text text-base mb-7 max-w-xs">Withdraw your available funds anytime with instant processing.</p>
              
              <button type="button" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-10 rounded-xl cursor-pointer shadow-lg hover:scale-105 transition tarnsform duration-300" onClick={() => {

                handleWithdrawNavigation();

              }}>Withdraw</button>
            
            </div>

            <div className="transaction-pop-up flex flex-col items-center text-center rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-8 transform hover:-translate-y-1 md:col-span-2 justify-self-center max-w-4xl mx-auto">

              <div className="text-6xl mb-5">📊</div>

              <h4 className="transaction-pop-up-text text-2xl font-semibold text-gray-900 dark:text-white mb-3">View Deposits</h4>

              <p className="transaction-pop-up-text text-base mb-7 max-w-xl">Check your total balance, manage multiple currencies, and track your financial growth effortlessly.</p>

              <button type="button" className="bg-gray-900 hover:bg-black text-white font-semibold py-2 px-10 rounded-xl cursor-pointer shadow-lg hover:scale-105 transition transform duration-300" onClick={() => {

                handleBalancesNavigation();

              }}>View Balances</button>

            </div>

          </div>

        </>

      ):(depositComponentRenderState === false)? (

        <>
        
          <div className="balances-element flex flex-col place-items-center w-full max-w-md rounded-2xl shadow-2xl space-y-8 m-10 px-8 py-10">
            
            <h3 className="balances-element-text text-center font-bold text-2xl leading-tight">Secure Personal Deposits</h3>

            <p className="balances-element-text text-center font-semibold text-base leading-relaxed">Store, deposit, withdraw and view your income in multiple currencies and access it anytime.</p>

            <button type="button" className="balances-start-btn text-white font-bold rounded-xl shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-lg px-6 py-3" onClick={() => {
              
              setDepositComponentRenderState(true);

            }}>Get Started</button>

          </div>

        </>

      ): null}
    
    </>

  );

}

export default DepositMainComp;