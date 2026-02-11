import TransactionHistoryComp from '../CompGroup/MainTransactionsHistory';
import TransactionHistoryBtnComp from '../../../TransactionsGroup/TransactionHistoryBtn';

const InnerTransactionsHistoryComp = () => {

  return (

    <>
    
      <div className="flex flex-col justify-between place-items-center h-[380px]">

        <h3 className="text-xl font-bold mb-2">Transaction History</h3>

        <section className="flex flex-col justify-center place-items-center text-center md:mt-2 sm:mt-2 lg:mt-2 w-80">
        
          <TransactionHistoryComp/>
        
        </section>

        <TransactionHistoryBtnComp/>
      
      </div>
    
    </>

  );

}

export default InnerTransactionsHistoryComp;