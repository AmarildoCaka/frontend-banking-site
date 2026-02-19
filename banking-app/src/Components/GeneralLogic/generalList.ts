import { useBankStore } from "../../store/FirstGroup/useBankStore";

const balances = useBankStore.getState().balances;

const resetBalancesToZero = useBankStore.getState().resetBalancesToZero;

const showPopUpMsgFunct = useBankStore.getState().showPopUpMessage;

export const eraseUsdAmount = () => {
  if (balances.USD !== 0) {
    resetBalancesToZero("USD");

    showPopUpMsgFunct("Amount erased successfully", "success");
  } else if (balances.USD === 0) {
    showPopUpMsgFunct("Nothing to erase, your amount in USD is 0", "error");
  } else {
    return null;
  }
};

export const eraseEuroAmount = () => {
  if (balances.EUR !== 0) {
    resetBalancesToZero("EUR");

    showPopUpMsgFunct("Amount erased successfully", "success");
  } else if (balances.EUR === 0) {
    showPopUpMsgFunct("Nothing to erase, your amount in EURO is 0", "error");
  } else {
    return null;
  }
};

export const eraseGbpAmount = () => {
  if (balances.GBP !== 0) {
    resetBalancesToZero("GBP");

    showPopUpMsgFunct("Amount erased successfully!", "success");
  } else if (balances.GBP === 0) {
    showPopUpMsgFunct("Nothing to erase, your amount in GBP is 0", "error");
  } else {
    return null;
  }
};
