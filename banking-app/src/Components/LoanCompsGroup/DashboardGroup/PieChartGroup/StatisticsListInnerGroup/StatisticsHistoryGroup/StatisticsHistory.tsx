import { FaEllipsisV } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

import PieChartOverloadComp from '../PieChartOverload/PieChartOverload';

const StatisticsHistoryComp = () => {

  const { generalLoanDetails, setPieChartBtnState } = useConditionalBankStore();

  return (
  
    <>
    
      <section className="flex flex-col justify-center place-items-center mt-15 p-1">

        <div className="flex flex-row justify-between text-center place-content-center w-[700px] gap-2 p-1">

          <p className="text-black font-bold p-1">Index</p>

          <div className="border-l border-gray-600 h-6"></div>

          <p className="text-black font-bold p-1">Description</p>

          <div className="border-l border-gray-600 h-6"></div>

          <p className="text-black font-bold p-1">Loan Amount</p>

          <div className="border-l border-gray-600 h-6"></div>

          <p className="text-black font-bold p-1">Loan Interest</p>

        </div>

        <div className="text-center p-1">

          <hr className="border-t w-[700px] border-gray-600 my-4"/>

        </div>

        <div className="flex flex-col justify-center gap-2 p-1 h-96 overflow-y-auto w-[700px]">

          {generalLoanDetails.map((loanItem, index) => (

            <>
            
              <div key={loanItem.id} className="flex flex-row justify-between place-content-center rounded-md shadow-md bg-white p-3">

                <p className="text-black font-bold p-1">#{index + 1}</p>

                <p className="text-black font-bold p-1">{loanItem.loanForm}</p>

                <p className="text-black font-bold p-1">{loanItem.loanAmount}</p>

                <section className="flex flex-row place-content-center">

                  <p className="text-black font-bold p-1">{loanItem.interest}</p>

                  <hr className="my-2 mx-1 h-5 border border-gray-400"/>

                  <button type="button" className="text-black font-bold p-1" onClick={() => {

                    setPieChartBtnState(true);

                  }}>

                    <FaEllipsisV/>

                  </button>

                </section>

              </div>
            
              <PieChartOverloadComp loanItem={loanItem}/>

            </>

          ))}

        </div>

      </section>
    
    </>
  
  );

}

export default StatisticsHistoryComp;