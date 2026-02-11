import { useThirdBankStore } from "../../../../../store/thirdBankStore";

const BottomBtnComp = () => {

  const { ratingMessageData, setRatingMessageData } = useThirdBankStore();

  return (

    <>
    
      <div className="w-full flex flex-row justify-between place-items-center py-2 px-3">

        <button type="button" className={`${(ratingMessageData.length > 0)? "text-red-600 bg-red-50 hover:bg-red-100 border-red-200 transition transform duration-300 hover:scale-105 cursor-pointer": (ratingMessageData.length === 0)? "text-gray-600 bg-gray-50 hover:bg-gray-100 border-gray-200 cursor-not-allowed": "text-red-600 bg-red-50 hover:bg-red-100 border-red-200 transition transform duration-300 hover:scale-105 cursor-pointer"} font-bold text-sm border w-32 rounded-lg px-3 py-2`} onClick={() => {

          setRatingMessageData([]);
        
        }}>Delete All</button>

        <p className="timestamps-num-text font-bold text-right">
          
          Timestamps: {" "}
          
          <span className="text-indigo-500 font-bold">{ratingMessageData.length}</span>
        
        </p>
      
      </div>
    
    </>

  );

}

export default BottomBtnComp;