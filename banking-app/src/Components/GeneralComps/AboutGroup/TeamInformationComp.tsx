import { useThirdBankStore } from "../../../store/thirdBankStore";

const TeamInformationComp = () => {

  const { teamInformationList } = useThirdBankStore();

  return (
    
    <>
    
      <section className="mt-16 text-center">

        <h2 className="team-header-text text-3xl font-bold text-gray-800 dark:text-white">Meet Our Team</h2>

        <p className="team-header-subtext text-gray-600 text-xl font-semibold text-center dark:text-white mt-5 mb-10">Our dedicated team is committed to providing the best banking experience. <br/> Meet the professionals behind .</p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 text-center gap-12">

          {teamInformationList.map((index) => (

            <>
            
              <div key={index.id} className="team-memeber-card-wrapper flex flex-col items-center text-center gap-4 w-[260px] bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl p-6">
  
                <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]">

                  <img className="mx-auto w-full h-full object-cover rounded-full shadow-md hover:scale-105 transition-transform duration-300" src={index.image} alt={index.name}/>
                
                </div>
                
                <hr className="team-member-card-divider w-[70%] border"/>
                
                <div className="flex flex-col items-center gap-1">
                
                  <h3 className="team-member-card-text font-semibold text-lg sm:text-xl">{index.name}</h3>
                
                  <p className="team-member-card-text text-xs sm:text-sm tracking-wide uppercase">{index.position}</p>
                
                </div>

              </div>
            
            </>

          ))}

        </div>

      </section>
    
    </>
    
  );

}

export default TeamInformationComp;