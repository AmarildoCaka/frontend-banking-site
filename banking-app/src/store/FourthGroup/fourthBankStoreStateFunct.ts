import { billInterface } from "./fourthBankStoreInterface";

export const generalBillsElementStorageFunct = (): billInterface[] => {

  try
  {
  
    const savedData = localStorage.getItem('generalBillsElementStorage');
  
    if(savedData)
    {
    
      return JSON.parse(savedData) as billInterface[];
  
    }
  
  }
  
  catch(error)
  {
  
    console.error(`Failed to load the unpaid bills from localStorage: ${error}`);
  
  }

  return [];

};