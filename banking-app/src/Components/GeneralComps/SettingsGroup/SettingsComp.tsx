import { useState } from "react";

import { User, Shield, AlertTriangle } from "lucide-react";

import SidebarItemComp from './SideBarComp';
import AccountSectionComp from './AccountSectionComp';
import SecuritySectionComp from './SecuritySectionComp';
import DangerZoneComp from './DangerZoneComp';

const SettingsComp = () => {

  const [activeTab, setActiveTab] = useState<string>("account");

  return (
  
    <>
      
      <section className="settings-wrapper flex w-full min-h-screen pt-30 pb-10 px-5 gap-5">

        <aside className="settings-options w-64 rounded-xl shadow-md p-4">
        
          <h2 className="settings-option-text text-xl font-semibold mb-5">Settings</h2>

          <SidebarItemComp label="Account" icon={<User size={18}/>} active={activeTab === "account"} onClick={() => {
            
            setActiveTab("account");

          }}/>

          <SidebarItemComp label="Security" icon={<Shield size={18}/>} active={activeTab === "security"} onClick={() => {

            setActiveTab("security");

          }}/>

          <SidebarItemComp danger label="Danger Zone" icon={<AlertTriangle size={18}/>} active={activeTab === "danger"} onClick={() => {

            setActiveTab("danger");

          }}/>

        </aside>

        <div className="settings-selected-option flex-1 rounded-xl shadow-md p-6">

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

          {(activeTab === "danger") && (

            <>
            
              <DangerZoneComp/>

            </>

          )}

        </div>

      </section>
    
    </>

  );

};

export default SettingsComp;