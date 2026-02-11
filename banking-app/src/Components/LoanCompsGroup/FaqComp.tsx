import { useConditionalBankStore } from "../../store/secondBankStore";

const FaqComp = () => {

  const { setShowFAQ } = useConditionalBankStore();

  return (

    <>
    
      <div className="w-full text-left m-4">

        <button type="button" className="text-indigo-500 text-center font-semibold text-md underline cursor-pointer transform transition duration-300 hover:scale-110 mt-5 mb-2" onClick={() => {
          
          setShowFAQ(true);

        }}>FAQ's</button>
      
      </div>
    
    </>

  );

}

export default FaqComp;