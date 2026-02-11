import { useConditionalBankStore } from "../../../store/secondBankStore";

import { useHandleTransactionsHook } from "../GeneralLogicComp/generalTransactionLogic";

const SubmissionBtnComp = () => {
  const { setFirstStepForm, setSecondStepForm } = useConditionalBankStore();

  const { finalFormSubmissionFunct } = useHandleTransactionsHook();

  const finalFormSubmission = (e: React.FormEvent) => {
    e.preventDefault();

    finalFormSubmissionFunct();
  };

  return (
    <>
      <section className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 justify-evenly place-items-center gap-3 mt-6 p-1">
        <button
          type="button"
          className="text-gray-700 font-bold text-sm bg-gray-100 hover:bg-gray-200 border border-gray-300 w-full rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 py-2"
          onClick={() => {
            setFirstStepForm(true);

            setSecondStepForm(false);
          }}
        >
          Back
        </button>

        <button
          type="submit"
          className="text-white font-semibold bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 w-full rounded-lg cursor-pointer transition transform duration-300 hover:scale-105 hover:text-white px-3 py-2"
          onClick={finalFormSubmission}
        >
          Make a Transaction
        </button>
      </section>
    </>
  );
};

export default SubmissionBtnComp;