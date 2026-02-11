import { Link } from "react-router-dom";

import { useBankStore } from "../../../store/useBankStore";

import LineChartComp from './LineChartComp';
import PieChartComp from './PieChartComp';

const StartComp = () => {

  const { userGrowthSwitch } = useBankStore();

  return (

    <>
    
      <section className="hero bg-gradient-to-br from-blue-100 to-indigo-200 py-20 px-6">
    
        <div className="grid justify-center place-items-center text-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-grid-cols-2 2xl:grid-cols-2 gap-8 items-center">
    
          <div className="flex flex-col md:text-left p-15">
    
            <div className="p-1">
    
              <h1 className="hero-text text-black text-5xl font-extrabold transform transition duration-300 hover:scale-103 mb-4">Seamless & Secure Banking</h1>

              <p className="hero-text text-black text-lg max-w-2xl font-bold mx-auto transform transition durtation-300 hover:scale-102 md:mx-0 mb-6">Experience modern banking with top-tier security, mobile access, and easy transactions.</p>

            </div>

            <div className="flex flex-row justify-between place-items-center text-center md:justify-start gap-4">

              <Link to="signup" target="_self">
              
                <button type="button" className="hero-btn-text text-indigo-500 font-bold bg-white shadow-xl rounded-2xl cursor-pointer transition transform duration-300 hover:scale-105 px-8 py-3">Sign Up</button>
              
              </Link>

              <Link to="login" target="_self">
              
                <button type="button" className="hero-btn-text text-white font-bold bg-indigo-500 shadow-xl rounded-2xl cursor-pointer trsanform transition duration-300 hover:scale-105 px-8 py-3">Login</button>
              
              </Link>
            
            </div>
          
          </div>

          <div className="flex justify-center md:justify-end mt-15">
            
            <section className="flex flex-col place-content-center gap-2 w-full p-1">
            
              {(userGrowthSwitch === "LineChart")? (
            
                <>

                  <LineChartComp/>
                
                </>
              
              ):(userGrowthSwitch === "PieChart")? (

                <>
                
                  <PieChartComp/>

                </>

              ): null}

            </section>
          
          </div>
        
        </div>
      
      </section>
    
    </>

  );

};

export default StartComp;