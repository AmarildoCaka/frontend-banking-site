import {
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

import { useBankStore } from "../../store/FirstGroup/useBankStore";

interface TopAlertCompProps {
  alertVisibility: boolean;

  alertType: string;

  alertMessage: string;
}

const TopAlertComp: React.FC<TopAlertCompProps> = ({
  alertVisibility,
  alertType,
  alertMessage,
}) => {
  const { hidePopUpMessage, cancelAlertVisibility } = useBankStore();

  if (!alertVisibility) {
    return null;
  }

  setTimeout(() => {
    cancelAlertVisibility();
  }, 1000);

  return (
    <>
      <div
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 min-w-96 max-w-md ${alertType === "success" ? "bg-green-50 border-green-200 text-green-800" : alertType === "error" ? "bg-red-50 border-red-200 text-red-800" : "bg-blue-50 border-blue-200 text-blue-800"} border-l-4 rounded-lg shadow-lg px-4 py-3 animate-fade-in`}
      >
        <div className="flex justify-evenly place-items-center">
          <div className="flex-shrink-0">
            {alertType === "success" && (
              <>
                <FaCheckCircle className="w-5 h-5 text-green-400" />
              </>
            )}

            {alertType === "error" && (
              <>
                <FaExclamationTriangle className="w-5 h-5 text-red-400" />
              </>
            )}

            {alertType === "info" && (
              <>
                <FaShieldAlt className="w-5 h-5 text-blue-400" />
              </>
            )}
          </div>

          <div className="ml-3 flex-1">
            <p className="text-sm font-medium">{alertMessage}</p>
          </div>

          <button
            type="button"
            className="absolute top-1 right-0 w-7 h-7 text-black text-2xl font-bold rounded-lg cursor-pointer transform transition duration-300 hover:scale-120 hover:text-red-500"
            onClick={() => {
              hidePopUpMessage();
            }}
          >
            <span className="text-xl">&times;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default TopAlertComp;
