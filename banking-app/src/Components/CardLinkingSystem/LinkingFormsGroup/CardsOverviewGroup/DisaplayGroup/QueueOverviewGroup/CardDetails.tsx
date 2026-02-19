import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";

import { useEffect, useState } from "react";

import { useConditionalBankStore } from "../../../../../../store/SecondGroup/secondBankStore";

const CardDetailsComp = () => {
  const {
    selectedCardDisplay,
    setSelectedCardDisplay,
    cardNumbervisibility,
    setCardNumberVisibility,
  } = useConditionalBankStore();

  const [storedCardNumber, setStoredCardNumber] = useState<string>("");

  useEffect(() => {
    if (!selectedCardDisplay?.id) {
      return;
    }

    const stored = localStorage.getItem("cardLinkingSystemStorage");

    if (!stored) {
      return;
    }

    const parsed = JSON.parse(stored);

    const found = parsed.find((c: any) => c.id === selectedCardDisplay.id);

    if (found) {
      setStoredCardNumber(found.cardNumberData);
    }
  }, [selectedCardDisplay]);

  return (
    <>
      <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-3 sm:p-6">
        <div className=" relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl min-h-[320px] rounded-xl shadow-xl bg-gradient-to-r from-blue-700 to-indigo-900 text-white p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-5">
          <button
            type="button"
            className="absolute top-3 right-3 hover:text-red-400 cursor-pointer transition transform duration-300 hover:scale-110"
            onClick={() => {
              setSelectedCardDisplay(null);
            }}
          >
            <FaTimes />
          </button>

          <p className="text-lg sm:text-xl font-semibold tracking-wide">
            Card Details
          </p>

          <div className="flex items-center justify-between gap-4 font-mono">
            <div>
              <p className="text-gray-300 text-sm">Card Type</p>

              <p className="uppercase font-bold text-lg sm:text-xl">
                {selectedCardDisplay?.brand}
              </p>
            </div>

            <div className="w-14 h-9 sm:w-16 sm:h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded opacity-80" />
          </div>

          <div className="flex flex-col items-center gap-3">
            <p className="text-gray-300 text-sm w-full text-left">
              {" "}
              Card Number
            </p>

            <div className="flex items-center gap-3 text-base sm:text-lg font-mono tracking-widest break-all text-center">
              <p>
                {cardNumbervisibility ? storedCardNumber : "•••• •••• ••••"}
              </p>

              <div className="w-px h-4 bg-gray-300" />

              <button
                type="button"
                className="hover:scale-110 transform transition duration-300 cursor-pointer"
                onClick={() => {
                  setCardNumberVisibility();
                }}
              >
                {cardNumbervisibility ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-gray-300 text-sm mb-1">First Name</p>

              <p className="font-semibold break-words">
                {selectedCardDisplay?.firstNameData}
              </p>
            </div>

            <div>
              <p className="text-gray-300 text-sm mb-1">Last Name</p>

              <p className="font-semibold break-words">
                {selectedCardDisplay?.lastNameData}
              </p>
            </div>

            <div>
              <p className="text-gray-300 text-sm mb-1">Expires</p>

              <p className="font-semibold">{selectedCardDisplay?.expiryData}</p>
            </div>
          </div>

          <div className="text-right mt-2">
            <p className="text-xs text-gray-300 font-mono break-all">
              ID: {selectedCardDisplay?.id}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardDetailsComp;
