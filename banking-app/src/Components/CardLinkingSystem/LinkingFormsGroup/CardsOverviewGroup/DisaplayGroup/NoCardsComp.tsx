import { Layers } from "lucide-react";

import { useThirdBankStore } from "../../../../../store/ThirdGroup/thirdBankStore";

const NoCardsComp = () => {
  const { theme } = useThirdBankStore();

  return (
    <>
      <section className="empty-loan-history-wrapper flex flex-col items-center justify-center h-80 rounded-md shadow-md p-5">
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
          <Layers size={32} className="text-black" />
        </div>

        <h3
          className={`text-xl font-semibold mb-2 ${theme === "light" || theme === "system" ? "text-gray-600" : theme === "dark" ? "text-white" : "text-gray-600"}`}
        >
          No cards yet
        </h3>

        <p
          className={`${theme === "light" || theme === "system" ? "text-gray-500" : theme === "dark" ? "text-white" : "text-gray-500"}`}
        >
          Create your first card to get started with the queue system.
        </p>
      </section>
    </>
  );
};

export default NoCardsComp;
