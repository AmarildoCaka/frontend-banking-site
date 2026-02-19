import { FaCopy, FaEraser } from "react-icons/fa";

import { useState, useEffect } from "react";

import { useBankStore } from "../../../../store/FirstGroup/useBankStore";

import { useThirdBankStore } from "../../../../store/ThirdGroup/thirdBankStore";

import { useGeneralLogicHook } from "../generalContactUsLogic";

import TopAlertComp from "../../../GeneralLogic/TopAlertComp";

const FirstNameComp = () => {
  const [firstNameData, setFirstNameData] = useState<string>("");

  const { alertVisibility, alertType, alertMessage } = useBankStore();

  const { firstName, setFirstName, errors, validationObj, theme } =
    useThirdBankStore();

  const {
    copyFirstNameFunct,
    emptyFirstNameFunct,
    firstNameFormValidationFunct,
  } = useGeneralLogicHook();

  useEffect(() => {
    firstNameFormValidationFunct();

    setFirstNameData(validationObj.firstName);
  }, [validationObj.firstName, firstNameFormValidationFunct]);

  const setFormValueFunct = (value: string) => {

    if(/^[a-zA-Z]*$/.test(value))
    {

      setFirstName(value);
    
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
            value={firstName}
            maxLength={20}
            className={`rating-first-name-form w-full border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-md shadow-md transform transition duration-300 hover:scale-105 placeholder:font-semibold p-3 ${theme === "light" || theme === "system" ? "placeholder:text-black" : theme === "dark" ? "placeholder:text-white" : "placeholder:text-dark"}`}
            name="firstName"
            placeholder="Your first name here..."
            onChange={(e) => {
            
              setFormValueFunct(e.target.value);

            }}
          />

          <div className="flex flex-row justify-center place-items-center absolute top-1/2 right-2 -translate-y-1/2">
            <button
              type="button"
              className="first-name-copy-btn font-bold text-center rounded-lg cursor-pointer transition transform duration-300 hover:scale-105 px-2"
              onClick={() => {
                copyFirstNameFunct();
              }}
            >
              <FaCopy />
            </button>

            <div className="rating-form-info-divider rating h-4 w-px m-1"></div>

            <button
              type="button"
              className="first-name-erase-btn font-bold text-center rounded-lg cursor-pointer transition transform duration-300 hover:scale-105 px-2"
              onClick={() => {
                emptyFirstNameFunct();
              }}
            >
              <FaEraser />
            </button>
          </div>
        </div>

        <p
          className={`${firstName.length === 0 ? "text-red-500" : firstName.length === 20 ? "text-red-500" : firstName.length > 0 && firstName.length < 20 ? "text-green-500" : "text-red-500"} text-sm font-bold mt-1`}
        >
          {firstNameData}
        </p>
      </section>
    </>
  );
};

export default FirstNameComp;
