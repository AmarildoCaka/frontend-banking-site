import { useConditionalBankStore } from "../../../../store/secondBankStore";

import GeneralEmptyComp from '../PieChartGroup/StatisticsListInnerGroup/GeneralStatisticsComps/GeneralEmptyComp';
import GeneralFunctComp from '../PieChartGroup/StatisticsListInnerGroup/GeneralStatisticsComps/GeneralFunctComp';
import LoanStatisticsActionsComp from './StatisticsListInnerGroup/GeneralActionsComps/LoanStatisticsActions';

const PieChartComp = () => {

  const { activeTab, generalLoanDetails } = useConditionalBankStore();

  return (
    
    <>
      
      {(activeTab === "piechart") && (
      
        <>
    
          <section className="text-left p-1 mt-23">

            <h1 className="text-black text-left text-2xl font-bold mb-4">Latest loan statistics</h1>

            <div className="bg-white shadow rounded-lg p-6 col-span-2 h-110 overflow-y-auto">
              
              <h1 className="text-2xl font-bold text-left mb-4">Principal vs Interest</h1>

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

      )}

    </>

  );

};

export default PieChartComp;