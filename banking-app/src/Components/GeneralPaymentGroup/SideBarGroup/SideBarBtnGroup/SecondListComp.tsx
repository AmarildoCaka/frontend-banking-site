import { useNavigate } from "react-router-dom";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

interface sidebarBtnListInterface {
  tabName: string;

  label: string;

  tabRoute: string;
}

const SecondListComp = () => {
  const { activeTab, setActiveTab, setActiveRoute } = useConditionalBankStore();

  const navigate = useNavigate();

  const sidebarBtnList: sidebarBtnListInterface[] = [
    { tabName: "overview", label: "Loan Overview", tabRoute: "loan-overview" },

    {
      tabName: "piechart",
      label: "Loan Statistics",
      tabRoute: "loan-statistics",
    },

    { tabName: "apply", label: "Apply for Loan", tabRoute: "loan-application" },
  ];

  const navigationFunct = (route: string, tabName: string) => {
    setActiveTab(tabName);

    navigate(`/general-banking-actions/${route}`);

    setActiveRoute("");
  };

  return (
    <>
      <section className="p-1">
        {sidebarBtnList.map((tab) => (
          <>
            <button
              type="button"
              key={tab.tabName}
              className={`block cursor-pointer w-full text-left px-3 py-2 rounded-lg transition duration-300 ${activeTab === tab.tabName ? "bg-indigo-600 text-white" : "hover:bg-indigo-700 hover:scale-105"}`}
              onClick={() => {
                navigationFunct(tab.tabRoute, tab.tabName);
              }}
            >
              {tab.label}
            </button>
          </>
        ))}
      </section>
    </>
  );
};

export default SecondListComp;
