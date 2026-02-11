import { useState, useContext } from "react";

import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

interface formDataInterface {

  firstName: string,

  lastName: string,

  email: string,

  password: string,

  age: string,

  gender: string,

  birthDay: string,

  birthMonth: string,

  birthYear: string,

  accountNumber: string,

  iban: string,

  accountId: string

}

interface fieldErrorsInterface {
  
  firstName: boolean,

  lastName: boolean,

  email: boolean,

  password: boolean,

  age: boolean,

  gender: boolean,

  birthDay: boolean,

  birthMonth: boolean,

  birthYear: boolean,

  accountNumber: boolean,

  iban: boolean,

  accountId: boolean

};

const SignUp = () => {

  type firstStepPopUpType = boolean;

  type secondStepPopUpType = boolean;
  
  type thirdStepPopUpType = boolean;

  type showPasswordType = boolean;

  const { signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  const [firstStepPopUp, setFirstStepPopUp] = useState<firstStepPopUpType>(true);

  const [secondStepPopUp, setSecondStepPopUp] = useState<secondStepPopUpType>(false);

  const [thirdStepPopUp, setThirdStepPopUp] = useState<thirdStepPopUpType>(false);

  const [formData, setFormData] = useState<formDataInterface>(
    
    {

      firstName: "",

      lastName: "",

      email: "",

      password: "",

      age: "",

      gender: "",

      birthDay: "",

      birthMonth: "",

      birthYear: "",

      accountNumber: "",

      iban: "",

      accountId: ""

    }
  
  );

  const [fieldErrors, setFieldErrors] = useState<fieldErrorsInterface>(
    
    {
  
      firstName: false,
    
      lastName: false,
    
      email: false,
    
      password: false,
    
      age: false,
    
      gender: false,
    
      birthDay: false,
    
      birthMonth: false,
    
      birthYear: false,

      accountNumber: false,

      iban: false,

      accountId: false
  
    }
  
  );

  const [showPassword, setShowPassword] = useState<showPasswordType>(false);
  
  const handleChange = (e) => {

    setFormData(
      
      {
  
        ...formData,
    
        [e.target.name]: e.target.value

      }
    
    );
  
  };

  const accountCredentialsFunct = (e: React.FormEvent): void => {
  
    e.preventDefault();

    const generateAccountNumber = (): string => {

      return 'AC' + Math.floor(Math.random() * 10000000000).toString();
  
    };
  
    const generateIBAN = (accountNumber: string, countryCode: string): string => {
    
      return `${countryCode}29NWBK6016${accountNumber}`;
    
    };

    const generateAccountId = (): string => {
  
      return 'ID' + Math.floor(Math.random() * 10000000).toString();
  
    };

    const generatedAccountNumber = generateAccountNumber();
  
    const generatedIBAN = generateIBAN(generatedAccountNumber, 'GB');
  
    const generatedAccountId = generateAccountId();

    setFormData((prev) => ({

      ...prev,
      
      accountId: generatedAccountId,
      
      accountNumber: generatedAccountNumber,
      
      iban: generatedIBAN
    
    }));    
    
  }

  const firstThreeStepFormFunct = () => {

    if(formData.firstName === "" || formData.lastName === ""
        || formData.email === "" || formData.password === "" 
        || formData.age === "" || formData.gender === "") {

      setFirstStepPopUp(true);

      setSecondStepPopUp(false);

      setFieldErrors((prev) => ({

        ...prev,

        firstName: true,

        lastName: true,

        email: true,

        password: true,

        age: true,

        gender: true,

      }));

    }

    else if(formData.firstName !== "" || formData.lastName !== ""
      || formData.email !== "" || formData.password !== ""
      || formData.age !== "" || formData.gender !== "") {

      setFirstStepPopUp(false);

      setSecondStepPopUp(true);

      setFieldErrors((prev) => ({

        ...prev,

        firstName: false,

        lastName: false,

        email: false,

        password: false,

        age: false,

        gender: false,

      }));

    }

  }

  const secondThreeStepFormFunct = () => {

    if(formData.birthDay === "" || formData.birthMonth === "" || formData.birthYear === "")
    {

      setSecondStepPopUp(true);

      setThirdStepPopUp(false);

      setFieldErrors((prev) => ({

        ...prev,

        birthDay: true,

        birthMonth: true,

        birthYear: true

      }));

    }

    else if(formData.birthDay !== "" || formData.birthMonth !== "" || formData.birthYear !== "")
    {

      setSecondStepPopUp(false);

      setThirdStepPopUp(true);

      setFieldErrors((prev) => ({

        ...prev,

        birthDay: false,

        birthMonth: false,

        birthYear: false

      }));

    }

  }

  const thirdThreeStepFormFunct = () => {

    if(formData.accountNumber === "" || formData.iban === "" || formData.accountId === "")
    {

      setFieldErrors((prev) => ({

        ...prev,

        accountNumber: true,

        iban: true,

        accountId: true

      }));

    }
  
    else if(formData.accountNumber !== "" || formData.iban !== "" || formData.accountId !== "")
    {

      try
      {

        setFieldErrors((prev) => ({

          ...prev,
  
          accountNumber: false,
  
          iban: false,
  
          accountId: false
  
        }));

        handleSubmit();

      }
      
      catch(error)
      {

        console.error(error);

      }

    }

  }

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    signUp(formData);

    navigate("/profile");
  
  };

  return (

    <>
    
      <div className="flex items-center justify-center min-h-screen bg-[#e5de00] dark:bg-black">

        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 justify-center place-items-center text-center p-15">

          <div className="flex flex-col justify-center place-items-baseline text-center gap-3 p-1">

            <h3 className="scroll-section text-black font-bold text-4xl text-wrap text-start transform transition duration-300 hover:scale-105 p-1">Welcome to World Bank <br/> Your Trusted Financial Partner</h3>

            <p className="scroll-section text-black font-semibold text-lg text-start text-wrap transform transition duration-300 hover:scale-105 p-1">
              
              At World Bank, we believe in empowering you to take control of your financial future. 
              Whether you're looking to open a new account, manage your savings, or apply for a loan, 
              we're here to help you every step of the way.
              
            </p>

            <p className="scroll-section text-black font-bold text-2xl text-start dark:text-white transform transition duration-300 hover:scale-105 p-1">Because life is complicated enough!</p>

          </div>

          {firstStepPopUp && (

            <>
            
              <div className="scroll-section bg-white w-[500px] shadow-lg rounded-2xl dark:bg-gray-900 pb-3 p-4">

                <h2 className="scroll-section text-black text-2xl font-bold text-center transform transition duration-300 hover:scale-105 dark:text-white mb-8">Sign Up Here</h2>

                <form onSubmit={handleSubmit} className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-5 p-1">

                  <div className="flex flex-col justify-center place-items-center text-center">

                    <input name="firstName" placeholder="First Name here..." value={formData.firstName} className={`text-gray-600 text-md font-semibold shadow-2xl ${(fieldErrors.firstName)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} onChange={handleChange}/>

                    {fieldErrors.firstName && (

                      <>

                        <p className="text-red-500 font-bold text-md pt-2">Please enter first name</p>

                      </>

                    )}

                  </div>

                  <div className="flex flex-col justify-center place-items-center text-center">

                    <input name="lastName" placeholder="Last Name here..." value={formData.lastName} className={`text-gray-600 text-md font-semibold shadow-2xl ${(fieldErrors.lastName)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} onChange={handleChange}/>

                    {fieldErrors.lastName && (

                      <>

                        <p className="text-red-500 font-bold text-md pt-2">Please enter last name</p>

                      </>

                    )}

                  </div>

                  <div className="flex flex-col justify-center place-items-center text-center">

                    <input name="email" type="email" placeholder="Email here..." value={formData.email} className={`text-gray-600 text-md font-semibold shadow-2xl ${(fieldErrors.email)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} onChange={handleChange}/>

                    {fieldErrors.email && (

                      <>

                        <p className="text-red-500 font-bold text-md pt-2">Please enter email</p>

                      </>

                    )}

                  </div>

                  <div className="flex flex-col justify-center place-items-center text-center">

                    <div className="relative w-full max-w-md">

                      <input name="password" type={(showPassword)? "text": "password"} value={formData.password} className={`w-full text-gray-600 text-md font-semibold shadow-2xl ${fieldErrors.password ? 'border border-red-500' : 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2 pr-10`} placeholder="Password here..." onChange={handleChange}/>

                      <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-black dark:text-white text-xl" onClick={() => {

                        setShowPassword((prev) => !prev);

                      }}>{(showPassword)? <FaEyeSlash/>: <FaEye/>}</button>
                    
                    </div>

                    {fieldErrors.password && (

                      <>

                        <p className="text-red-500 font-bold text-md pt-2">Please enter password</p>

                      </>

                    )}

                  </div>

                  <div className="flex flex-col justify-center place-items-center text-center">

                    <input name="age" type="number" placeholder="Age here..." value={formData.age} className={`text-gray-600 text-md font-semibold shadow-2xl ${(fieldErrors.age)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} onChange={handleChange}/>

                    {fieldErrors.age && (

                      <>

                        <p className="text-red-500 font-bold text-md pt-2">Please enter age</p>

                      </>

                    )}

                  </div>

                  <div className="flex flex-col justify-center place-items-center text-center">

                    <select name="gender" value={formData.gender} className={`text-gray-600 text-md font-semibold shadow-2xl w-full ${(fieldErrors.age)? 'border border-red-500': 'border border-black'} rounded-xl dark:bg-gray-500 dark:text-black p-2`} onChange={handleChange}>

                      <option value="Gender here..." className="text-gray-600 font-semibold p-1">Gender here...</option>

                      <option value="Male" className="text-gray-600 font-semibold p-1">Male</option>
                      
                      <option value="Female" className="text-gray-600 font-semibold p-1">Female</option>
                      
                      <option value="Rather not say" className="text-gray-600 font-semibold p-1">Rather not say</option>

                    </select>

                    {fieldErrors.gender && (

                      <>

                        <p className="text-red-500 font-bold text-md pt-2">Please enter gender</p>

                      </>

                    )}

                  </div>

                  <div className="flex flex-col justify-center place-items-center text-center col-span-2 gap-1 p-1">

                    <button type="submit" className="scroll-section text-black font-bold bg-[#e5de00] w-full shadow-2xl rounded-2xl cursor-pointer transform transition duration-300 hover:scale-105 dark:bg-[#e5de00] dark:text-black py-2" onClick={() => {

                      firstThreeStepFormFunct();

                    }}>Next</button>

                  </div>

                </form>

                <p className="text-black font-bold text-right mt-3">1/3</p>

              </div>
            
            </>

          )}

          {secondStepPopUp && (

            <>
            
              <div className="scroll-section bg-white w-[500px] shadow-lg rounded-2xl dark:bg-gray-900 p-5">

                <h2 className="scroll-section text-black text-2xl font-bold text-center transform transition duration-300 hover:scale-105 dark:text-white mb-7">Enter Age Credentials</h2>

                <form onSubmit={handleSubmit}>

                  <div className="flex flex-col justify-center place-items-center text-center mt-7 mb-6">

                    <input name="birthDay" type="number" placeholder="Birth Day here..." value={formData.birthDay} className={`text-gray-600 text-md font-semibold shadow-2xl w-[400px] ${(fieldErrors.birthDay)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} onChange={handleChange}/>

                    {fieldErrors.birthDay && (

                      <>

                        <p className="text-red-500 font-bold text-md pt-2">Please enter birth day</p>

                      </>

                    )}

                  </div>

                  <div className="flex flex-col justify-center place-items-center text-center mb-5">

                    <select name="birthMonth" value={formData.birthMonth} onChange={handleChange} className={`text-gray-600 text-md font-semibold shadow-2xl w-[400px] ${(fieldErrors.birthMonth)? 'border border-red-500': 'border border-black'} rounded-xl dark:bg-gray-500 dark:text-black p-2`}>

                      <option value="Your Month" className="text-black font-semibold placeholder:text-gray-600 p-1">Your Month</option>

                      <option value="January" className="text-black font-semibold p-1">January</option>

                      <option value="February" className="text-black font-semibold p-1">February</option>

                      <option value="March" className="text-black font-semibold p-1">March</option>

                      <option value="April" className="text-black font-semibold p-1">April</option>

                      <option value="May" className="text-black font-semibold p-1">May</option>

                      <option value="June" className="text-black font-semibold p-1">June</option>

                      <option value="July" className="text-black font-semibold p-1">July</option>

                      <option value="August" className="text-black font-semibold p-1">August</option>

                      <option value="September" className="text-black font-semibold p-1">September</option>

                      <option value="October" className="text-black font-semibold p-1">October</option>

                      <option value="November" className="text-black font-semibold p-1">November</option>

                      <option value="December" className="text-black font-semibold p-1">December</option>

                    </select>

                    {fieldErrors.birthMonth && (

                      <>

                        <p className="text-red-500 font-bold text-md pt-2">Please enter birth month</p>

                      </>

                    )}

                  </div>

                  <div className="flex flex-col justify-center place-items-center text-center mb-5">

                    <input name="birthYear" type="number" placeholder="Birth Year here..." value={formData.birthYear} className={`text-gray-600 text-md font-semibold shadow-2xl w-[400px] ${(fieldErrors.birthYear)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} onChange={handleChange}/>

                    {fieldErrors.birthYear && (

                      <>

                        <p className="text-red-500 font-bold text-md pt-2">Please enter birth year</p>

                      </>

                    )}

                  </div>

                  <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 justify-center place-items-center text-center mt-6">

                    <button type="button" className="scroll-section text-black font-bold bg-[#e5de00] w-[175px] shadow-2xl rounded-xl cursor-pointer transform transition duration-300 hover:scale-105 dark:bg-[#e5de00] dark:text-black py-2" onClick={() => {

                      setSecondStepPopUp(false);

                      setFirstStepPopUp(true);

                    }}>Go Back</button>

                    <button type="submit" className="scroll-section text-black font-bold bg-[#e5de00] w-[175px] shadow-2xl rounded-2xl cursor-pointer transform transition duration-300 hover:scale-105 dark:bg-[#e5de00] dark:text-black py-2" onClick={() => {

                      secondThreeStepFormFunct();

                    }}>Next</button>

                  </div>

                </form>

                <p className="text-black font-bold text-right mt-3">2/3</p>

              </div>
            
            </>

          )}

          {thirdStepPopUp && (

            <>
            
              <div className="scroll-section bg-white w-[500px] shadow-lg rounded-2xl dark:bg-gray-900 p-5">

                <h2 className="scroll-section text-black text-2xl font-bold text-center transform transition duration-300 hover:scale-105 dark:text-white mb-5">Generate Account Credentials</h2>

                <form>

                  <div className="flex flex-col justify-center place-items-center text-center mt-7 mb-6">
                    
                    <input type="text" value={formData.accountNumber} className={`text-gray-600 text-md font-semibold w-[350px] shadow-2xl ${(fieldErrors.accountNumber)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} placeholder="Account Number here..." readOnly onChange={handleChange}/>
  
                    {fieldErrors.accountNumber && (
  
                      <>
  
                        <p className="text-red-500 font-bold text-md pt-2">Please enter your account number</p>
  
                      </>
  
                    )}
  
                  </div>
  
                  <div className="flex flex-col justify-center place-items-center text-center mb-5">
                                  
                    <input type="text" value={formData.iban} className={`text-gray-600 text-md font-semibold w-[350px] shadow-2xl ${(fieldErrors.iban)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} placeholder="IBAN here..." readOnly onChange={handleChange}/>
  
                    {fieldErrors.iban && (
  
                      <>
  
                        <p className="text-red-500 font-bold text-md pt-2">Please enter your IBAN</p>
  
                      </>
  
                    )}
  
                  </div>
  
                  <div className="flex flex-col justify-center place-items-center text-center mb-5">
                                
                    <input type="text" value={formData.accountId} className={`text-gray-600 text-md font-semibold w-[350px] shadow-2xl ${(fieldErrors.accountId)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} placeholder="Account ID here..." readOnly onChange={handleChange}/>
  
                    {fieldErrors.accountId && (
  
                      <>
  
                        <p className="text-red-500 font-bold text-md pt-2">Please enter your account Id</p>
  
                      </>
  
                    )}
  
                  </div>

                  <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 justify-between place-items-center text-center m-4 p-1">

                    <button type="button" className="scroll-section text-black font-bold bg-[#e5de00] w-[150px] shadow-2xl rounded-xl cursor-pointer transform transition duration-300 hover:scale-105 dark:bg-[#e5de00] dark:text-black py-2" onClick={() => {

                      setThirdStepPopUp(false);

                      setSecondStepPopUp(true);

                    }}>Go Back</button>

                    <button type="button" className="text-white font-bold bg-blue-500 w-[150px] shadow-2xl rounded-xl cursor-pointer transform transition duration-300 hover:scale-105 py-2" onClick={accountCredentialsFunct}>Generate</button>

                  </div>

                  <div className="flex flex-col justify-center place-items-center text-center col-span-2 gap-1 p-1">

                    <button type="button" className="scroll-section text-black font-bold bg-[#e5de00] w-[350px] shadow-2xl rounded-2xl cursor-pointer transform transition duration-300 hover:scale-105 dark:bg-[#e5de00] py-2" onClick={() => {

                      thirdThreeStepFormFunct();

                    }}>Sign Up</button>

                  </div>

                </form>

                <p className="text-black font-bold text-right">3/3</p>

              </div>
            
            </>

          )}

        </div>

      </div>

    </>

  );
  
};

export default SignUp;