// import { useNavigate } from 'react-router-dom';

// import { useConditionalBankStore } from '../../../../store/secondBankStore';

// interface sidebarBtnListInterface {

//   tabName: string;

//   tabRoute: string;

// }

// const FirstListComp = () => {

//   const { activeTab, setActiveTab } = useConditionalBankStore();

//   const navigate = useNavigate();

//   const sidebarBtnList: sidebarBtnListInterface[] = [
    
//     { tabName: "overview", tabRoute: "" },
    
//     { tabName: "piechart", tabRoute: "" },
    
//     { tabName: "apply", tabRoute: "" }
  
//   ];

//   const navigationFunct = () => {

//     navigate('/');

//   };

//   return (

//     <>
    
//       <section className="p-1">

//         {sidebarBtnList.map((tab, i) => (

//           <button key={i} className={`block w-full text-left px-3 py-2 rounded-lg ${(activeTab === tab)? "bg-blue-700": "hover:bg-blue-800 cursor-pointer transform transation duration-300 hover:scale-105"}`} onClick={() => {
            
//             setActiveTab(tab);

//             navigationFunct();

//           }}>

//             {(tab === "overview") && "Loan Overview"}

//             {(tab === "piechart") && "Loan Statistics"}

//             {(tab === "apply") && "Apply for Loan"}

//           </button>

//         ))}

//       </section>
    
//     </>

//   );

// }

// export default FirstListComp;




import { useNavigate } from 'react-router-dom';

import { useConditionalBankStore } from '../../../../store/secondBankStore';

interface sidebarBtnListInterface {

  tabName: string;

  label: string;

  tabRoute: string;

};

const FirstListComp = () => {
  
  const { activeTab, setActiveTab } = useConditionalBankStore();
  
  const navigate = useNavigate();

  const sidebarBtnList: sidebarBtnListInterface[] = [

    { tabName: "overview", label: "Loan Overview", tabRoute: "loan-overview" },
    
    { tabName: "piechart", label: "Loan Statistics", tabRoute: "loan-statistics"},
    
    { tabName: "apply", label: "Apply for Loan", tabRoute: "loan-application" }

  ];

  const navigationFunct = (route: string, tabName: string) => {

    setActiveTab(tabName);
    
    navigate(`/general-banking-actions/${route}`);
  
  };

  return (

    <>
    
      <section className="p-1">

        {sidebarBtnList.map((tab) => (

          <>
          
            <button key={tab.tabName} className={`block cursor-pointer w-full text-left px-3 py-2 rounded-lg transition duration-300 ${(activeTab === tab.tabName)? "bg-indigo-600 text-white": "hover:bg-indigo-700 hover:scale-105"}`} onClick={() => {

              navigationFunct(tab.tabRoute, tab.tabName);

            }}>{tab.label}</button>
          
          </>
        
        ))}

      </section>
    
    </>

  );

};

export default FirstListComp;