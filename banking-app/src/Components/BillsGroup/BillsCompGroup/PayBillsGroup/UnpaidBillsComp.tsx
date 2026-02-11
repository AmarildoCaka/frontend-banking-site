import { useState, useEffect } from 'react';

import { CheckCircle, Calendar } from 'lucide-react';

import { useFourthBankStore } from '../../../../store/FourthGroup/fourthBankStore';

import { billInterface } from '../../../../store/FourthGroup/fourthBankStoreInterface';

import { useBillsLogicCustomHook } from '../../billsGroupLogic';

const UnpaidBillsComp = () => {

  const [generalBillsElement] = useState<billInterface[]>(() => {
  
    const storedBills = localStorage.getItem("generalBillsElementStorage");
  
    return (storedBills)? JSON.parse(storedBills): [];
  
  });

  const { paidBills, billCategoriesElementsObj, selectedBills } = useFourthBankStore();

  const { getStatusBadge, singleBillCheckFunct, startBillsScheduler } = useBillsLogicCustomHook();

  const unpaidBills = generalBillsElement.filter((bill) => !paidBills.includes(bill.id));

  useEffect(() => {

    return startBillsScheduler();

  }, []);

  return (

    <>
    
      <div className="space-y-3 h-64 overflow-y-auto mt-5">

        {(unpaidBills.length === 0)? (

          <>
          
            <div className="text-center py-12">

              <CheckCircle className="mx-auto mb-3 text-green-600" size={48}/>
              
              <p className="text-slate-600">No unpayed bills yet</p>
            
            </div>
          
          </>

        ): unpaidBills.map((bill, i) => {

          const category = billCategoriesElementsObj[bill.category as keyof typeof billCategoriesElementsObj];

          const Icon = category.icon;
            
          const isSelected = selectedBills.includes(bill.id);
            
          const badge = getStatusBadge(bill.status);

          return (

            <>
            
              <div key={bill.id} className={`rounded-lg p-4 border-2 cursor-pointer transition-all ${(isSelected)? 'bg-green-50 border-green-500': 'bg-slate-50 border-transparent hover:border-slate-300'}`} onClick={() => {

                singleBillCheckFunct(bill.id);

              }}>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4 flex-1">
                  
                    <div className="font-bold text-indigo-600">#{i + 1}</div>
                    
                    <input type="checkbox" checked={isSelected} className="w-5 h-5 text-green-600 rounded cursor-pointer" onChange={() => {

                      singleBillCheckFunct(bill.id);

                    }} onClick={(e) => {

                      e.stopPropagation();

                    }}/>

                    <div className={`${category.color} p-3 rounded-lg`}>
                    
                      <Icon className="text-white" size={20}/>
                    
                    </div>

                    <div className="flex-1">
                    
                      <h4 className="font-semibold text-slate-800">{bill.name}</h4>
                    
                      <p className="text-sm text-slate-600">{category.name} • {bill.account}</p>
                    
                    </div>

                    <div className='flex-1 text-center'>

                      <p className='font-semibold'>Invoiced at:</p>

                      <p className='font-semibold'>{new Date(bill.generatedAt).toLocaleString()}</p>

                    </div>

                  </div>

                  <div className="border-l border-gray-500 h-10 mr-10"></div>
                  
                  <div className="flex items-center gap-4">

                    <div className="text-right">
                    
                      <p className="font-bold text-slate-800">${bill.amount.toFixed(2)}</p>
                    
                      <p className="text-sm text-slate-600 flex items-center gap-1">

                        <Calendar size={12}/>

                        Due: {bill.dueDate}
                      
                      </p>

                    </div>

                    <span className={badge.className}>
                              
                      <badge.icon size={12}/> {badge.text}
      
                    </span>
                  
                  </div>
                
                </div>
              
              </div>
            
            </>
            
          );

          })

        }

      </div>

    </>

  );

}

export default UnpaidBillsComp;