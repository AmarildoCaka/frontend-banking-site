import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useConditionalBankStore } from "../../../store/SecondGroup/secondBankStore";

import {
  loanUnitInterface,
  generalLoanDetailsInterface,
} from "../../../store/functInterfaces";

export const useLoanFormTextLimitHook = () => {
  const loanForm = useConditionalBankStore((state) => state.loanForm);

  const setLoanForm = useConditionalBankStore((state) => state.setLoanForm);

  const showPopUpMessage = useBankStore((state) => state.showPopUpMessage);

  const copyDescriptionFunct = async () => {
    switch (true) {
      case loanForm === "":
        showPopUpMessage(
          "No description, please write a description first",
          "error",
        );

        break;

      case loanForm !== "":
        await navigator.clipboard.writeText(loanForm);

        showPopUpMessage("Description copied successfully", "success");

        break;

      default:
        return null;
    }
  };

  const emptyDescriptionFunct = () => {
    switch (true) {
      case loanForm === "":
        showPopUpMessage("Description field empty, nothing to erase", "error");

        break;

      case loanForm !== "":
        setLoanForm("");

        showPopUpMessage("Description field emptied successfully", "success");

        break;

      default:
        return null;
    }
  };

  return { copyDescriptionFunct, emptyDescriptionFunct };
};

export const useSubmitEstimatedLoanHook = () => {
  const showPopUpMessage = useBankStore((state) => state.showPopUpMessage);

  const loanFirstName = useConditionalBankStore((state) => state.loanFirstName);

  const setLoanFirstName = useConditionalBankStore(
    (state) => state.setLoanFirstName,
  );

  const loanLastName = useConditionalBankStore((state) => state.loanLastName);

  const setLoanLastName = useConditionalBankStore(
    (state) => state.setLoanLastName,
  );

  const jobTitle = useConditionalBankStore((state) => state.jobTitle);

  const setJobTitle = useConditionalBankStore((state) => state.setJobTitle);

  const monthlyIncome = useConditionalBankStore((state) => state.monthlyIncome);

  const setMonthlyIncome = useConditionalBankStore(
    (state) => state.setMonthlyIncome,
  );

  const monthlyIncomeCurrency = useConditionalBankStore(
    (state) => state.monthlyIncomeCurrency,
  );

  const setMonthlyIncomeCurrency = useConditionalBankStore(
    (state) => state.setMonthlyIncomeCurrency,
  );

  const loanCurrency = useConditionalBankStore((state) => state.loanCurrency);

  const setLoanCurrency = useConditionalBankStore(
    (state) => state.setLoanCurrency,
  );

  const loanForm = useConditionalBankStore((state) => state.loanForm);

  const setLoanRestrictionNumber = useConditionalBankStore(
    (state) => state.setLoanRestrictionNumber,
  );

  const loanAmount = useConditionalBankStore((state) => state.loanAmount);

  const loanTerm = useConditionalBankStore((state) => state.loanTerm);

  const setLoanForm = useConditionalBankStore((state) => state.setLoanForm);

  const setLoanAmount = useConditionalBankStore((state) => state.setLoanAmount);

  const setLoanTerm = useConditionalBankStore((state) => state.setLoanTerm);

  const setLoanFormError = useConditionalBankStore(
    (state) => state.setLoanFormError,
  );

  const setTrueSecondStepFormFieldErrors = useConditionalBankStore(
    (state) => state.setTrueSecondStepFormFieldErrors,
  );

  const loanUnit = useConditionalBankStore((state) => state.loanUnit);

  const setLoanUnit = useConditionalBankStore((state) => state.setLoanUnit);

  const setLoanSecondStepToTrue = useConditionalBankStore(
    (state) => state.setLoanSecondStepToTrue,
  );

  const setFirstLoanForm = useConditionalBankStore(
    (state) => state.setFirstLoanForm,
  );

  const setSecondLoanForm = useConditionalBankStore(
    (state) => state.setSecondLoanForm,
  );

  const setGeneralLoanProgressBarToFalse = useConditionalBankStore(
    (state) => state.setGeneralLoanProgressBarToFalse,
  );

  const generalLoanDetails = useConditionalBankStore(
    (state) => state.generalLoanDetails,
  );

  const setGeneralLoanDetailsFunct = useConditionalBankStore(
    (state) => state.setGeneralLoanDetailsFunct,
  );

  const monthlyPayment = Number(
    (loanAmount / Number(loanTerm) + loanAmount * 0.05).toFixed(2),
  );

  const secondMonthlyPayment = (
    loanAmount / Number(loanTerm) +
    loanAmount * 0.05
  ).toFixed(2);

  const interest = (
    monthlyPayment * Number(loanTerm) -
    loanAmount
  ).toLocaleString();

  const operationalFunctTest = () => {
    const newObj: generalLoanDetailsInterface = {
      id: crypto.randomUUID(),

      loanForm,

      loanAmount,

      interest,
    };

    setGeneralLoanDetailsFunct([...generalLoanDetails, newObj]);

    setLoanAmount(0);

    setLoanTerm(0);
  };

  const submitEstimatedLoan = () => {
    if (
      loanForm.trim() === "" ||
      loanTerm === 0 ||
      loanAmount === 0 ||
      loanCurrency === ""
    ) {
      setTrueSecondStepFormFieldErrors();

      showPopUpMessage(
        "Cannot set a loan, please finish all the above steps first",
        "error",
      );

      return;
    }

    try {
      setLoanFormError(false);

      showPopUpMessage("Second step completed successfully", "success");

      setTimeout(() => {
        showPopUpMessage("Loan set successfully", "success");
      }, 500);

      setLoanRestrictionNumber();

      const newLoanUnitObj: loanUnitInterface = {
        id: crypto.randomUUID(),

        loanFirstName,

        loanLastName,

        jobTitle,

        monthlyIncome,

        monthlyIncomeCurrency,

        loanCurrency,

        loanForm,

        loanAmount,

        loanTerm,

        secondMonthlyPayment,
      };

      setLoanUnit([...loanUnit, newLoanUnitObj]);

      setLoanSecondStepToTrue(true);

      setLoanForm("");

      setLoanFirstName("");

      setLoanLastName("");

      setJobTitle("");

      setMonthlyIncome(0);

      setMonthlyIncomeCurrency("");

      setLoanCurrency("");

      setLoanAmount(0);

      setLoanTerm(0);

      operationalFunctTest();

      setFirstLoanForm(true);

      setSecondLoanForm(false);

      setTimeout(() => {
        setGeneralLoanProgressBarToFalse(false, false);
      }, 1000);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return { submitEstimatedLoan };
};
