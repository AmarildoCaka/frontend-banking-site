import { useThirdBankStore } from "../../../store/thirdBankStore";

const DangerItemComp = ({ title, description, buttonLabel, icon, color, functData }: { title: string, description: string, buttonLabel: string, icon: any, color: string, functData: any }) => {

  const { theme } = useThirdBankStore();

  const colors = {
  
    yellow: "text-white bg-yellow-500 hover:bg-yellow-600",
  
    orange: "text-white bg-indigo-500 hover:bg-indigo-600",
  
    red: "text-white bg-red-500 hover:bg-red-600"
  
  };

  return (
  
    <>
    
      <div className={`p-5 rounded-xl shadow-md ${(theme === 'light' || theme === 'system')? 'bg-white border border-red-200':(theme === 'dark')? 'bg-slate-700': 'bg-white border border-red-200'}`}>

        <h4 className="text-lg font-semibold mb-1 text-red-600">{title}</h4>

        <p className={`${(theme === 'light' || theme === 'system')? 'text-gray-600':(theme === 'dark')? 'text-white': 'text-gray-600'} mb-4`}>{description}</p>

        <button type="button" className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition transform duration-300 hover:scale-105 cursor-pointer ${colors[color]}`} onClick={() => {

          functData();

        }}>{icon} {buttonLabel}</button>
      
      </div>
    
    </>

  );

};

export default DangerItemComp;