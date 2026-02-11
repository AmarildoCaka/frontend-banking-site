import { FaTimes } from 'react-icons/fa';

import { useBankStore } from '../../../store/useBankStore';

import { useConditionalBankStore } from '../../../store/secondBankStore';

const AmountErasingHistoryComp = () => {
  
  const { resetToZeroCapturedTime, dayMonthYearData } = useBankStore();

  const { setAmountErasingHistory } = useConditionalBankStore();

  return (
  
    <>
    
      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40"></div>

      <div className="fixed inset-0 z-100 flex items-center justify-center">

        <div className='relative flex flex-col justify-center place-items-center text-center w-[500px] h-[320px] rounded-2xl shadow-2xl overflow-x-auto space-y-4 animate-fadeIn bg-gradient-to-r from-gray-50 to-blue-50 p-4 border border-blue-100 gap-2'>

          <button type="button" className="absolute top-3 right-4 text-black font-bold text-md cursor-pointer transform transition duration-300 hover:scale-125 hover:text-red-500" onClick={() => {

            setAmountErasingHistory();

          }}>

            <FaTimes/>

          </button>

          <div className='flex flex-col justify-between place-items-center text-center p-1'>
                                
            <h1 className="text-2xl font-bold mb-4">Amount Erasing History</h1>
            
            <div className="space-y-3 w-sm">
        
              <div className="flex justify-between items-center">
        
                <span className="text-gray-600 font-medium">Time:</span>
        
                <span className='text-blue-600 font-bold'>{resetToZeroCapturedTime}</span>
        
              </div>
              
              <div className="flex justify-between items-center">
        
                <span className="text-gray-600 font-medium">Date:</span>
        
                <span className='text-blue-600 font-bold'>{dayMonthYearData.date}</span>
        
              </div>

              <div className="flex justify-between items-center">
        
                <span className="text-gray-600 font-medium">Day:</span>
        
                <span className='text-blue-600 font-bold'>{dayMonthYearData.day}</span>
        
              </div>
              
              <div className="flex justify-between items-center">
        
                <span className="text-gray-600 font-medium">Month:</span>
        
                <span className='text-blue-600 font-bold'>{dayMonthYearData.month}</span>
        
              </div>
              
              <div className="flex justify-between items-center">
        
                <span className="text-gray-600 font-medium">Year:</span>
        
                <span className='text-blue-600 font-bold'>{dayMonthYearData.year}</span>
        
              </div>
        
            </div>
            
            <div className="mt-4 pt-3 border-t border-blue-200">
        
              <p className="text-sm text-gray-700">
        
                <span className="font-medium">Full Date:</span> 
                
                <span className='text-black font-semibold p-1'>{dayMonthYearData.day} {dayMonthYearData.date}/{dayMonthYearData.month}/{dayMonthYearData.year}</span>
        
              </p>
              
            </div>

          </div>

        </div>

      </div>
    
    </>
  
  );

}

export default AmountErasingHistoryComp;