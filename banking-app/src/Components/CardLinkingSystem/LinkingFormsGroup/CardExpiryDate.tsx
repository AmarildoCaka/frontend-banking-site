import { FaCopy, FaEraser } from "react-icons/fa";

import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

import { isValidCardNumber } from '../generalLogic';

const CardExpiryDateComp = () => {

  const { showPopUpMessage } = useBankStore();

  const { expiry, setExpiry } = useConditionalBankStore();

  const emptyExpiryForm = () => {

    if(expiry === '')
    {

      showPopUpMessage('Expiry date form empty, nothing to delete', 'error');

    }

    else if(expiry !== '')
    {

      setExpiry('');

      showPopUpMessage('Expiry date form emptied successfully', 'success');

    }

    else
    {

      return null;

    }

  }

  const expiryCopyFunct = () => {

    if(expiry === '')
    {

      showPopUpMessage('Expiry date form empty, fill the form first', 'error');

    }

    else if(expiry !== '')
    {

      navigator.clipboard.writeText(expiry);

      showPopUpMessage('Expiry date copied successfully', 'success');

    }

    else
    {

      return null;

    }

  }

  return (

    <>
    
      <div className="flex flex-col justify-center place-items-center gap-1">

        <section className="w-[700px] p-1">
        
          <label className="text-black font-bold">Card Expiry Date</label>
        
        </section>

        <div className="relative w-[700px]">

          <input type="text" value={expiry} maxLength={5} className={`w-[700px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:font-semibold ${(expiry.length < 16 || !isValidCardNumber(expiry))? "border border-red-500": "border border-indigo-500"} transform transition duration-300 hover:scale-102 p-2`} placeholder="Expiry (MM/YY)" onChange={(e) => {
            
            setExpiry(e.target.value);
          
          }}/>

          <div className="absolute inset-y-0 right-2 flex items-center gap-3 p-3">
                                  
            <button type="button" className="text-lg cursor-pointer transform duration-300 hover:scale-110 transition" onClick={() => {

              emptyExpiryForm();

            }}>

              <FaEraser/>
              
            </button>

            <div className="w-px h-5 bg-gray-500"/>

            <button type="button" className="text-lg cursor-pointer transform duration-300 hover:scale-110 transition" onClick={() => {

              expiryCopyFunct();

            }}>
  
              <FaCopy/>

            </button>

          </div>

        </div>

        <section className="w-[700px]">

          {(expiry.length < 16 || !isValidCardNumber(expiry))? (
            
            <>
            
              <p className="text-red-500 text-start font-bold pt-1">Please enter an expiry date</p>
            
            </>
          
          ): null}
        
        </section>
      
      </div>
    
    </>

  );

}

export default CardExpiryDateComp;