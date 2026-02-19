import { FaCopy, FaEraser } from "react-icons/fa";

import { useState, useEffect } from "react";

import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import { useThirdBankStore } from "../../../../store/ThirdGroup/thirdBankStore";

import { useGeneralLogicHook } from "../generalContactUsLogic";

import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const LastNameComp = () => {
  const [lastNameData, setLastNameData] = useState<string>("");

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { lastName, setLastName, errors, validationObj, theme } =
    useThirdBankStore();

  const { copyLastNameFunct, emptyLastNameFunct, lastNameFormValidationFunct } =
    useGeneralLogicHook();

  useEffect(() => {
    lastNameFormValidationFunct();

    setLastNameData(validationObj.lastName);
  }, [validationObj.lastName, lastNameFormValidationFunct]);

  const setFormValueFunct = (value: string) => {

    if(/^[a-zA-Z]*$/.test(value))
    {

      setLastName(value);
    
    }

  };

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <section className="mb-3">
        <div className="relative">
          <input
            type="text"
            value={lastName}
            maxLength={20}
            className={`rating-last-name-form w-full border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded-md shadow-md transform transition duration-300 hover:scale-105 placeholder:font-semibold dark:bg-white dark:text-black ${theme === "light" || theme === "system" ? "placeholder:text-black" : theme === "dark" ? "placeholder:text-white" : "placeholder:text-dark"} p-3`}
            name="lastName"
            placeholder="Your last name here..."
            onChange={(e) => {
            
              setFormValueFunct(e.target.value);

            }}
          />

          <div className="flex flex-row justify-center place-items-center absolute top-1/2 right-2 -translate-y-1/2">
            <button
              type="button"
              className="last-name-copy-btn font-bold text-center rounded-lg cursor-pointer transition transform duration-300 hover:scale-105 px-2"
              onClick={() => {
                copyLastNameFunct();
              }}
            >
              <FaCopy />
            </button>

            <div className="rating-form-info-divider h-4 w-px m-1"></div>

            <button
              type="button"
              className="last-name-erase-btn font-bold text-center rounded-lg cursor-pointer transition transform duration-300 hover:scale-105 px-2"
              onClick={() => {
                emptyLastNameFunct();
              }}
            >
              <FaEraser />
            </button>
          </div>
        </div>

        <p
          className={`${lastName.length === 0 ? "text-red-500" : lastName.length === 20 ? "text-red-500" : lastName.length > 0 && lastName.length < 20 ? "text-green-500" : "text-red-500"} text-sm font-bold mt-1`}
        >
          {lastNameData}
        </p>
      </section>
    </>
  );
};

export default LastNameComp;
