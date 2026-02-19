import PieChartComp from '../PieChartGroup/PieChartComp';
import StatisticsHistoryComp from '../StatisticsHistoryGroup/StatisticsHistory';

const GeneralFunctComp = () => {

  return (

    <>
    
      <section className="flex flex-col place-content-center gap-1 p-1">

        <h1 className="loan-statistics-text text-2xl font-bold text-left mb-5">Principal vs Interest Pie Chart</h1>

        <PieChartComp/>

        <h1 className="loan-statistics-text text-2xl font-bold text-left mb-5">Loans Overview Table</h1>

        <StatisticsHistoryComp/>

      </section>
    
    </>

  );

}

export default GeneralFunctComp;