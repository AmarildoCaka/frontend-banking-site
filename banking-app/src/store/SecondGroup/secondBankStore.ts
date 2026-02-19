import { create } from "zustand";

import { useConditionalBankStoreInterface } from "../FirstGroup/storeInterfaces";

import { transactionFunct, loanUnitFunct, generalLoanDetailsFunct, generalCardListFunct, generalCardHistoryFunct } from '../FirstGroup/stateFuncts';

export const useConditionalBankStore = create<useConditionalBankStoreInterface>((set, get) => {
    
  return {
  
    accountBlockingState: false,

    confirmDepositState: false,

    amountErasingHistoryState: false,

    depositHistoryState: false,

    withdrawHistoryState: false,

    depositGeneralDetailsState: false,

    withdrawGeneralDetailsState: false,

    modalState: false,

    depositErrorMessageState: false,

    withdrawErrorMessageState: false,

    showCardDetails: false,

    transactionsConditionalRender: false,

    depositAmount: 0,

    withdrawAmount: 0,

    currency: "USD",

    withdrawCurrency: "USD",

    finalSubmissionState: false,

    selectedDepositId: null,

    accountPremissionState: "Freeze",

    waringPopUpState: "Enable",

    cards: generalCardListFunct(),

    cardsHistory: generalCardHistoryFunct(),

    firstName: "",

    lastName: "",

    cardNumber: "",

    expiry: "",

    selectedCard: null,

    cardNumbervisibility: false,

    transactions: transactionFunct(),

    firstStepForm: true,

    secondStepForm: false,

    senderFirstName: "",

    senderLastName: "",

    receiverFirstName: "",

    receiverLastName: "",

    transactionAmount: 0,

    transactionCurrency: "",

    transactionDescription: "",

    fieldErrors: {
      id: false,

      senderFirstName: false,

      senderLastName: false,

      receiverFirstName: false,

      receiverLastName: false,

      transactionAmount: false,

      transactionCurrency: false,

      date: false,

      transactionDescription: false,
    },

    descriptionInformation: false,

    loanConditionalRendering: false,

    loanUnit: loanUnitFunct(),

    loanForm: "",

    loanAmount: 0,

    loanTerm: 0,

    loanRestrictionNumber: 0,

    loanFirstName: "",

    loanLastName: "",

    jobTitle: "",

    monthlyIncome: 0,

    monthlyIncomeCurrency: "",

    loanCurrency: "",

    loanInterestRate: 6.9,

    loanFormError: false,

    loanHistory: false,

    loanProgressBarObj: {
      loanFirstStep: false,

      loanSecondStep: false,
    },

    showFAQ: false,

    activeTab: "overview",

    firstLoanForm: true,

    secondLoanForm: false,

    firstStepFormFieldErrors: {
      loanFirstName: false,

      loanLastName: false,

      jobTitle: false,

      monthlyIncome: false,

      monthlyIncomeCurrency: false,
    },

    secondStepFormFieldErrors: {
      loanPurpose: false,

      loanPaymentTerm: false,

      loanRangeAmount: false,

      loanCurrency: false,
    },

    generalLoanDetails: generalLoanDetailsFunct(),

    pieChartBtnState: false,

    cardsDisplayState: false,

    selectedCardDisplay: null,

    singleCardErasingState: false,

    billsInfoConditional: false,

    billCategories: "Utilities",

    billCategoriesList: [
      {
        id: 1,

        billType: "Utilities",

        billHeader: "Utilities Bill",

        billDescription: "",
      },
      {
        id: 2,

        billType: "Water",

        billHeader: "Water Bill",

        billDescription: "",
      },
      {
        id: 3,

        billType: "Internet",

        billHeader: "Internet Bill",

        billDescription: "",
      },
      {
        id: 4,

        billType: "Phone",

        billHeader: "Phone Bill",

        billDescription: "",
      },
      {
        id: 5,

        billType: "Rent/Mortgage",

        billHeader: "Rent/Mortgage Bill",

        billDescription: "",
      },
      {
        id: 6,

        billType: "Insurance",

        billHeader: "Insurance Bill",

        billDescription: "",
      },
      {
        id: 7,

        billType: "Credit Card",

        billHeader: "Credit Card Bill",

        billDescription: "",
      },
      {
        id: 8,

        billType: "Subscriptions",

        billHeader: "Subscriptions Bill",

        billDescription: "",
      },
      {
        id: 9,

        billType: "Vehicle",

        billHeader: "Vehicle Bill",

        billDescription: "",
      },
    ],

    activeRoute: "",

    setAmountErasingHistory: () => {
      const outterData = get().amountErasingHistoryState;

      if (outterData === false) {
        set({
          amountErasingHistoryState: true,
        });
      } else {
        set({
          amountErasingHistoryState: false,
        });
      }
    },

    setDepositHistoryFunct: () => {
      const outterData = get().depositHistoryState;

      if (outterData === false) {
        set({
          depositHistoryState: true,
        });
      } else {
        set({
          depositHistoryState: false,
        });
      }
    },

    setWithdrawHistoryFunct: () => {
      const outterData = get().withdrawHistoryState;

      if (outterData === false) {
        set({
          withdrawHistoryState: true,
        });
      } else {
        set({
          withdrawHistoryState: false,
        });
      }
    },

    setDepositGeneralDetailsState: () => {
      const outterData = get().depositGeneralDetailsState;

      if (outterData === false) {
        set({
          depositGeneralDetailsState: true,
        });
      } else {
        set({
          depositGeneralDetailsState: false,
        });
      }
    },

    setWithdrawGeneralDetailsState: () => {
      const outterData = get().withdrawGeneralDetailsState;

      if (outterData === false) {
        set({
          withdrawGeneralDetailsState: true,
        });
      } else {
        set({
          withdrawGeneralDetailsState: false,
        });
      }
    },

    setModalState: () => {
      const outterData = get().modalState;

      if (outterData === false) {
        set({
          modalState: true,
        });
      } else {
        set({
          modalState: false,
        });
      }
    },

    setDepositErrorMessageState: (value) => {
      set({
        depositErrorMessageState: value,
      });
    },

    setWithdrawErrorMessageState: (value) => {
      set({
        withdrawErrorMessageState: value,
      });
    },

    setShowCardDetails: (value) => {
      set({
        showCardDetails: value,
      });
    },

    setTransactionsConditionalRender: (value) => {
      set({
        transactionsConditionalRender: value,
      });
    },

    setDepositAmount: (value) => {
      set({
        depositAmount: value,
      });
    },

    setWithdrawAmount: (value) => {
      set({
        withdrawAmount: value,
      });
    },

    setCurrency: (value) => {
      set({
        currency: value,
      });
    },

    setWithdrawCurrency: (value) => {
      set({
        withdrawCurrency: value,
      });
    },

    setFinalSubmissionState: () => {
      set({
        finalSubmissionState: true,
      });
    },

    setSelectedDepositId: (value) => {
      set({
        selectedDepositId: value,
      });
    },

    setUnfreezeBtnState: () => {
      set({
        accountPremissionState: "Unfreeze",
      });
    },

    setFreezeBtnState: () => {
      set({
        accountPremissionState: "Freeze",
      });
    },

    setWaringPopUpState: () => {
      const outterData = get().waringPopUpState;

      if (outterData === "Enable") {
        set({
          waringPopUpState: "Disable",
        });
      } else {
        set({
          waringPopUpState: "Enable",
        });
      }
    },

    setCards: (value) => {
      set({
        cards: value,
      });

      localStorage.setItem("cardLinkingSystemStorage", JSON.stringify(value));
    },

    setCardsHistory: (value) => {
      set({
        cardsHistory: value,
      });

      localStorage.setItem("cardHistoryLinkingSystem", JSON.stringify(value));
    },

    setFirstName: (value) => {
      set({
        firstName: value,
      });
    },

    setLastName: (value) => {
      set({
        lastName: value,
      });
    },

    setCardNumber: (value) => {
      set({
        cardNumber: value,
      });
    },

    setExpiry: (value) => {
      set({
        expiry: value,
      });
    },

    setSelectedCard: (functValue) => {
      set({
        selectedCard: functValue,
      });
    },

    setCardNumberVisibility: () => {
      const outterData = get().cardNumbervisibility;

      const reverseData = !outterData;

      set({
        cardNumbervisibility: reverseData,
      });
    },

    setTransactions: (value) => {
      set({
        transactions: value,
      });

      localStorage.setItem("transaction", JSON.stringify(value));
    },

    cardAvailabilityBtnFunct: () => {
      const outterStateData = get().waringPopUpState;

      const outterFunctData = get().setWaringPopUpState;

      const warningPopUpLogic =
        outterStateData === "Enable"
          ? outterFunctData()
          : outterStateData === "Disable"
            ? outterFunctData()
            : outterFunctData();

      return warningPopUpLogic;
    },

    setConfirmDepositState: () => {
      const outterData = get().confirmDepositState;

      if (outterData === false) {
        set({
          confirmDepositState: true,
        });
      } else {
        set({
          confirmDepositState: false,
        });
      }
    },

    setToTrueAccountBlockingState: () => {
      set({
        accountBlockingState: true,
      });
    },

    setToFalseAccountBlockingState: () => {
      set({
        accountBlockingState: false,
      });
    },

    setFirstStepForm: (value) => {
      set({
        firstStepForm: value,
      });
    },

    setSecondStepForm: (value) => {
      set({
        secondStepForm: value,
      });
    },

    setSenderFirstName: (value) => {
      set({
        senderFirstName: value,
      });
    },

    setSenderLastName: (value) => {
      set({
        senderLastName: value,
      });
    },

    setReceiverFirstName: (value) => {
      set({
        receiverFirstName: value,
      });
    },

    setReceiverLastName: (value) => {
      set({
        receiverLastName: value,
      });
    },

    setTransactionAmount: (value) => {
      set({
        transactionAmount: value,
      });
    },

    setTransactionCurrency: (value) => {
      set({
        transactionCurrency: value,
      });
    },

    setTransactionDescription: (value) => {
      set({
        transactionDescription: value,
      });
    },

    setTrueFieldErrors: () => {
      const trueFieldErrors = {
        id: true,

        senderFirstName: true,

        senderLastName: true,

        receiverFirstName: true,

        receiverLastName: true,

        transactionAmount: true,

        transactionCurrency: true,

        date: true,

        transactionDescription: true,
      };

      set({
        fieldErrors: trueFieldErrors,
      });
    },

    setFalseFieldErrors: () => {
      const falseFieldErrors = {
        id: false,

        senderFirstName: false,

        senderLastName: false,

        receiverFirstName: false,

        receiverLastName: false,

        transactionAmount: false,

        transactionCurrency: false,

        date: false,

        transactionDescription: false,
      };

      set({
        fieldErrors: falseFieldErrors,
      });
    },

    setDescriptionInformation: (value) => {
      set({
        descriptionInformation: value,
      });
    },

    setLoanConditionalRendering: (value) => {
      set({
        loanConditionalRendering: value,
      });
    },

    setLoanUnit: (value) => {
      set({
        loanUnit: value,
      });

      localStorage.setItem("loan", JSON.stringify(value));
    },

    setLoanForm: (value) => {
      set({
        loanForm: value,
      });
    },

    setLoanAmount: (value) => {
      set({
        loanAmount: value,
      });
    },

    setLoanTerm: (value) => {
      set({
        loanTerm: value,
      });
    },

    setLoanRestrictionNumber: () => {
      const outterData = get().loanRestrictionNumber;

      const mainValue = outterData + 1;

      set({
        loanRestrictionNumber: mainValue,
      });
    },

    setLoanFirstName: (value) => {
      set({
        loanFirstName: value,
      });
    },

    setLoanLastName: (value) => {
      set({
        loanLastName: value,
      });
    },

    setJobTitle: (value) => {
      set({
        jobTitle: value,
      });
    },

    setMonthlyIncome: (value) => {
      set({
        monthlyIncome: value,
      });
    },

    setMonthlyIncomeCurrency: (value) => {
      set({
        monthlyIncomeCurrency: value,
      });
    },

    setLoanCurrency: (value) => {
      set({
        loanCurrency: value,
      });
    },

    setLoanFormError: (value) => {
      set({
        loanFormError: value,
      });
    },

    setLoanHistory: (value) => {
      set({
        loanHistory: value,
      });
    },

    setLoanFirstStepToTrue: (value) => {
      set((data) => ({
        loanProgressBarObj: {
          ...data.loanProgressBarObj,
          loanFirstStep: value,
        },
      }));
    },

    setLoanSecondStepToTrue: (value) => {
      set((data) => ({
        loanProgressBarObj: {
          ...data.loanProgressBarObj,
          loanSecondStep: value,
        },
      }));
    },

    setGeneralLoanProgressBarToFalse: (firstStepValue, secondStepValue) => {
      set((data) => ({
        loanProgressBarObj: {
          ...data.loanProgressBarObj,
          loanFirstStep: firstStepValue,
          loanSecondStep: secondStepValue,
        },
      }));
    },

    setShowFAQ: (value) => {
      set({
        showFAQ: value,
      });
    },

    setActiveTab: (value) => {
      set({
        activeTab: value,
      });
    },

    setFirstLoanForm: (value) => {
      set({
        firstLoanForm: value,
      });
    },

    setSecondLoanForm: (value) => {
      set({
        secondLoanForm: value,
      });
    },

    setTrueFirstStepFormFieldErrors: () => {
      const innerDataObj = {
        loanFirstName: true,

        loanLastName: true,

        jobTitle: true,

        monthlyIncome: true,

        monthlyIncomeCurrency: true,
      };

      set({
        firstStepFormFieldErrors: innerDataObj,
      });
    },

    setFalseFirstStepFormFieldErrors: () => {
      const innerDataObj = {
        loanFirstName: false,

        loanLastName: false,

        jobTitle: false,

        monthlyIncome: false,

        monthlyIncomeCurrency: false,
      };

      set({
        firstStepFormFieldErrors: innerDataObj,
      });
    },

    setTrueSecondStepFormFieldErrors: () => {
      const innerDataObj = {
        loanPurpose: true,

        loanPaymentTerm: true,

        loanRangeAmount: true,

        loanCurrency: true,
      };

      set({
        secondStepFormFieldErrors: innerDataObj,
      });
    },

    setFalseSecondStepFormFieldErrors: () => {
      const innerDataObj = {
        loanPurpose: false,

        loanPaymentTerm: false,

        loanRangeAmount: false,

        loanCurrency: false,
      };

      set({
        secondStepFormFieldErrors: innerDataObj,
      });
    },

    setGeneralLoanDetailsFunct: (value) => {
      set({
        generalLoanDetails: value,
      });

      localStorage.setItem(
        "generalLoanDetailsStorage",
        JSON.stringify(value),
      );
    },

    setPieChartBtnState: (value) => {
      set({
        pieChartBtnState: value,
      });
    },

    setCardsDisplayState: (value) => {
      set({
        cardsDisplayState: value,
      });
    },

    setSelectedCardDisplay: (value) => {
      set({
        selectedCardDisplay: value,
      });
    },

    setSingleCardErasingState: (value) => {
      set({
        singleCardErasingState: value,
      });
    },

    setBillsInfoConditional: (value) => {
      set({
        billsInfoConditional: value,
      });
    },

    setActiveRoute: (route: string) => {
      set({
        activeRoute: route,
      });
    },
  
  };

  },

);