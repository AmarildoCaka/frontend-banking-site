import LineChartComp from './LineChartGroup/LineChartComp';
import GeneralControlsComp from './GeneralControlsGroup/GeneralControlsComp';
import PieChartsComp from './DashboardPieGroup/PieChartsComp';

const DashboardComp = () => {

  return (

    <>
    
      <section className="min-h-screen px-6 py-5 transition-colors duration-300 mb-5">

        <LineChartComp/>

        <hr className="border-gray-300 dark:border-gray-700 my-10"/>

        <PieChartsComp/>

        <hr className="border-gray-300 dark:border-gray-700 my-10"/>

        <GeneralControlsComp/>

      </section>

    </>

  );

}

export default DashboardComp;