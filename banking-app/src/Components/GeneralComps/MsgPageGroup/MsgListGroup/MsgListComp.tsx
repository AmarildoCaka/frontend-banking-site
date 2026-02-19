import { FaClock } from "react-icons/fa";

import { useThirdBankStore } from "../../../../store/ThirdGroup/thirdBankStore";

import FilledListComp from "./FilledListGroup/FilledListComp";
import EmptyListComp from "./EmptyListComp";
import MsgPageOverlayComp from "../MsgPageOverlayGroup/MsgPageOverlayComp";

const MsgListComp = () => {
  const { opinionMsgList, setMsgPagePopUpUnit } = useThirdBankStore();

  return (
    <>
      <section>
        <div className="rating-sub-wrapper flex justify-between items-center max-w-4xl mx-auto mt-8 px-4 py-4 rounded-md shadow-sm">
          <div>
            <h3 className="rating-text text-base font-medium tracking-wide">
              Rating Messages List
            </h3>

            <p className="rating-text text-xs">
              View all submitted messages and ratings
            </p>
          </div>

          <button
            type="button"
            title="More Info"
            className="rating-timestamps-btn flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r text-white text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            onClick={() => {
              setMsgPagePopUpUnit(true);
            }}
          >
            <FaClock className="mr-2 text-base" />
            View Timestamps
          </button>
        </div>

        {opinionMsgList.length > 0 ? (
          <>
            <FilledListComp />
          </>
        ) : opinionMsgList.length === 0 ? (
          <>
            <EmptyListComp />
          </>
        ) : null}

        <MsgPageOverlayComp />
      </section>
    </>
  );
};

export default MsgListComp;
