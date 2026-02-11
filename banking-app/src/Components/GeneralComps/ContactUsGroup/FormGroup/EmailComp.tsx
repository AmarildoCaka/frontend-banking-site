import { FaCopy, FaEraser } from "react-icons/fa";

import { useState, useEffect } from "react";

import { useBankStore } from "../../../../store/useBankStore";

import { useThirdBankStore } from "../../../../store/thirdBankStore"; 

import { useGeneralLogicHook } from '../generalContactUsLogic';

import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const EmailComp = () => {

  const [emailData, setEmailData] = useState<string>('');

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { email, setEmail, errors, validationObj, theme } = useThirdBankStore();

  const { copyEmailFunct, emptyEmailFunct, emailFormValidationFunct } = useGeneralLogicHook();

  useEffect(() => {

    emailFormValidationFunct();
    
    setEmailData(validationObj.email);
  
  }, [validationObj.email, emailFormValidationFunct]);

  return (

    <>
    
      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <section className="mb-3">

        <div className="relative">
        
          <input type="email" value={email} maxLength={20} className={`rating-email-form w-full border ${(errors.email)? "border-red-500": "border-gray-300"} rounded-lg transform transition duration-300 hover:scale-105 placeholder:font-semibold dark:bg-white dark:text-black p-3 ${(theme === 'light' || theme === 'system')? 'placeholder:text-black':(theme === 'dark')? 'placeholder:text-white': 'placeholder:text-dark'}`} name="email" placeholder="Your email here..." onChange={(e) => {
            
            setEmail(e.target.value);
          
          }}/>

          <div className="flex flex-row justify-center place-items-center absolute top-1/2 right-2 -translate-y-1/2">
            
            <button type="button" className="email-copy-btn font-bold text-center rounded-lg cursor-pointer transition transform duration-300 hover:scale-105 px-2" onClick={() => {
              
              copyEmailFunct();
            
            }}>

              <FaCopy/>
            
            </button>

            <div className="rating-form-info-divider h-4 w-px m-1"></div>

            <button type="button" className="email-erase-btn font-bold text-center rounded-lg cursor-pointer transition transform duration-300 hover:scale-105 px-2" onClick={() => {
              
              emptyEmailFunct();
            
            }}>
          
              <FaEraser/>
          
            </button>
          
          </div>

        </div>

        <p className={`${(email.length === 0)? 'text-red-500':(email.length === 20)? 'text-red-500':(email.length > 0 && email.length < 20)? 'text-green-500': 'text-red-500'} text-sm font-bold mt-1`}>{emailData}</p>

      </section>
    
    </>

  );

}

export default EmailComp;