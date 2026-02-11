import { FaCopy, FaEraser } from "react-icons/fa";

import { useBankStore } from "../../../store/useBankStore";

import { useConditionalBankStore } from "../../../store/secondBankStore";

const LastNameFormComp = () => {

  const { showPopUpMessage } = useBankStore();

  const { lastName, setLastName } = useConditionalBankStore();

  const emptyLastNameForm = () => {

    if(lastName === '')
    {

      showPopUpMessage('Last name form empty, nothing to delete', 'error');

    }

    else if(lastName !== '')
    {

      setLastName('');

      showPopUpMessage('Last name form emptied successfully', 'success');

    }

    else
    {

      return null;

    }

  }

  const lastNameCopyFunct = () => {

    if(lastName === '')
    {

      showPopUpMessage('Last name form empty, fill the form first', 'error');

    }

    else if(lastName !== '')
    {

      navigator.clipboard.writeText(lastName);

      showPopUpMessage('Last name copied successfully', 'success');

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
          
          <label className="text-black font-bold">Last Name</label>
        
        </section>

        <div className="relative w-[700px]">

          <input type="text" value={lastName} maxLength={10} className={`w-[700px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:font-semibold ${(lastName.length < 5)? "border border-red-500": "border border-indigo-500"} transform transition duration-300 hover:scale-102 p-2`} placeholder="Last Name" onChange={(e) => {
            
            setLastName(e.target.value);
          
          }}/>

          <div className="absolute inset-y-0 right-2 flex items-center gap-3 p-3">
                        
            <button type="button" className="text-lg cursor-pointer transform duration-300 hover:scale-110 transition" onClick={() => {

              emptyLastNameForm();

            }}>

              <FaEraser/>
              
            </button>

            <div className="w-px h-5 bg-gray-500"/>

            <button type="button" className="text-lg cursor-pointer transform duration-300 hover:scale-110 transition" onClick={() => {

              lastNameCopyFunct();

            }}>
  
              <FaCopy/>

            </button>

          </div>

        </div>

        <section className="w-[700px]">

          {(lastName.length == 0)? (

            <>
            
              <p className="text-red-500 text-start font-bold pt-1">Please enter your last name</p>
            
            </>
          
          ):(lastName.length < 2)? (
            
            <>
            
              <p className="text-red-500 text-start font-bold pt-1">Last name cannot have less than 2 letters</p>
            
            </>
        
          ): null}
        
        </section>
        
      </div>
    
    </>

  );

}

export default LastNameFormComp;