// import { useState } from "react";

// import { User, Shield } from "lucide-react";

// import SidebarItemComp from './SideBarComp';
// import AccountSectionComp from './AccountSectionComp';
// import SecuritySectionComp from './SecuritySectionComp';

// const SettingsComp = () => {

//   const [activeTab, setActiveTab] = useState<string>("account");

//   return (
  
//     <>
      
//       <section className="settings-wrapper flex w-full min-h-screen pt-30 pb-10 px-5 gap-5">

//         <aside className="settings-options w-64 rounded-xl shadow-md p-4">
        
//           <h2 className="settings-option-text text-xl font-semibold mb-5">Settings</h2>

//           <SidebarItemComp label="Account" icon={<User size={18}/>} active={activeTab === "account"} onClick={() => {
            
//             setActiveTab("account");

//           }}/>

//           <SidebarItemComp label="Security" icon={<Shield size={18}/>} active={activeTab === "security"} onClick={() => {

//             setActiveTab("security");

//           }}/>

//         </aside>

//         <div className="settings-selected-option flex-1 rounded-xl shadow-md p-6">

//           {(activeTab === "account") && (

//             <>
            
//               <AccountSectionComp/>
            
//             </>

//           )}

//           {(activeTab === "security") && (

//             <>
            
//               <SecuritySectionComp/>
            
//             </>

//           )}

//         </div>

//       </section>
    
//     </>

//   );

// };

// export default SettingsComp;






import { useState } from "react";

import { User, Shield } from "lucide-react";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import SidebarItemComp from "./SideBarComp";
import AccountSectionComp from "./AccountSectionComp";
import SecuritySectionComp from "./SecuritySectionComp";

const SettingsComp = () => {

  const [activeTab, setActiveTab] = useState<string>("account");

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const { theme } = useThirdBankStore();

  return (

    <>

    <section className="settings-wrapper flex w-full min-h-screen pt-25 pb-10 px-4 gap-5 relative">

      {isSidebarOpen && (

        <>
        
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 lg:hidden" onClick={() => {

            setIsSidebarOpen(false);

          }}/>
        
        </>
      
      )}

      <aside className={`settings-options fixed lg:static top-16 left-0 h-full lg:h-auto w-72 rounded-md shadow-md lg:shadow-md p-5 z-40 transform transition-transform duration-300 ${(isSidebarOpen)? "translate-x-0": "-translate-x-full"} lg:translate-x-0`}>

        <button type="button" className={`${(theme === 'light' || theme === 'system')? 'text-black bg-white':(theme === 'dark')? 'text-white bg-slate-700': 'text-black bg-white'} lg:hidden absolute -right-9 top-0 p-2 rounded-r-md shadow-md cursor-pointer transform transition duration-300 hover:scale-105`} onClick={() => {

          setIsSidebarOpen(!isSidebarOpen);

        }}>

          {(isSidebarOpen)? <FaChevronLeft size={20}/>: <FaChevronRight size={20}/>}
        
        </button>

        <div className="flex justify-between items-center mb-6 lg:hidden">
          
          <h2 className={`text-xl font-semibold ${(theme === 'light' || theme === 'system')? 'text-black':(theme === 'dark')? 'text-white': 'text-black'}`}>Settings</h2>
        
        </div>
        
        <h2 className={`hidden lg:block text-xl font-semibold mb-5 ${(theme === 'light' || theme === 'system')? 'text-black':(theme === 'dark')? 'text-white': 'text-black'}`}>Settings</h2>

        <SidebarItemComp label="Account" icon={<User size={18}/>} active={activeTab === "account"} onClick={() => {
          
          setActiveTab("account");
        
          setIsSidebarOpen(false);
        
        }}/>

        <SidebarItemComp label="Security" icon={<Shield size={18}/>} active={activeTab === "security"} onClick={() => {
          
          setActiveTab("security");
        
          setIsSidebarOpen(false);
        
        }}/>

      </aside>

      <div className="settings-selected-option flex-1 rounded-md shadow-md p-5 lg:ml-0">

        {(activeTab === "account") && (
          
          <>
          
            <AccountSectionComp/>
          
          </>

        )}

        {(activeTab === "security") && (

          <>
          
            <SecuritySectionComp/>
          
          </>

        )}
      
      </div>

    </section>
  
    </>

  );

};

export default SettingsComp;