import { FaCopy } from "react-icons/fa";

import { Mail } from "lucide-react";

import { useBankStore } from "../../../../../store/FirstGroup/useBankStore";

import TopAlertComp from "../../../../GeneralLogic/TopAlertComp";

interface msgFooterCompInterafce {
  firstNameData: string;

  lastNameData: string;

  emailData: string;
}

const MsgFooterComp: React.FC<msgFooterCompInterafce> = ({
  firstNameData,
  lastNameData,
  emailData,
}) => {
  const { alertVisibility, alertType, alertMessage, showPopUpMessage } =
    useBankStore();

  const copyEmailFunct = () => {
    try {
      navigator.clipboard.writeText(emailData);

      showPopUpMessage(
        `${firstNameData} ${lastNameData}'s email copied successfully`,
        "info",
      );
    } catch (error) {
      showPopUpMessage("Something went wrong, cannot copy this email", "error");

      console.log("Error", error);
    }
  };

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="rating-msg-footer-wrapper rounded-b-md px-6 pb-3">
        <div className="rating-msg-footer-inner-wrapper flex flex-row justify-between place-items-center text-center gap-2 text-sm pt-2 border-t">
          <section className="flex items-center gap-2 text-sm">
            <Mail className="rating-msg-footer-icon w-4 h-4" />

            <span className="rating-msg-footer-text truncate">{emailData}</span>
          </section>

          <button
            type="button"
            className="rating-msg-footer-copy-btn cursor-pointer transform transition duration-300 hover:scale-110"
            onClick={() => {
              copyEmailFunct();
            }}
          >
            <FaCopy />
          </button>
        </div>
      </section>
    </>
  );
};

export default MsgFooterComp;
