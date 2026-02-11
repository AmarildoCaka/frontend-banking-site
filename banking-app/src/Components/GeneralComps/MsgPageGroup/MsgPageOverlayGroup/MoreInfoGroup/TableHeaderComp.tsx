const TableHeaderComp = () => {

  return (

    <>
    
      <div className="timestamp-table-header flex items-center justify-between py-2 px-3 font-semibold sticky top-0 z-10">
                      
        <div className="timestamp-table-header-text flex-1 text-center">ID</div>

        <div className="w-px bg-gray-400 h-6 mx-4"></div>

        <div className="timestamp-table-header-text flex-1 text-center">Email</div>

        <div className="w-px bg-gray-400 h-6 mx-4"></div>

        <div className="timestamp-table-header-text flex-1 text-center">Rating</div>

        <div className="w-px bg-gray-400 h-6 mx-4"></div>

        <div className="timestamp-table-header-text flex-1 text-center">Timestamp</div>

        <div className="w-px bg-gray-400 h-6 mx-4"></div>

        <div className="timestamp-table-header-text w-24 text-center">Actions</div>

      </div>
    
    </>

  );

}

export default TableHeaderComp;