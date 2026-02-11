export type alertType = 'success' | 'info' | 'error';

export type userGrowthSwitchDataType = 'LineChart' | 'PieChart'; 

export interface userGrowthDataInterface {

  index: number;

  month: string;

  users: number;

}

export interface userActivityDataInterface {

  name: string;

  value: number;

}

export interface depositHistoryInterface {

  id: string;

  amount: number;

  currency: string;

  timeDisplayState: string | null;

  interest: number;

}

export interface withdrawHistoryInterface {

  id: string;

  withdrawAmount: number;

  withdrawCurrency: string;

  timeDisplayState: string | null;

}

export interface dayMonthYearStringInterface {

  date: string;

  day: string;

  month: string;

  year: string;

}

export interface graphDataInterface {

  month: string,
      
  deposits: number,
  
  withdraws: number,

}

export interface Card {

  id: number;

  firstNameData: string;

  lastNameData: string;
  
  last4: string;
  
  brand: string;
  
  cardNumberData: string;

  expiryData: string;
  
  locked: boolean;

}

export interface mainFunctionalityArrInterface {

  id: number;

  labelKey: string;

  currencySymbolKey: string;

  amountKey: number;

  eraseFunctKey: () => void;

  visibilityStateKey: boolean;

  amountVisibilityKey: () => void;

  balanceActivityData: string;

  balanceActivityFunctKey: () => void;

}

export interface depositHistoryInterface {

  id: string;

  amount: number;

  currency: string;

  timeDisplayState: string | null;

  interest: number;

}

export type selectedCardType = null | Card;

export interface Transaction {

  id: string;

  sender: string;

  senderLastName: string;

  receiver: string;

  receiverLastName: string;

  transactionAmount: number;

  transactionCurrency: string;

  date: string;

  transactionDescription?: string;

}

export interface fieldErrorsInterface {

  id: boolean;

  sender: boolean;

  senderLastName: boolean;

  receiver: boolean;

  receiverLastName: boolean;

  transactionAmount: boolean;

  transactionCurrency: boolean;

  date: boolean;

  transactionDescription?: boolean;

}

export interface loanUnitInterface {

  id: string;

  loanFirstName: string;

  loanLastName: string;

  jobTitle: string;

  monthlyIncome: number;

  monthlyIncomeCurrency: string;

  loanCurrency: string;

  loanForm: string;

  loanAmount: number;

  loanTerm: number;

  secondMonthlyPayment: string;

}

export type activeTabType = "overview" | "piechart" | "apply" | "makeTransaction" | "transactionsHistory" | "createCard" | "cards" | "cardCreationHistory" | "billsOverview" | "billsPayment" | "billCategories";

export interface loanProgressBarObjInterface {

  loanFirstStep: boolean;

  loanSecondStep: boolean;

}

/* First: */

export interface firstStepFormFieldErrorsInterface {

  loanFirstName: boolean;

  loanLastName: boolean;

  jobTitle: boolean;

  monthlyIncome: boolean;

  monthlyIncomeCurrency: boolean;

}

export interface secondStepFormFieldErrorsInterface {

  loanPurpose: boolean;

  loanPaymentTerm: boolean;

  loanRangeAmount: boolean;

  loanCurrency: boolean;

}

export interface generalLoanDetailsInterface {

  id: string;

  loanForm: string;

  loanAmount: number;

  interest: string;

}

export interface opinionMsgListInterface {

  id: number;

  firstName: string;

  lastName: string;

  email: string;

  message: string;

  rating: number;

}

export interface rateMsgSubmitTimeListInterface {

  id: number;

  submitTime: string;

}

export interface starRatingListInterface {

  id: string;

  numberOfStars: number;

}

export type dashboardDataStateType = 'dashboard' | 'card';

export interface billCategoriesListInterface {

  id: number;

  billType: string;

  billHeader: string;

  billDescription: string;

};