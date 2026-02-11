import { FaUniversity, FaLock } from "react-icons/fa";

const WithdrawTopTextComp = () => {

  return (
    
    <>
    
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100 border rounded-lg p-4 mb-6">
              
        <div className="flex items-center space-x-3">
      
          <div className="bg-blue-600 p-2 rounded-lg">
      
            <FaUniversity className="w-5 h-5 text-white"/>
      
          </div>

          <div>
      
            <h1 className="text-xl font-semibold text-gray-900">Make a Withdraw here</h1>

            <p className="text-sm text-gray-500">Secure multi-currency deposit</p>
      
          </div>
      
        </div>

        <div className="flex flex-row justify-evenly place-items-center text-center gap-3">

          <div className="text-right">
          
            <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">Active</div>
          
          </div>

          <div className="flex items-center text-green-600 text-sm">

            <FaLock className="w-4 h-4 mr-1"/>

            <span className="font-medium">Secured</span>

          </div>

        </div>

      </div>

    </>
    
  );

}

export default WithdrawTopTextComp;