import { useNavigate } from "react-router-dom";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

interface sidebarBtnListInterface {
  tabName: string;

  label: string;

  tabRoute: string;
}

const FirstListComp = () => {
  const { activeTab, setActiveTab, setActiveRoute } = useConditionalBankStore();

  const navigate = useNavigate();

  const sidebarBtnList: sidebarBtnListInterface[] = [
    {
      tabName: "balances",
      label: "Balances Overview",
      tabRoute: "balances-overview",
    },

    { tabName: "deposit", label: "Deposit", tabRoute: "deposit-transaction" },

    {
      tabName: "withdraw",
      label: "Withdraw",
      tabRoute: "withdraw-transaction",
    },
  ];

  const navigationFunct = (route: string, tabName: string) => {
    setActiveTab(tabName);

    navigate(`/general-banking-actions/${route}`);

    setActiveRoute(`/general-banking-actions/${route}`);
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

export default FirstListComp;
