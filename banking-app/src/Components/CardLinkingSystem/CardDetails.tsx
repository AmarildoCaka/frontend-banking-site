import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";

import { useConditionalBankStore } from "../../store/SecondGroup/secondBankStore";

const CardDetailsComp = () => {
  const {
    setShowCardDetails,
    cardNumbervisibility,
    cardNumber,
    setCardNumberVisibility,
    selectedCard,
  } = useConditionalBankStore();

  return (
    <>
      <div className="fixed flex flex-col justify-center place-items-center z-50 inset-0 bg-opacity-50 backdrop-blur-sm">
        <div className="relative bg-white w-[650px] h-[365px] rounded-xl shadow-xl bg-gradient-to-r from-blue-700 to-indigo-900 text-white p-5 flex flex-col justify-between">
          <button
            type="button"
            className="absolute top-3 right-3 text-white cursor-pointer transform transition duration-300 hover:scale-120 hover:text-red-500"
            onClick={() => {
              setShowCardDetails(false);
            }}
          >
            <FaTimes />
          </button>

          <div className="flex items-center">
            <p className="text-lg">{selectedCard.brand}</p>
          </div>

          <div className="flex flex-row justify-center place-items-center gap-3 text-lg tracking-widest font-mono mt-4">
            <p>
              {cardNumbervisibility === true ? cardNumber : "•••• •••• ••••"}
            </p>

            <div className="w-px h-4 bg-gray-300"></div>

            <button
              type="button"
              className="transform transition duration-300 hover:scale-115 cursor-pointer"
              onClick={() => {
                setCardNumberVisibility();
              }}
            >
              {cardNumbervisibility === true ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <div className="flex justify-between items-end text-sm mt-6">
            <section>
              <p className="text-gray-300 text-md">Card Holder</p>

              <p className="text-md uppercase font-semibold">{`${selectedCard.firstNameData} ${selectedCard.lastNameData}`}</p>
            </section>

            <section>
              <p className="text-gray-300 text-md">Expires</p>

              <p className="text-md">{selectedCard.expiryData}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetailsComp;
