import CardLinkingSystem from "../CardLinkingSystem/CardLinkSysComp";

const CardLinkComp = () => {

  return (
  
    <>
    
      <section className="card-linking-wrapper grid justify-evenly place-items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-center p-16">
    
        <div className="text-left">
    
          <h1 className="card-linking-title text-3xl font-bold mb-4">Link your cards here</h1>

          <p className="card-linking-description text-xl font-semibold">Link your cards effortlessly for instant access, secure payments, and full control - anytime, anywhere</p>
    
        </div>

        <div className="w-full">
    
          <CardLinkingSystem/>
    
        </div>
    
      </section>
    
    </>
  
  );

};

export default CardLinkComp;