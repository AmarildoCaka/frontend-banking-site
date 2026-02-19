import { FaCopy, FaEraser } from "react-icons/fa";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

const LastNameFormComp = () => {
  const { showPopUpMessage } = useBankStore();

  const { lastName, setLastName } = useConditionalBankStore();

  const { theme } = useThirdBankStore();

  const emptyLastNameForm = () => {
    if (lastName === "") {
      showPopUpMessage("Last name form empty, nothing to delete", "error");
    } else if (lastName !== "") {
      setLastName("");

      showPopUpMessage("Last name form emptied successfully", "success");
    } else {
      return null;
    }
  };

  const lastNameCopyFunct = () => {
    if (lastName === "") {
      showPopUpMessage("Last name form empty, fill the form first", "error");
    } else if (lastName !== "") {
      navigator.clipboard.writeText(lastName);

      showPopUpMessage("Last name copied successfully", "success");
    } else {
      return null;
    }
  };


  const setFormValueFunct = (value: string) => {

    if(/^[a-zA-Z]*$/.test(value))
    {

      setLastName(value);

    }

  };

  return (
    <>
      <div className="flex flex-col justify-center place-items-center gap-1">
        <section className="w-[700px] p-1">
          <label className="card-linking-text font-bold">Last Name</label>
        </section>

        <div className="relative w-[700px]">
          <input
            type="text"
            value={lastName}
            maxLength={10}
            className={`card-linking-form w-[700px] border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${lastName.length < 5 ? "border border-red-500" : "border border-indigo-500"} transform transition duration-300 hover:scale-102 p-2`}
            placeholder="Last Name"
            onChange={(e) => {
            
              setFormValueFunct(e.target.value);

            }}
          />

          <div className="absolute inset-y-0 right-2 flex items-center gap-3 p-3">
            <button
              type="button"
              className="card-linking-action-btn text-md cursor-pointer transform duration-300 hover:scale-110 transition"
              onClick={() => {
                lastNameCopyFunct();
              }}
            >
              <FaCopy />
            </button>

            <div
              className={`w-px h-5 ${theme === "light" || theme === "system" ? "bg-black" : theme === "dark" ? "bg-white" : "text-black"}`}
            />

            <button
              type="button"
              className="card-linking-action-btn text-md cursor-pointer transform duration-300 hover:scale-110 transition"
              onClick={() => {
                emptyLastNameForm();
              }}
            >
              <FaEraser />
            </button>
          </div>
        </div>

        <section className="w-[700px]">
          {lastName.length == 0 ? (
            <>
              <p className="text-red-500 text-start font-bold pt-1">
                Please enter your last name
              </p>
            </>
          ) : lastName.length < 2 ? (
            <>
              <p className="text-red-500 text-start font-bold pt-1">
                Last name cannot have less than 2 letters
              </p>
            </>
          ) : null}
        </section>
      </div>
    </>
  );
};

export default LastNameFormComp;
