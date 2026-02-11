const EmptyHistoryComp = () => {

  return (
  
    <>
    
      <div className="empty-loan-history-wrapper flex flex-col items-center justify-center h-80 rounded-2xl shadow p-5">
              
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M9 21V3m12 6h-5m0 0l-2 2m2-2l2-2"/>
      
        </svg>

        <p className="empty-loan-history-text text-lg font-medium">Loan history empty</p>

        <p className="empty-loan-history-sub-text text-sm mt-1">All your loans will appear here once created.</p>

      </div>
    
    </>
  
  );

}

export default EmptyHistoryComp;