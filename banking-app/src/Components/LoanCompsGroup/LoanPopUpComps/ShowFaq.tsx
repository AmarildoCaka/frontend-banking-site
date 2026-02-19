import { FaTimes } from "react-icons/fa";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

const ShowFaqPopUpComp = () => {
  const { setShowFAQ } = useConditionalBankStore();

  return (
    <>
      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-50 h-full"></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="faq-wrapper relative flex flex-col justify-center place-items-center text-center w-[500px] h-[470px] space-y-2 rounded-lg shadow-xl">
          <button
            type="button"
            className="faq-exit-btn absolute top-3 right-4 font-bold text-md cursor-pointer transform transition duration-300 hover:scale-125"
            onClick={() => {
              setShowFAQ(false);
            }}
          >
            <FaTimes />
          </button>

          <h1 className="faq-text font-bold text-2xl text-center mt-3">
            FAQ's
          </h1>

          <div className="flex flex-col items-center text-center font-semibold text-sm overflow-y-auto max-h-[80vh] px-5 py-5 space-y-4">
            <div className="p-2">
              <strong className="faq-text">Can I pay early?</strong>

              <p className="faq-text font-semibold text-center p-1">
                Yes, early repayment is allowed without penalty.
              </p>
            </div>

            <div className="p-2">
              <strong className="faq-text">What if I miss a payment?</strong>

              <p className="faq-text font-semibold text-center p-1">
                You will be notified and may incur a late fee.
              </p>
            </div>

            <div className="p-2">
              <strong className="faq-text">How long does approval take?</strong>

              <p className="faq-text font-semibold text-center p-1">
                Typically 24-48 hours after submission.
              </p>
            </div>

            <div className="p-2">
              <strong className="faq-text">Is my personal data secure?</strong>

              <p className="faq-text font-semibold text-center p-1">
                Yes, we use industry-standard encryption to protect your data.
              </p>
            </div>

            <div className="p-2">
              <strong className="faq-text">
                What payment methods do you accept?
              </strong>

              <p className="faq-text font-semibold text-center p-1">
                We accept all major credit/debit cards and bank transfers.
              </p>
            </div>

            <div className="p-2">
              <strong className="faq-text">
                Can I change my repayment date?
              </strong>

              <p className="faq-text font-semibold text-center p-1">
                Yes, contact support to request a change of date.
              </p>
            </div>

            <div className="p-2">
              <strong className="faq-text">Are there any hidden fees?</strong>

              <p className="faq-text font-semibold text-center p-1">
                No, all fees are clearly outlined during the application
                process.
              </p>
            </div>

            <div className="p-2">
              <strong className="faq-text">
                Do I need a good credit score?
              </strong>

              <p className="faq-text font-semibold text-center p-1">
                A good score helps, but we consider multiple factors during
                evaluation.
              </p>
            </div>

            <div className="p-2">
              <strong className="faq-text">
                Can I cancel my application after submitting it?
              </strong>

              <p className="faq-text font-semibold text-center p-1">
                Yes, you can cancel your application anytime before it is
                approved.
              </p>
            </div>

            <div className="p-2">
              <strong className="faq-text">
                Will applying affect my credit score?
              </strong>

              <p className="faq-text font-semibold text-center p-1">
                No, checking your eligibility or applying will not impact your
                credit score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowFaqPopUpComp;
