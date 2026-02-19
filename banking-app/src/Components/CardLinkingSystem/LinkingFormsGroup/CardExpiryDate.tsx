import { FaCopy, FaEraser } from "react-icons/fa";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import { isValidCardNumber } from "../generalLogic";

const CardExpiryDateComp = () => {
  const { showPopUpMessage } = useBankStore();

  const { expiry, setExpiry } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const emptyExpiryForm = () => {
    if (expiry === "") {
      showPopUpMessage("Expiry date form empty, nothing to delete", "error");
    } else if (expiry !== "") {
      setExpiry("");

      showPopUpMessage("Expiry date form emptied successfully", "success");
    } else {
      return null;
    }
  };

  const expiryCopyFunct = () => {
    if (expiry === "") {
      showPopUpMessage("Expiry date form empty, fill the form first", "error");
    } else if (expiry !== "") {
      navigator.clipboard.writeText(expiry);

      showPopUpMessage("Expiry date copied successfully", "success");
    } else {
      return null;
    }
  };

  const setFormValueFunct = (value: string) => {

    if(/^[0-9]*$/.test(value))
    {

      setExpiry(value);

    }

  };

  return (
    <>
      <div className="flex flex-col justify-center place-items-center gap-1">
        <section className="w-[700px] p-1">
          <label className="card-linking-text font-bold">
            Card Expiry Date
          </label>
        </section>

        <div className="relative w-[700px]">
          <input
            type="text"
            value={expiry}
            maxLength={5}
            className={`card-linking-form w-[700px] border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${expiry.length < 16 || !isValidCardNumber(expiry) ? "border border-red-500" : "border border-indigo-500"} transform transition duration-300 hover:scale-102 p-2`}
            placeholder="Expiry (MM/YY)"
            onChange={(e) => {
            
              setFormValueFunct(e.target.value);

            }}
          />

          <div className="absolute inset-y-0 right-2 flex items-center gap-3 p-3">
            <button
              type="button"
              className="card-linking-action-btn rounded-md text-lg cursor-pointer transform duration-300 hover:scale-110 transition"
              onClick={() => {
                expiryCopyFunct();
              }}
            >
              <FaCopy />
            </button>

            <div
              className={`w-px h-5 ${theme === "light" || theme === "system" ? "bg-black" : theme === "dark" ? "bg-white" : "text-black"}`}
            />

            <button
              type="button"
              className="card-linking-action-btn text-lg rounded-md cursor-pointer transform duration-300 hover:scale-110 transition"
              onClick={() => {
                emptyExpiryForm();
              }}
            >
              <FaEraser />
            </button>
          </div>
        </div>

        <section className="w-[700px]">
          {expiry.length < 16 || !isValidCardNumber(expiry) ? (
            <>
              <p className="text-red-500 text-start font-bold pt-1">
                Please enter an expiry date
              </p>
            </>
          ) : null}
        </section>
      </div>
    </>
  );
};

export default CardExpiryDateComp;