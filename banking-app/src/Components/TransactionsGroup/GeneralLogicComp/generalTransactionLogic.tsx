import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import { Transaction } from "../../../store/functInterfaces";

// First Step Form Functions:

export const useFirstStepFormBlockFunctHook = () => {
  const showPopUpMessageData = useBankStore((state) => state.showPopUpMessage);

  const senderData = useConditionalBankStore((state) => state.senderFirstName);

  const senderLastNameData = useConditionalBankStore(
    (state) => state.senderLastName,
  );

  const receiverData = useConditionalBankStore(
    (state) => state.receiverFirstName,
  );

  const receiverLastNameData = useConditionalBankStore(
    (state) => state.receiverLastName,
  );

  const setTrueFieldErrorsData = useConditionalBankStore(
    (state) => state.setTrueFieldErrors,
  );

  const setFalseFieldErrorsData = useConditionalBankStore(
    (state) => state.setFalseFieldErrors,
  );

  const setFirstStepFormData = useConditionalBankStore(
    (state) => state.setFirstStepForm,
  );

  const setSecondStepFormData = useConditionalBankStore(
    (state) => state.setSecondStepForm,
  );

  const firstStepFormBlockFunct = () => {
    if (
      senderData === "" ||
      senderLastNameData === "" ||
      receiverData === "" ||
      receiverLastNameData === ""
    ) {
      setTrueFieldErrorsData();

      setFirstStepFormData(true);

      setSecondStepFormData(false);

      showPopUpMessageData("Empty fields fill all the fields first", "error");
    } else if (
      senderData !== "" &&
      senderLastNameData !== "" &&
      receiverData !== "" &&
      receiverLastNameData !== ""
    ) {
      setFalseFieldErrorsData();

      setFirstStepFormData(false);

      setSecondStepFormData(true);
    } else {
      return null;
    }
  };

  return { firstStepFormBlockFunct };
};

export const useReceiverSurnameValidationFunctHook = () => {
  const filedErrorsData = useConditionalBankStore((state) => state.fieldErrors);

  const receiverLastNameData = useConditionalBankStore(
    (state) => state.receiverLastName,
  );

  if (filedErrorsData.receiverLastName) {
    return (
      <p className="text-red-500 font-semibold text-md text-left pt-2">
        Enter receiver surname
      </p>
    );
  } else {
    switch (true) {
      case receiverLastNameData.length === 20:
        return (
          <p className="text-red-500 font-semibold text-md text-left pt-2">
            Sorry, cannot have more than 20 characters
          </p>
        );

      case receiverLastNameData.length < 20 ||
        receiverLastNameData.length === 0:
        return (
          <p className="text-green-500 text-sm font-semibold text-left pt-2">
            {receiverLastNameData !== "" ? "" : "Character limit is 20"}
          </p>
        );

      default:
        return null;
    }
  }
};

export const useReceiverValidationFunctHook = () => {
  const receiverData = useConditionalBankStore(
    (state) => state.receiverFirstName,
  );

  const filedErrorsData = useConditionalBankStore((state) => state.fieldErrors);

  if (filedErrorsData.receiverFirstName) {
    return (
      <p className="text-red-500 font-semibold text-md text-left pt-2">
        Enter receiver name
      </p>
    );
  } else {
    switch (true) {
      case receiverData.length === 20:
        return (
          <p className="text-red-500 font-semibold text-md text-left pt-2">
            Sorry, cannot have more than 20 characters
          </p>
        );

      case receiverData.length < 20 || receiverData.length === 0:
        return (
          <p className="text-green-500 text-sm font-semibold text-left pt-2">
            {receiverData !== "" ? "" : "Character limit is 20"}
          </p>
        );

      default:
        return null;
    }
  }
};

export const useSenderValidationFunctHook = () => {
  const senderData = useConditionalBankStore((state) => state.senderFirstName);

  const filedErrorsData = useConditionalBankStore((state) => state.fieldErrors);

  if (filedErrorsData.senderFirstName) {
    return (
      <p className="text-red-500 font-semibold text-md text-left pt-2">
        Enter sender name
      </p>
    );
  } else {
    switch (true) {
      case senderData.length === 20:
        return (
          <p className="text-red-500 font-semibold text-md text-left pt-2">
            Sorry, cannot have more than 20 characters
          </p>
        );

      case senderData.length < 20 || senderData.length === 0:
        return (
          <p className="text-green-500 text-sm font-semibold text-left pt-2">
            {senderData !== "" ? "" : "Character limit is 20"}
          </p>
        );

      default:
        return null;
    }
  }
};

