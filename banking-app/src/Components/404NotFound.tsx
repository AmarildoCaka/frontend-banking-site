const PageNotFoundComp = () => {

  return (

    <>
    
      <section className="page-not-found-wrapper flex flex-col justify-center items-center text-center min-h-screen pt-25 px-4 bg-gradient-to-b from-indigo-100 via-indigo-200 to-indigo-300">
        
        <div className="page-not-found-inner-wrapper flex flex-col justify-center items-center max-w-xl bg-white/90 rounded-xl shadow-lg p-10">
          
          <h1 className="page-not-found-text font-extrabold text-7xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 bg-clip-text text-transparent mb-6">Oops!</h1>

          <p className="page-not-found-text text-gray-900 font-semibold text-2xl mb-3">404 – Page Not Found</p>

          <p className="page-not-found-text text-gray-700 text-lg leading-relaxed mb-10">The page you are trying to access does not exist, has been moved, or is temporarily unavailable.</p>

          <a target="_self" href="/" className="page-not-found-btn text-white w-full sm:w-auto inline-block bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium px-5 py-2 rounded-md transition-colors cursor-pointer transition-transform font-bold duration-300 hover:scale-105">Back to Home</a>
        
        </div>

      </section>

    </>

  );

};

export default PageNotFoundComp;