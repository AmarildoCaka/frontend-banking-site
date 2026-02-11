import { LucideProps } from 'lucide-react';

interface innerDataInterface {

  id: number;
  
  billType: string;

  billHeader: string;

  billDescription: string;

};

export interface innerBillCategoriesInterface {

  name: string;
  
  icon: React.FC<LucideProps>;
  
  color: string;
  
  innerData: innerDataInterface;

};

interface billCategoriesObjInterface {

  utilities: innerBillCategoriesInterface;

  water: innerBillCategoriesInterface;

  internet: innerBillCategoriesInterface;

  phone: innerBillCategoriesInterface;

  rent: innerBillCategoriesInterface;

  insurance: innerBillCategoriesInterface;

  credit: innerBillCategoriesInterface;

  subscription: innerBillCategoriesInterface;

  vehicle: innerBillCategoriesInterface;

}

interface innerBillCategoriesElementInterface {

  name: string;
      
  icon: React.FC<LucideProps>;
  
  color: string;

}

interface billCategoriesElementsObj {

  utilities: innerBillCategoriesElementInterface;

  water: innerBillCategoriesElementInterface;

  internet: innerBillCategoriesElementInterface;

  phone: innerBillCategoriesElementInterface;

  rent: innerBillCategoriesElementInterface;

  insurance: innerBillCategoriesElementInterface;

  credit: innerBillCategoriesElementInterface;

  subscription: innerBillCategoriesElementInterface;

  vehicle: innerBillCategoriesElementInterface;

}

export type BillStatus = 'paid' | 'pending' | 'overdue';

export interface billInterface {

  id: number;

  name: string;

  category: string;

  amount: number;

  dueDate: string;

  status: BillStatus;

  account: string;

  paidDate?: string;

  generatedAt: string;

};

export type BillCategory = 'utilities' | 'vehicle' | 'internet' | 'phone' | 'rent';

// Fourth Bank Store Interface:

export interface fourthBankStoreInterface {

  billCategoriesObj: billCategoriesObjInterface;

  billCategoriesElementsObj: billCategoriesElementsObj;

  generalBillsElement: billInterface[];

  selectedBills: any[];

  paidBills: any;

  unpaidBillsInfoState: boolean

  setGeneralBillsElement: (newBills: billInterface[]) => void;

  setDeleteBillByChoice: (choiceBill: number[]) => void;

  setDeleteAllBills: (value: billInterface[]) => void;

  setSelectedBills: (data: any[]) => void;

  setPaidBills: (value: (prev: any) => void) => void;

  setUnpaidBillsInfoState: (value: boolean) => void;

  setDeleteOneBill: (billId: number) => billInterface[];

};