import { useEffect } from "react";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import GeneralEmptyComp from "../PieChartGroup/StatisticsListInnerGroup/GeneralStatisticsComps/GeneralEmptyComp";
import GeneralFunctComp from "../PieChartGroup/StatisticsListInnerGroup/GeneralStatisticsComps/GeneralFunctComp";
import LoanStatisticsActionsComp from "./StatisticsListInnerGroup/GeneralActionsComps/LoanStatisticsActions";

const PieChartComp = () => {

  const { setActiveTab, generalLoanDetails } = useConditionalBankStore();

  useEffect(() => {

    setActiveTab("piechart");
  
  }, [setActiveTab]);

  return (

    <>
    
      <section className="text-left p-1 mt-23">

        <h1 className="loan-statistics-text text-black text-left text-2xl font-bold mb-4">Latest loan statistics</h1>

        <div className="loan-statistic-wrapper shadow-md rounded-md p-5 col-span-2 h-110 overflow-y-auto">

          {(generalLoanDetails.length === 0)? (
          
            <>
          
              <GeneralEmptyComp/>
          
            </>
          
          ):(generalLoanDetails.length > 0)? (
          
            <>

              <GeneralFunctComp/>
            
            </>
          
          ): null}

          <LoanStatisticsActionsComp/>
        
        </div>
      
      </section>

    </>
  
  );

};

export default PieChartComp;