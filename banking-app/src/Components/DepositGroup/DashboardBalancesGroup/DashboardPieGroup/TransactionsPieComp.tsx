import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import { useBankStore } from "../../../../store/useBankStore";

const TransactionsPieComp = () => {

  const { depositHistoryUnitState, withdrawHistoryUnitState } = useBankStore();

  const depositsElement = depositHistoryUnitState.length;

  const withdrawsElement = withdrawHistoryUnitState.length;

  const transactionsCoparisonList = [{ name: 'Deposits', list: depositsElement }, { name: 'Withdraws', list: withdrawsElement }];

  const transactionsCoparisonListColor = ['#EF4444', '#10B981'];

  return (
  
    <>
    
      <div className="bg-white dark:bg-[#2a2a2a] p-6 rounded-2xl shadow-md transform transition duration-300 hover:scale-102">

        <h3 className="font-semibold text-left mb-4">Deposit vs Withdraws</h3>

        {(depositsElement === 0 && withdrawsElement === 0)? (

          <>
          
            <div className="h-[300px] w-full flex flex-col items-center justify-center bg-gray-50 dark:bg-[#2a2a2a] rounded-xl border border-dashed border-gray-300 dark:border-gray-600">

              <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                
                <path d="M12 2v10h10A10 10 0 1 1 12 2z"/>
                
                <path d="M12 2a10 10 0 0 1 10 10H12z"/>
              
              </svg>

              <p className="text-gray-500 dark:text-gray-300 font-medium">No transactions made</p>

              <p className="text-sm text-gray-400 mt-1">Make a deposit or withdrawal to see insights</p>

            </div>
          
          </>

        ):(

          <>
          
            <ResponsiveContainer width="100%" height={300}>

              <PieChart>

                <Pie data={transactionsCoparisonList} dataKey="list" nameKey="name" innerRadius={60} outerRadius={100} label={({ list, index }) => `${list} ${transactionsCoparisonList[index].name}`}>

                  {transactionsCoparisonList.map((entry, index) => (

                    <>
                    
                      <Cell key={index} fill={transactionsCoparisonListColor[index]}/>
                    
                    </>

                  ))}
                
                </Pie>

              </PieChart>

            </ResponsiveContainer>
          
          </>

        )}
      
        <div className="h-px bg-gray-300 my-3"></div>

        <div className="flex flex-row justify-center place-items-center text-center gap-4 p-1">

          <div className="flex flex-row">

            <div className="w-3 h-3 bg-green-500 rounded-full mt-3"></div>

            <p className="text-green-500 p-1">Deposits</p>

          </div>

          <div className="flex flex-row">

            <div className="w-3 h-3 bg-red-500 rounded-full mt-3"></div>

            <p className="text-red-500 p-1">Withdraws</p>

          </div>

        </div>

      </div>
    
    </>
  
  );

}

export default TransactionsPieComp;