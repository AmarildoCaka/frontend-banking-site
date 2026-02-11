import PieChartComp from '../PieChartGroup/PieChartComp';
import StatisticsHistoryComp from '../StatisticsHistoryGroup/StatisticsHistory';

const GeneralFunctComp = () => {

  return (

    <>
    
      <section className="flex flex-col place-content-center gap-1 p-1">

        <PieChartComp/>

        <StatisticsHistoryComp/>

      </section>
    
    </>

  );

}

export default GeneralFunctComp;