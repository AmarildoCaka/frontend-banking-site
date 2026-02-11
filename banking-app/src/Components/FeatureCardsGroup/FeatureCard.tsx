interface featureCardinterface {

  title: string;
  
  description: string;
  
  icon: JSX.Element;

}

const FeatureCard: React.FC<featureCardinterface> = ({ title, description, icon }) => {

  return (
  
    <>

      <div className="card-wrapper flex flex-col justify-center place-items-center text-center font-semibold shadow-lg border rounded-2xl transform transition duration-300 hover:scale-105 hover:shadow-xl p-8">
        
        <div className="card-icon text-5xl font-bold mb-4">{icon}</div>
        
        <h3 className="more-info-card-text text-xl font-semibold mb-2">{title}</h3>
        
        <p className="more-info-card-text text-md">{description}</p>
      
      </div>
    
    </>

  );

}

export default FeatureCard;