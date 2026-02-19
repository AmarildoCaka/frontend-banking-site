import { useState, useEffect } from "react";

import { FaArrowUp } from "react-icons/fa";

import { useBankStore } from "../../store/FirstGroup/useBankStore";

import { useThirdBankStore } from "../../store/ThirdGroup/thirdBankStore";

import TopAlertComp from "../GeneralLogic/TopAlertComp";

const ToTopBtnComp = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  const { showPopUpMessage, alertVisibility, alertType, alertMessage } =
    useBankStore();

  const { theme } = useThirdBankStore();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isButtonClicked && window.scrollY === 0) {
        showPopUpMessage("You're at the top!", "info");

        setTimeout(() => {
          setIsButtonClicked(false);
        }, 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isButtonClicked, showPopUpMessage]);

  const scrollToTop = () => {
    setIsButtonClicked(true);

    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <div className={`${theme} fixed bottom-5 right-5`}>
        {visible && (
          <>
            <button
              type="button"
              className="btn w-full h-full rounded-4xl shadow-xl cursor-pointer hover:scale-105 hover:duration-300 p-3"
              onClick={() => {
                scrollToTop();
              }}
            >
              <FaArrowUp className="btn" />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default ToTopBtnComp;
