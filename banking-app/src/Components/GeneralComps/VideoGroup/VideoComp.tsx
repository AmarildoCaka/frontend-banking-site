import { useEffect } from "react";

const VideoComp = () => {

  useEffect(() => {

    const sections = document.querySelectorAll(".scroll-section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {
      
          if(entry.isIntersecting)
          {
      
            entry.target.classList.add("in-view");
      
          }
      
        });
      
      },
    
      { threshold: 0.2 }
    
    );

    sections.forEach((section) => observer.observe(section));

    return () => {

      sections.forEach((section) => observer.unobserve(section));

    };

  }, []);

  return (

    <>
    
      <section className="video-main-wrapper w-full py-16 px-6 transition-all duration-500">
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
          <div className="md:w-1/2 space-y-5 text-center md:text-left">
        
            <h2 className="video-header-text text-4xl font-extrabold leading-tight">A Smarter Way to Bank</h2>
        
            <p className="video-description-text text-lg leading-relaxed">Manage your money, track spending, and stay secure — all in one simple, powerful platform.</p>
        
            <p className="video-description-text text-base">
              
              Watch the video to see how {" "}
              
              <a href="/" className="video-link-text cursor-pointer text-indigo-500 font-semibold transfoem transition duratio-300 hover:scale-105 hover:text-indigo-600">World Bank</a>

              {" "} keeps you in control of your finances.
              
            </p>
        
          </div>
        
          <div className="md:w-1/2 aspect-video rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
        
            <iframe className="w-full h-full rounded-2xl" src="https://www.youtube.com/embed/aJJoV0xSDqA?si=OjcqPwWP1_VUMWaL" title="MyBanking App Demo Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
          </div>
        
        </div>
      
      </section>
    
    </>

  );

};

export default VideoComp;