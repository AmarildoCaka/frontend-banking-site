import { FaShieldAlt } from "react-icons/fa";

const DepositBottomTextComp = () => {
  
  return (
  
    <>
    
      <div className="mt-6 bg-gray-50 rounded-md p-4">

        <div className="flex place-items-center space-x-3">

          <div className="text-sm text-gray-600">

            <section className="flex flex-row justify-center place-items-center text-center gap-2 p-1">

              <FaShieldAlt className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"/>

              <p className="font-medium text-gray-800 mb-1">Your deposits are secure</p>

            </section>

            <p className="text-center">All deposits are protected by 256-bit SSL encryption and are FDIC insured up to $250,000.</p>

          </div>

        </div>

      </div>
    
    </>
  
  );

}

export default DepositBottomTextComp;