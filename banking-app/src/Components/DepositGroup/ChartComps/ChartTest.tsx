import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import BalancesOverview from './BalancesOverview';
import AmountAvailability from './AmountAvailability';
import TotalBalancesAmount from './TotalBalancesAmount';

ChartJS.register(ArcElement, Tooltip, Legend);

const TimeCaptureChart = () => {

  return (

    <>

      <div className="text-center w-full lg:w-[600px] bg-white border border-gray-200 rounded-md shadow-md mt-4 mb-10 p-5 mx-auto">

        <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-6">Currency Balance Overview</h2>

        <BalancesOverview/>

        <AmountAvailability/>
        
        <TotalBalancesAmount/>

      </div>

    </>

  );

};

export default TimeCaptureChart;