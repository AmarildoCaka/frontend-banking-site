import { FaExclamationTriangle } from "react-icons/fa";

import { useBankStore } from "../../../../../../store/FirstGroup/useBankStore";

import { useThirdBankStore } from "../../../../../../store/ThirdGroup/thirdBankStore";

const AlertPopUpComp = ({ indexData }: { indexData: number }) => {
  const { showPopUpMessage } = useBankStore();

  const {
    setMsgAlertPopUpUnit,
    opinionMsgList,
    editText,
    setOpinionMsgList,
    setEditingId,
    setMsgEditUnit,
    editingId,
  } = useThirdBankStore();

  const messageToEdit = opinionMsgList.find((msg) => msg.id === editingId);

  if (!messageToEdit) {
    return null;
  }

  const handleSave = (id: number) => {
    const updated = opinionMsgList.map((msg) =>
      msg.id === id ? { ...msg, message: editText } : msg,
    );

    setOpinionMsgList(updated);

    setEditingId(null);

    setMsgEditUnit(false);
  };

  const msgEditLastStepFunct = () => {
    try {
      handleSave(messageToEdit.id);

      showPopUpMessage(
        `Message number ${indexData} edited successfully`,
        "success",
      );
    } catch (error) {
      console.error("Error: ", error);

      alert(
        `Upss, something went wrong, cannot edit message number ${indexData}`,
      );
    }
  };

  return (
    <>
      <section className="fixed inset-0 bg-opacity-50 flex items-center justify-center backdrop-blur-sm z-50">
        <div className="rating-msg-alert-wrapper w-[500px] h-72 flex flex-col justify-between place-items-center gap-1 shadow-2xl rounded-xl text-center p-4">
          <FaExclamationTriangle className="text-red-500 text-3xl" />

          <h1 className="text-red-500 font-bold text-2xl mb-4">
            Do you want to edit this message?
          </h1>

          <p className="rating-msg-alert-description font-semibold mb-2">
            Are you sure you want to edit message number {indexData + 1}? Press
            Yes to edit this message, or No to go back.
          </p>

          <hr className="rating-msg-alert-divider my-3 w-full border-t-1" />

          <div className="flex flex-row justify-evenly place-items-center gap-10">
            <button
              type="button"
              className="text-green-600 bg-green-50 hover:green-red-100 border-green-200 cursor-pointer hover:scale-105 transition-transform duration-300 font-bold text-sm border rounded-md px-4 py-1"
              onClick={() => {
                msgEditLastStepFunct();

                setMsgAlertPopUpUnit(false);
              }}
            >
              Yes
            </button>

            <button
              type="button"
              className="text-red-600 bg-red-50 hover:bg-red-100 border-red-200 cursor-pointer hover:scale-105 transition-transform duration-300 font-bold text-sm border rounded-md px-4 py-1"
              onClick={() => {
                setMsgAlertPopUpUnit(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AlertPopUpComp;
