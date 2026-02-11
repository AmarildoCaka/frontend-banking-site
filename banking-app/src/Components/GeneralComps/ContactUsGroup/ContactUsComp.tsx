import FormComp from "./FormGroup/FormComp";
import DetailsComp from "./DetailsComp";

const ContactUsPageComp = () => {

  return (
  
    <>
    
      <section className="contact-us-main-wrapper min-h-screen p-6 pt-30">

        <div className="container mx-auto">
        
          <h2 className="contact-us-header-text text-4xl text-center font-bold transform transition duration-300 hover:scale-103 mb-13">Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
            <FormComp/>

            <DetailsComp/>
        
          </div>
        
        </div>
      
      </section>

    </>

  );

};

export default ContactUsPageComp;