import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import { useAmountValidationFunctHook } from "../GeneralLogicComp/generalTransactionLogic";

const SecondFormAmountComp = () => {
  const { transactionAmount, setTransactionAmount, fieldErrors } =
    useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const amountValidationFunctHook = useAmountValidationFunctHook;

  return (
    <>
      <section className="flex flex-col justify-center mt-2 w-full">
        <h1 className="transaction-text font-bold text-left text-lg">
          Amount & Currency
        </h1>

        <div className="flex flex-col gap-4 mt-3 w-full">
          <div className="flex flex-col w-full">
            <div className="text-left p-1">
              <p className="transaction-text font-semibold">Amount</p>
            </div>

            <input
              type="number"
              value={transactionAmount}
              max={10000}
              step={0.01}
              maxLength={5}
              className={`transaction-form w-full rounded-md border px-5 py-2 pr-10 text-sm sm:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 hover:border-indigo-400 transition duration-300 ${theme === "light" || theme === "system" ? "border-black" : theme === "dark" ? "border-white" : "border-black"} ${fieldErrors.transactionAmount ? "border border-red-500" : "border border-black"} transform transition duration-300 hover:scale-101`}
              placeholder="Amount here..."
              onChange={(e) => {
                setTransactionAmount(parseFloat(e.target.value));
              }}
            />

            {amountValidationFunctHook()}
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondFormAmountComp;
