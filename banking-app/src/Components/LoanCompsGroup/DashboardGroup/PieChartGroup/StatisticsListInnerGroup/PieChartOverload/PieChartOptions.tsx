import { FaTimes } from "react-icons/fa";

import { useConditionalBankStore } from '../../../../../../store/secondBankStore';

import DeleteSingleUnitBtnComp from '../GeneralActionsComps/DeleteSingleUnitBtn';
import CopyBtnComp from '../GeneralActionsComps/CopyBtnComp';

const PieChartOptionsComp = ({ loanItem }: { loanItem: any }) => {

  const { setPieChartBtnState } = useConditionalBankStore();

  return (

    <>
    
      <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center backdrop-blur-sm z-50">

        <div className="w-full h-56 max-w-md flex flex-col place-items-center gap-3 bg-gray-50 shadow-2xl rounded-lg text-center p-4">

          <section className='w-full text-right'>

            <button type='button' className='hover:text-red-500 cursor-pointer tarnsform transition duration-300 hover:scale-110' onClick={() => {

              setPieChartBtnState(false);

            }}>

              <FaTimes/>

            </button>

          </section>

          <h1 className='text-black font-bold text-center text-3xl'>More Actions</h1>

          <section className="flex flex-row justify-evenly place-items-center gap-5 p-1">

            <DeleteSingleUnitBtnComp loanItem={loanItem}/>

            <hr className="my-4 h-5 border border-gray-400"/>

            <CopyBtnComp loanItem={loanItem}/>

          </section>

        </div>

      </div>

    </>

  );

}

export default PieChartOptionsComp;