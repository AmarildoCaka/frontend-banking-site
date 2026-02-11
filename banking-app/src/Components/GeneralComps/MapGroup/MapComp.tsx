import { useEffect } from 'react';

const MapComp = () => {

  useEffect(() => {

    const sections = document.querySelectorAll(".scroll-section");

    const observer = new IntersectionObserver(
    
      (entries) => {

        entries.forEach((entry) => {
        
          if(entry.isIntersecting)
          {
        
            entry.target.classList.add("in-view");
        
          }
        
        });
      
      },
      
      {
        
        threshold: 0.2
      
      }
    
    );

    sections.forEach((section) => {

      observer.observe(section);

    });

    return () => {

      sections.forEach((section) => {

        observer.unobserve(section);

      });

    }
  
  }, []);

  return (
  
    <>

      <div className="scroll-section flex flex-col justify-center place-items-center text-center p-10 pt-34">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52947377.93644701!2d-161.95368458749272!3d35.90655046886533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sShtetet%20e%20Bashkuara%20t%C3%AB%20Amerik%C3%ABs!5e0!3m2!1ssq!2s!4v1720989577217!5m2!1ssq!2s"
        width="950" height="500" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    
    </>

  );
  
}

export default MapComp;