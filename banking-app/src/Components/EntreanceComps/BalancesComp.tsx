import DepositMainComp from '../DepositGroup/BankTransactionsGroup/DepositMain';

const BalancesComp = () => {

  return (

    <>
    
    <section className="balances-section flex flex-col justify-center place-items-center text-center bg-gradient-to-br py-16">
        
      <h2 className="balances-title text-3xl font-bold mb-4">Work with your balances</h2>

      <p className="balances-description text-black font-semibold text-lg text-center">Manage your balances anytime, anywhere</p>
    
      <DepositMainComp/>

    </section>
    
    </>

  );

}

export default BalancesComp;