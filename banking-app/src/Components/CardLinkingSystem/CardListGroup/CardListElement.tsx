import { FaUnlock, FaLock, FaTrashAlt } from "react-icons/fa";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import { useCardLinkingSystemHook } from "../cardLinkingLogic";

const CardListElementComp = () => {
  const { showPopUpMessage } = useBankStore();

  const { cardsHistory, setCardsHistory } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const { deleteSpecificCardHistoryFunct } = useCardLinkingSystemHook();

  const toggleLockCard = (id: number) => {
    setCardsHistory(
      cardsHistory.map((card) =>
        card.id === id ? { ...card, locked: !card.locked } : card,
      ),
    );
  };

  const confirmationBtnFunct = (cardId: number) => {
    const stored = localStorage.getItem("cardHistoryLinkingSystem");

    if (!stored) {
      return;
    }

    const parsedCards = JSON.parse(stored);

    const updatedCards = parsedCards.filter((card: any) => card.id !== cardId);

    localStorage.setItem(
      "cardHistoryLinkingSystem",
      JSON.stringify(updatedCards),
    );

    deleteSpecificCardHistoryFunct(cardId);

    showPopUpMessage(
      `History number #${updatedCards + 1} deleted successfully`,
      "success",
    );
  };

  return (
    <>
      {cardsHistory.map((card, index) => (
        <>
          <li
            key={card.id}
            className="card-history-element flex justify-between items-center rounded-md p-5 transform transition duration-300 shadow-md hover:shadow-lg"
          >
            <span>
              <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                Card No:
              </p>

              <span className="font-bold text-md text-indigo-600">
                {" "}
                #{index + 1}
              </span>
            </span>

            <span>
              <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                Card number
              </p>

              <p className="loan-data font-bold text-sm line-clamp-2">
                {card.brand} •••• {card.last4}
              </p>
            </span>

            <span>
              <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                Expires at
              </p>

              <p className="loan-data font-bold text-sm line-clamp-2">
                {card.expiryData}
              </p>
            </span>

            <span>
              <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                Created at
              </p>

              <p className="loan-data font-bold text-sm line-clamp-2">
                {card.createdAt}
              </p>
            </span>

            <div className="flex flex-row justify-between place-items-center text-center gap-2">
              <button
                type="button"
                className={`text-lg cursor-pointer transform transition duration-300 hover:scale-121 ${card.locked ? "text-green-500" : "text-red-500"}`}
                onClick={() => {
                  toggleLockCard(card.id);
                }}
              >
                {card.locked ? <FaUnlock /> : <FaLock />}
              </button>

              <div
                className={`border-l h-5 mx-1 ${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"}`}
              ></div>

              <button
                type="button"
                className="text-indigo-600 text-lg cursor-pointer transform transition duration-300 hover:scale-121 hover:text-red-500"
                onClick={() => {
                  confirmationBtnFunct(card.id);
                }}
              >
                <FaTrashAlt />
              </button>
            </div>
          </li>
        </>
      ))}
    </>
  );
};

export default CardListElementComp;
