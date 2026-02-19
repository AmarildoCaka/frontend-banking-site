import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

const PieChartComp = () => {

  const { generalLoanDetails } = useConditionalBankStore();

  const interestData = generalLoanDetails.at(-1)?.interest ?? 0;

  const loanAmountData = generalLoanDetails.at(-1)?.loanAmount ?? 0;

  const chartData = [
  
    { name: "Principal", value: loanAmountData },

    { name: "Interest", value: interestData }
  
  ];

  const COLORS = ["#2563eb", "#f97316"];

  return (

    <>
    
      <section className="place-content-center p-2">

        <div className="h-64">
        
          <ResponsiveContainer>
        
            <PieChart>
        
              <Pie data={chartData} dataKey="value" cx="50%" cy="50%" outerRadius={100} label>
                
                {chartData.map((entry, index) => (

                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                
                ))}

              </Pie>

              <Tooltip/>

              <Legend/>

            </PieChart>
          
          </ResponsiveContainer>
        
        </div>
      
      </section>
  
    </>

  );

};

export default PieChartComp;