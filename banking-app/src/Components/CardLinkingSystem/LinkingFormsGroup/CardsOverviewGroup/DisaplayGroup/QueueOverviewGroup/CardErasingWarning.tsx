import { Card } from "../../../../../../store/functInterfaces";

import { FaExclamationTriangle } from "react-icons/fa";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

import { useCardLinkingSystemHook } from "../../../../cardLinkingLogic";

const CardErasingWarningComp = ({ cardData }: Card) => {
  const { setSingleCardErasingState } = useConditionalBankStore();

  const { deleteSpecificCardFunct } = useCardLinkingSystemHook();

  const confirmationBtnFunct = (cardId: number) => {
    const stored = localStorage.getItem("cardLinkingSystemStorage");

    if (!stored) {
      return;
    }

    const parsedCards = JSON.parse(stored);

    const updatedCards = parsedCards.filter((card: any) => card.id !== cardId);

    localStorage.setItem(
      "cardLinkingSystemStorage",
      JSON.stringify(updatedCards),
    );

    deleteSpecificCardFunct(cardId);

    setSingleCardErasingState(false);
  };

  return (
    <>
      <section className="fixed inset-0 bg-opacity-50 flex items-center justify-center backdrop-blur-sm z-50">
        <div className="card-warning-wrapper w-[500px] h-72 flex flex-col justify-between place-items-center gap-1 shadow-md rounded-md text-center p-4">
          <FaExclamationTriangle className="text-red-500 text-3xl" />

          <h1 className="text-red-500 font-bold text-2xl mb-4">
            Are you sure you want to delete this card?
          </h1>

          <p className="card-warning-text font-semibold mb-2">
            Are you sure you want to delete this card? This action cannot be
            undone. Press OK to permanently remove the card, or Cancel to go
            back.
          </p>

          <hr className="my-3 w-full border-t-1 border-gray-500" />

          <div className="flex flex-row justify-evenly place-items-center gap-10">
            <button
              type="button"
              className="text-green-600 bg-green-50 hover:green-red-100 border-green-200 cursor-pointer hover:scale-105 transition transform shadow-md duration-300 font-bold text-sm border rounded-md px-4 py-1"
              onClick={() => {
                confirmationBtnFunct(cardData.id);
              }}
            >
              Yes
            </button>

            <button
              type="button"
              className="text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md font-bold text-sm border rounded-md px-4 py-1"
              onClick={() => {
                setSingleCardErasingState(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardErasingWarningComp;
