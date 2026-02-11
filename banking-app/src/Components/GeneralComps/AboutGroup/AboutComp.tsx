import CoreValuesComp from './CoreValuesComp';
import TeamInformationComp from './TeamInformationComp';

const AboutComp = () => {

  return (
   
    <>
    
      <main className='about-main-wrapper flex flex-col justify-center place-items-center text-center p-20 pt-20 pb-7'>

        <div className="flex flex-col justify-center place-items-center text-center max-w-7xl mx-auto px-4 py-16">

          <section className="text-center mb-12">

            <h1 className="about-text font-extrabold text-4xl text-gray-900 dark:text-white">About Us</h1>

            <p className="about-text text-black text-lg font-semibold dark:text-white mt-4">Discover what World Bank is, our mission, and how we serve our customers.</p>

          </section>

          <section className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-16">

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

          </section>

          <div className='flex flex-col justify-center place-items-center text-center'>

            <hr className="division-lines w-[800px] border mt-20 mb-10"/>

          </div>

          <CoreValuesComp/>

          <div className='flex flex-col justify-center place-items-center text-center'>

            <hr className="division-lines w-[800px] border mt-20 mb-10"/>

          </div>

          <TeamInformationComp/>
          
        </div>
        
      </main>
    
    </>
   
  );

}

export default AboutComp;