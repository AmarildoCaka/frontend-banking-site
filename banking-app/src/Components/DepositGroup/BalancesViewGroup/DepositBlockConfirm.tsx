import { useBankStore } from '../../../store/useBankStore';

import { useConditionalBankStore } from '../../../store/secondBankStore';

import { useMainFunctionalityArrHook } from './balanceViewLogic';

import TopAlertComp from '../../GeneralLogic/TopAlertComp';

const DepositBlockConfirm = () => {

  const { depositConfirmationMsgFunct, alertVisibility, alertType, alertMessage, showPopUpMessage, depostiConfirmationMsg } = useBankStore();

  const { setConfirmDepositState, waringPopUpState, selectedDepositId } = useConditionalBankStore();

  const mainArrData = useMainFunctionalityArrHook();

  const generalDepositFunct = (id: number) => {

    switch(true)
    {

      case depostiConfirmationMsg === true:

        mainArrData.find((i) => {

          const data = i.id === id;

          if(data)
          {

            showPopUpMessage(`Deposit number ${i.id + 1} (${i.labelKey} deposit) enabled successfully`, 'info');

          }

        });

        break;

      case depostiConfirmationMsg === false:

        mainArrData.find((i) => {

          const data = i.id === id;

          if(data)
          {

            showPopUpMessage(`Deposit number ${i.id + 1} (${i.labelKey} deposit) disabled successfully`, 'info');

          }

        });

        break;

      default:

        return null;

    }
  
    const item = mainArrData.find((i) => i.id === id);
    
    if(item)
    {
    
      item.balanceActivityFunctKey();
    
    }
  
  }

  return (

    <>

      <TopAlertComp alertVisibility={alertVisibility} alertType={alertType} alertMessage={alertMessage}/>

      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40"></div>

      <div className="fixed inset-0 z-100 flex items-center justify-center">

        <div className='relative flex flex-col justify-evenly place-items-center text-center w-[470px] h-[200px] rounded-2xl shadow-2xl overflow-x-auto space-y-4 animate-fadeIn bg-gradient-to-r from-gray-50 to-blue-50 border border-blue-100'>

          <section className='flex flex-col justify-evely place-items-center text-center gap-2 p-1'>

            <h2 className='font-bold text-3xl'>Deposit Block Confirmation</h2>

            <p className='font-semibold text-md'>Do you want to {waringPopUpState} this deposit?</p>

          </section>

          <hr className="border-0.5 w-100 border-gray-300 dark:border-gray-600"/>

          <section className='flex flex-row justify-between placa-items-center text-center gap-5 p-1'>

            <button type='button' className='text-white font-bold bg-green-500 text-center rounded-lg shadow-2xl cursor-pointer tarnsform transition duration-300 hover:scale-105 hover:bg-green-600 px-4 py-1' onClick={() => {

              if(selectedDepositId !== null)
              {

                depositConfirmationMsgFunct();

                generalDepositFunct(selectedDepositId);
              
                setConfirmDepositState();

              }

            }}>Yes</button>
            
            <button type='button' className='text-white font-bold bg-red-500 text-center rounded-lg shadow-2xl cursor-pointer tarnsform transition duration-300 hover:scale-105 hover:bg-red-600 px-4 py-1' onClick={() => {

              setConfirmDepositState();

            }}>No</button>

          </section>

        </div>

      </div>

    </>
    
  );

}

export default DepositBlockConfirm;