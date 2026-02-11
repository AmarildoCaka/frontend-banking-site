import { useState, useContext, useRef } from "react";

import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

import { FaCopy } from 'react-icons/fa';

import TopAlertComp from './GeneralLogic/TopAlertComp';

const Profile = () => {

  type identificationCredentialsType = {

    firstName: object,

    lastName: object

  }

  const { user, logout, seconds, minutes, hours, date, day, month, year } = useContext(AuthContext);

  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(user?.avatar || "https://via.placeholder.com/150");

  const [tooltipState, setToolTipState] = useState<string>("Sign Out");

  const [userDataLabelPopUp, setUserDataLabelPopUp] = useState<boolean>(false);

  const [firstConditionalPopUpInfo, setFirstConditionalPopUpInfo] = useState<null | string>(null);
 
  const [secondConditionalPopUpInfo, setSecondConditionalPopUpInfo] = useState<null | string>(null);

  const [avatarTooltipState] = useState<string>("Choose Avatar");

  const [alertVisible, setAlertVisible] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");
  
  const [alertType, setAlertType] = useState<"success" | "error" | "info">("success");

  const accountNumberRef = useRef<HTMLParagraphElement>(null);

  const ibanRef = useRef<HTMLParagraphElement>(null);

  const accountIdRef = useRef<HTMLParagraphElement>(null);

  const handleAvatarChange = (e) => {

    const file = e.target.files[0];

    if(file)
    {

      const reader = new FileReader();

      reader.onloadend = () => {

        setAvatar(reader.result);

        localStorage.setItem("user", JSON.stringify(
          
          {
            
            ...user,
            
            avatar: reader.result
          
          }
        
        ));

      };

      reader.readAsDataURL(file);

    }

  };

  const identificationCredentials: identificationCredentialsType = {

    firstName: user.firstName,

    lastName: user.lastName

  }

  const userDataArray = [

    {

      firstData: "Age:",

      secondData: user.age,

      thirdData: `Age: ${user.age}`

    },

    {

      firstData: "Gender:",

      secondData: user.gender,

      thirdData: `Gender: ${user.gender}`

    },

    {

      firstData: "Email:",

      secondData: user.email,

      thirdData: `Email: ${user.email}`

    },

    {

      firstData: "Birth Day:",

      secondData: user.birthDay,

      thirdData: `Birth Day: ${user.birthDay}`

    },

    {

      firstData: "Birth Month:",

      secondData: user.birthMonth,

      thirdData: `Birth Month: ${user.birthMonth}`

    },

    {

      firstData: "Birth Year:",

      secondData: user.birthYear,

      thirdData: `Birth Year: ${user.birthYear}`

    }

  ];

  const tooltipClicknHadler = () => {
    
    if(tooltipState === 'Sign Out')
    {

      setToolTipState('Signed Out');

      setTimeout(() => {

        setToolTipState('Sign Out');

      }, 1000);
      
    }

  }

  const signOutFunct = () => {

    try
    {
      
      tooltipClicknHadler();

      logout();

      navigate("/login");

    }
    
    catch(error)
    {

      console.error(error);
      
    }

  }

  const handleAccountNumCopy = () => {

    if(accountNumberRef.current)
    {

      const textToCopy = accountNumberRef.current.innerText;
      
      if(textToCopy === '')
      {

        showAlert('No account number, please enter your account number first', 'error');

      }

      else
      {

        navigator.clipboard.writeText(textToCopy).then(() => {

          showAlert('IBAN Copied Successfully', 'success');

        }).catch((error) => {
  
          console.error('Error: ', error);
        
        });

      }
    
    }
  
  };

  const handleIbanCopy = () => {

    if(ibanRef.current)
    {

      const textToCopy = ibanRef.current.innerText;

      if(textToCopy === '')
      {

        showAlert('No IBAN, please enter your IBAN first', 'error');

      }

      else
      {

        navigator.clipboard.writeText(textToCopy).then(() => {

          showAlert('IBAN Copied Successfully', 'success');

        }).catch((error) => {
  
          console.error('Error: ', error);
        
        });

      }
    
    }
  
  };

  const handleAccountIdCopy = () => {

    if(accountIdRef.current)
    {

      const textToCopy = accountIdRef.current.innerText;

      if(textToCopy === '')
      {

        showAlert('No account id, please enter your account id first', 'error');
        
      }
      
      else
      {

        navigator.clipboard.writeText(textToCopy).then(() => {

          showAlert('Account Id Copied Successfully', 'success');
        
        }).catch((error) => {
  
          console.error('Error: ', error);
        
        });
        
      }
    
    }
  
  };

  const showAlert = (message: string, type: "success" | "error" | "info"): void => {

    setAlertMessage(message);
    
    setAlertType(type);
    
    setAlertVisible(true);

    setTimeout(() => {
    
      setAlertVisible(false);
    
    }, 3000);
  
  };

  return (

    <>
      
      <TopAlertComp visible={alertVisible} type={alertType} message={alertMessage} onClose={() => {

        setAlertVisible(false);

      }}/>

      {userDataLabelPopUp && (

        <>
        
          <div className="fixed inset-0 z-50 flex items-center justify-center">

            <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

            <div className="relative max-w-md w-full text-center backdrop-blur-lg rounded-2xl shadow-2xl z-10 bg-white p-6">

              <h1 className="text-black font-bold text-3xl m-2">Credentials Details</h1>

              <div className="flex flex-row justify-center place-items-center text-center gap-5 m-5">

                <p className="text-black font-semibold text-xl">{firstConditionalPopUpInfo}</p>

                <p className="text-black font-bold text-xl">{secondConditionalPopUpInfo}</p>

              </div>

              <h1 className="text-black font-bold text-xl mb-2">Registred At</h1>

              <div className="flex flex-col justify-center place-items-center text-center bg-gray-200 rounded-2xl shadow-md my-4 m-1 px-10 pt-5 pb-3">

                <p className="text-black text-center font-semibold text-2xl">{`${hours}:${minutes}:${seconds}`}</p>

                <div className="flex flex-row justify-center place-items-center text-center gap-2 p-1">

                  <p className="text-black text-center font-semibold">{day}</p>

                  <p className="text-black text-center font-semibold">{`${month}, ${date}, ${year}`}</p>

                </div>

              </div>

              <p className="font-semibold text-center m-2 p-1">By<span className="font-bold text-center p-1">{`${identificationCredentials.firstName} ${identificationCredentials.lastName}`}</span>(You)</p>

              <button type="button" className="text-black font-bold text-center bg-red-500 rounded-xl shadow-2xl w-full cursor-pointer transform transition duration-300 hover:scale-105 hover:text-white px-4 py-2" onClick={() => {

                setUserDataLabelPopUp(false);

              }}>Close</button>

            </div>
          
          </div>
        
        </>
      
      )}

      <div className="flex flex-col justify-center place-items-center bg-gray-100 min-h-screen dark:bg-black p-1">

        <div className="flex flex-col justify-center bg-white w-[1150px] rounded-lg shadow-lg dark:bg-gray-900 p-10 mt-10 mb-7">
                
          <h2 className="text-black text-3xl font-bold text-start dark:text-white mb-10">{`${identificationCredentials.firstName} ${identificationCredentials.lastName}`}</h2>

          <div className={`grid ${(user.accountNumber && user.iban && user.accountId)? "justify-between": "justify-center"} place-items-center text-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-3 p-1`}>

            <div className="flex flex-col justify-center place-items-center text-center space-y-4 w-[450px] bg-gray-100 shadow-2xl rounded-2xl p-6">
          
  	          <h2 className="text-black font-bold text-xl text-center transform transition duration-300 hover:scale-105 dark:text-white p-1">Choose a profile picture</h2>

              <img className="text-black font-semibold text-center w-28 h-28 border border-black rounded-full mb-7 bg-white" src={avatar} alt="Avatar"/>
          
              <div className="group relative inline-block">

                <label htmlFor="avatarImgUpload" className="text-black font-bold text-center bg-[#e5de00] text-wrap w-32 shadow-2xl rounded-xl cursor-pointer transform transition duration-300 hover:scale-105 dark:bg-[#e5de00] dark:text-black px-5 py-2">Choose Avatar</label>

                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white text-nowrap bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{avatarTooltipState}</span>

              </div>

              <input type="file" accept="image/*" id="avatarImgUpload" className="hidden bg-gray-50 text-black font-semibold text-wrap w-full border border-black rounded-2xl shadow-xl cursor-pointer transform transition duration-300 hover:scale-103 dark:bg-black p-2" onChange={handleAvatarChange}/>
      
            </div>

            {user.accountNumber && user.iban && user.accountId && (

              <>

                <div className="relative flex flex-col justify-center place-items-center text-center gap-2 w-[450px] bg-gray-100 rounded-2xl shadow-2xl p-5">

                  <h2 className="text-black font-bold text-xl text-center transform transition duration-300 hover:scale-105 dark:text-white p-1">Your Account Credentials</h2>

                  <div className="group relative inline-block">

                    <div className="flex flex-row justify-between place-items-center text-center w-[380px] bg-white shadow-2xl rounded-2xl transform transition duration-300 hover:scale-104 p-3">

                      <p className="text-black font-bold text-xl text-wrap p-1">Account Number: </p>

                      <div className="flex flex-row justify-evenly place-items-center text-center p-1">

                        <p ref={accountNumberRef} className="text-black font-bold text-lg text-wrap">{user.accountNumber}</p>
                        
                        <button type="button" className="text-black font-semibold text-center cursor-pointer transform transition duration-300 hover:scale-105 dark:text-white dark:bg-white p-1" onClick={() => {

                          try
                          {

                            handleAccountNumCopy();

                            setAlertVisible(true);

                          }
                          
                          catch(error)
                          {

                            console.error(error);
                            
                          }

                        }}>

                          <FaCopy/>

                        </button>

                      </div>

                    </div>

                    <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-nowrap">{(user.accountNumber === "")? <p>No Account Number</p>: <p>Account Number: {user.accountNumber}</p>}</span>

                  </div>

                  <div className="group relative inline-block">

                    <div className="flex flex-row justify-between place-items-center text-center w-[380px] bg-white shadow-2xl rounded-2xl transform transition duration-300 hover:scale-104 p-3">

                      <p className="text-black font-bold text-xl text-wrap p-1">IBAN: </p>

                      <div className="flex flex-row justify-evenly place-items-center text-center p-1">

                        <p ref={ibanRef} className="text-black font-bold text-lg text-wrap">{user.iban}</p>

                        <button type="button" className="text-black font-semibold text-center cursor-pointer transform transition duration-300 hover:scale-105 dark:text-white dark:bg-white p-1" onClick={() => {

                          try
                          {
                            
                            handleIbanCopy();

                            setAlertVisible(true);

                          }
                          
                          catch(error)
                          {

                            console.error(error);
                            
                          }

                        }}>

                          <FaCopy/>

                        </button>

                      </div>

                    </div>

                    <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-nowrap">{(user.iban === "")? <p>No IBAN</p>: <p>IBAN: {user.iban}</p>}</span>

                  </div>

                  <div className="group relative inline-block">

                    <div className="flex flex-row justify-between place-items-center text-center w-[380px] bg-white shadow-2xl rounded-2xl transform transition duration-300 hover:scale-104 p-3">

                      <p className="text-black font-bold text-xl text-wrap p-1">Account Id: </p>

                      <div className="flex flex-row justify-evenly place-items-center text-center p-1">

                        <p ref={accountIdRef} className="text-black font-bold text-lg text-wrap">{user.accountId}</p>

                        <button type="button" className="text-black font-semibold text-center cursor-pointer transform transition duration-300 hover:scale-105 dark:text-white dark:bg-white p-1" onClick={() => {

                          try
                          {

                            handleAccountIdCopy();

                            setAlertVisible(true);

                          }
                          
                          catch(error)
                          {

                            console.error(error);
                            
                          }

                        }}>

                          <FaCopy/>

                        </button>

                      </div>

                    </div>

                    <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-nowrap">{(user.accountId === "")? <p>No Account Id</p>: <p>Account Id: {user.accountId}</p>}</span>

                  </div>

                </div>
              
              </>

            )}

          </div>
        
          <div>

            {user && (

              <>

                <div className="flex flex-col">

                  <h2 className="text-black text-2xl font-bold text-start dark:text-white ml-10 mt-7">Your personal Info</h2>

                  <ul className="relative flex flex-col justify-center place-items-center text-center gap-5 h-5 overflow-auto pt-75 pb-5">

                    {userDataArray.map((data, i) => (

                      <>

                        <li key={i} className="group relative inline-block">

                          <div className="flex flex-row justify-between place-items-center text-center w-[1000px] bg-white shadow-2xl rounded-2xl transform transition duration-300 hover:scale-103 p-5">

                            <p className="text-black font-bold text-xl text-wrap p-1">{data.firstData}</p>

                            <div className="flex flex-row justify-between place-items-center text-center gap-5 p-1">

                              <p className="text-black font-bold text-lg text-wrap">{data.secondData}</p>

                              <button type="button" className="text-black font-bold text-center bg-gray-200 rounded-xl shadow-2xl cursor-pointer transform transition duration-300 hover:scale-105 px-4 p-1" onClick={() => {

                                try
                                {
                                  
                                  setUserDataLabelPopUp(true);

                                  setFirstConditionalPopUpInfo(data.firstData);

                                  setSecondConditionalPopUpInfo(data.secondData);

                                }
                                
                                catch(error)
                                {

                                  console.error(error);
                                  
                                }

                              }}>More Details</button>

                            </div>

                          </div>

                          <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{data.thirdData}</span>

                        </li>

                      </>

                    ))}

                  </ul>

                </div>

              </>

            )}

          </div>

          <div className="group relative inline-block text-center mt-3">

            <button type="button" className="scroll-section text-black font-bold text-center bg-[#e5de00] w-[250px] shadow-2xl rounded-xl cursor-pointer transform transition duration-300 hover:scale-105 dark:bg-[#e5de00] dark:text-black mt-6 py-2" onClick={() => {

              signOutFunct();

            }}>Sign Out</button>

            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{tooltipState}</span>

          </div>
            
        </div>

      </div>

    </>

  );

};

export default Profile;