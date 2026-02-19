import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import AboutOverlayComp from "./AboutOverlayGroup/AboutOverlayComp";

const CoreValuesComp = () => {

  const { setFirstModalState, setSecondModalState, setThirdModalState } = useThirdBankStore();

  return (
    <>
      <section>

        <h1 className="about-text text-3xl font-bold text-gray-800 dark:text-white">
          Our Core Values
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-8 mt-8 p-1">
          <div className="values-card flex flex-col justify-center place-items-center text-center border rounded-md p-5">
            <div className="text-center">
              <div className="text-blue-600 text-4xl transform transition duration-300 hover:scale-110 mb-4">
                🔒
              </div>
            </div>

            <div className="text-center">
              <h3 className="value-card-text font-bold text-xl">Security</h3>

              <p className="value-card-text font-semibold mt-2">
                We prioritize the security of your data and funds, ensuring that
                your banking experience is safe and reliable.
              </p>

              <br />

              <button
                type="button"
                className="values-card-btn text-white font-bold border rounded-md shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-indigo-600 px-5 py-2"
                onClick={() => {
                  setFirstModalState(true);
                }}
              >
                See more
              </button>
            </div>
          </div>

          <div className="values-card flex flex-col justify-center place-items-center text-center border rounded-md p-5">

            <div className="text-center">
            
              <div className="text-blue-600 text-4xl transform transition duration-300 hover:scale-110 mb-4">
                💡
              </div>
            
            </div>

            <div className="text-center">
            
              <h3 className="value-card-text font-bold text-xl">Innovation</h3>

              <p className="value-card-text font-semibold mt-2">
                We embrace cutting-edge technology to offer innovative banking
                solutions that make managing finances easier.
              </p>

              <br />

              <button
                type="button"
                className="values-card-btn text-white font-bold border rounded-md shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-indigo-600 px-5 py-2"
                onClick={() => {
                  setSecondModalState(true);
                }}
              >
                See more
              </button>
            </div>
          </div>

          <div className="values-card flex flex-col justify-center place-items-center text-center border rounded-md p-5">
            <div className="text-center">
              <div className="text-blue-600 text-4xl transform transition duration-300 hover:scale-110 mb-4">
                🤝
              </div>
            </div>

            <div className="text-center">
              <h3 className="value-card-text font-bold text-xl">
                Customer-Centric
              </h3>

              <p className="value-card-text font-semibold mt-2">
                Our customers are at the heart of everything we do. We listen,
                and tailor our services to their needs.
              </p>

              <br />

              <button
                type="button"
                className="values-card-btn text-white font-bold border rounded-md shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-indigo-600 px-5 py-2"
                onClick={() => {
                  setThirdModalState(true);
                }}
              >
                See more
              </button>
            </div>
          </div>
        </div>

      </section>

      <AboutOverlayComp/>

    </>

  );

};

export default CoreValuesComp;