export const getRate = async (pair: string) => {
  
  const res = await fetch(`https://api.api-ninjas.com/v1/exchangerate?pair=${pair}`,
    
    {
      
      headers: {
      
        "X-Api-Key": import.meta.env.VITE_EXCHANGE_RATES_API_KEY
    
      }
    
    }
  
  );

  if(!res.ok)
  {

    throw new Error("Rate fetch failed");

  }

  return res.json();

};