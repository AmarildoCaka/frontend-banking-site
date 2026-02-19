import { FaCopy, FaEraser } from "react-icons/fa";

import { useState, useEffect } from "react";

import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import { useThirdBankStore } from "../../../../store/ThirdGroup/thirdBankStore";

import { useGeneralLogicHook } from "../generalContactUsLogic";

import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const DescriptionComp = () => {
  const [descriptionData, setDescriptionData] = useState<string>("");

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { message, setMessage, errors, validationObj, theme } =
    useThirdBankStore();

  const {
    copyOpinionMsgFunct,
    emptyOpinionMsgFunct,
    opinionMsgFormValidationFunct,
  } = useGeneralLogicHook();

  useEffect(() => {
    opinionMsgFormValidationFunct();

    setDescriptionData(validationObj.message);
  }, [validationObj.message, opinionMsgFormValidationFunct]);

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="mb-3">
        <div className="relative">
          <textarea
            name="message"
            value={message}
            maxLength={700}
            className={`rating-description-form w-full border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-md shadow-md transform transition duration-300 hover:scale-105 placeholder:font-semibold dark:bg-white dark:text-black p-3 ${theme === "light" || theme === "system" ? "placeholder:text-black" : theme === "dark" ? "placeholder:text-white" : "placeholder:text-dark"}`}
            placeholder="Write us your opinion here..."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>

          <div className="flex flex-row justify-center place-items-center absolute top-1/2 right-2 -translate-y-1/2">
            <button
              type="button"
              className="description-copy-btn font-bold text-center rounded-lg cursor-pointer transition transform duration-300 hover:scale-105 px-2"
              onClick={() => {
                copyOpinionMsgFunct();
              }}
            >
              <FaCopy />
            </button>

            <div className="rating-form-info-divider h-4 w-px m-1"></div>

            <button
              type="button"
              className="description-erase-btn font-bold text-center rounded-lg cursor-pointer transition transform duration-300 hover:scale-105 px-2"
              onClick={() => {
                emptyOpinionMsgFunct();
              }}
            >
              <FaEraser />
            </button>
          </div>
        </div>

        <p
          className={`${message.length === 0 ? "text-red-500" : message.length === 700 ? "text-red-500" : message.length > 0 && message.length < 700 ? "text-green-500" : "text-red-500"} text-sm font-bold mt-1`}
        >
          {descriptionData}
        </p>
      </section>
    </>
  );
};

export default DescriptionComp;
