import { useThirdBankStore } from "../../../store/thirdBankStore";

const SidebarItemComp = ({ label, icon, active, onClick, danger }: any) => {

  const { theme } = useThirdBankStore();

  return (

    <>

      <button className={`settings-option-btn w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1 text-sm font-medium transition transform duration-300 hover:scale-105 cursor-pointer border ${(danger)? (active)? "bg-red-500 text-white border-red-500": "text-red-500 border-transparent hover:bg-red-500 hover:text-white": (theme === "light" || theme === "system")? (active)? "bg-indigo-600 text-white border-indigo-600": "text-black border-transparent hover:bg-indigo-500 hover:text-white":(theme === "dark")? (active)? "bg-indigo-600 text-white border-indigo-600": "text-white border-transparent hover:bg-indigo-500": (active)? "bg-indigo-600 text-white border-indigo-600": "text-white border-transparent hover:bg-indigo-500"}`} onClick={onClick}>{icon} {label}</button>

    </>

  );

};

export default SidebarItemComp;