import { FaEraser } from "react-icons/fa";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import {
  useSenderValidationFunctHook,
  useSenderSurnameValidationFunctHook,
} from "../GeneralLogicComp/generalTransactionLogic";

const SenderInnerFormComp = () => {
  const { showPopUpMessage } = useBankStore();

  const {
    senderFirstName,
    setSenderFirstName,
    senderLastName,
    setSenderLastName,
    fieldErrors,
  } = useConditionalBankStore();

  const senderValidationFunctHook = useSenderValidationFunctHook;

  const senderSurnameValidationFunctHook = useSenderSurnameValidationFunctHook;

  const eraseSenderFirstNameFunct = () => {
    if (senderFirstName === "") {
      showPopUpMessage("Empty sender first name form", "error");
    } else if (senderFirstName !== "") {
      setSenderFirstName("");

      showPopUpMessage("Sender first name deleted successfully", "success");
    } else {
      showPopUpMessage("Empty sender first name form", "error");
    }
  };

  const eraseSenderLastNameFunct = () => {
    if (senderLastName === "") {
      showPopUpMessage("Empty sender last name form", "error");
    } else if (senderLastName !== "") {
      setSenderLastName("");

      showPopUpMessage("Sender last name deleted successfully", "success");
    } else {
      showPopUpMessage("Empty sender last name form", "error");
    }
  };

  const setFormValueFunct = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {

    if(/^[a-zA-Z0-9 ]*$/.test(value))
    {
    
      setter(value);
    
    }
  
  };

  return (
    <>
      <section className="flex flex-col justify-center mt-2 w-full">
        <h1 className="transaction-text font-bold text-left text-lg">Sender</h1>

        <div className="flex flex-col gap-4 mt-3 w-full">
          <div className="flex flex-col w-full">
            <div className="text-left p-1">
              <p className="transaction-text font-semibold">First Name</p>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                value={senderFirstName}
                maxLength={20}
                className={`transaction-form w-full rounded-md border px-5 py-2 pr-10 text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 transition duration-300 ${fieldErrors.senderFirstName ? "border-red-500 focus:ring-red-300 focus:border-red-500" : ""} transform duration-300 hover:scale-101`}
                placeholder="First Name ..."
                onChange={(e) => {
                  
                  setFormValueFunct(e.target.value, setSenderFirstName);
                
                }} />

              <button
                type="button"
                className="transaction-form-erase-btn absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 transition"
                onClick={() => {
                  eraseSenderFirstNameFunct();
                }}
              >
                <FaEraser />
              </button>
            </div>

            {senderValidationFunctHook()}
          </div>

          <div className="flex flex-col w-full">
            <div className="text-left p-1">
              <p className="transaction-text font-semibold">Last Name</p>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                value={senderLastName}
                maxLength={20}
                className={`transaction-form w-full rounded-md border px-5 py-2 pr-10 text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 transition duration-300 ${fieldErrors.senderLastName ? "border-red-500 focus:ring-red-300 focus:border-red-500" : ""} transform duration-300 hover:scale-101`}
                placeholder="Last Name ..."
                onChange={(e) => {
                
                  setFormValueFunct(e.target.value, setSenderLastName);

                }}
              />

              <button
                type="button"
                className="transaction-form-erase-btn absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer hover:scale-105 transition"
                onClick={() => {
                  eraseSenderLastNameFunct();
                }}
              >
                <FaEraser />
              </button>
            </div>

            {senderSurnameValidationFunctHook()}
          </div>
        </div>
      </section>
    </>
  );
};

export default SenderInnerFormComp;