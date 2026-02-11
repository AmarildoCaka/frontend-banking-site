import { useBankStore } from "../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../store/secondBankStore";

const ErrorMessageComp = () => {

  const { balances } = useBankStore();

  const { amount, currency, errorMessageState } = useConditionalBankStore();

  const formValidatorFunct = () => {

    if(currency === "USD" || currency === "EUR" || currency === "GBP")
    {

      if(balances.USD < amount || balances.EUR < amount || balances.GBP < amount)
      {

        return (
        
          <>

            <div className="flex place-items-center justify-center text-center w-full bg-gradient-to-r from-red-50 to-red-50 border border-red-100 rounded-lg p-5">
              
              <p className="text-red-500 font-bold">You do not have such amount in your deposit</p>

            </div>

          </>

        );

      }
      
      else
      {

        return null;
      
      }
    
    }
    
    else
    {

      return null;
    
    }

  };

  return (
    
    <>
    
      <div className="flex flex-col justify-center place-items-center text-center p-1 mt-2">

        {errorMessageState && (
              
          <>
          
            <div className="flex place-items-center justify-center text-center w-full bg-gradient-to-r from-red-50 to-red-50 border border-red-100 rounded-lg mb-2 p-5">
          
              <p className="text-red-500 font-bold">Empty amount form, please set an amount</p>
          
            </div>
          
          </>
        
        )}

        {formValidatorFunct()}

      </div>
    
    </>
    
  );

}

export default ErrorMessageComp;