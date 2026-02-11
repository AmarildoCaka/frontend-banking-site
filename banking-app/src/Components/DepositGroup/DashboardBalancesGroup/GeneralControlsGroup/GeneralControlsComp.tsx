import TransactionsOverviewComp from '../GeneralControlsGroup/TransactionsOverviewComp';

const GeneralControlsComp = () => {

  return (
    
    <>
    
      <section>

        <div className="w-full text-left">

          <h1 className="font-semibold text-2xl p-1 mb-5">General Account Info</h1>

        </div>

        <div className="mb-2">

          <TransactionsOverviewComp/>

        </div>

      </section>

    </>

  );

}

export default GeneralControlsComp;