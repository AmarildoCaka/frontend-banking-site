import { useNavigate } from "react-router-dom";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

interface sidebarBtnListInterface {
  tabName: string;

  label: string;

  tabRoute: string;
}

const FourthListComp = () => {
  const { activeTab, setActiveTab, setActiveRoute } = useConditionalBankStore();

  const navigate = useNavigate();

  const sidebarBtnList: sidebarBtnListInterface[] = [
    {
      tabName: "billsPayment",
      label: "Bill Payment",
      tabRoute: "unpaid-bills",
    },

    {
      tabName: "billCategories",
      label: "Bill Categories",
      tabRoute: "bill-categories",
    },
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
              className={`block w-full text-left px-3 py-2 rounded-lg ${activeTab === tab.tabName ? "bg-blue-700" : "hover:bg-blue-800 cursor-pointer transform transation duration-300 hover:scale-105"}`}
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

export default FourthListComp;
