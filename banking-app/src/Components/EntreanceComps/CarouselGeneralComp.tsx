import ServicesCarousel from "../CarouselGroup/ServicesCarousel";

const CarouselGeneralComp = () => {
  
  return (

    <>
  
      <section className="second-section mx-auto text-center p-10">
        
        <h2 className="second-section-text text-3xl font-extrabold transform transition duration-300 hover:scale-105 mb-3">What We Offer</h2>

        <p className="second-section-text text-black font-semibold text-lg text-center mt-5">Discover endless opportunities among the servicess that our team has to offer</p>

        <ServicesCarousel/>
  
      </section>
  
    </>
  
  );

};

export default CarouselGeneralComp;