import { FaEraser } from "react-icons/fa";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { isValidCardNumber } from "../generalLogic";

const CardNumberFormComp = () => {
  const { showPopUpMessage } = useBankStore();

  const { cardNumber, setCardNumber } = useConditionalBankStore();

  const emptyCardNumberForm = () => {
    if (cardNumber === "") {
      showPopUpMessage("Card number form empty, nothing to delete", "error");
    } else if (cardNumber !== "") {
      setCardNumber("");

      showPopUpMessage("Card number form emptied successfully", "success");
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center place-items-center gap-1">
        <section className="w-[700px] p-1">
          <label className="card-linking-text font-bold">Card Number</label>
        </section>

        <div className="relative w-[700px]">
          <input
            type="text"
            value={cardNumber}
            maxLength={16}
            className={`card-linking-form w-[700px] border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${cardNumber.length < 16 || !isValidCardNumber(cardNumber) ? "border border-red-500" : "border border-indigo-500"} transform transition duration-300 hover:scale-102 p-2`}
            placeholder="Card Number"
            onChange={(e) => {
              setCardNumber(e.target.value.replace(/\D/g, ""));
            }}
          />

          <div className="absolute inset-y-0 right-2 flex items-center gap-3 p-3">
            <button
              type="button"
              className="card-linking-action-btn text-lg cursor-pointer rounded-md transform duration-300 hover:scale-110 transition"
              onClick={() => {
                emptyCardNumberForm();
              }}
            >
              <FaEraser />
            </button>
          </div>
        </div>

        <section className="w-[700px]">
          {cardNumber.length < 16 || !isValidCardNumber(cardNumber) ? (
            <>
              <p className="text-red-500 text-start font-bold pt-1">
                Please enter a card number
              </p>
            </>
          ) : null}
        </section>
      </div>
    </>
  );
};

export default CardNumberFormComp;
