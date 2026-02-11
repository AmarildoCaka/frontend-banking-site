import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import { useBankStore } from "../../../../store/useBankStore";

const CurrencyHoldingsPieComp = () => {

  const { balances } = useBankStore();

  const pieData = [
  
    { name: "USD", value: balances.USD, currency: 'USD' },
  
    { name: "EUR", value: balances.EUR, currency: 'EUR' },
  
    { name: "GBP", value: balances.GBP, currency: 'GBP' },
  
  ];

  const pieColors = ["#10B981", "#3B82F6", "#F59E0B"];

  return (
  
    <>
    
      <div className="bg-white dark:bg-[#2a2a2a] p-5 rounded-2xl shadow-md transform transition duration-300 hover:scale-102">

        <h3 className="font-semibold text-left mb-4">Currency Holdings</h3>

        {(pieData[0].value === 0 && pieData[1].value === 0 && pieData[2].value === 0)? (

          <>
          
            <div className="h-[300px] w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-[#2a2a2a] rounded-xl border border-dashed border-gray-300 dark:border-gray-600">

              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                
                <path d="M12 1v22"/>
                
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                
                <circle cx="17" cy="17" r="4"/>
                
                <line x1="19" y1="15" x2="15" y2="19"/>
                
                <line x1="15" y1="15" x2="19" y2="19"/>
              
              </svg>

              <p className="text-gray-500 dark:text-gray-300 font-medium">Empty balance</p>

              <p className="text-sm text-gray-400 mt-1">Make a deposit to see the insights of your balance</p>

            </div>
          
          </>

        ):(

          <>
          
            <ResponsiveContainer width="100%" height={300}>

              <PieChart>

                <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={60} outerRadius={100} label={({ value, index }) => `${value} ${pieData[index].currency}`}>

                  {pieData.map((entry, index) => (

                    <>

                      <Cell key={index} fill={pieColors[index % pieColors.length]}/>
  
                    </>

                  ))}

                </Pie>

              </PieChart>

            </ResponsiveContainer>
          
          </>

        )}

        <div className="h-px bg-gray-300 my-3"></div>

        <div className="flex flex-row justify-center place-items-center text-center gap-2 p-1">

          <div className="flex flex-row">

            <div className="w-3 h-3 bg-green-500 rounded-full mt-3"></div>

            <p className="text-green-500 p-1">USD (United States Dollars)</p>

          </div>

          <div className="flex flex-row">

            <div className="w-3 h-3 bg-indigo-500 rounded-full mt-3"></div>

            <p className="text-indigo-500 p-1">EUR (Euro)</p>

          </div>

          <div className="flex flex-row">

            <div className="w-3 h-3 bg-amber-500 rounded-full mt-3"></div>

            <p className="text-amber-500 p-1">GBP (Great British Pound)</p>

          </div>

        </div>

      </div>

    </>
  
  );

}

export default CurrencyHoldingsPieComp;