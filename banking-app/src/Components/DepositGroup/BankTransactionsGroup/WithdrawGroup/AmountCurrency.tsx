import { useConditionalBankStore } from "../../../../store/SecondGroup/secondBankStore";

const AmountCurrencyComp = () => {
  const { withdrawCurrency, setWithdrawCurrency } = useConditionalBankStore();

  return (
    <>
      <div className="mb-6">
        <label className="withdraw-form-label block font-semibold mb-2">
          Select Currency
        </label>

        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            className={`${withdrawCurrency === "USD" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"} rounded-md border-2 tarnsform transition duration-300 hover:scale-105 cursor-pointer p-3`}
            onClick={() => {
              setWithdrawCurrency("USD");
            }}
          >
            <div className="text-center">
              <div className="text-lg font-bold">$</div>

              <div className="text-xs font-medium">{"USD"}</div>
            </div>
          </button>

          <button
            type="button"
            className={`${withdrawCurrency === "EUR" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"} rounded-md border-2 tarnsform transition duration-300 hover:scale-105 cursor-pointer p-3`}
            onClick={() => {
              setWithdrawCurrency("EUR");
            }}
          >
            <div className="text-center">
              <div className="text-lg font-bold">€</div>

              <div className="text-xs font-medium">{"EUR"}</div>
            </div>
          </button>

          <button
            type="button"
            className={`${withdrawCurrency === "GBP" ? "border-blue-500 bg-blue-50 text-blue-700" : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"} rounded-md border-2 tarnsform transition duration-300 hover:scale-105 cursor-pointer p-3`}
            onClick={() => {
              setWithdrawCurrency("GBP");
            }}
          >
            <div className="text-center">
              <div className="text-lg font-bold">£</div>

              <div className="text-xs font-medium">{"GBP"}</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default AmountCurrencyComp;
