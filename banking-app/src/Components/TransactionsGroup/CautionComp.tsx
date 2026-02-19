import { useConditionalBankStore } from "../../store/SecondGroup/secondBankStore";

const CautionComp = () => {
  const { setDescriptionInformation } = useConditionalBankStore();

  return (
    <>
      <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center backdrop-blur-sm z-50">
        <div className="w-[700px] h-[430px] max-w-md flex flex-col justify-between place-items-center gap-1 bg-white shadow-2xl rounded-xl text-center p-4">
          <h1 className="text-black font-bold text-2xl">About Form</h1>

          <p className="text-black font-semibold text-center text-md">
            This particular form is used for the following reasons:
          </p>

          <ol className="list-decimal text-center list-inside space-y-1">
            <li className="text-black font-semibold text-center text-md m-3">
              To describing the exact reason why the sender is making this
              particular transaction, mainly describing why the receaver is
              receiving the sent amount.
            </li>

            <li className="text-black font-semibold text-center text-md">
              To leave a message related the transaction to the receaver, making
              him/her aware that the money has been sent safe and successfully
              or just to express a certain thing.
            </li>
          </ol>

          <h2 className="text-red-500 font-bold text-center text-xl">
            Caution
          </h2>

          <p className="text-red-500 font-semibold text-center text-sm text-wrap">
            Note that all banal words are strictly forbidden so please do
            consider avoiding any word of that sort!
          </p>

          <button
            type="button"
            className="text-red-600 font-bold text-sm bg-red-50 hover:bg-red-100 border border-red-200 rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 px-4 py-2"
            onClick={() => {
              setDescriptionInformation(false);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default CautionComp;
