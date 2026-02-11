import { userGrowthSwitchDataType, userGrowthDataInterface, userActivityDataInterface, depositHistoryInterface, withdrawHistoryInterface, dayMonthYearStringInterface, graphDataInterface, Card, alertType, selectedCardType, fieldErrorsInterface, Transaction, loanUnitInterface, activeTabType, firstStepFormFieldErrorsInterface, generalLoanDetailsInterface, opinionMsgListInterface, starRatingListInterface, rateMsgSubmitTimeListInterface, dashboardDataStateType, loanProgressBarObjInterface, secondStepFormFieldErrorsInterface, billCategoriesListInterface } from './functInterfaces';

export type BankState = {

  userGrowthSwitch: userGrowthSwitchDataType;

  userGrowthData: userGrowthDataInterface[];
    
  userActivityData: userActivityDataInterface[];

  amountState: number;

  withdrawState: number;

  balances: Record<'USD' | 'EUR' | 'GBP', number>;

  depositHistoryUnitState: depositHistoryInterface[];

  withdrawHistoryUnitState: withdrawHistoryInterface[];

  timeStatementUpdate: boolean;

  resetToZeroCapturedTime: string | null;

  dayMonthYearData: dayMonthYearStringInterface;

  capturedTimeData: string | null;

  isActiveState: string;

  graphData: graphDataInterface[];

  depostiConfirmationMsg: boolean;

  firstAmountVisibility: boolean,

  secondAmountVisibility: boolean,

  thirdAmountVisibility: boolean,

  firstBalanceActivityState: 'Enabled' | 'Disabled';

  secondBalanceActivityState: 'Enabled' | 'Disabled';

  thirdBalanceActivityState: 'Enabled' | 'Disabled';

  generalAccountState: 'Enabled' | 'Disabled';

  cardslList: Card[];

  services: any[];

  selectedMonth: null;

  selectedYear: number;

  months: string[];

  popUpState: boolean;

  index: number;

  alertVisibility: boolean;

  alertType: '' | alertType;

  alertMessage: string;

  dashboardDataState: dashboardDataStateType;

  setUserGrowthSwitch: (value: string) => void;

  setAmountState: (value: number) => void;

  setWithdrawState: (value: number) => void;

  deposit: (amount: number, currency: 'USD' | 'EUR' | 'GBP') => void;

  setDepositHistoryUnit: (value: depositHistoryInterface[]) => void;

  deleteSingleDepositUnit: (id: string) => void;

  copySingleDepositUnit: (id: string) => void;

  setEmptyDepositHistoryUnit: () => void;

  setWithdrawHistoryUnit: (value: withdrawHistoryInterface[]) => void;

  deleteSingleWithdrawUnit: (id: string) => void;

  copySingleWithdrawUnit: (id: string) => void;

  setEmptyWithdrawHistoryUnit: () => void;
  
  withdraw: (amount: number, currency: 'USD' | 'EUR' | 'GBP') => void;

  timeStatementUpdateFunct: () => void;

  resetBalancesToZero: (currency: 'USD' | 'EUR' | 'GBP') => void;

  resetAmountToZeroTimeCapture: () => void;

  timeCapturingFunct: () => void;

  loadSavedTime: () => void;

  toCardToggleSwitchBtn: () => void;

  toDashboardToggleSwitchBtn: () => void;

  toChartToggleSwitchBtn: () => void;

  toBarChartToggleSwitchBtn: () => void;

  depositConfirmationMsgFunct: () => void;

  setFirstAmountVisibilityFunct: () => void;

  setSecondAmountVisibilityFunct: () => void;

  setThirdAmountVisibilityFunct: () => void;

  firstDepositStateFunct: () => void;

  secondDepositStateFunct: () => void;

  thirdDepositStateFunct: () => void;

  initializeFirstBalanceState: () => void;

  initializeSecondBalanceState: () => void;

  initializeThirdBalanceState: () => void;

  accountFreezingFunct: () => void;

  accountUnfreezingFunct: () => void;

  initializeGeneralAccountState: () => void;

  generalAccountBlockingFunct: () => void;

  cardLinkingSystemFunct: (value: Card[]) => void;

  selectedMonthFunct: (value: any) => void;

  setPopUpState: (value: boolean) => void;

  setIndex: (value: any) => void;

  showPopUpMessage: (message: string, type: 'success' | 'info' | 'error') => void;

  hidePopUpMessage: () => void;

  cancelAlertVisibility: () => void;

  setDataToDashboardFunct: () => void;

  setDataToCardFunct: () => void;

};

type Currency = 'USD' | 'EUR' | 'GBP';

type withdrawCurrency = 'USD' | 'EUR' | 'GBP';

