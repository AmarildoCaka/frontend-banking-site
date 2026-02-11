import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import { depositHistoryInterface, withdrawHistoryInterface } from '../../../store/functInterfaces';

interface generalLineChartInterface {

  depositHistoryUnitState: depositHistoryInterface[];

  withdrawHistoryUnitState: withdrawHistoryInterface[];

}

const TransactionsLineChartComp: React.FC<generalLineChartInterface> = ({ depositHistoryUnitState = [], withdrawHistoryUnitState = [] }) => {

  const getMonthKey = (timeDisplayState?: string) => {
  
    if(!timeDisplayState)
    {

      return null;

    }

    let date: Date;

    if(timeDisplayState.includes('-') || timeDisplayState.includes('/'))
    {

      date = new Date(timeDisplayState);
    
    }
    
    else
    {

      const today = new Date();
      
      const [hours, minutes, seconds] = timeDisplayState.split(':');
      
      date = new Date(
      
        today.getFullYear(),
      
        today.getMonth(),
      
        today.getDate(),
      
        parseInt(hours),
      
        parseInt(minutes),
      
        parseInt(seconds || '0')
      
      );
    
    }

    if(isNaN(date.getTime()))
    {

      return null;

    }

    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
  
  };

  interface MonthData {

    month: string;
    
    deposits: number;
    
    withdrawals: number;
  
  }

  const processData = (deposits: depositHistoryInterface[], withdrawals: withdrawHistoryInterface[]): MonthData[] => {

    const monthCounts: Record<string, MonthData> = {};
    
    deposits.forEach((d) => {
    
      const monthKey = getMonthKey(d.timeDisplayState);
    
      if(!monthKey)
      {

        return;

      }

      if(!monthCounts[monthKey]) 
      {

        monthCounts[monthKey] = { month: monthKey, deposits: 0, withdrawals: 0 };
      
      }
      
      monthCounts[monthKey].deposits++;
    
    });

    withdrawals.forEach((w) => {

      const monthKey = getMonthKey(w.timeDisplayState);

      if(!monthKey)
      {

        return;

      }

      if(!monthCounts[monthKey])
      {

        monthCounts[monthKey] = { month: monthKey, deposits: 0, withdrawals: 0 };
      
      }

      monthCounts[monthKey].withdrawals++;

    });
    
    const now = new Date();
    
    const fullYear = now.getFullYear();
    
    for(let m = 1; m <= 12; m++)
    {
    
      const key = `${fullYear}-${String(m).padStart(2, '0')}`;
    
      if(!monthCounts[key])
      {
        
        monthCounts[key] = { month: key, deposits: 0, withdrawals: 0 };
      
      }
    
    }

    return Object.values(monthCounts).sort((a, b) => a.month.localeCompare(b.month));

  };

  const chartData = processData(depositHistoryUnitState, withdrawHistoryUnitState);

  const formatMonth = (monthStr: string) => {
  
    const [year, month] = monthStr.split('-');
  
    const date = new Date(parseInt(year), parseInt(month) - 1);
  
    return date.toLocaleDateString('en-US', { month: 'short' });
  
  };

  return (

    <>
      
      <div className="w-full h-screen flex items-center justify-center bg-gray-50 p-8">
        
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        
          <h2 className="font-semibold text-lg text-left text-gray-800 dark:text-gray-200 mb-5">Monthly Transactions Line Chart</h2>
        
          <ResponsiveContainer width="100%" height={400}>
        
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        
              <CartesianGrid strokeDasharray="3 3"/>
        
              <XAxis dataKey="month" tickFormatter={formatMonth}/>

              <YAxis label={{ value: 'Number of Transactions', angle: -90, position: 'insideLeft' }} allowDecimals={false}/>

              <Tooltip labelFormatter={formatMonth} formatter={(value, name) => {
    
                const label = String(name);
                
                return [value, label.charAt(0).toUpperCase() + label.slice(1)];
                
              }}/>
              
              <Line type="monotone" dataKey="deposits" stroke="#10b981" strokeWidth={2} name="Deposits" dot={{ r: 4 }} activeDot={{ r: 6 }}/>

              <Line type="monotone" dataKey="withdrawals" stroke="#ef4444" strokeWidth={2} name="Withdrawals" dot={{ r: 4 }} activeDot={{ r: 6 }}/>

            </LineChart>
          
          </ResponsiveContainer>

          <section className="flex flex-row justify-between items-center mt-5">

            <div className="flex flex-row gap-4 items-center">

              <div className="flex items-center gap-1 text-green-500">
              
                <svg aria-label="Deposits legend icon" className="inline-block w-4 h-4" viewBox="0 0 32 32">
                 
                  <path strokeWidth={4} fill="none" stroke="#10b981" d="M0,16h10.666666666666666 A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16 H32M21.333333333333332,16 A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"/>
                
                </svg>
                
                <span>Deposits</span>

              </div>

              <div className="w-px h-5 bg-gray-300 self-center"></div>

              <div className="flex items-center gap-1 text-red-500">
                
                <svg aria-label="Withdrawals legend icon" className="inline-block w-4 h-4" viewBox="0 0 32 32">

                  <path strokeWidth={4} fill="none" stroke="#ef4444" d="M0,16h10.666666666666666 A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16 H32M21.333333333333332,16 A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16"/>

                </svg>
                
                <span>Withdraws</span>
              
              </div>

            </div>

            <div className="flex flex-row gap-6 text-sm items-center">
              
              <p className="font-semibold">Total deposits: <span className="text-green-500">{chartData.reduce((sum: number, d: any) => sum + d.deposits, 0)}</span></p>
              
              <div className="w-px h-5 bg-gray-300 self-center"></div>
              
              <p className="font-semibold">Total withdrawals: <span className="text-red-500">{chartData.reduce((sum: number, d: any) => sum + d.withdrawals, 0)}</span></p>
            
            </div>

          </section>

        </div>

      </div>

    </>

  );

};

export default TransactionsLineChartComp;