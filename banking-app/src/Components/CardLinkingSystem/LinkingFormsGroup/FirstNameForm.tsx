import { FaCopy, FaEraser } from "react-icons/fa";

import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

const FirstNameFormComp = () => {

  const { showPopUpMessage } = useBankStore();

  const { firstName, setFirstName } = useConditionalBankStore();

  const emptyFirstNameForm = () => {

    if(firstName === '')
    {

      showPopUpMessage('First name form empty, nothing to delete', 'error');

    }

    else if(firstName !== '')
    {

      setFirstName('');

      showPopUpMessage('First name form emptied successfully', 'success');

    }

    else
    {

      return null;

    }

  }

  const firstNameCopyFunct = () => {

    if(firstName === '')
    {

      showPopUpMessage('First name form empty, fill the form first', 'error');

    }

    else if(firstName !== '')
    {

      navigator.clipboard.writeText(firstName);

      showPopUpMessage('First name copied successfully', 'success');

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
          
          <label className="text-black font-bold text-left">First Name</label>
        
        </section>

        <div className="relative w-[700px]">

          <input type="text" value={firstName} maxLength={10} className={`w-[700px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:font-semibold ${(firstName.length < 5)? "border border-red-500": "border border-indigo-500"} transform transition duration-300 hover:scale-102 p-2`} placeholder="First Name" onChange={(e) => {
          
            setFirstName(e.target.value);
        
          }}/>

          <div className="absolute inset-y-0 right-2 flex items-center gap-3 p-3">
            
            <button type="button" className="text-lg cursor-pointer transform duration-300 hover:scale-110 transition" onClick={() => {

              emptyFirstNameForm();

            }}>

              <FaEraser/>
              
            </button>

            <div className="w-px h-5 bg-gray-500"/>

            <button type="button" className="text-lg cursor-pointer transform duration-300 hover:scale-110 transition" onClick={() => {

              firstNameCopyFunct();

            }}>
  
              <FaCopy/>

            </button>

          </div>
        
        </div>

        <section className="w-[700px]">

          {(firstName.length == 0)? (
          
            <>
            
              <p className="text-red-500 text-start font-bold pt-1">Please enter your first name</p>
            
            </>
          
          ):(firstName.length < 2)? (

            <>
            
              <p className="text-red-500 text-start font-bold pt-1">First Name cannot have less than 2 letters</p>
            
            </>
          
          ): null}
        
        </section>

      </div>
    
    </>

  );

}

export default FirstNameFormComp;