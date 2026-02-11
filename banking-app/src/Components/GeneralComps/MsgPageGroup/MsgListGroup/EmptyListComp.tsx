import { FaInbox } from "react-icons/fa";

const EmptyListComp = () => {

  return (

    <>
    
      <div className="w-full flex flex-col items-center justify-center py-20 text-center text-gray-500">

        <FaInbox className="w-16 h-16 mb-4 text-indigo-400"/>
        
        <h1 className="rating-empty-header text-2xl font-bold mb-2 text-gray-800 dark:text-white">No Opinions Yet</h1>
        
        <p className="rating-empty-description text-sm text-gray-500 dark:text-gray-400">Looks like no clients have left a review yet. Once they do, you’ll see them here.</p>
      
      </div>
    
    </>

  );

}

export default EmptyListComp;