import { useConditionalBankStore } from "../../../store/secondBankStore";

import { useReceiverValidationFunctHook, useReceiverSurnameValidationFunctHook } from "../GeneralLogicComp/generalTransactionLogic";

const ReceiverInnerFormComp = () => {
  
  const { receiver, setReceiver, receiverLastName, setReceiverLastName, fieldErrors } = useConditionalBankStore();

  const receiverValidationFunctHook = useReceiverValidationFunctHook;

  const receiverSurnameValidationFunctHook = useReceiverSurnameValidationFunctHook;

  return (

    <>
    
      <section className="flex flex-col justify-center mt-2">
          
        <h1 className="text-black font-bold text-left text-lg">Receiver</h1>

        <div className="flex flex-col place-content-center mt-2">

          <div className="flex flex-col justify-center mb-2">
            
            <div className="w-full text-left p-1">
              
              <p className="text-black font-semibold">Name</p>
            
            </div>

            <input type="text" value={receiver} maxLength={20} className={`w-[700px] rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 px-5 py-2 text-gray-900 text-base font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06)] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 placeholder-gray-400 transition-all duration-200 ease-in-out ${(fieldErrors.receiver)? "border-red-500 focus:ring-red-300 focus:border-red-500": ""} transform transition duration-300 hover:scale-101`} placeholder="First Name ..." onChange={(e) => {
                
              setReceiver(e.target.value);
            
            }}/>

            {receiverValidationFunctHook()}
          
          </div>

          <div className="flex flex-col justify-center mb-2">

            <div className="w-full text-left p-1">

              <p className="text-black font-semibold">Surname</p>

            </div>

            <input type="text" value={receiverLastName} maxLength={20} className={`w-[700px] rounded-lg bg-white/80 backdrop-blur-sm border border-gray-200 px-5 py-2 text-gray-900 text-base font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.06)] focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 placeholder-gray-400 transition-all duration-200 ease-in-out ${(fieldErrors.receiverLastName)? "border-red-500 focus:ring-red-300 focus:border-red-500": ""} transform transition duration-300 hover:scale-101`} placeholder="Last Name ..." onChange={(e) => {

              setReceiverLastName(e.target.value);
            
            }}/>

            {receiverSurnameValidationFunctHook()}

          </div>

        </div>

      </section>
      
    </>

  );

};

export default ReceiverInnerFormComp;