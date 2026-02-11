import TransactionSystem from "../TransactionsGroup/TransactionsComp";

const TransactionComp = () => {

  return (
  
    <>
      <section className="transaction-wrapper text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 py-16">
    
        <h2 className="transaction-title text-3xl font-bold mb-4">Make a Transaction</h2>

        <p className="transaction-description text-black font-semibold text-lg text-center mb-9">Make fast and seemless transactions from everywhere</p>

        <TransactionSystem/>
    
      </section>
    
    </>
  
);

};

export default TransactionComp;