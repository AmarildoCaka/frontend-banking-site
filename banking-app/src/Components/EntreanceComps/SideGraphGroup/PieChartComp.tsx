import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

import { useState, useEffect } from "react";

import { useBankStore } from "../../../store/useBankStore";

const PieChartComp = () => {

  const [userStats, setUserStats] = useState<{ active: number; inactive: number }>({ active: 0, inactive: 0 });

  useEffect(() => {

    const stats = generateUserStats(1200);
    
    setUserStats(stats);

  }, []);

  const { userGrowthSwitch, userActivityData, setUserGrowthSwitch } = useBankStore();

  function generateUserStats(totalUsers: number): { active: number; inactive: number }
  {

    if(totalUsers <= 0)
    {

      return { active: 0, inactive: 0 };

    }
  
    const activeRatio = Math.random() * (0.85 - 0.55) + 0.55;
  
    const active = Math.round(totalUsers * activeRatio);

    const inactive = totalUsers - active;
  
    return { active, inactive };

  }

  const COLORS = ["#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"];

  return (
    
    <>
    
      <div className="relative bg-gradient-to-br from-white/95 to-gray-50/90 dark:from-[#0F172A]/90 dark:to-[#1E293B]/85 backdrop-blur-xl p-6 rounded-2xl shadow-2xl w-[500px] border border-indigo-100/50 dark:border-indigo-500/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/10 hover:shadow-3xl">
        
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl pointer-events-none"></div>

        <button type="button" className="absolute top-4 right-4 text-white font-semibold rounded-lg cursor-pointer bg-gradient-to-r from-indigo-500 to-indigo-600 transform transition-all duration-300 hover:scale-105 hover:from-indigo-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 px-4 py-2 text-sm z-20" onClick={() => {
          
          setUserGrowthSwitch("LineChart");
        
        }}>{userGrowthSwitch}</button>

        <div className="relative z-10">
        
          <div className="flex items-center gap-2 mb-4">
        
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-full"></div>

            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">User Activity Breakdown</h3>
        
          </div>

          <div className="bg-white/50 dark:bg-slate-900/30 rounded-xl p-4 mb-3 backdrop-blur-sm border border-indigo-100/30 dark:border-indigo-500/10">
        
            <ResponsiveContainer width="100%" height={240}>
        
              <PieChart>
        
                <defs>
        
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        
                  </filter>
        
                </defs>

                <Pie data={userActivityData} cx="50%" cy="50%" outerRadius={70} dataKey="value" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} labelLine={{ stroke: "#94A3B8", strokeWidth: 1.5 }} style={{ filter: "url(#shadow)" }}>

                  {userActivityData.map((entry, index) => (

                    <>
                    
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#fff" strokeWidth={2}/>

                    </>

                  ))}

                </Pie>

                <Legend verticalAlign="bottom" height={30} iconType="circle" iconSize={10} wrapperStyle={{ paddingTop: '10px', fontSize: '13px', fontWeight: '600' }}/>

                <Tooltip contentStyle={{ backgroundColor: "#FFFFFF", border: "1px solid #E0E7FF", color: "#1E293B", borderRadius: "12px", padding: "10px 14px", boxShadow: "0 10px 25px rgba(99, 102, 241, 0.15)", fontSize: "14px", fontWeight: "600" }}/>

              </PieChart>
            
            </ResponsiveContainer>
          
          </div>

          <div className="grid grid-cols-3 gap-3">
        
            <div className="flex flex-col items-center p-3 bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-slate-800/70 dark:to-slate-700/40 rounded-xl border border-indigo-200/50 dark:border-indigo-500/20 shadow-sm">

              <span className="text-xs text-gray-600 font-semibold dark:text-gray-400 mb-1">Total Users</span>

              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500 dark:from-indigo-400 dark:to-indigo-300">1200</span>

            </div>

            <div className="flex flex-col items-center p-3 bg-gradient-to-br from-green-50 to-green-100/50 dark:from-slate-800/70 dark:to-slate-700/40 rounded-xl border border-green-200/50 dark:border-green-500/20 shadow-sm">

              <span className="text-xs text-gray-600 font-semibold dark:text-gray-400 mb-1">Active</span>

              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500 dark:from-green-400 dark:to-green-300">{userStats.active}</span>

            </div>

            <div className="flex flex-col items-center p-3 bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-slate-800/70 dark:to-slate-700/40 rounded-xl border border-gray-200/50 dark:border-gray-500/20 shadow-sm">

              <span className="text-xs text-gray-600 font-semibold dark:text-gray-400 mb-1">Inactive</span>

              <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-500 dark:from-gray-400 dark:to-gray-300">{userStats.inactive}</span>

            </div>

          </div>

        </div>
      
      </div>
    
    </>
    
  );

}

export default PieChartComp;