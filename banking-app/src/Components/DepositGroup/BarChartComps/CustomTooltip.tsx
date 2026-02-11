import { useBankStore } from '../../../store/useBankStore';

const CustomTooltip = ({ active, payload, label }) => {

  const { selectedYear } = useBankStore();
    
  if(active && payload && payload.length)
  {
    
    return (
   
      <>

        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg w-36">
      
          <p className="font-semibold text-gray-800">{`${label} ${selectedYear}`}</p>

          <p className="text-green-500">{`Deposits: ${payload[0].value}`}</p>

          <p className="text-red-500">{`Withdraws: ${payload[1].value}`}</p>
      
        </div>
      
      </>
    
    );
  
  }

  return null;

};

export default CustomTooltip;