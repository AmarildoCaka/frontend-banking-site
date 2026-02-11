const CardStatusComp = ({ balanceActivityData }: { balanceActivityData: string }) => {
 
  const isEnabled = balanceActivityData === 'Enabled';

  const isDisabled = balanceActivityData === 'Disabled';

  return (
  
    <>

      <section className="flex justify-between items-center gap-7 px-2">

        <div className="flex items-center gap-2">

          <div className={`${(isEnabled)? "bg-green-500": (isDisabled)? "bg-gray-400": "bg-green-500"} w-2 h-2 rounded-full animate-pulse shadow-sm`}></div>

          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">

            Updated:{" "}

            {(isEnabled)? "Just now": (isDisabled)? "Frozen": "Just now"}
          
          </p>

        </div>

        <div className="flex items-center gap-2">

          <div className={`${(isEnabled)? "bg-blue-500": (isDisabled)? "bg-gray-400": "bg-blue-500"} w-2 h-2 rounded-full animate-pulse shadow-sm`}></div>

          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">

            {" "}

            {(isEnabled)? "Real-time": (isDisabled)? "Frozen": "Real-time"}

          </p>

        </div>

      </section>
    
    </>

  );

}

export default CardStatusComp;