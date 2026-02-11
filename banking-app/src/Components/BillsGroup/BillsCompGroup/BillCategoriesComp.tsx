import { useState } from 'react';

import { useConditionalBankStore } from '../../../store/secondBankStore';

import { useBillsLogicCustomHook } from '../billsGroupLogic';

import { innerBillCategoriesInterface } from '../../../store/FourthGroup/fourthBankStoreInterface';

import BillsOverlayComp from '../BillsOverlayGroup/BillsOverlayComp';

const BillCategoriesComp = () => {

  const [selectedBillData, setSelectedBillData] = useState<innerBillCategoriesInterface | null>(null);

  const [modalIsOpenedData, setModalIsOpenedData] = useState<boolean>(false);

  const { activeTab } = useConditionalBankStore();

  const { categoryStats } = useBillsLogicCustomHook();

  const totalPayments = categoryStats.reduce((sum, cat) => sum + cat.total, 0);

  return (

    <>

      {(activeTab === 'billCategories') && (

        <>

          <section>

            <h1 className="loan-first-form-text text-2xl font-bold mb-5">Bill Categories</h1>

            <div className="bg-white rounded-lg shadow-sm p-6">

              <h3 className="text-lg font-semibold text-slate-800 mb-4">Category Breakdown</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {categoryStats.filter((cat) => cat.count > 0).map((cat) => {

                  const percentage = ((cat.total / totalPayments) * 100).toFixed(1);

                  return (

                    <>

                      <section key={cat.key} className="bg-slate-50 rounded-xl p-4 border border-slate-200 hover:shadow-md transition-all hover:border-slate-300">

                        <section className='flex flex-row justify-between items-center gap-x-5 p-1'>

                          <div className="flex items-center justify-between mb-3">
                                                
                            <div className="flex items-center gap-3">
                          
                              <div className={`${cat.color} p-2 rounded-lg`}>
                          
                                <cat.icon className="text-white" size={18}/>

                              </div>
                          
                              <div>
                          
                                <h4 className="font-semibold text-slate-800 leading-tight">{cat.name}</h4>
                          
                                <p className="text-xs text-slate-500">{percentage}%</p>

                              </div>
                          
                            </div>
                          
                          </div>

                          <div>

                            <button type='button' className='text-indigo-500 text-sm font-semibold bg-indigo-100 border border-indigo-500 rounded-md cursor-pointer transfoem transition duration-300 hover:scale-105 mb-6 px-2' onClick={() => {

                              setSelectedBillData(cat);

                              setModalIsOpenedData(true);

                            }}>Info</button>

                          </div>

                        </section>

                        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                                              
                          <div className={`${cat.color.replace("bg-", "bg-")} h-full transition-all duration-500 ease-out`} style={{ width: `${percentage}%` }}></div>
                        
                        </div>

                      </section>

                    </>

                  );

                })}

              </div>

              <BillsOverlayComp isOpen={modalIsOpenedData}>

                {selectedBillData && (

                  <>
                  
                    <div className="space-y-6 my-2">

                      <div className="border-b border-slate-300 pb-4">
                      
                        <div className='flex flex-row justify-between text-center gap-5'>

                          <div className='text-left'>

                            <h2 className="text-xl font-semibold text-slate-900">{selectedBillData.innerData.billHeader}</h2>

                            <p className="text-sm text-slate-500 mt-1">{selectedBillData.name}</p>

                          </div>

                          <p className='text-sm font-bold text-indigo-500 mt-2'>{selectedBillData?.innerData.id} / 9</p>

                        </div>
                      
                      </div>

                      <div className="space-y-4 border-b border-slate-300 pb-4">

                        <div className="bg-slate-50 rounded-lg p-4">

                          <p className="text-xs font-medium uppercase text-slate-500 mb-1">Bill Type</p>
                          
                          <p className="text-slate-800 font-medium">{selectedBillData?.innerData.billType}</p>
                        
                        </div>

                        <div className="bg-slate-50 rounded-lg p-4">

                          <p className="text-xs font-medium uppercase text-slate-500 mb-1">Description</p>

                          <p className="text-slate-700 leading-relaxed">{selectedBillData?.innerData.billDescription || 'No description available'}</p>
                        
                        </div>

                        <div className="grid grid-cols-2 gap-4">

                          <div className="bg-slate-50 rounded-lg p-4">

                            <p className="text-xs font-medium uppercase text-slate-500 mb-1">Category</p>
                            
                            <p className="text-slate-800">{selectedBillData.name}</p>
                          
                          </div>

                          <div className="bg-slate-50 rounded-lg p-4">

                            <p className="text-xs font-medium uppercase text-slate-500 mb-1">Reference ID</p>
                            
                            <p className="text-slate-800">#{selectedBillData?.innerData.id}</p>
                          
                          </div>

                        </div>

                      </div>

                      <button type="button" className="w-full bg-red-500 text-white py-2 rounded-md cursor-pointer duration-300 transform transition hover:scale-103 font-bold hover:bg-red-600" onClick={() => {

                        setModalIsOpenedData(false);

                      }}>Close</button>
                      
                    </div>
                  
                  </>
                  
                )}              

              </BillsOverlayComp>

            </div>

          </section>

        </>

      )}
    
    </>

  );

}

export default BillCategoriesComp;