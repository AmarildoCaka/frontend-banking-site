import { Trash2, RefreshCcw, LogOut } from "lucide-react";

// import { useBankStore } from "../../../store/useBankStore";

import DangerItemComp from './DangerItemComp';

const DangerZoneComp = () => {

//  const { showPopUpMessage } = useBankStore();

  const resetDataFunct = () => {

    // if()
    // {

    //   showPopUpMessage('Data reset successfully', 'success');

    // }

    // else
    // {

    //   showPopUpMessage('Something went wrong, could not reset data', 'error');

    // }

  }

  const logOutFunct = () => {

    // if()
    // {

    //   showPopUpMessage('Loged out successfully', 'success');

    // }

    // else
    // {

    //   showPopUpMessage('Something went wrong, could not log out', 'error');

    // }

  }

  const deleteAccountFunct = () => {

    // if()
    // {
      
    //   showPopUpMessage('Account deleted successfully', 'success');

    // }
    
    // else
    // {
     
    //   showPopUpMessage('Something went wrong, could not delete this account', 'error');

    // }

  }

  return (
  
    <>
    
      <div className="space-y-8">
        
        <div>

          <h3 className="text-2xl font-semibold text-red-500">Danger Zone</h3>

          <p className="danger-zone-setting-text text-gray-600 mt-1">These actions are permanent and cannot be undone. Proceed with caution.</p>

        </div>

        <div className="space-y-6">

          <DangerItemComp title="Reset Application Data" color="yellow" description="This will remove local settings, cached transactions, saved preferences, and reset the app to its initial state." buttonLabel="Reset Data" icon={<RefreshCcw size={18}/>} functData={resetDataFunct}/>

          <DangerItemComp title="Log Out From All Devices" color="orange" description="Force log out from all active sessions on all devices. This is recommended if you suspect unauthorized access." buttonLabel="Logout All" icon={<LogOut size={18}/>} functData={logOutFunct}/>

          <DangerItemComp title="Delete Account Permanently" color="red" description="This will permanently close your bank account, remove all user data, and cannot be undone. Your funds must be withdrawn before proceeding." buttonLabel="Delete Account" icon={<Trash2 size={18}/>} functData={deleteAccountFunct}/>

        </div>

      </div>
    
    </>

  );

};

export default DangerZoneComp;