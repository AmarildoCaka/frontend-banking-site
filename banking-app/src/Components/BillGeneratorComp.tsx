import { useEffect, useState } from 'react';

import { FaBolt, FaTint, FaWifi, FaPhone, FaHome } from 'react-icons/fa';

type BillType = 'Electricity' | 'Water' | 'Internet' | 'Phone' | 'Rent';

interface Bill {

  id: string;
  
  type: BillType;
  
  amount: number;
  
  dueDate: Date;
  
  createdAt: Date;

};

const BILL_TYPES: BillType[] = ['Electricity', 'Water', 'Internet', 'Phone', 'Rent'];

const BILL_ICONS: Record<BillType, React.ElementType> = {

  Electricity: FaBolt,

  Water: FaTint,

  Internet: FaWifi,

  Phone: FaPhone,

  Rent: FaHome,

};

const BillGenerator = () => {

  const [bills, setBills] = useState<Bill[]>([]);

  const generateFiveBills = (): Bill[] => {

    const now = new Date();

    return BILL_TYPES.map((type) => (
      
      {

        id: crypto.randomUUID(),
        
        type,
        
        amount: Number((Math.random() * 150 + 20).toFixed(2)),
        
        dueDate: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10),
        
        createdAt: now

      }
    
    ));

  };

  const getMsUntilEndOfMonth = (): number => {

    const now = new Date();

    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

    return endOfMonth.getTime() - now.getTime();
  
  };

  useEffect(() => {

    setBills(generateFiveBills());
    
    const fiveMinInterval = setInterval(() => {
    
      setBills((prev) => [...generateFiveBills(), ...prev]);
    
    }, 5 * 60 * 1000);

    const monthlyTimeout = setTimeout(() => {
    
      setBills((prev) => [...generateFiveBills(), ...prev]);

      setInterval(() => {
    
        setBills((prev) => [...generateFiveBills(), ...prev]);
    
      }, 30 * 24 * 60 * 60 * 1000);
    
    }, getMsUntilEndOfMonth());

    return () => {
    
      clearInterval(fiveMinInterval);
    
      clearTimeout(monthlyTimeout);
    
    };
  
  }, []);

  return (

    <>

      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-[#2a2a2a] rounded-2xl shadow-lg">
    
        <h2 className="text-2xl font-bold mb-6">Generated Bills</h2>

        {bills.length === 0 ? (

          <>

            <p className="text-gray-500">No bills generated yet.</p>
          
          </>

        ):(

          <>
          
            <ul className="space-y-4">

              {bills.map((bill) => {
              
                const Icon = BILL_ICONS[bill.type];

                return (
                
                  <>
                  
                    <li key={bill.id} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-[#1f1f1f]">

                      <div className="flex items-center gap-4">
                      
                        <Icon className="text-xl text-indigo-500"/>
                      
                        <div>
                      
                          <p className="font-semibold">{bill.type}</p>
                      
                          <p className="text-sm text-gray-500">Due: {bill.dueDate.toLocaleDateString()}</p>
                      
                        </div>
                      
                      </div>

                      <span className="font-bold">€{bill.amount.toFixed(2)}</span>
                    
                    </li>
                  
                  </>

                );

              })}
          
            </ul>
          
          </>
        
        )}

      </div>

    </>

  );

};

export default BillGenerator;