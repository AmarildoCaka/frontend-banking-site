import { FaShieldAlt } from "react-icons/fa";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

const GeneralAccountSettingsComp = () => {

  const { showPopUpMessage, generalAccountState, accountFreezingFunct, accountUnfreezingFunct } = useBankStore();

  const { theme, setTheme } = useThirdBankStore();

  const setAccountFreezingFunct = () => {

    if(generalAccountState === "Enabled")
    {
      
      accountFreezingFunct();

      showPopUpMessage("Account frozen successfully", "info");

    }
    
    else
    {

      accountUnfreezingFunct();

      showPopUpMessage("Account unfrozen successfully", "info");

    }

  };

  return (

    <>
    
      <div className="security-settings-wrapper rounded-md shadow-md p-5 flex flex-col justify-between hover:scale-101 transition transform duration-300">
    
        <h1 className="account-setting-text font-semibold text-lg mb-5 flex items-center gap-2">
    
          <FaShieldAlt className="text-indigo-500" size={20}/>
    
          Fast Account Settings
    
        </h1>

        <div>

          <div className="flex justify-between items-center py-2">
          
            <span className="account-setting-text font-medium">Account Status</span>

            <button type="button" className={`px-3 py-1.5 rounded-md text-sm font-semibold transition shadow-md transform hover:scale-105 cursor-pointer ${(generalAccountState === "Enabled")? "text-white bg-indigo-600 hover:bg-indigo-700": "bg-gray-300 text-black"}`} onClick={() => {

              setAccountFreezingFunct();
            
            }}>{(generalAccountState === "Enabled")? "Enabled": "Frozen"}</button>

          </div>

          <div className="account-settings-divider h-[1px] border-t w-full"/>

        </div>

        <div>

          <div className="flex justify-between items-center py-2">
          
            <span className="account-setting-text font-medium">Appearance</span>

            <div className="relative bg-gray-200 p-[0.5px] rounded-md shadow-md flex gap-2 w-[200px]">
              
              <div className={`absolute top-1 h-[30px] w-[56px] rounded-lg transition transform duration-300 ${(theme === "light")? "left-1 bg-indigo-600": ""} ${(theme === "system")? "left-[70px] bg-indigo-600": ""} ${(theme === "dark")? "left-[141px] bg-black": ""}`}/>

              {[

                { index: 1, mode: "light", text: "Light mode on" },
                
                { index: 2, mode: "system", text: "System mode on" },
                
                { index: 3, mode: "dark", text: "Dark mode on" }

              ].map(({ index, mode, text }) => (

                <>
                
                  <button type="button" key={index} className={`relative z-10 px-3 py-2 text-sm font-semibold transition transform duration-300 cursor-pointer ${(theme === mode)? "text-white": "text-black"}`} onClick={() => {
                      
                    setTheme(mode);

                    showPopUpMessage(`${text}`, "info");
                  
                  }}>{mode.charAt(0).toUpperCase() + mode.slice(1)}</button>
              
                </>
              
              ))}
            
            </div>
          
          </div>

          <div className="account-settings-divider h-[1px] border-t w-full"/>
          
        </div>

        <div className="bg-gray-100 rounded-lg p-2 mt-4 text-xs text-gray-600">💡 Tip: Freezing a balance blocks all the interactions with it.</div>
      
      </div>
    
    </>
  
  );

};

export default GeneralAccountSettingsComp;