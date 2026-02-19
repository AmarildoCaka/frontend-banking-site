import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import FormComp from "./FormGroup/FormComp";
import DetailsComp from "./DetailsComp";

const ContactUsPageComp = () => {

  const { theme } = useThirdBankStore();

  return (
  
    <>
    
      <section className="contact-us-main-wrapper min-h-screen p-5 pt-25">

        <div className="container mx-auto">
        
          <div className="flex flex-col p-1 mb-10">

            <h1 className="contact-us-header-text text-3xl font-bold">Contact Us</h1>

            <p className={`font-semibold mt-1 ${(theme === 'light' || theme === 'system')? 'text-black':(theme === 'dark')? 'text-white': 'text-black'}`}>Leave your genuene opinion for our service about your experience here</p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-12">
        
            <FormComp/>

            <DetailsComp/>
        
          </div>
        
        </div>
      
      </section>

    </>

  );

};

export default ContactUsPageComp;