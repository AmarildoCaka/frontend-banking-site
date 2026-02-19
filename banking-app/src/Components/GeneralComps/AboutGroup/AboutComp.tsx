import { useThirdBankStore } from '../../../store/ThirdGroup/thirdBankStore';

import CoreValuesComp from './CoreValuesComp';

const AboutComp = () => {

  const { teamInformationList } = useThirdBankStore();
  
  return (
   
    <>
    
      <main className='about-main-wrapper min-h-screen p-5 pt-25'>

        <section className="flex flex-col p-1">

          <h1 className="about-text text-3xl font-bold">About Us</h1>

          <p className="about-text font-semibold mt-1">Discover what World Bank is, our mission, and how we serve our customers.</p>

        </section>

        <section className='flex flex-col justify-center place-items-center text-center pb-5 max-w-7xl mx-auto px-5 py-15'>

          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16">

            <div className='text-center p-1'>
            
              <h2 className="about-text font-bold text-2xl text-gray-800 dark:text-white">Our Mission</h2>
            
              <p className="about-text text-black text-lg font-semibold dark:text-white mt-4">
            
                At World Bank, our mission is to provide secure, innovative, and
                accessible banking solutions that empower individuals and businesses
                to thrive financially. We are committed to offering personalized
                services that meet the needs of our customers.
            
              </p>
            
            </div>
            
            <div className='text-center p-1'>
            
              <h2 className="about-text font-bold text-2xl text-gray-800 dark:text-white">Our Vision</h2>
            
              <p className="about-text text-black text-lg font-semibold dark:text-white mt-4">
            
                Our vision is to be the leading digital bank, transforming the way
                people manage their finances. We aim to simplify banking and help our
                customers reach their financial goals with ease.
            
              </p>
            
            </div>

          </div>

          <hr className="division-lines w-full border my-10"/>

          <CoreValuesComp/>

          <hr className="division-lines w-full border my-10"/>

          <div>

            <h1 className="team-header-text text-3xl font-bold text-gray-800 dark:text-white">Meet Our Team</h1>

            <p className="team-header-subtext text-gray-600 text-xl font-semibold text-center dark:text-white mt-5 mb-10">
              
              Our dedicated team is committed to providing the best banking
              experience. <br /> Meet the professionals behind .
            
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 text-center gap-10 place-items-center justify-center">
            
              {teamInformationList.map((index) => (
                
                <>
                
                  <div key={index.id} className="team-memeber-card-wrapper flex flex-col items-center text-center gap-4 w-[260px] bg-white dark:bg-gray-900 rounded-md shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl p-6">
                
                    <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]">
                      
                      <img className="mx-auto w-full h-full object-cover rounded-full shadow-md hover:scale-105 transition-transform duration-300" src={index.image} alt={index.name}/>
                    
                    </div>

                    <hr className="team-member-card-divider w-[70%] border" />

                    <div className="flex flex-col items-center gap-1">
                    
                      <h3 className="team-member-card-text font-semibold text-lg sm:text-xl">{index.name}</h3>

                      <p className="team-member-card-text text-xs sm:text-sm tracking-wide uppercase">{index.position}</p>

                    </div>

                  </div>

                </>

              ))}

            </div>

          </div>
            
        </section>

      </main>
    
    </>
   
  );

}

export default AboutComp;