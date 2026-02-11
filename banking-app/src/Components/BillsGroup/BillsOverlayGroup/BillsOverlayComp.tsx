import { useEffect } from "react";

interface billsOverlayCompInterface {

  isOpen: boolean;

  children: React.ReactNode;

};

const BillsOverlayComp: React.FC<billsOverlayCompInterface> = ({ isOpen, children }) => {

  useEffect(() => {

    if(isOpen)
    {
      
      document.body.style.overflow = 'hidden';
    
    }
    
    else
    {

      document.body.style.overflow = 'unset';
    
    }
  
    return () => {

      document.body.style.overflow = 'unset';
    
    };
  
  }, [isOpen]);

  if(!isOpen)
  {

    return null;

  }

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">

      <div className="bg-white rounded-md shadow-2xl max-w-md w-full mx-4 h-64 overflow-y-auto">
        
        <div className="p-6 pt-2">{children}</div>
    
      </div>
    
    </div>

  );

};

export default BillsOverlayComp;