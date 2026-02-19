import { useThirdBankStore } from "../../../../store/ThirdGroup/thirdBankStore";

const ThirdOverlayModal = () => {
  const { setThirdModalState, theme } = useThirdBankStore();

  return (
    <>
      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-50"></div>

      <div className={`fixed inset-0 flex flex-col justify-center place-items-center text-center w-[550px] h-[330px] space-y-2 z-50 rounded-2xl shadow-2xl left-94 top-40 p-1 ${(theme === 'light' || theme === 'system')? 'bg-white':(theme === 'dark')? 'bg-slate-700': 'bg-white'}`}>
        <div className="text-center">
          <div className="text-blue-600 text-4xl hover:scale-105 hover:duration-300 mb-4">
            🤝
          </div>

          <h3 className={`font-bold text-xl ${(theme === 'light' || theme === 'system')? 'text-black':(theme === 'dark')? 'text-white': 'text-white'}`}>
            Customer-Centric
          </h3>

          <p className={`font-semibold mt-2 ${(theme === 'light' || theme === 'system')? 'text-black':(theme === 'dark')? 'text-white': 'text-black'}`}>
            At the core of our mission is an unwavering commitment to our
            customers. We believe that every individual deserves financial
            solutions that are not only reliable but also personalized. That is
            why we take the time to truly listen — to understand the unique
            goals, challenges, and needs of each customer.
          </p>
        </div>

        <button
          type="button"
          className="text-white font-bold bg-red-600 rounded-lg hover:scale-105 transition duration-300 cursor-pointer mt-4 px-4 py-2"
          onClick={() => {
            setThirdModalState(false);
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default ThirdOverlayModal;