export const useSenderSurnameValidationFunctHook = () => {
  const senderLastNameData = useConditionalBankStore(
    (state) => state.senderLastName,
  );

  const filedErrorsData = useConditionalBankStore((state) => state.fieldErrors);

  if (filedErrorsData.senderLastName) {
    return (
      <p className="text-red-500 font-semibold text-md text-left pt-2">
        Enter sender surname
      </p>
    );
  } else {
    switch (true) {
      case senderLastNameData.length === 20:
        return (
          <p className="text-red-500 font-semibold text-left text-md pt-2">
            Sorry, cannot have more than 20 characters
          </p>
        );

      case senderLastNameData.length < 20 || senderLastNameData.length === 0:
        return (
          <p className="text-green-500 text-sm font-semibold text-left pt-2">
            {senderLastNameData !== "" ? "" : "Character limit is 20"}
          </p>
        );

      default:
        return null;
    }
  }
};

// Second Step Form Functions:

export const useDescriptionValidationFunctHook = () => {
  const transactionsData = useConditionalBankStore(
    (state) => state.transactions,
  );

  const fieldErrorsData = useConditionalBankStore((state) => state.fieldErrors);

  const transactionDescriptionData = useConditionalBankStore(
    (state) => state.transactionDescription,
  );

  if (fieldErrorsData.transactionDescription) {
    return (
      <p className="text-red-500 font-semibold text-md text-left pt-2">
        Write a description (Optional)
      </p>
    );
  } else {
    switch (true) {
      case transactionsData.length === 100:
        return (
          <p className="text-red-500 font-semibold text-md text-left pt-2">
            Sorry, cannot have more than 100 characters
          </p>
        );

      case transactionDescriptionData.length < 100 ||
        transactionDescriptionData.length === 0:
        return (
          <p className="text-green-500 text-sm font-semibold text-left pt-2">
            {transactionDescriptionData !== ""
              ? ""
              : "Maximum character limit is 100"}
          </p>
        );

      default:
        return null;
    }
  }
};

export const useEmptyDescriptionFieldFunctHook = () => {
  const showPopupMessageData = useBankStore((state) => state.showPopUpMessage);

  const transactionDescriptionData = useConditionalBankStore(
    (state) => state.transactionDescription,
  );

  const setTransactionDescriptionData = useConditionalBankStore(
    (state) => state.setTransactionDescription,
  );

  const emptyDescriptionFieldFunct = () => {
    if (transactionDescriptionData !== "") {
      setTransactionDescriptionData("");

      showPopupMessageData("Description field emptied successfully", "success");
    } else {
      showPopupMessageData(
        "Description field empty, write a descripton first",
        "error",
      );
    }
  };

  return { emptyDescriptionFieldFunct };
};

export const useCopyMechanismFunctHook = () => {
  const showPopupMessageData = useBankStore((state) => state.showPopUpMessage);

  const transactionDescriptionData = useConditionalBankStore(
    (state) => state.transactionDescription,
  );

  const copyMechanismFunct = () => {
    if (transactionDescriptionData !== "") {
      navigator.clipboard.writeText(transactionDescriptionData);

      showPopupMessageData("Description copied", "info");
    } else if (transactionDescriptionData === "") {
      showPopupMessageData(
        "Empty description form, please fill the form first",
        "error",
      );

      return null;
    } else {
      return null;
    }
  };

  return { copyMechanismFunct };
};

export const useDescriptionTextLengthCheckHook = () => {
  const showPopupMessageData = useBankStore((state) => state.showPopUpMessage);

  const transactionDescriptionData = useConditionalBankStore(
    (state) => state.transactionDescription,
  );

  if (transactionDescriptionData.length === 100) {
    showPopupMessageData(
      "Cannot have more than 100 characters in your description",
      "info",
    );
  }
};

export const useCurrencyValidationFunctHook = () => {
  const transactionCurrencyData = useConditionalBankStore(
    (state) => state.transactionCurrency,
  );

  const filedErrorsData = useConditionalBankStore((state) => state.fieldErrors);

  if (filedErrorsData.transactionCurrency) {
    return (
      <p className="text-red-500 font-semibold text-md text-left pt-2">
        Specify a currency
      </p>
    );
  } else {
    switch (true) {
      case transactionCurrencyData === "":
        return (
          <p className="text-green-500 text-sm font-semibold text-left pt-2">
            Your currency
          </p>
        );

      case transactionCurrencyData !== "":
        return null;

      default:
        return null;
    }
  }
};

