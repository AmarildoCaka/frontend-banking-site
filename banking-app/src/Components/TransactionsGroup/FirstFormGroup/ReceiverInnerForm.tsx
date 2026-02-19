import { FaEraser } from "react-icons/fa";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import {
  useReceiverValidationFunctHook,
  useReceiverSurnameValidationFunctHook,
} from "../GeneralLogicComp/generalTransactionLogic";

const ReceiverInnerFormComp = () => {
  const { showPopUpMessage } = useBankStore();

  const {
    receiverFirstName,
    setReceiverFirstName,
    receiverLastName,
    setReceiverLastName,
    fieldErrors,
  } = useConditionalBankStore();

  const receiverValidationFunctHook = useReceiverValidationFunctHook;

  const receiverSurnameValidationFunctHook =
    useReceiverSurnameValidationFunctHook;

  const eraseReceiverFirstNameFunct = () => {
    if (receiverFirstName === "") {
      showPopUpMessage("Empty receiver first name form", "error");
    } else if (receiverFirstName !== "") {
      setReceiverFirstName("");

      showPopUpMessage("Receiver first name deleted successfully", "success");
    } else {
      showPopUpMessage("Empty receiver first name form", "error");
    }
  };

  const eraseReceiverLastNameFunct = () => {
    if (receiverLastName === "") {
      showPopUpMessage("Empty receiver last name form", "error");
    } else if (receiverLastName !== "") {
      setReceiverLastName("");

      showPopUpMessage("Receiver last name deleted successfully", "success");
    } else {
      showPopUpMessage("Empty receiver last name form", "error");
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
        <h1 className="transaction-text font-bold text-left text-lg">
          Receiver
        </h1>

        <div className="flex flex-col gap-4 mt-3 w-full">
          <div className="flex flex-col w-full">
            <div className="text-left p-1">
              <p className="transaction-text font-semibold">First Name</p>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                value={receiverFirstName}
                maxLength={20}
                className={`transaction-form w-full rounded-md border px-5 py-2 pr-10 text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 transition duration-300 ${fieldErrors.receiverFirstName ? "border-red-500 focus:ring-red-300 focus:border-red-500" : ""} transform duration-300 hover:scale-101`}
                placeholder="First Name ..."
                onChange={(e) => {

                  // setReceiverFirstName(e.target.value);
                
                  setFormValueFunct(e.target.value, setReceiverFirstName);

                }}
              />

              <button
                type="button"
                className="transaction-form-erase-btn absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => {
                  eraseReceiverFirstNameFunct();
                }}
              >
                <FaEraser />
              </button>
            </div>

            {receiverValidationFunctHook()}
          </div>

          <div className="flex flex-col w-full">
            <div className="text-left p-1">
              <p className="transaction-text font-semibold">Last Name</p>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                value={receiverLastName}
                maxLength={20}
                className={`transaction-form w-full rounded-md border px-5 py-2 pr-10 text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 transition duration-300 ${fieldErrors.receiverLastName ? "border-red-500 focus:ring-red-300 focus:border-red-500" : ""} transform duration-300 hover:scale-101`}
                placeholder="Last Name ..."
                onChange={(e) => {

                  // setReceiverLastName(e.target.value);
                
                  setFormValueFunct(e.target.value, setReceiverLastName);

                }}
              />

              <button
                type="button"
                className="transaction-form-erase-btn absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer transform transition duration-300 hover:scale-105"
                onClick={() => {
                  eraseReceiverLastNameFunct();
                }}
              >
                <FaEraser />
              </button>
            </div>

            {receiverSurnameValidationFunctHook()}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReceiverInnerFormComp;
