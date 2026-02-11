import { FaLock } from 'react-icons/fa';

const AccountSecurityComp = () => {

  return (
  
    <>
    
      <div className="security-settings-wrapper rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300">
      
        <h3 className="security-settings-text text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">
          
          <FaLock className="text-indigo-500" size={20}/> {" "}
          
          Account Security Level
          
        </h3>

        <p className="security-settings-text text-sm text-gray-600 mb-3">Status: {" "}
          
          <span className="font-bold text-green-500">Strong (85%)</span>
          
        </p>

        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          
          <div className="h-full bg-green-500 w-[85%] transition-all duration-500"/>
        
        </div>
        
        <p className="security-settings-text text-xs text-gray-500 mt-3">Last password change: 12 Oct 2025</p>

        <ul className="mt-3 space-y-1 text-sm">
        
          <li className="text-green-600 flex items-center gap-2">✔ Strong password</li>
        
          <li className="text-green-600 flex items-center gap-2">✔ No suspicious logins</li>
        
          <li className="text-yellow-500 flex items-center gap-2">⚠ Recovery email not set</li>
        
        </ul>
        
        <div className="bg-gray-100 rounded-lg p-2 mt-4 text-xs text-gray-600">💡 Tip: Enable account recovery email to avoid lockouts.</div>

      </div>

    </>
  
  );

}

export default AccountSecurityComp;