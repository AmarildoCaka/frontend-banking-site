import { useState, useContext } from "react";

import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

interface CredentialsInterface {

  firstName: string;

  lastName: string;

  email: string;

  password: string;

}

interface FieldErrorsInterface {

  firstName: boolean;

  lastName: boolean;

  email: boolean;

  password: boolean;

}

const Login = () => {

  type tooltipStateType = string;

  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState<CredentialsInterface>(
    
    {

      firstName: "",

      lastName: "",

      email: "",

      password: "",

    }
  
  );

  const [fieldErrors, setFieldErrors] = useState<FieldErrorsInterface>(
    
    {
  
      firstName: false,
  
      lastName: false,
  
      email: false,
  
      password: false,
  
    }
  
  );

  const [error, setError] = useState("");

  const [tooltipState, setToolTipState] = useState<tooltipStateType>("Submit");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    setCredentials(
      
      {
        
        ...credentials,
        
        [e.target.name]: e.target.value
      
      }
    
    );
    
    setFieldErrors(
      
      {
        
        ...fieldErrors,
        
        [e.target.name]: false
      
      }
    
    );
  
  };

  const validateFields = () => {

    const errors: FieldErrorsInterface = {
    
      firstName: credentials.firstName.trim() === "",
    
      lastName: credentials.lastName.trim() === "",
    
      email: credentials.email.trim() === "" || !credentials.email.includes("@"),
    
      password: credentials.password.trim() === "",
    
    };

    setFieldErrors(errors);
    
    return !Object.values(errors).includes(true);
  
  };

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if(!validateFields())
    {

      return;

    }

    if(login(credentials))
    {

      navigate("/profile");
    
    }
    
    else
    {

      setError("Invalid credentials");
    
    }
  
  };

  const tooltipClicknHadler = () => {
    
    if(tooltipState === 'Submit')
    {

      setToolTipState('Submited');

      setTimeout(() => {

        setToolTipState('Submit');

      }, 1000);
      
    }

  }

  return (

    <>
    
      <div className="flex flex-col justify-center place-items-center min-h-screen bg-[#e5de00] dark:bg-black">

        <h2 className="text-black text-4xl font-bold text-center transition duration-300 hover:scale-105 dark:text-white mb-12">Welcome Back</h2>

        <div className="bg-white p-8 shadow-lg rounded-2xl max-w-sm w-full dark:bg-gray-900">

          <h2 className="text-black text-2xl font-bold text-center transition duration-300 hover:scale-105 dark:text-white mb-5">Log In</h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="flex flex-col space-y-3">

              <div className="flex flex-col">

                <input type="text" name="firstName" value={credentials.firstName} className={`text-gray-600 text-md font-semibold shadow-xl border ${(fieldErrors.firstName)? "border-red-500": "border-black"} rounded-xl p-2 transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black`} placeholder="First Name here..." onChange={handleChange}/>
              
                {fieldErrors.firstName && (

                  <>
                  
                    <p className="text-red-500 font-bold text-md pt-2">Please enter first name</p>
                  
                  </>

                )}
              
              </div>

              <div className="flex flex-col">

                <input type="text" name="lastName" value={credentials.lastName} className={`text-gray-600 text-md font-semibold shadow-xl border ${(fieldErrors.lastName)? "border-red-500": "border-black"} rounded-xl p-2 transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black`} placeholder="Last Name here..." onChange={handleChange}/>

                {fieldErrors.lastName && (

                  <>
                  
                    <p className="text-red-500 font-bold text-md pt-2">Please enter last name</p>
                  
                  </>

                )}
              
              </div>

              <div className="flex flex-col">

                <input type="email" name="email" value={credentials.email} className={`text-gray-600 text-md font-semibold shadow-xl border ${(fieldErrors.email)? "border-red-500": "border-black"} rounded-xl p-2 transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black`} placeholder="Email here..." onChange={handleChange}/>

                {fieldErrors.email && (

                  <>
                  
                    <p className="text-red-500 font-bold text-md pt-2">Please enter a valid email</p>
                  
                  </>

                )}
              
              </div>

              <div className="flex flex-col">

                <input type="password" name="password" value={credentials.password} className={`text-gray-600 text-md font-semibold shadow-xl border ${(fieldErrors.password)? "border-red-500": "border-black"} rounded-xl p-2 transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black`} placeholder="Password here..." onChange={handleChange}/>
                  
                {fieldErrors.password && (

                  <>
                  
                    <p className="text-red-500 font-bold text-md pt-2">Please enter password</p>
                  
                  </>

                )}
              
              </div>
            
            </div>

            {error && (

              <>

                <p className="text-red-500 font-bold text-md text-center">{error}</p>

              </>

            )}

            <div className="group relative inline-block w-full">

              <button type="submit" className="scroll-section text-black font-bold bg-[#e5de00] w-full shadow-xl rounded-2xl cursor-pointer transform transition duration-300 hover:scale-105 dark:bg-[#e5de00] dark:text-black py-2" onClick={() => {

                tooltipClicknHadler();

              }}>Log In</button>

              <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tooltipState}</span>

            </div>

          </form>
        
        </div>

      </div>
    
    </>

  );

};

export default Login;