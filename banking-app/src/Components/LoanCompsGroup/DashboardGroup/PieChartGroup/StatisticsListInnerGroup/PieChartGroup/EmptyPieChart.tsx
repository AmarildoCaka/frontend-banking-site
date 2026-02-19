const EmptyPieChartComp = () => {

  return (
  
    <>
    
      <section className="flex flex-col jsutify-evenly items-center text-center gap-3 p-1">

        <div className="flex flex-col items-center justify-center text-center py-10">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="empty-loan-statistics-icon w-12 h-12 m-4">
          
            <circle cx="12" cy="12" r="10"/>
            
            <path d="M12 2v10l8 4"/>
      
          </svg>

          <p className="empty-loan-statistics-main-text text-lg font-medium">No statistics chart data available</p>
          
          <p className="empty-loan-statistics-text text-sm mt-1">Your statistics chart data will appear here once you create a loan</p>
        
        </div>
        
      </section>
    
    </>
  
  );

}

export default EmptyPieChartComp;