type billCategoriesType = 'Utilities' | 'Water' | 'Internet' | 'Phone' | 'Rent/Mortgage' | 'Insurance' | 'Credit Card' | 'Subscriptions' | 'Vehicle';

export interface useConditionalBankStoreInterface {

  accountBlockingState: boolean;

  confirmDepositState: boolean;

  amountErasingHistoryState: boolean;

  depositHistoryState: boolean;

  withdrawHistoryState: boolean;

  depositGeneralDetailsState: boolean;

  withdrawGeneralDetailsState: boolean;

  modalState: boolean;

  errorMessageState: boolean;

  showCardDetails: boolean;

  transactionsConditionalRender: boolean;

  amount: number;

  withdrawAmount: number;

  currency: Currency;

  withdrawCurrency: withdrawCurrency;

  finalSubmissionState: boolean;

  selectedDepositId: null | number;

  accountPremissionState: 'Freeze' | 'Unfreeze';

  waringPopUpState: 'Enable' | 'Disable',

  cards: Card[];

  cardsHistory: Card[];

  firstName: string,

  lastName: string,

  cardNumber: string,

  expiry: string,

  selectedCard: selectedCardType;

  cardNumbervisibility: boolean;

  transactions: Transaction[];

  firstStepForm: boolean;

  secondStepForm: boolean;

  sender: string;

  senderLastName: string;

  receiver: string;

  receiverLastName: string;

  transactionAmount: number;

  transactionCurrency: string;

  transactionDescription: string;

  fieldErrors: fieldErrorsInterface;

  descriptionInformation: boolean;

  moreActionsState: boolean;

  transactionDetails: boolean;

  loanConditionalRendering: boolean;

  loanUnit: loanUnitInterface[];

  loanForm: string;

  loanAmount: number;

  loanTerm: number;

  loanRestrictionNumber: number;

  loanFirstName: string;

  loanLastName: string;

  jobTitle: string;

  monthlyIncome: number;

  monthlyIncomeCurrency: string;

  loanCurrency: string;

  loanInterestRate: number;

  loanFormError: boolean;

  loanHistory: boolean;

  loanProgressBarObj: loanProgressBarObjInterface;

  showFAQ: boolean;

  activeTab: activeTabType,

  firstLoanForm: boolean;

  secondLoanForm: boolean;

  /* First: */

  firstStepFormFieldErrors: firstStepFormFieldErrorsInterface;

  secondStepFormFieldErrors: secondStepFormFieldErrorsInterface;

  generalLoanDetails: generalLoanDetailsInterface[];

  pieChartBtnState: boolean;

  cardsDisplayState: boolean;

  selectedCardDisplay: Card | null;

  singleCardErasingState: boolean;

  billsInfoConditional: boolean;

  billCategories: billCategoriesType;

  billCategoriesList: billCategoriesListInterface[];

  setAmountErasingHistory: () => void;

  setDepositHistoryFunct: () => void;

  setWithdrawHistoryFunct: () => void;

  setDepositGeneralDetailsState: () => void;

  setWithdrawGeneralDetailsState: () => void;

  setModalState: () => void;

  setErrorMessageState: (value: boolean) => void; 

  setShowCardDetails: (value: boolean) => void;

  setTransactionsConditionalRender: (value: boolean) => void;

  setAmount: (value: number) => void;

  setWithdrawAmount: (value: number) => void;

  setCurrency: (value: Currency) => void;

  setWithdrawCurrency: (value: withdrawCurrency) => void;

  setFinalSubmissionState: () => void;

  setSelectedDepositId: (value: null | number) => void;

  setUnfreezeBtnState: () => void;

  setFreezeBtnState: () => void;

  setWaringPopUpState: () => void;

  setCards: (value: Card[]) => void;

  setCardsHistory: (value: Card[]) => void;

  setFirstName: (value: string) => void;

  setLastName: (value: string) => void;

  setCardNumber: (value: string) => void;

  setExpiry: (value: string) => void;

  setSelectedCard: (functValue: selectedCardType) => void;

  setCardNumberVisibility: () => void;

  setTransactions: (value: Transaction[]) => void;

  cardAvailabilityBtnFunct: () => void;

  setConfirmDepositState: () => void;

  setToTrueAccountBlockingState: () => void;

  setToFalseAccountBlockingState: () => void;

  setFirstStepForm: (value: boolean) => void;

  setSecondStepForm: (value: boolean) => void;

  setSender: (value: string) => void;

  setSenderLastName: (value: string) => void;

  setReceiver: (value: string) => void;

  setReceiverLastName: (value: string) => void;

  setTransactionAmount: (value: number) => void;

