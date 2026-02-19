import { HiCheckCircle } from "react-icons/hi";

import { useBankStore } from "../../store/FirstGroup/useBankStore";

const CarouselPopUpComp = () => {
  const { setPopUpState, services, index } = useBankStore();

  if (!services || !Array.isArray(services) || services.length === 0) {
    return null;
  }

  const safeIndex = Math.max(0, Math.min(index || 0, services.length - 1));

  const currentService = services[safeIndex];

  if (!currentService) {
    return null;
  }

  const getNextIndex = (safeIndex + 1) % services.length;

  return (
    <>
      <section className="relative">
        <div className="fixed inset-0 bg-white/2 backdrop-blur-md z-40" />

        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="popup-wrapper flex flex-col gap-3 justify-start items-start text-left w-[570px] min-h-[208px] rounded-lg p-5 shadow-md relative">
            <h1 className="popup-header-text font-bold text-3xl">Features</h1>

            <hr className="popup-divider border-t border-gray-400 my-1 w-full" />

            <section className="flex items-center space-x-3 p-1 rounded-lg transition w-full">
              <HiCheckCircle className="text-green-500 text-xl flex-shrink-0" />

              <span className="popup-text font-medium text-base">
                {currentService?.feature?.firstFeature ||
                  "Feature not available"}
              </span>
            </section>

            <section className="flex items-center space-x-3 p-1 rounded-lg transition w-full">
              <HiCheckCircle className="text-green-500 text-xl flex-shrink-0" />

              <span className="popup-text font-medium text-base">
                {currentService?.feature?.secondFeature ||
                  "Feature not available"}
              </span>
            </section>

            <section className="flex items-center space-x-3 p-1 rounded-lg transition w-full">
              <HiCheckCircle className="text-green-500 text-xl flex-shrink-0" />

              <span className="popup-text font-medium text-base">
                {currentService?.feature?.thirdFeature ||
                  "Feature not available"}
              </span>
            </section>

            <hr className="popup-divider border-t border-gray-400 my-1 w-full" />

            <div className="mt-1 w-full flex justify-between items-center relative">
              <button
                type="button"
                className="px-5 py-2 text-red-600 bg-red-50 hover:bg-red-100 border-red-200 border font-bold rounded-md cursor-pointer transition transform duration-300 hover:scale-105"
                onClick={() => {
                  setPopUpState(false);
                }}
              >
                Close
              </button>

              <p className="popup-card-count-text font-semibold text-md absolute bottom-0 right-0">
                {getNextIndex + 1} / 6
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarouselPopUpComp;
