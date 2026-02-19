import { useState, useEffect } from "react";

import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import { useDarkModeLogicHook } from "./darkModeLogic";

import TopAlertComp from "../../GeneralLogic/TopAlertComp";

import { ChevronDown } from "lucide-react";

const DarkModeToggleComp = () => {
  const [open, setOpen] = useState(false);

  const { alertVisibility, alertType, alertMessage, showPopUpMessage } =
    useBankStore();

  const { theme, setTheme } = useThirdBankStore();

  const { applyTheme, getThemeLabel } = useDarkModeLogicHook();

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  const lightMode = theme === "light";

  const darkMode = theme === "dark";

  const systemMode = theme === "system";

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <div className="relative">
        <button
          type="button"
          className={`${theme === "light" || theme === "dark" ? "w-38" : theme !== "light" && theme !== "dark" ? "w-31" : "w-38"} flex items-center justify-between font-bold px-4 py-2.5 text-sm rounded-md shadow-sm transition transform duration-300 border hover:scale-103 cursor-pointer ${darkMode ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-700" : lightMode ? "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200" : systemMode ? "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200" : "bg-gray-100 text-gray-900 border-gray-300 hover:bg-gray-200"} focus:ring-2 focus:ring-blue-500`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="flex flex-row justify-evenly place-items-center text-center gap-1">
            <span className="">
              {theme === "light" && "☀️"}

              {theme === "dark" && "🌙"}

              {theme === "system" && "🖥️"}
            </span>

            {getThemeLabel()}
          </div>

          <ChevronDown
            size={18}
            className={`${open ? "rotate-180" : ""} transition-transform duration-200`}
          />
        </button>

        {open && (
          <div
            className={`${lightMode ? "bg-white border-gray-200" : darkMode ? "bg-gray-800 text-white border-gray-700 hover:bg-white-700" : systemMode ? "bg-white border-gray-200" : "bg-white border-gray-200"} absolute right-0 mt-2 w-44 border rounded-xl shadow-lg transition-all duration-300 z-20 overflow-hidden`}
          >
            {[
              {
                mode: "light",
                label: "☀️ Light Mode",
                popUpMessage: "Light mode on",
              },

              {
                mode: "dark",
                label: "🌙 Dark Mode",
                popUpMessage: "Dark mode on",
              },

              {
                mode: "system",
                label: "🖥️ System Mode",
                popUpMessage: "System mode on",
              },
            ].map(({ mode, label, popUpMessage }) => (
              <button
                key={mode}
                type="button"
                className={`w-full text-left px-4 py-2 text-sm font-medium transition transform duration-300 ${lightMode ? "text-black bg-white hover:bg-gradient-to-r hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-700 hover:text-white" : darkMode ? "text-white hover:bg-white hover:text-black" : systemMode ? "text-black bg-white hover:bg-gradient-to-r hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-700 hover:text-white" : "text-black bg-white hover:bg-gradient-to-r hover:from-indigo-400 hover:via-indigo-500 hover:to-indigo-700 hover:text-white"} hover:scale-105 cursor-pointer`}
                onClick={() => {
                  setTheme(mode);

                  setOpen(false);

                  showPopUpMessage(`${popUpMessage}`, "info");
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default DarkModeToggleComp;
