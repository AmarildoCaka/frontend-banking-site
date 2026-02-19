const EmptyStatisitcsHistory = () => {

  return (
  
    <>
    
      <section className="flex flex-col jsutify-evenly items-center text-center gap-3 p-1">

        <div className="flex flex-col items-center justify-center text-center py-10">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="empty-loan-statistics-icon w-12 h-12 m-4">

            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            
            <circle cx="2" cy="6" r="1" fill="currentColor"/>
            
            <circle cx="2" cy="12" r="1" fill="currentColor"/>
            
            <circle cx="2" cy="18" r="1" fill="currentColor"/>

          </svg>

          <p className="empty-loan-statistics-main-text text-lg font-medium">Loan statistics history empty</p>

          <p className="empty-loan-statistics-text text-sm mt-1">All your loan statistics will appear here once you create a loan</p>

        </div>

      </section>
    
    </>
    
  );

}

export default EmptyStatisitcsHistory;