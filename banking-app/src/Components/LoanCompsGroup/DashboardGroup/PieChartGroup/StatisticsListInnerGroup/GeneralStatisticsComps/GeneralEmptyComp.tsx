import EmptyPieChartComp from '../PieChartGroup/EmptyPieChart';
import EmptyStatisitcsHistory from '../StatisticsHistoryGroup/EmptyStatisitcsHistory';

const GeneralEmptyComp = () => {

  return (

    <>
    
      <section className='flex flex-col place-content-center gap-2 p-1'>

        <EmptyPieChartComp/>

        <hr className="my-4 w-full border-t border-gray-300"/>

        <EmptyStatisitcsHistory/>

      </section>
    
    </>

  );

}

export default GeneralEmptyComp;