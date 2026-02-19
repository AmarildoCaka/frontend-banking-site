import { useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { ListOrdered } from "lucide-react";

import { useBankStore } from "../../../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../../../store/ThirdGroup/thirdBankStore";

import QueueOverviewComp from "./QueueOverviewGroup/QueueOverviewComp";

const CardsListComp = () => {
  const [isVisible, setIVisible] = useState<boolean>(false);

  const { showPopUpMessage } = useBankStore();

  const { cards, setCards, setCardsDisplayState, setSingleCardErasingState } =
    useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const generalCardErasingFunct = () => {
    setCards([]);

    showPopUpMessage("All your cards are erased successfully", "success");
  };

  return (
    <>
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-5 2xl:px-10">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <section className="flex flex-row items-center gap-2 sm:gap-3">
              <ListOrdered
                size={20}
                className={`sm:w-6 sm:h-6 md:w-7 md:h-7 ${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"}`}
              />

              <h1
                className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold ${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"}`}
              >
                Card List
              </h1>
            </section>

            <button
              type="button"
              className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 font-semibold rounded-md shadow-md transform transition duration-300 cursor-pointer hover:scale-105 text-xs sm:text-sm md:text-base"
              onClick={() => {
                setCardsDisplayState(false);
              }}
            >
              View in Queue
            </button>
          </div>

          <hr className="border-t border-gray-400 sm:border-gray-500 md:border-gray-600" />

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-2 p-1">
            <button
              type="button"
              className="text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition transform duration-300 font-semibold text-xs md:text-base border rounded-md px-3 py-1"
              onClick={() => {
                generalCardErasingFunct();
              }}
            >
              Erase all
            </button>

            <p
              className={`font-bold text-center sm:text-right order-1 sm:order-2 text-sm sm:text-base ${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"}`}
            >
              Total:
              <span className="text-indigo-500 font-bold"> {cards.length}</span>
            </p>
          </div>

          <div className="space-y-5 overflow-y-auto h-80 p-5">
            {cards.map((card, index) => (
              <>
                <div
                  key={card.id}
                  className="card-element flex flex-col gap-5 w-full rounded-lg shadow-md max-w-4xl mx-auto p-5 transition hover:shadow-xl"
                >
                  <div className="w-full flex justify-between items-center border-b border-gray-100 pb-3">
                    <p
                      className={`${theme === "light" || theme === "system" ? "text-black" : theme === "dark" ? "text-white" : "text-black"} font-semibold text-sm`}
                    >
                      Card No:
                      <span className="font-bold text-md text-indigo-600">
                        {" "}
                        #{index + 1}
                      </span>
                    </p>

                    <button
                      type="button"
                      className="w-full sm:w-auto text-red-600 border border-red-200 bg-red-50 hover:bg-red-100 px-3 py-1 cursor-pointer rounded-md text-sm font-semibold transform transition hover:scale-105"
                      onClick={() => {
                        setSingleCardErasingState(true);
                      }}
                    >
                      Erase
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
                    <div>
                      <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                        Card Brand
                      </p>

                      <p className="loan-data font-bold text-sm line-clamp-2">
                        {card.brand}
                      </p>
                    </div>

                    <div>
                      <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                        First Name
                      </p>

                      <p className="loan-data font-bold text-sm line-clamp-2">
                        {card.firstNameData}
                      </p>
                    </div>

                    <div>
                      <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                        Last Name
                      </p>

                      <p className="loan-data font-bold text-sm line-clamp-2">
                        {card.lastNameData}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-row gap-x-2">
                        <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                          Card Number
                        </p>

                        <div className="border-l border-black h-4"></div>

                        <button
                          type="button"
                          className="loan-propearty text-xs uppercase tracking-wide mb-1 cursor-pointer transform transition duration-300 hover:scale-105"
                          onClick={() => {
                            setIVisible((prev) => !prev);
                          }}
                        >
                          {isVisible === true ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>

                      <p className="loan-data font-bold text-sm line-clamp-2">
                        {isVisible === true
                          ? card.cardNumberData
                          : "•••• •••• ••••"}
                      </p>
                    </div>

                    <div>
                      <p className="loan-propearty text-xs uppercase tracking-wide mb-1">
                        Expiry Date
                      </p>

                      <p className="loan-data font-bold text-sm line-clamp-2">
                        {card.expiryData}
                      </p>
                    </div>
                  </div>
                </div>

                <QueueOverviewComp cardElement={card} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsListComp;
