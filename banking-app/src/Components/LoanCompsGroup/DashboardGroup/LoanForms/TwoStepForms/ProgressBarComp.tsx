import { useConditionalBankStore } from "../../../../../store/secondBankStore";

const ProgressBarComp = () => {

  const { loanProgressBarObj } = useConditionalBankStore();

  return (

    <>
    
      <section>

        <div className="flex items-center justify-center mb-5">
        
          <div className="flex items-center space-x-2">
      
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${(loanProgressBarObj.loanFirstStep === false)? 'bg-gray-400 text-white': 'bg-indigo-600 text-white'}`}>{(loanProgressBarObj.loanFirstStep === false)? '1': '✓'}</div>
      
            <div className={`w-40 h-1 ${(loanProgressBarObj.loanFirstStep === false)? 'bg-gray-400': 'bg-indigo-600'}`}></div>
      
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${(loanProgressBarObj.loanSecondStep === false)? 'bg-gray-400 text-white': 'bg-indigo-600 text-white'}`}>{(loanProgressBarObj.loanSecondStep === false)? '2': '✓'}</div>
      
          </div>
      
        </div>

      </section>
    
    </>

  );

}

export default ProgressBarComp;