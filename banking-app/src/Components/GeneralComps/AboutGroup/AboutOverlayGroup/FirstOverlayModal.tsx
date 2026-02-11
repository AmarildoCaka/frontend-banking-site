import { useThirdBankStore } from "../../../../store/thirdBankStore"; 

const FirstOverlayModal = () => {

  const { setFirstModalState } = useThirdBankStore();

  return (

    <>

      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-50"></div>

      <div className='fixed inset-0 flex flex-col justify-center place-items-center text-center bg-white w-[550px] h-[330px] space-y-2 z-50 rounded-2xl shadow-2xl dark:bg-gray-800 dark:text-white left-94 top-40 p-1'>

        <div className='text-center'>

          <div className="text-blue-600 text-4xl hover:scale-105 hover:duration-300 mb-4">🔒</div>

          <h3 className="font-bold text-xl text-gray-800 dark:text-white">Security</h3>

          <p className="font-semibold text-gray-800 dark:text-white mt-2">

            We prioritize the security of your data and funds above all else, 
            implementing industry-leading technologies and rigorous protocols 
            to safeguard your financial information. Our systems are continuously 
            monitored and updated to protect against emerging threats, ensuring 
            your transactions and personal details remain private and secure.

          </p>

        </div>

        <button type="button" className="text-white font-bold bg-red-600 rounded-lg hover:scale-105 transition duration-300 cursor-pointer mt-4 px-4 py-2" onClick={() => {

          setFirstModalState(false);

        }}>Close</button>

      </div>

    </>

  );

}

export default FirstOverlayModal;