export const useAmountValidationFunctHook = () => {
  const filedErrorsData = useConditionalBankStore((state) => state.fieldErrors);

  const transactionAmountData = useConditionalBankStore(
    (state) => state.transactionAmount,
  );

  if (filedErrorsData.transactionAmount) {
    return (
      <p className="text-red-500 font-semibold text-md text-left pt-2">
        Specify an amount
      </p>
    );
  } else {
    switch (true) {
      case transactionAmountData === 10000:
        return (
          <p className="text-red-500 font-semibold text-md text-left pt-2">
            Sorry, cannot send an amount bigger than 10.000
          </p>
        );

      case transactionAmountData < 10000 || transactionAmountData === 0:
        return (
          <p className="text-green-500 text-sm font-semibold text-left pt-2">
            {transactionAmountData !== 0 ? "" : "Your amount"}
          </p>
        );

      default:
        return null;
    }
  }
};

// Handle Transactions Function:

export const useHandleTransactionsHook = () => {
  const showPopUpMessageData = useBankStore((state) => state.showPopUpMessage);

  const transactions = useConditionalBankStore((state) => state.transactions);

  const setTransactions = useConditionalBankStore(
    (state) => state.setTransactions,
  );

  const sender = useConditionalBankStore((state) => state.senderFirstName);

  const setSender = useConditionalBankStore(
    (state) => state.setSenderFirstName,
  );

  const senderLastName = useConditionalBankStore(
    (state) => state.senderLastName,
  );

  const setSenderLastName = useConditionalBankStore(
    (state) => state.setSenderLastName,
  );

  const receiver = useConditionalBankStore((state) => state.receiverFirstName);

  const setReceiver = useConditionalBankStore(
    (state) => state.setReceiverFirstName,
  );

  const receiverLastName = useConditionalBankStore(
    (state) => state.receiverLastName,
  );

  const setReceiverLastName = useConditionalBankStore(
    (state) => state.setReceiverLastName,
  );

  const transactionAmount = useConditionalBankStore(
    (state) => state.transactionAmount,
  );

  const setTransactionAmount = useConditionalBankStore(
    (state) => state.setTransactionAmount,
  );

  const transactionCurrency = useConditionalBankStore(
    (state) => state.transactionCurrency,
  );

  const setTransactionCurrency = useConditionalBankStore(
    (state) => state.setTransactionCurrency,
  );

  const transactionDescription = useConditionalBankStore(
    (state) => state.transactionDescription,
  );

  const setTransactionDescription = useConditionalBankStore(
    (state) => state.setTransactionDescription,
  );

  const setTrueFieldErrorsData = useConditionalBankStore(
    (state) => state.setTrueFieldErrors,
  );

  const setFirstStepForm = useConditionalBankStore(
    (state) => state.setFirstStepForm,
  );

  const setSecondStepForm = useConditionalBankStore(
    (state) => state.setSecondStepForm,
  );

  const setFalseFieldErrorsData = useConditionalBankStore(
    (state) => state.setFalseFieldErrors,
  );

  const finalFormSubmissionFunct = () => {
    if (
      sender === "" ||
      senderLastName === "" ||
      receiver === "" ||
      receiverLastName == "" ||
      transactionAmount <= 0 ||
      transactionCurrency === ""
    ) {
      setTrueFieldErrorsData();

      showPopUpMessageData("Empty fields, fill the fields first", "error");

      return;
    } else if (
      sender !== "" &&
      senderLastName !== "" &&
      receiver !== "" &&
      receiverLastName !== "" &&
      transactionAmount > 0 &&
      transactionCurrency !== ""
    ) {
      setFalseFieldErrorsData();

      const newTransaction: Transaction = {
        id: crypto.randomUUID(),

        sender,

        senderLastName,

        receiver,

        receiverLastName,

        transactionAmount,

        transactionCurrency,

        date: new Date().toISOString(),

        transactionDescription,
      };

      setTransactions([...transactions, newTransaction]);

      showPopUpMessageData("Transaction finished successfully!", "success");

      setSender("");

      setSenderLastName("");

      setReceiver("");

      setReceiverLastName("");

      setTransactionAmount(0);

      setTransactionCurrency("");

      setTransactionDescription("");

      setSecondStepForm(false);

      setFirstStepForm(true);
    } else {
      return null;
    }
  };

  return { finalFormSubmissionFunct };
};
