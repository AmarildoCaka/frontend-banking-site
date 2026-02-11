import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

const CardDetailsComp = () => {

  const { selectedCardDisplay, setSelectedCardDisplay, cardNumbervisibility, setCardNumberVisibility, cardNumber } = useConditionalBankStore();

  return (

    <>
    
      <section className="fixed flex flex-col justify-center place-items-center z-50 inset-0 bg-opacity-50 bg-white/5 backdrop-blur-sm">
        
        <div className="relative bg-white w-[650px] h-[365px] rounded-xl shadow-xl bg-gradient-to-r from-blue-700 to-indigo-900 text-white p-5 flex flex-col justify-between">
        
          <button type="button" className="absolute top-3 right-3 text-white cursor-pointer transform transition duration-300 hover:scale-110 hover:text-red-400" onClick={() => {

            setSelectedCardDisplay(null);

          }}>

            <FaTimes/>

          </button>

          <p className="text-xl font-semibold tracking-wide">Card Details</p>

          <div className="flex flex-row justify-between tracking-widest font-mono pl-10 pr-10">
        
            <div className="flex flex-col justify-evenly">
            
              <p className="text-gray-300 tracking-wide">Card Type</p>

              <p className="uppercase font-bold text-xl">{selectedCardDisplay?.brand}</p>
            
            </div>

            <div className="text-center p-1">

              <div className="w-20 h-13 text-right bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-sm opacity-80"/>

            </div>

          </div>

          <div className="flex flex-col justify-center place-items-center mb-5">

            <div className="w-full text-left pl-10 pr-10 p-1">

              <p className="text-gray-300 tracking-wide">Card Number</p>

            </div>

            <div className="flex flex-row justify-center place-items-center gap-3 text-lg tracking-widest font-mono mt-4">

              <p>{(cardNumbervisibility === true)? cardNumber: '•••• •••• ••••'}</p>

              <div className="w-px h-4 bg-gray-300"></div>

              <button type="button" className="transform transition duration-300 hover:scale-115 cursor-pointer" onClick={() => {

                setCardNumberVisibility();

              }}>

                {(cardNumbervisibility === true)? <FaEye/>: <FaEyeSlash/>}

              </button>

            </div>

          </div>

          <div className="flex justify-evenly">
        
            <section className="flex flex-col justify-cenetr place-items-center text-center">

              <div className="flex flex-col text-center p-1">

                <p className="text-gray-300 text-sm mb-2 tracking-wide">First Name</p>

                <p className="text-base leading-relaxed pr-4">{selectedCardDisplay?.firstNameData}</p>

              </div>

            </section>

            <section className="flex flex-col text-center p-1">

              <p className="text-gray-300 text-sm mb-2 tracking-wide">Last Name</p>

              <p className="text-base leading-relaxed pr-4">{selectedCardDisplay?.lastNameData}</p>

            </section>

            <section className="flex flex-col text-center p-1">

              <p className="text-gray-300 text-sm mb-2 tracking-wide">Expires</p>
          
              <p className="text-base leading-relaxed pr-4">{selectedCardDisplay?.expiryData}</p>

            </section>

          </div>
          
          <div className="w-full text-right mt-2">

            <p className="text-xs text-gray-300 font-mono tracking-wider">ID: {selectedCardDisplay?.id} </p>

          </div>

        </div>

      </section>
    
    </>

  );

}

export default CardDetailsComp;