  setTransactionCurrency: (value: string) => void;

  setTransactionDescription: (value: string) => void;

  setTrueFieldErrors: () => void;

  setFalseFieldErrors: () => void;

  setDescriptionInformation: (value: boolean) => void;

  setMoreActionsState: (value: boolean) => void;

  setTransactionsDetails: (value: boolean) => void;

  setLoanConditionalRendering: (value: boolean) => void;

  setLoanUnit: (value: loanUnitInterface[]) => void;

  setLoanForm: (value: string) => void;

  setLoanAmount: (value: number) => void;

  setLoanTerm: (value: number) => void;

  setLoanRestrictionNumber: () => void;

  setLoanFirstName: (value: string) => void;

  setLoanLastName: (value: string) => void;

  setJobTitle: (value: string) => void;

  setMonthlyIncome: (value: number) => void;

  setMonthlyIncomeCurrency: (value: string) => void;

  setLoanCurrency: (value: string) => void;

  setLoanFormError: (value: boolean) => void;

  setLoanHistory: (value: boolean) => void;

  setLoanFirstStepToTrue: (value: boolean) => void;

  setLoanSecondStepToTrue: (value: boolean) => void;

  setGeneralLoanProgressBarToFalse: (firstStepValue: boolean, secondStepValue: boolean) => void;

  setShowFAQ: (value: boolean) => void;

  setActiveTab: (value: activeTabType) => void;

  setFirstLoanForm: (value: boolean) => void;

  setSecondLoanForm: (value: boolean) => void;

  setTrueFirstStepFormFieldErrors: () => void;

  setFalseFirstStepFormFieldErrors: () => void;

  setTrueSecondStepFormFieldErrors: () => void;

  setFalseSecondStepFormFieldErrors: () => void;

  setGeneralLoanDetailsFunct: (value: generalLoanDetailsInterface[]) => void;

  setPieChartBtnState: (value: boolean) => void;

  setCardsDisplayState: (value: boolean) => void;

  setSelectedCardDisplay: (value: Card | null) => void;

  setSingleCardErasingState: (value: boolean) => void;

  setBillsInfoConditional: (value: boolean) => void;

}

interface teamInformationListInterface {

  id: number;

  image: string;

  name: string;

  position: string;

}

interface errorsTypeInterface {

  firstName: boolean;

  lastName: boolean;

  email: boolean;

  message: boolean;

}

interface validationObjInterface {

  firstName: string;

  lastName: string;

  email: string;

  message: string;

  rating: number;

}

export interface thirdBankStoreInterface {

  isOpen: boolean;

  firstModalState: boolean;

  secondModalState: boolean;

  thirdModalState: boolean;

  teamInformationList: teamInformationListInterface[];

  errors: errorsTypeInterface;

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  message: string

  rating: number;

  hover: number;

  ratingStarList: number[];

  submitted: boolean;

  opinionMsgList: opinionMsgListInterface[];

  validationObj: validationObjInterface;

  starRatingList: starRatingListInterface[];

  msgEditUnit: boolean;

  msgAlertPopUpUnit: boolean;

  editingId: number | null;

  editText: string;

  isSubmitted: boolean;

  ratingInfoUnit: boolean;

  ratingMessageData: rateMsgSubmitTimeListInterface[];

  generatedIdNum: number;

  msgPagePopUpUnit: boolean;

  theme: string;

  setIsOpen: (value: boolean) => void;

  setFirstModalState: (value: boolean) => void;

  setSecondModalState: (value: boolean) => void;

  setThirdModalState: (value: boolean) => void;

  setErrors: (value: any) => void;

  setSubmitted: (value: boolean) => void;

  setFirstName: (value: string) => void;

  setLastName: (value: string) => void;

  setEmail: (value: string) => void;

  setMessage: (value: string) => void;

  setRating: (value: number) => void;

  setHover: (value: number) => void;

  setOpinionMsgList: (value: opinionMsgListInterface[]) => void;

  setValidationObj: (value: validationObjInterface) => void;

  setStarRatingList: (value: starRatingListInterface[]) => void;

  setMsgEditUnit: (value: boolean) => void;

  setMsgAlertPopUpUnit: (value: boolean) => void;

  setEditingId: (value: number | null) => void;

  setEditText: (value: string) => void;

  setIsSubmitted: (value: boolean) => void;

  setRatingInfoUnit: (value: boolean) => void;
  
  setRatingMessageData: (value: rateMsgSubmitTimeListInterface[]) => void;

  setGeneratedIdNum: (value: number) => void;

  setMsgPagePopUpUnit: (value: boolean) => void;

  setTheme: (value: string) => void;

}