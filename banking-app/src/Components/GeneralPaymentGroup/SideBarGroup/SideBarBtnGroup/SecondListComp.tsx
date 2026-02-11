import { useNavigate } from "react-router-dom";

import { useConditionalBankStore } from "../../../../store/secondBankStore";

interface sidebarBtnListInterface {

  tabName: string;

  label: string;

  tabRoute: string;

};

const SecondListComp = () => {

  const { activeTab, setActiveTab } = useConditionalBankStore();

  const navigate = useNavigate();

  const navigationFunct = (route: string, tabName: string) => {

    setActiveTab(tabName);
    
    navigate(`/general-banking-actions/${route}`);
  
  };

  const sidebarBtnList: sidebarBtnListInterface[] = [

    { tabName: "makeTransaction", label: "Make Transaction", tabRoute: "transactions-making" },
    
    { tabName: "transactionsHistory", label: "Transactions History", tabRoute: "transactions-history"}

  ];

  return (
  
    <>
    
      <section className="p-1">

        {sidebarBtnList.map((tab) => (

          <>
          
            <button key={tab.tabName} className={`block w-full text-left px-3 py-2 rounded-lg ${(activeTab === tab.tabName)? "bg-blue-700": "hover:bg-blue-800 cursor-pointer transform transation duration-300 hover:scale-105"}`} onClick={() => {
            
              navigationFunct(tab.tabRoute, tab.tabName);

            }}>{tab.label}</button>
          
          </>

        ))}

      </section>
    
    </>
  
  );

}

export default SecondListComp;