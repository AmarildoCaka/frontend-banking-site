import { useState, useEffect, useRef } from "react";

import { getRate } from "../../services/exchangeServices";

interface ratesInterface {

  currency_pair: string;

  exchange_rate: string | number;

};

const ExchangeRateTickerComp = () => {

  const [rates, setRates] = useState<ratesInterface[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  const contentRef = useRef<HTMLDivElement>(null);

  const isDraggingRef = useRef(false);

  const animationRef = useRef<number>();

  useEffect(() => {

    const pairs = ["CNY_GBP","CHF_NZD","AUD_KRW","PLN_DKK","TRY_HKD", "CHF_AUD","AUD_DKK","PLN_HKD","TRY_AUD","DKK_NZD"];

    const start = async () => {

      try
      {

        const results = await Promise.all(pairs.map(getRate));
      
        setRates(results);
      
      }
      
      catch(err)
      {
      
        console.error(err);
      
        setError("Failed to load exchange rates");
      
        setLoading(false);
      
        return;
      
      }

      setLoading(false);

      requestAnimationFrame(() => {

        const container = scrollRef.current;
        
        const content = contentRef.current;
        
        if(!container || !content)
        {

          return;

        }

        const singleWidth = content.scrollWidth / 2;

        const speed = 0.5;

        const scrollTicker = () => {
        
          if(!isDraggingRef.current)
          {
        
            container.scrollLeft += speed;
        
            if(container.scrollLeft >= singleWidth)
            {
        
              container.scrollLeft = 0;
        
            }
        
          }
        
          animationRef.current = requestAnimationFrame(scrollTicker);
        
        };

        animationRef.current = requestAnimationFrame(scrollTicker);

      });

    };

    start();

    return () => {
      
      if(animationRef.current)
      {

        cancelAnimationFrame(animationRef.current);

      }
    
    };
  
  }, []);

  if(loading)
  {

    return <p className="text-center p-4">Loading exchange rates...</p>;

  }

  if(error)
  {

    return <p className="text-center p-4 text-red-500">{error}</p>;

  }

  return (

    <>
    
      <section className="fixed top-20 left-0 w-full z-50 bg-gradient-to-r from-slate-800 to-slate-900 border-b border-slate-700 backdrop-blur-sm">

        <div className="w-full max-w-screen-2xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2">

          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none" onMouseDown={() => (isDraggingRef.current = true)} onMouseUp={() => (isDraggingRef.current = false)} onMouseLeave={() => (isDraggingRef.current = false)} onTouchStart={() => (isDraggingRef.current = true)} onTouchEnd={() => (isDraggingRef.current = false)}>

            <div ref={contentRef} className="flex gap-6 sm:gap-8 whitespace-nowrap">

              {[...rates, ...rates].map((rate, i) => (
              
                <>
                
                  <div key={i} className="flex gap-2 min-w-max">

                    <span className="text-slate-400 text-[10px] sm:text-xs font-medium">{rate.currency_pair}</span>

                    <span className="text-white text-xs sm:text-sm md:text-base font-semibold">{rate.exchange_rate}</span>
                  
                  </div>
                
                </>

              ))}

            </div>

          </div>

        </div>

      </section>
    
    </>

  );

};

export default ExchangeRateTickerComp;