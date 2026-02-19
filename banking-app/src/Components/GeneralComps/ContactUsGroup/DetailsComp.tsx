import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const DetailsComp = () => {

  return (
  
    <>
    
      <div className="space-y-8">
                        
        <div className="scroll-section flex items-center gap-4">
      
          <FaPhone className="contact-us-icon"/>

          <span className="contact-us-text font-semibold text-lg transform transition duration-300 hover:scale-103 cursor-pointer">+123 456 7890</span>
      
        </div>
      
        <div className="scroll-section flex items-center gap-4">
      
          <FaEnvelope className="contact-us-icon"/>

          <span className="contact-us-text font-semibold text-lg transform transition duration-300 hover:scale-103 cursor-pointer">support@worldbank.com</span>
      
        </div>
      
        <div className="scroll-section flex items-center gap-4">
      
          <FaMapMarkerAlt className="contact-us-icon"/>

          <span className="contact-us-text font-semibold text-lg transform transition duration-300 hover:scale-103 cursor-pointer">123 World Bank Street, City, Country</span>
      
        </div>

        <div>

          <hr className="contact-us-division w-[500px] border"/>

        </div>

        <div className="contact-us-map-borders w-full h-[333px] border border-md rounded-xl mt-8 p-3">

          <h3 className="contact-us-text text-xl font-bold transform transition duration-300 hover:scale-103 mb-5">Find Us with map</h3>

          <iframe className="scroll-section w-full h-64 rounded-xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.312568902176!2d-74.0060151848346!3d40.71277687933083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259afaf2db1f1%3A0x7988fdc72749f489!2sNew%20York%20City%2C%20NY!5e0!3m2!1sen!2sus!4v1636485283484!5m2!1sen!2sus" allowFullScreen=""
          loading="lazy"></iframe>
        
        </div>
      
      </div>
    
    </>
  
  );

}

export default DetailsComp;