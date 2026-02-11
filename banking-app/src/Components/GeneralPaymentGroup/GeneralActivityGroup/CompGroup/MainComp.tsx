import { useConditionalBankStore } from "../../../../store/secondBankStore";

import FormComp from "../../../TransactionsGroup/FormComp";

const MainComp = () => {

  const { activeTab } = useConditionalBankStore();

  return (
  
    <>
    
      {(activeTab === "makeTransaction") && (

        <>
        
          <section>

            <h1 className="text-2xl font-bold text-left mb-7">Make Transactions</h1>

            <div className="p-1">

              <div className="flex flex-col justify-center bg-white w-[800px] mx-auto rounded-md shadow-md p-5">
            
                <FormComp/>

              </div>

            </div>

          </section>
        
        </>

      )}
    
    </>
  
  );

};

export default MainComp;