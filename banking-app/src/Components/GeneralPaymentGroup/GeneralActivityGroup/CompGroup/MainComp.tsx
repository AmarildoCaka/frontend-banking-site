import { useEffect } from "react";

import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

import FormComp from "../../../TransactionsGroup/FormComp";

const MainComp = () => {
  const { setActiveTab } = useConditionalBankStore();

  useEffect(() => {
    setActiveTab("makeTransaction");
  }, [setActiveTab]);

  return (
    <section className="mt-18">
      <h1 className="transactions-text text-2xl font-bold text-left mb-7">
        Make a Transaction
      </h1>

      <div className="transactions-form-wrapper flex flex-col justify-center w-full max-w-4xl mx-auto p-5 shadow-md rounded-md">
        <FormComp />
      </div>
    </section>
  );
};

export default MainComp;