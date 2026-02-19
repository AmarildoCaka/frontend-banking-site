import { FaStar } from "react-icons/fa";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

const StarRatingComp = () => {
  const { rating, hover, setRating, setHover, ratingStarList } =
    useThirdBankStore();

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="flex space-x-1">
          {ratingStarList.map((star) => (
            <>
              <button
                key={star}
                type="button"
                className="focus:outline-none"
                onClick={() => {
                  setRating(star);
                }}
                onMouseEnter={() => {
                  setHover(star);
                }}
                onMouseLeave={() => {
                  setHover(0);
                }}
              >
                <FaStar
                  size={30}
                  className={`transition-transform duration-150 ${(hover || rating) >= star ? "text-yellow-400 scale-125" : "text-gray-300"}`}
                />
              </button>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default StarRatingComp;
