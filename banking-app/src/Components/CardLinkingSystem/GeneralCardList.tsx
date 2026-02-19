import { Layers } from "lucide-react";

import { useEffect } from "react";

import { useBankStore } from "../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../store/ThirdGroup/thirdBankStore";

import CardsListComp from "./CardListGroup/CardsList";
import TopAlertComp from "../GeneralLogic/TopAlertComp";

const GeneralCardListComp = () => {
  const { showPopUpMessage, alertVisibility, alertType, alertMessage } =
    useBankStore();

  const { setActiveTab, cardsHistory, setCardsHistory } =
    useConditionalBankStore();

  const { theme } = useThirdBankStore();

  useEffect(() => {
    setActiveTab("cardCreationHistory");
  }, [setActiveTab]);

  const cardListDeletingFunct = () => {
    if (cardsHistory.length > 0) {
      setCardsHistory([]);

      showPopUpMessage("Card history deleted successfully", "success");
    } else {
      return null;
    }
  };

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="p-5 mt-18">
        <h1
          className={`text-2xl font-bold mb-5 ${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"}`}
        >
          Linked Card History
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-2 gap-4">
            <button
              type="button"
              disabled={cardsHistory.length === 0}
              className={`${cardsHistory.length > 0 ? "text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300" : "text-gray-400 bg-gray-50 border-gray-200 cursor-not-allowed"} font-bold text-sm border rounded-lg px-4 py-2`}
              onClick={() => {
                cardListDeletingFunct();
              }}
            >
              Delete All
            </button>

            <p
              className={`font-bold text-md ${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"}`}
            >
              Total Cards:{" "}
              <span className="text-indigo-500">{cardsHistory.length}</span>
            </p>
          </div>

          <section className="flex-1 overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {cardsHistory.length === 0 ? (
              <>
                <section className="cards-empty-history-wrapper flex flex-col items-center justify-center h-80 rounded-md shadow-md p-5 sm:p-8">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Layers size={32} className="text-black" />
                  </div>

                  <h3
                    className={`font-semibold text-center text-base sm:text-lg md:text-xl mb-2 ${theme === "light" || theme === "system" ? "text-gray-700 " : theme === "dark" ? "text-white" : "text-gray-700 "}`}
                  >
                    No cards linked yet
                  </h3>

                  <p
                    className={`text-sm sm:text-base text-center max-w-xs ${theme === "light" || theme === "system" ? "text-gray-500" : theme === "dark" ? "text-white" : "text-gray-500"}`}
                  >
                    Your cards will appear here once you link them.
                  </p>
                </section>
              </>
            ) : (
              <>
                <CardsListComp />
              </>
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default GeneralCardListComp;
