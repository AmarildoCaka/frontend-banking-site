import CurrencyHoldingsPieComp from './CurrencyHoldingsPieComp';
import TransactionsPieComp from './TransactionsPieComp';

const PieChartsComp = () => {

  return (
  
    <>
    
      <section className='flex flex-col justify-center items-center'>

        <div className="w-full text-left">

          <h1 className="font-semibold text-2xl p-1 mb-5">Account Pie Charts</h1>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <CurrencyHoldingsPieComp/>

          <TransactionsPieComp/>

        </div>

      </section>

    </>

  );

}

export default PieChartsComp;