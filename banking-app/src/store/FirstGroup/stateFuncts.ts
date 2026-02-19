import {
  depositHistoryInterface,
  withdrawHistoryInterface,
  dayMonthYearStringInterface,
  graphDataInterface,
  Card,
  loanUnitInterface,
  generalLoanDetailsInterface,
  opinionMsgListInterface,
  starRatingListInterface,
  rateMsgSubmitTimeListInterface,
  dashboardDataStateType,
} from "../functInterfaces";

import { Transaction } from "../functInterfaces";

export const transactionFunct = (): Transaction[] => {
  try {
    const transactionStorage = localStorage.getItem("transaction");

    if (transactionStorage) {
      return JSON.parse(transactionStorage);
    }
  } catch (error) {
    console.error(
      `Failed to load transactions data from localStorage: ${error}`,
    );
  }

  return [];
};

export const loanUnitFunct = (): loanUnitInterface[] => {
  try {
    const loanStorage = localStorage.getItem("loan");

    if (loanStorage) {
      return JSON.parse(loanStorage);
    }
  } catch (error) {
    console.error(
      `Failed to load transactions data from localStorage: ${error}`,
    );
  }

  return [];
};

export const amountStateFunction = (): number => {
  try {
    const amountStatement = localStorage.getItem("setAmountState");

    if (amountStatement) {
      return JSON.parse(amountStatement);
    }
  } catch (error) {
    console.error(`Failed to load balances from localStorage: ${error}`);
  }

  return 0;
};

export const withdrawStateFunction = (): number => {
  try {
    const withdrawStatement = localStorage.getItem("setWithdrawState");

    if (withdrawStatement) {
      return JSON.parse(withdrawStatement);
    }
  } catch (error) {
    console.error(`Failed to load balances from localStorage: ${error}`);
  }

  return 0;
};

export const depositHistoryUnitFunct = (): depositHistoryInterface[] => {
  try {
    const depositHistoryUnit = localStorage.getItem("depositHistoryUnit");

    if (depositHistoryUnit) {
      return JSON.parse(depositHistoryUnit);
    }
  } catch (error) {
    console.error(`Failed to load balances from localStorage: ${error}`);
  }

  return [];
};

export const withdrawHistoryUnitFunct = (): withdrawHistoryInterface[] => {
  try {
    const withdrawHistoryUnit = localStorage.getItem("withdrawHistoryUnit");

    if (withdrawHistoryUnit) {
      return JSON.parse(withdrawHistoryUnit);
    }
  } catch (error) {
    console.error(`Failed to load balances from localStorage: ${error}`);
  }

  return [];
};

export const loadBalancesFromLocalStorage = (): Record<
  "USD" | "EUR" | "GBP",
  number
> => {
  try {
    const stored = localStorage.getItem("bank_balances");

    const timeStatement = localStorage.getItem("timeStatementUpdate");

    if (stored) {
      return JSON.parse(stored);
    }

    if (timeStatement) {
      return JSON.parse(timeStatement);
    }
  } catch (error) {
    console.error(`Failed to load balances from localStorage: ${error}`);
  }

  return {
    USD: 0,

    EUR: 0,

    GBP: 0,
  };
};

export const timeStatementFunction = (): boolean => {
  try {
    const timeStatement = localStorage.getItem("timeStatementUpdate");

    if (timeStatement) {
      return JSON.parse(timeStatement);
    }
  } catch (error) {
    console.error(`Failed to load balances from localStorage: ${error}`);
  }

  return false;
};

export const resetToZeroCapturedTimeDataFunct = (): string | null => {
  try {
    const savedTime = localStorage.getItem("amountErase");

    if (savedTime) {
      return savedTime;
    }
  } catch (error) {
    console.error(
      `Failed to load the reset to zero initiation time from localStorage: ${error}`,
    );
  }

  return null;
};

export const dayMonthYearDataFunct = (): dayMonthYearStringInterface => {
  try {
    const savedTime = localStorage.getItem("dayMonthYearEraseData");

    if (savedTime) {
      return JSON.parse(savedTime);
    }
  } catch (error) {
    console.error(
      `Failed to load the reset to zero initiation time from localStorage: ${error}`,
    );
  }

  return {
    date: "",

    day: "",

    month: "",

    year: "",
  };
};

export const capturedTimeFunct = (): string | null => {
  try {
    const savedTime = localStorage.getItem("capturedTime");

    if (savedTime) {
      return savedTime;
    }
  } catch (error) {
    console.error(`Failed to load captured time from localStorage: ${error}`);
  }

  return null;
};

export const isActiveStateFunct = (): string => {
  try {
    const savedState = localStorage.getItem("toggleSwitchState");

    if (savedState) {
      return savedState;
    }
  } catch (error) {
    console.error(`Failed to load captured time from localStorage: ${error}`);
  }

  return "card";
};

