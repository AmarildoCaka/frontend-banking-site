import { useBankStore } from "../../../store/FirstGroup/useBankStore";

const MonthSelectComp = () => {
  const { months, selectedMonth, selectedMonthFunct } = useBankStore();

  return (
    <>
      <div className="rounded-xl shadow-lg p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Select Month for Details
        </h2>

        <section className="w-full text-center mb-5">
          <button
            type="button"
            className={`${selectedMonth === null ? "text-white bg-blue-600" : "text-black bg-gray-100 hover:bg-gray-200"} shadow-lg font-bold rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 px-15 py-2`}
            onClick={() => {
              selectedMonthFunct(null);
            }}
          >
            All
          </button>
        </section>

        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {months.map((month, index) => (
            <button
              type="button"
              key={month}
              className={`${selectedMonth === index ? "text-white bg-blue-600 shadow-lg" : "text-gray-700 bg-gray-100 hover:bg-gray-200"} font-bold rounded-lg cursor-pointer transform transition duration-300 hover:scale-105 p-3`}
              onClick={() => {
                selectedMonthFunct(index);
              }}
            >
              {month}
            </button>
          ))}
        </section>
      </div>
    </>
  );
};

export default MonthSelectComp;
