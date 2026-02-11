import { FaPlus } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const MainBtnComp = () => {

  const navigate = useNavigate();

  const navigationFunct = () => {

    navigate("/general-banking-actions/link-card");

  };

  return (
    
    <>
    
      
      <section className="flex flex-row justify-center place-items-center gap-3 p-1">

        <button type="button" className="link-card-btn flex justify-center place-items-center text-center gap-2 font-bold rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 mt-6 px-4 py-2" onClick={() => {

          navigationFunct();

        }}>

          <FaPlus/> Link New Card

        </button>

      </section>
    
    </>
  
  );

}

export default MainBtnComp;