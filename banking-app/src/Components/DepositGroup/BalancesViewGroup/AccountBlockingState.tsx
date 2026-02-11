import { useBankStore } from '../../../store/useBankStore';

import { useConditionalBankStore } from '../../../store/secondBankStore';

import TopAlertComp from '../../GeneralLogic/TopAlertComp';

const AccountBlockingState = () => {

  const { generalAccountBlockingFunct, showPopUpMessage, alertVisibility, alertType, alertMessage } = useBankStore();

  const { setToFalseAccountBlockingState, accountPremissionState, setUnfreezeBtnState, setFreezeBtnState } = useConditionalBankStore();

  const accountPremissionFunct = () => {
  
    switch(true)
    {
    
      case accountPremissionState === 'Freeze':
      
        generalAccountBlockingFunct();
      
        setUnfreezeBtnState();

        showPopUpMessage('Account frozen successfully', 'info');
      
        break;
  
      case accountPremissionState === 'Unfreeze':

        generalAccountBlockingFunct();

        setFreezeBtnState();

        showPopUpMessage('Account unfrozen successfully', 'info');
        
        break;
  
      default:

        return null;
    
    }

    localStorage.setItem('accountPremissionStateStore', accountPremissionState);

  };

  return (

    <>

      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40"></div>
        
        <div className="fixed inset-0 z-100 flex items-center justify-center">

        <div className='relative flex flex-col justify-evenly place-items-center text-center w-[470px] h-[200px] rounded-2xl shadow-2xl overflow-x-auto space-y-4 animate-fadeIn bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-100'>

          <section className='flex flex-col gap-2'>

            <h1 className='text-black font-bold text-3xl text-center'>Account Block Confirmation</h1>

            <p className='text-black font-semibold text-md text-center'>Do you want to {accountPremissionState} this account?</p>

          </section>

          <hr className="border-0.5 w-100 border-gray-300 dark:border-gray-600"/>

          <section className='flex flex-row justify-evenly place-items-center gap-5'>

            <button type='button' className='text-white font-bold text-center bg-green-500 rounded-lg shadow-xl cursor-pointer transform transition duration-300 hover:scale-105 px-5 py-1' onClick={() => {

              accountPremissionFunct();

              setToFalseAccountBlockingState();

            }}>Yes</button>
            
            <button type='button' className='text-white bg-red-500 font-bold text-center rounded-lg shadow-xl cursor-pointer transform transition duration-300 hover:scale-105 px-5 py-1' onClick={() => {

              setToFalseAccountBlockingState();

            }}>No</button>

          </section>

        </div>

      </div>
    
    </>

  );

}

export default AccountBlockingState;