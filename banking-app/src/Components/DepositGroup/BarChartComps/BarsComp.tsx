import { useState, useMemo } from 'react';

import { useBankStore } from '../../../store/useBankStore';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import CustomTooltip from './CustomTooltip';

const BarsComp = () => {

  const [selectedYear] = useState(new Date().getFullYear());

  const { depositHistoryUnitState, withdrawHistoryUnitState, months, selectedMonth } = useBankStore();

  const chartData = useMemo(() => {

    const monthlyData = months.map((month, index) => {
    
      const depositsInMonth = depositHistoryUnitState.filter((deposit) => {
    
        if(!deposit.timeDisplayState)
        {
    
          return false;
    
        }

        let date = new Date(deposit.timeDisplayState);

        if(isNaN(date.getTime()) && /^\d{2}:\d{2}:\d{2}$/.test(deposit.timeDisplayState))
        {
        
          const today = new Date();

          const monthNum = today.getMonth() + 1;

          const dayNum = today.getDate();

          const monthStr = monthNum.toString().padStart(2, "0");

          const dayStr = dayNum.toString().padStart(2, "0");

          const validString = `${today.getFullYear()}-${monthStr}-${dayStr}T${deposit.timeDisplayState}Z`;

          date = new Date(validString);

        }

        if(isNaN(date.getTime()))
        {

          console.warn("❌ Invalid deposit date:", deposit.timeDisplayState);

          return false;
        
        }

        return date.getMonth() === index && date.getFullYear() === selectedYear;
      
      });

      const withdrawsInMonth = withdrawHistoryUnitState.filter((withdraw) => {
      
        if(!withdraw.timeDisplayState)
        {
      
          return false;
      
        }

        let date = new Date(withdraw.timeDisplayState);

        if(isNaN(date.getTime()) && /^\d{2}:\d{2}:\d{2}$/.test(withdraw.timeDisplayState))
        {

          const today = new Date();

          const monthNum = today.getMonth() + 1;

          const dayNum = today.getDate();

          const monthStr = monthNum.toString().padStart(2, "0");

          const dayStr = dayNum.toString().padStart(2, "0");

          const validString = `${today.getFullYear()}-${monthStr}-${dayStr}T${withdraw.timeDisplayState}Z`;

          date = new Date(validString);
        
        }

        if(isNaN(date.getTime()))
        {

          console.warn("❌ Invalid withdraw date:", withdraw.timeDisplayState);

          return false;
        
        }

        return date.getMonth() === index && date.getFullYear() === selectedYear;
      
      });

      return {
      
        month: month.substring(0, 3),

        deposits: depositsInMonth.length,

        withdraws: withdrawsInMonth.length,

        depositAmount: depositsInMonth.reduce((sum, item) => sum + (item.amount || 0), 0),

        withdrawAmount: withdrawsInMonth.reduce((sum, item) => sum + (item.withdrawAmount || 0), 0),
      
      };
    
    });

    return monthlyData;
  
  }, [depositHistoryUnitState, withdrawHistoryUnitState, selectedYear]);

  const filteredChartData = (selectedMonth === null)? chartData: [chartData[selectedMonth]];

  return (
  
    <>
    
      <section className="h-96">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={filteredChartData} margin={{ top: 20, right: 30, left: 1, bottom: 5 }}>

            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0"/>

            <XAxis dataKey="month" stroke="#666" fontSize={12}/>

            <YAxis stroke="#666" fontSize={12}/>

            <Tooltip content={<CustomTooltip/>}/>

            <Legend/>

            <Bar dataKey="deposits" fill="#22c55e" name="Deposits" radius={[4, 4, 0, 0]}/>

            <Bar dataKey="withdraws" fill="#ef4444" name="Withdraws" radius={[4, 4, 0, 0]}/>
            
          </BarChart>

        </ResponsiveContainer>

      </section>

    </>

  );

}

export default BarsComp;