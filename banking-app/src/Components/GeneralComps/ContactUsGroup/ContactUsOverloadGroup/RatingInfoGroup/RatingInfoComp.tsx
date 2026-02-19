import { FaTimes } from "react-icons/fa";

import { useEffect } from "react";

import { useThirdBankStore } from "../../../../../store/ThirdGroup/thirdBankStore";

import RatingInfoBodyComp from "./RatingInfoBody";

const RatingInfoComp = () => {
  const { setRatingInfoUnit } = useThirdBankStore();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-40" />

      <section className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-sm transform transition-all duration-300 scale-100 opacity-100 overflow-hidden">
          <button
            type="button"
            className="absolute top-2 right-2 cursor-pointer transform transition duration-300 hover:text-red-500 hover:scale-110 p-1 dark:hover:text-gray-300"
            onClick={() => {
              setRatingInfoUnit(false);
            }}
          >
            <FaTimes
              size={18}
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400"
            />
          </button>

          <h2 className="text-2xl font-semibold tracking-tight mb-3 text-gray-800 dark:text-gray-100 text-left">
            How Our Rating System Works
          </h2>

          <hr className="border-gray-200 dark:border-gray-700 mb-3" />

          <RatingInfoBodyComp />
        </div>
      </section>
    </>
  );
};

export default RatingInfoComp;
