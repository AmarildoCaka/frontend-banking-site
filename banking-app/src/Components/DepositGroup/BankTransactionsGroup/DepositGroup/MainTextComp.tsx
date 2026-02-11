import { FaArrowDown } from "react-icons/fa";

const MainTextComp = () => {

  return (
  
    <>
    
      <section className="text-center">

        <div className="flex items-center justify-center gap-3 mb-4">
          
          <div className="flex flex-row justify-center place-content-around text-center bg-blue-600 rounded-xl shadow-lg w-11 h-11 pt-3 mt-30">
          
            <FaArrowDown className="text-white text-xl"/>
          
          </div>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mt-30">Account Deposits</h1>

        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 font-medium">Deposit with ease anytime from anywhere</p>

        <div className="flex items-center justify-center gap-2 mt-4">

          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>

          <span className="text-sm text-gray-500 dark:text-gray-400">Secure Connection</span>
        
        </div>

      </section>
    
    </>
  
  );

}

export default MainTextComp;