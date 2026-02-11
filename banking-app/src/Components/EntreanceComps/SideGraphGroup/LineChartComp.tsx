import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";

import { useState } from "react";

import { useBankStore } from "../../../store/useBankStore";

import { userGrowthDataInterface } from '../../../store/functInterfaces';

const LineChartComp = () => {

  const [hoveredMonth, setHoveredMonth] = useState<userGrowthDataInterface | null>(null);

  const { userGrowthSwitch, userGrowthData, setUserGrowthSwitch } = useBankStore();

  const currentMonthIndex = new Date().getMonth();

  const currentMonthData = userGrowthData.find((item) => item.index === currentMonthIndex);

  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {

    if(active && payload && payload.length)
    {
      
      const hoveredData = payload[0].payload;

      setHoveredMonth(payload[0].payload);
      
      return (
    
        <>
        
          <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E0E7FF", color: "#1E293B", borderRadius: "12px", padding: "10px 14px", boxShadow: "0 10px 25px rgba(99, 102, 241, 0.15)", fontSize: "14px", fontWeight: "600", }}>

            <p>{`${hoveredData.month}: ${hoveredData.users} users`}</p>

          </div>

        </>

      );

    }

    return null;

  };

  return (
    
    <>

      <div className="relative bg-gradient-to-br from-white/95 to-gray-50/90 dark:from-[#0F172A]/90 dark:to-[#1E293B]/85 backdrop-blur-xl p-6 rounded-2xl shadow-2xl w-[500px] border border-indigo-100/50 dark:border-indigo-500/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/10 hover:shadow-3xl">
      
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl pointer-events-none"></div>
      
        <button type="button" className="absolute top-4 right-4 text-white font-semibold rounded-lg cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-600 transform transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 px-4 py-2 text-sm z-20" onClick={() => {
          
          setUserGrowthSwitch("PieChart");

        }}>{userGrowthSwitch}</button>

        <div className="relative z-10">

          <div className="flex items-center gap-2 mb-4">

            <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full"></div>
            
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">User Growth Overview</h3>
          
          </div>

          <div className="bg-white/50 dark:bg-slate-900/30 rounded-xl p-3 mb-3 backdrop-blur-sm border border-indigo-100/30 dark:border-indigo-500/10">

            <ResponsiveContainer width="100%" height={180}>
            
              <LineChart data={userGrowthData}>
            
                <defs>
                  
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3}/>

                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>

                  </linearGradient>
                
                </defs>

                <XAxis dataKey="month" stroke="#94A3B8" strokeWidth={1.5} style={{ fontSize: "12px", fontWeight: "500" }}/>

                <YAxis stroke="#94A3B8" strokeWidth={1.5} style={{ fontSize: "12px", fontWeight: "500" }}/>

                <Tooltip content={<CustomTooltip/>}/>

                <Line type="monotone" dataKey="users" stroke="url(#lineGradient)" strokeWidth={3} dot={{ fill: "#6366F1", strokeWidth: 2, r: 5 }} activeDot={{ r: 7, fill: "#4F46E5", stroke: "#fff", strokeWidth: 2 }} fill="url(#colorUsers)"/>

              </LineChart>
          
            </ResponsiveContainer>
          
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-between gap-4 mt-4 p-4 bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-slate-800/70 dark:to-slate-700/40 rounded-xl border border-indigo-200/50 dark:border-indigo-500/20 shadow-md">
            
            <div className="flex flex-col justify-center items-center w-full sm:w-1/2 bg-white/60 dark:bg-slate-900/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-100/40 dark:border-indigo-500/20 shadow-inner transition-all duration-300 hover:scale-[1.02]">

              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{(hoveredMonth)? hoveredMonth.month: 'Selected Month'}</span>

              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300">{(hoveredMonth)? hoveredMonth.users: '—'}</span>

            </div>

            <div className="flex flex-col justify-center items-center w-full sm:w-1/2 bg-white/60 dark:bg-slate-900/30 backdrop-blur-sm rounded-lg p-4 border border-indigo-100/40 dark:border-indigo-500/20 shadow-inner transition-all duration-300 hover:scale-[1.02]">
              
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Current Month</span>
              
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300">{(currentMonthData)? currentMonthData.users: 0}</span>
            
            </div>

          </div>

        </div>

      </div>

    </>
    
  );

}

export default LineChartComp;