export const graphDataFunct = (): graphDataInterface[] => {
  try {
    const graphDataState = localStorage.getItem("transferedGraphData");

    if (graphDataState) {
      return JSON.parse(graphDataState);
    }
  } catch (error) {
    console.error(
      `Failed to load captured graph data from localStorage: ${error}`,
    );
  }

  return [];
};

export const depostitMsgFunct = (): boolean => {
  try {
    const storedMessageData = localStorage.getItem("storedMessageData");

    if (storedMessageData) {
      return JSON.parse(storedMessageData);
    }
  } catch (error) {
    console.error(
      `Failed to load captured message data from localStorage: ${error}`,
    );
  }

  return false;
};

export const firstAmountVisibilityStorageFunct = (): boolean => {
  try {
    const storedAmountVisibility = localStorage.getItem(
      "firstStoredAmountVisibility",
    );

    if (storedAmountVisibility) {
      return JSON.parse(storedAmountVisibility);
    }
  } catch (error) {
    console.error(
      `Failed to load amount visibility data from localStorage: ${error}`,
    );
  }

  return false;
};

export const secondAmountVisibilityStorageFunct = (): boolean => {
  try {
    const storedAmountVisibility = localStorage.getItem(
      "secondStoredAmountVisibility",
    );

    if (storedAmountVisibility) {
      return JSON.parse(storedAmountVisibility);
    }
  } catch (error) {
    console.error(
      `Failed to load second amount visibility data from localStorage: ${error}`,
    );
  }

  return false;
};

export const thirdAmountVisibilityStorageFunct = (): boolean => {
  try {
    const storedAmountVisibility = localStorage.getItem(
      "thirdStoredAmountVisibility",
    );

    if (storedAmountVisibility) {
      return JSON.parse(storedAmountVisibility);
    }
  } catch (error) {
    console.error(
      `Failed to load third amount visibility data from localStorage: ${error}`,
    );
  }

  return false;
};

export const generalAccountStateStoreFunct = (): "Enabled" | "Disabled" => {
  try {
    const accountStorage = localStorage.getItem("generalAccountStateStorage");

    if (accountStorage) {
      return JSON.parse(accountStorage);
    }
  } catch (error) {
    console.error(
      `Failed to load general account state data from localStorage: ${error}`,
    );
  }

  return "Enabled";
};

export const generalCardListFunct = (): Card[] => {
  try {
    const cardListStorage = localStorage.getItem("cardLinkingSystemStorage");

    if (cardListStorage) {
      return JSON.parse(cardListStorage);
    }
  } catch (error) {
    console.error(`Failed to load card list data from localStorage: ${error}`);
  }

  return [];
};

export const generalCardHistoryFunct = (): Card[] => {
  try {
    const cardHistoryListStorage = localStorage.getItem(
      "cardHistoryLinkingSystem",
    );

    if (cardHistoryListStorage) {
      return JSON.parse(cardHistoryListStorage);
    }
  } catch (error) {
    console.error(
      `Failed to load card history data from localStorage: ${error}`,
    );
  }

  return [];
};

export const generalLoanDetailsFunct = (): generalLoanDetailsInterface[] => {
  try {
    const generalLoanDetailsStorage = localStorage.getItem(
      "generalLoanDetailsStorage",
    );

    if (generalLoanDetailsStorage) {
      return JSON.parse(generalLoanDetailsStorage);
    }
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const opinionMsgListFunct = (): opinionMsgListInterface[] => {
  try {
    const clientOpinionMessages = localStorage.getItem("opinionMessages");

    if (clientOpinionMessages) {
      return JSON.parse(clientOpinionMessages);
    }
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const ratingMessageTimeFunct = (): rateMsgSubmitTimeListInterface[] => {
  try {
    const rateMsgSubmitTimeStorage = localStorage.getItem("rateMsgSubmitTime");

    if (rateMsgSubmitTimeStorage) {
      return JSON.parse(rateMsgSubmitTimeStorage);
    }
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const starRatingListFunct = (): starRatingListInterface[] => {
  try {
    const userStarRating = localStorage.getItem("userStarRating");

    if (userStarRating) {
      return JSON.parse(userStarRating);
    }
  } catch (error) {
    console.error(error);
  }

  return [];
};

export const generatedIdFunct = (): number => {
  try {
    const generatedIdData = localStorage.getItem("generatedId");

    if (generatedIdData) {
      return JSON.parse(generatedIdData);
    }
  } catch (error) {
    console.error(error);
  }

  return 0;
};

export const themeFunct = (): string => {
  try {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme) {
        return JSON.parse(storedTheme);
      }
    }
  } catch (error) {
    console.error("Error reading theme from localStorage:", error);
  }

  return "light";
};

export const dashboardModeFunct = (): dashboardDataStateType => {
  try {
    const savedState = localStorage.getItem("dashboardMode");

    if (savedState) {
      return savedState;
    }
  } catch (error) {
    console.error(`Failed to load captured mode from localStorage: ${error}`);
  }

  return "dashboard";
};
