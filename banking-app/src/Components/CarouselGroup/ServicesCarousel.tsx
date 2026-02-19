import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useEffect } from "react";

import { useBankStore } from "../../store/FirstGroup/useBankStore";

import CarouselOverloadComp from "./CarouselOverloadGroup/CarouselOverloadComp";

const ServicesCarousel = () => {
  const { setPopUpState, services, index, setIndex } = useBankStore();

  useEffect(() => {
    if (services && services.length > 0) {
      if (typeof index !== "number" || index < 0 || index >= services.length) {
        setIndex(0);
      }
    }
  }, [index, services, setIndex]);

  useEffect(() => {
    if (services && services.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          return (prevIndex + 1) % services.length;
        });
      }, 4000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [services, services.length, setIndex]);

  if (!services || services.length === 0) {
    return null;
  }

  let currentIndex = index;

  if (
    typeof currentIndex !== "number" ||
    currentIndex < 0 ||
    currentIndex >= services.length
  ) {
    currentIndex = 0;
  }

  const safeIndex = currentIndex;

  const getPrevIndex = (safeIndex - 1 + services.length) % services.length;

  const getNextIndex = (safeIndex + 1) % services.length;

  const handlePrevClick = () => {
    setIndex(getPrevIndex);
  };

  const handleNextClick = () => {
    setIndex(getNextIndex);
  };

  const handleLearnMoreClick = () => {
    setPopUpState(true);
  };

  return (
    <>
      <div className="flex justify-center place-items-center relative w-full h-[300px] overflow-hidden p-5">
        <button
          type="button"
          className="left-arrow-btn text-2xl absolute left-10 cursor-pointer transform transition duration-300 hover:scale-117"
          onClick={() => {
            handlePrevClick();
          }}
        >
          <FaArrowLeft />
        </button>

        <div className="relative flex items-center justify-center w-[600px] h-[250px]">
          <div
            className="absolute left-[10%] transition-transform duration-700 ease-in-out transform opacity-50 scale-90"
            style={{
              transform: `translateX(-50%) rotateY(15deg) translateZ(-50px)`,
              transition: "transform 0.7s ease-in-out",
            }}
          >
            <div className="carousel-card w-[250px] h-[220px] flex justify-center items-center shadow-md border rounded-3xl p-4">
              <p className="carousel-card-text font-bold text-md text-center">
                {services[getPrevIndex].serviceName}
              </p>
            </div>
          </div>

          <div
            className="carousel-card flex justify-center place-items-center w-[300px] h-[250px] shadow-lg border-2 rounded-xl transform transition duration-300 hover:scale-107 z-10 dark:bg-gray-800"
            style={{
              transform: "translateX(0) rotateY(0) translateZ(0)",
              transition: "transform 0.7s ease-in-out",
            }}
          >
            <div className="text-center p-6">
              <p className="carousel-card-text font-extrabold text-xl">
                {services[safeIndex].serviceName}
              </p>

              <p className="carousel-card-text font-semibold text-md mt-4">
                {services[safeIndex].serviceText}
              </p>

              <button
                type="button"
                className="carousel-btn font-bold text-center rounded-md shadow-md cursor-pointer transform transition duration-300 hover:scale-105 mt-6 px-4 py-2"
                onClick={() => {
                  handleLearnMoreClick();
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          <div
            className="absolute right-[10%] transition-transform duration-700 ease-in-out transform opacity-50 scale-90"
            style={{
              transform: `translateX(50%) rotateY(-15deg) translateZ(-50px)`,
              transition: "transform 0.7s ease-in-out",
            }}
          >
            <div className="carousel-card w-[250px] h-[220px] flex justify-center items-center shadow-md border rounded-3xl p-4">
              <p className="carousel-card-text font-bold text-md text-center">
                {services[getNextIndex].serviceName}
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="right-arrow-btn text-black text-2xl absolute right-10 cursor-pointer transform transition duration-300 hover:scale-117 hover:text-indigo-500 dark:text-gray-300"
          onClick={() => {
            handleNextClick();
          }}
        >
          <FaArrowRight />
        </button>

        <CarouselOverloadComp />
      </div>
    </>
  );
};

export default ServicesCarousel;
