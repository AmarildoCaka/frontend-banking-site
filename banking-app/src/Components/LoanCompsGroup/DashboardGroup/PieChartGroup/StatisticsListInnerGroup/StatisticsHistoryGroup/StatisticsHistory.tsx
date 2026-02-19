import { FaRegCopy } from "react-icons/fa";

import { useBankStore } from "../../../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

const StatisticsHistoryComp = () => {

  const { showPopUpMessage } = useBankStore();

  const { generalLoanDetails, setGeneralLoanDetailsFunct } = useConditionalBankStore();

  const deleteSingleStatisticsUnitFunct = (id: string) => {

    const newLoans = generalLoanDetails.filter((t) => t.id !== id);

    setGeneralLoanDetailsFunct(newLoans);
  
    showPopUpMessage("Loan deleted successfully", "success");
  
  };

  const copyStatisticUnitFunct = async (id: string) => {

    const index = generalLoanDetails.findIndex((t) => t.id === id);

    const findUnit = generalLoanDetails[index];

    if (!findUnit) {
    
      showPopUpMessage(`Loan statistic not found`, "error");

      return;
    
    }

    const rankedUnit = {
    
      ...findUnit,

      number: index + 1,
    
    };

    const formattedString = Object.entries(rankedUnit).map(([key, value]) => `${key}: ${value}`).join(", ");

    await navigator.clipboard.writeText(formattedString);

    showPopUpMessage(`Loan statistic copied successfully`, "success");
  
  };

  return (
  
    <>

      <section className="flex justify-center px-5">

        <div className="w-full max-w-4xl bg-white rounded-md shadow-md border border-slate-200">

          <div className="overflow-x-auto">

            <div className="max-h-[60vh] overflow-y-auto">

              <table className="w-full text-sm">

                <thead className="bg-slate-50 sticky top-0 z-10 border-b border-slate-200">
                  
                  <tr>

                    <th className="px-5 py-5 text-black font-bold text-center">Index</th>

                    <th className="px-5 py-5 text-black font-bold text-center">Description</th>

                    <th className="px-5 py-5 text-black font-bold text-center">Loan Amount</th>

                    <th className="px-5 py-5 text-black font-bold text-center">Interest</th>

                    <th className="px-5 py-5 text-black font-bold text-center">Copy</th>

                    <th className="px-5 py-5 text-black font-bold text-center">Delete</th>

                  </tr>

                </thead>

                <tbody className="divide-y divide-slate-100">

                  {generalLoanDetails.map((loanItem, index) => (

                    <tr key={loanItem.id} className="hover:bg-slate-50 transition duration-300">

                      <td className="px-5 py-5 font-bold text-indigo-600 text-center">#{index + 1}</td>

                      <td className="px-5 py-5 font-bold text-indigo-600 text-center">{loanItem.loanForm}</td>

                      <td className="px-5 py-5 font-bold text-indigo-600 text-center">{loanItem.loanAmount}</td>

                      <td className="px-5 py-5 font-bold text-indigo-600 text-center">{loanItem.interest}</td>

                      <td className="px-5 py-5 font-bold text-center">

                        <button type="button" className="border-1 border-gray-300 bg-gray-200 font-bold rounded-md cursor-pointer transform transition duration-300 hover:scale-107 px-3 py-1 p-1" onClick={() => {
                          
                          copyStatisticUnitFunct(loanItem.id);
                        
                        }}>
                          
                          <FaRegCopy/>

                        </button>
                        
                      </td>

                      <td className="px-5 py-5 font-bold text-black text-center">

                        <button type="button" className="text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100 border border-red-200 rounded-md px-2 py-1 transition shadow-md transform duartion-300 hover:scale-105 cursor-pointer" onClick={() => {
                            
                          deleteSingleStatisticsUnitFunct(loanItem.id);
                        
                        }}>Delete</button>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </section>

    </>

  );

};

export default StatisticsHistoryComp;