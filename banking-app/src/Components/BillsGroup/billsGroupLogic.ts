import { CheckCircle, Clock, AlertCircle, CircleQuestionMark } from 'lucide-react';

import { useBankStore } from '../../store/useBankStore';

import { useFourthBankStore } from '../../store/FourthGroup/fourthBankStore';

import { billInterface } from '../../store/FourthGroup/fourthBankStoreInterface';

// Bills Custom Hook:

export const useBillsLogicCustomHook = () => {

  // Zustand Store Resources:

  const showPopUpMessage = useBankStore((state) => state.showPopUpMessage);

  const selectedBills = useFourthBankStore((state) => state.selectedBills);

  const setSelectedBills = useFourthBankStore((state) => state.setSelectedBills);

  const billCategoriesObj = useFourthBankStore((state) => state.billCategoriesObj);

  const generalBillsElement = useFourthBankStore((state) => state.generalBillsElement);

  const setGeneralBillsElement = useFourthBankStore((state) => state.setGeneralBillsElement);

  const setPaidBills = useFourthBankStore((state) => state.setPaidBills);

  const setDeleteAllBills = useFourthBankStore((state) => state.setDeleteAllBills);


  const setDeleteOneBill = useFourthBankStore((state) => state.setDeleteOneBill);

  // Custom Hook Functions:

  const categoryStats = Object.entries(billCategoriesObj).map(([key, cat]) => (
  
    {
  
      ...cat,
  
      key,
  
      count: generalBillsElement.filter((b) => b.category === key).length,
  
      total: generalBillsElement.filter((b) => b.category === key).reduce((sum, b) => sum + b.amount, 0)
  
    }
  
  ));

  const getStatusBadge = (status: string) => {
    
    if(status === 'paid')
    {
      
      return {
      
        text: 'Paid',
      
        className: 'flex flex-row justify-evenly items-center text-center gap-x-2 bg-green-100 text-green-700 border border-green-700 px-2 py-1 rounded-full text-xs font-semibold p-1',

        icon: CheckCircle
      
      };
    
    }
    
    else if(status === 'pending')
    {
    
      return {
    
        text: 'Pending',
    
        className: 'flex flex-row justify-evenly items-center text-center gap-x-2 bg-yellow-100 text-yellow-700 border border-yellow-700 px-2 py-1 rounded-full text-xs font-semibold p-1',

        icon: Clock
    
      };
    
    }
    
    else if(status === 'overdue')
    {
    
      return {
    
        text: 'Overdue',
    
        className: 'flex flex-row justify-evenly items-center text-center gap-x-2 bg-red-100 text-red-700 border border-red-700 px-2 py-1 rounded-full text-xs font-semibold p-1',

        icon: AlertCircle
    
      };
    
    }

    else
    {
    
      return {
    
        text: 'Unknown',
    
        className: 'flex flex-row justify-evenly items-center text-center gap-x-2 bg-gray-100 text-gray-700 border border-gray-700 px-2 py-1 rounded-full text-xs font-semibold p-1',

        icon: CircleQuestionMark
    
      };
   
    }
  
  };

  // Check bills one at a time:

  const singleBillCheckFunct = (billId: number) => {

    setSelectedBills((prev) => (prev.includes(billId))? prev.filter((id) => id !== billId): [...prev, billId]);

  };

  // Check bills all at once:

  const billCheckingFunct = (btnAction: 'check' | 'uncheck') => {

    if(btnAction === 'check')
    {

      if(generalBillsElement.length === 1 || generalBillsElement.length > 1)
      {

        setSelectedBills(generalBillsElement.map((bill) => bill.id));

        showPopUpMessage('Checked all bills', 'info');

      }

      else if(generalBillsElement.length === 0)
      {

        showPopUpMessage('Unpaid bills list empty, nothing to check', 'error');

      }

      else
      {

        showPopUpMessage('Checked all bills', 'info');

      }

    }

    if(btnAction === 'uncheck')
    {

      if(generalBillsElement.length === 1 || generalBillsElement.length > 1)
      {

        setSelectedBills([]);

        showPopUpMessage('Unchecked all bills', 'info');

      }

      else if(generalBillsElement.length === 0)
      {

        showPopUpMessage('Unchecked all bills', 'error');

      }

      else
      {

        showPopUpMessage('Unchecked all bills', 'info');

      }

    }

  };

  // Bill Paying Function:

  const handlePaySelected = (listData: billInterface[]) => {

    if(listData.length === 0)
    {

      return;

    }

    // Pay all bills (or selected ones)
    
    const billsToPay = (selectedBills.length > 0)? selectedBills: listData;

    // Add to paid bills
    
    setPaidBills((prev) => [...prev, ...billsToPay]);

    // Remove bills from main list

    if(selectedBills.length === listData.length)
    {

      // Delete all

      setDeleteAllBills([]);

      localStorage.removeItem("generalBillsElementStorage");

    }

    billsToPay.forEach((bill) => {
          
      setDeleteOneBill(bill.id);
  
    });

    // Clear selected bills array
    
    setSelectedBills([]);

    // Show success popup
    
    const numOfPayedBillsCountData = (billsToPay.length > 1)? "bills": "bill";
    
    const totalAmount = billsToPay.reduce((sum, bill) => sum + bill.amount, 0);

    showPopUpMessage(`Successfully paid ${billsToPay.length} ${numOfPayedBillsCountData} totaling $${totalAmount.toFixed(2)}`, "success");
  
  };





  // Bill generating function test:

  const randomAmount = (min: number, max: number) => Number((Math.random() * (max - min) + min).toFixed(2));

  const randomFutureDate = (daysAhead = 10) => {

    const d = new Date();
    
    d.setDate(d.getDate() + daysAhead);
    
    return d.toISOString().split('T')[0];
  
  };

  const BILL_TEMPLATES = [

    { name: 'Electricity Bill', category: 'utilities', accountPrefix: 'UTIL' },

    { name: 'Water Bill', category: 'utilities', accountPrefix: 'WTR' },

    { name: 'Internet Subscription', category: 'internet', accountPrefix: 'NET' },

    { name: 'Phone Bill', category: 'phone', accountPrefix: 'PHN' },

    { name: 'Car Payment', category: 'vehicle', accountPrefix: 'VEH' },

    { name: 'Rent Payment', category: 'rent', accountPrefix: 'RNT' }
  
  ] as const;

  const generateBills = (): billInterface[] => {
      
    const generationTime = new Date().toISOString();

    return BILL_TEMPLATES.slice(0, 5).map((template, index) => {

      const isPaid = Math.random() > 0.6;

      return {

        id: Date.now() + index,

        name: template.name,

        category: template.category,

        amount: randomAmount(50, 500),

        dueDate: randomFutureDate(10),

        status: (isPaid)? "paid": "pending",

        account: `${template.accountPrefix}-${Math.floor(100000 + Math.random() * 900000)}`,

        paidDate: (isPaid)? randomFutureDate(-2): undefined,

        generatedAt: generationTime

      };

    });

  };

  const getMsUntilEndOfMonth = () => {

    const now = new Date();
    
    const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

    return end.getTime() - now.getTime();
  
  };

  const startBillsScheduler = () => {

    const fiveMinInterval = setInterval(() => {
    
      setGeneralBillsElement(generateBills());
    
    }, 5 * 60 * 1000);

    const monthTimeout = setTimeout(() => {
    
      setGeneralBillsElement(generateBills());
    
    }, getMsUntilEndOfMonth());

    return () => {
    
      clearInterval(fiveMinInterval);
    
      clearTimeout(monthTimeout);
    
    };
  
  };

  // Custom Hook Function Returning:

  return { categoryStats, getStatusBadge, billCheckingFunct, handlePaySelected, singleBillCheckFunct, generateBills, startBillsScheduler };

};