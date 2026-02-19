import { useThirdBankStore } from "../../../../store/ThirdGroup/thirdBankStore";

const FirstOverlayModal = () => {

  const { setFirstModalState, theme } = useThirdBankStore();

  return (

    <>

      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-50"></div>

      <div className={`fixed inset-0 flex flex-col justify-center place-items-center text-center w-[550px] h-[330px] space-y-2 z-50 rounded-md shadow-md left-94 top-40 p-1 ${(theme === 'light' || theme === 'system')? 'bg-white':(theme === 'dark')? 'bg-slate-700': 'bg-white'}`}>

        <div className='text-center'>

          <div className="text-4xl hover:scale-105 hover:duration-300 mb-4">🔒</div>

          <h3 className={`font-bold text-xl ${(theme === 'light' || theme === 'system')? 'text-black':(theme === 'dark')? 'text-white': 'text-black'}`}>Security</h3>

          <p className={`font-semibold mt-2 ${(theme === 'light' || theme === 'system')? 'text-black':(theme === 'dark')? 'text-white': 'text-black'}`}>

            We prioritize the security of your data and funds above all else, 
            implementing industry-leading technologies and rigorous protocols 
            to safeguard your financial information. Our systems are continuously 
            monitored and updated to protect against emerging threats, ensuring 
            your transactions and personal details remain private and secure.

          </p>

        </div>

        <button type="button" className="text-white font-bold bg-red-600 rounded-md hover:scale-105 transition duration-300 cursor-pointer mt-4 px-4 py-2" onClick={() => {

          setFirstModalState(false);

        }}>Close</button>

      </div>

    </>

  );

}

export default FirstOverlayModal;