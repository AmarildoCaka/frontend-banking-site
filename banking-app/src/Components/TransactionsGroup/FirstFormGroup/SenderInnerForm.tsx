import { useConditionalBankStore } from "../../../store/secondBankStore";

import { useSenderValidationFunctHook, useSenderSurnameValidationFunctHook } from "../GeneralLogicComp/generalTransactionLogic";

const SenderInnerFormComp = () => {

  const { sender, setSender, senderLastName, setSenderLastName, fieldErrors } = useConditionalBankStore();

  const senderValidationFunctHook = useSenderValidationFunctHook;

  const senderSurnameValidationFunctHook = useSenderSurnameValidationFunctHook;

  return (

    <>

      <section className="flex flex-col justify-center mt-2">
    
        <h1 className="text-black font-bold text-left text-lg">Sender</h1>

        <div className="flex flex-col place-content-center mt-2">
          
          <div className="flex flex-col justify-center mb-2">
          
            <div className="w-full text-left p-1">
          
              <p className="text-black font-semibold">Name</p>
         
            </div>

            <input type="text" value={sender} maxLength={20} className={`w-[700px] rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 px-5 py-2 text-gray-900 text-base font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06)] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 placeholder-gray-400 transition-all duration-200 ease-in-out ${(fieldErrors.sender)? "border-red-500 focus:ring-red-300 focus:border-red-500": ""} transform transition duration-300 hover:scale-101`} placeholder="First Name ..." onChange={(e) => {
                
              setSender(e.target.value);
              
            }}/>

            {senderValidationFunctHook()}

          </div>

          <div className="flex flex-col justify-center mb-2">
            
            <div className="w-full text-left p-1">
            
              <p className="text-black font-semibold">Surname</p>
            
            </div>

            <input type="text" value={senderLastName} maxLength={20} className={`w-[700px] rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 px-5 py-2 text-gray-900 text-base font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06)] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 placeholder-gray-400 transition-all duration-200 ease-in-out ${(fieldErrors.senderLastName)? "border-red-500 focus:ring-red-300 focus:border-red-500": ""} transform transition duration-300 hover:scale-101 `} placeholder="Last Name ..." onChange={(e) => {
              
              setSenderLastName(e.target.value);
            
            }}/>

            {senderSurnameValidationFunctHook()}

          </div>

        </div>

      </section>
    
    </>

  );

};

export default SenderInnerFormComp;