import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

import {
  opinionMsgListInterface,
  starRatingListInterface,
  rateMsgSubmitTimeListInterface,
} from "../../../store/functInterfaces";

export const useGeneralLogicHook = () => {
  const showPopUpMessage = useBankStore((state) => state.showPopUpMessage);

  const validationObj = useThirdBankStore((state) => state.validationObj);

  const setErrors = useThirdBankStore((state) => state.setErrors);

  const setSubmitted = useThirdBankStore((state) => state.setSubmitted);

  const setOpinionMsgList = useThirdBankStore(
    (state) => state.setOpinionMsgList,
  );

  const firstName = useThirdBankStore((state) => state.firstName);

  const lastName = useThirdBankStore((state) => state.lastName);

  const email = useThirdBankStore((state) => state.email);

  const message = useThirdBankStore((state) => state.message);

  const setFirstName = useThirdBankStore((state) => state.setFirstName);

  const setLastName = useThirdBankStore((state) => state.setLastName);

  const setEmail = useThirdBankStore((state) => state.setEmail);

  const setMessage = useThirdBankStore((state) => state.setMessage);

  const opinionMsgList = useThirdBankStore((state) => state.opinionMsgList);

  const rating = useThirdBankStore((state) => state.rating);

  const starRatingList = useThirdBankStore((state) => state.starRatingList);

  const setStarRatingList = useThirdBankStore(
    (state) => state.setStarRatingList,
  );

  const setRating = useThirdBankStore((state) => state.setRating);

  const setIsSubmitted = useThirdBankStore((state) => state.setIsSubmitted);

  const ratingMessageData = useThirdBankStore(
    (state) => state.ratingMessageData,
  );

  const setRatingMessageData = useThirdBankStore(
    (state) => state.setRatingMessageData,
  );

  const generatedIdNum = useThirdBankStore((state) => state.generatedIdNum);

  const setGeneratedIdNum = useThirdBankStore(
    (state) => state.setGeneratedIdNum,
  );

  const firstNameFormValidationFunct = () => {
    if (firstName !== "") {
      if (firstName.length === 20) {
        validationObj.firstName = "Cannot have more than 20 characters";
      } else {
        validationObj.firstName = "Maximum number of characters is 20";
      }
    } else if (firstName === "") {
      validationObj.firstName = "First name is required";
    } else {
      return null;
    }
  };

  const lastNameFormValidationFunct = () => {
    if (lastName !== "") {
      if (lastName.length === 20) {
        validationObj.lastName = "Cannot have more than 20 characters";
      } else {
        validationObj.lastName = "Maximum number of characters is 20";
      }
    } else if (lastName === "") {
      validationObj.lastName = "Last name is required";
    } else {
      return null;
    }
  };

  const emailFormValidationFunct = () => {
    if (email !== "") {
      if (email.length === 20) {
        validationObj.email = "Cannot have more than 20 characters";
      } else {
        validationObj.email = "Maximum number of characters is 20";
      }
    } else if (email === "") {
      validationObj.email = "Email is required";
    } else {
      return null;
    }
  };

  const opinionMsgFormValidationFunct = () => {
    if (message !== "") {
      if (message.length === 700) {
        validationObj.message = "Cannot have more than 700 characters";
      } else {
        validationObj.message = "Maximum number of characters is 700";
      }
    } else if (message === "") {
      validationObj.message = "Your opinion is required";
    } else {
      return null;
    }
  };

  const copyFirstNameFunct = () => {
    if (firstName === "") {
      showPopUpMessage("Empty first name form, please fill this form", "error");
    } else if (firstName !== "") {
      navigator.clipboard.writeText(firstName);

      showPopUpMessage("First name copied successfully", "success");
    } else {
      return null;
    }
  };

  const copyLastNameFunct = () => {
    if (lastName === "") {
      showPopUpMessage("Empty last name form, please fill this form", "error");
    } else if (lastName !== "") {
      navigator.clipboard.writeText(lastName);

      showPopUpMessage("Last name copied successfully", "success");
    } else {
      return null;
    }
  };

  const copyEmailFunct = () => {
    if (email === "") {
      showPopUpMessage("Empty email form, please fill this form", "error");
    } else if (email !== "") {
      navigator.clipboard.writeText(email);

      showPopUpMessage("Email copied successfully", "success");
    } else {
      return null;
    }
  };

  const copyOpinionMsgFunct = () => {
    if (message === "") {
      showPopUpMessage("Empty opinion form please fill this form", "error");
    } else if (message !== "") {
      navigator.clipboard.writeText(message);

      showPopUpMessage("Opinion copied successfully", "success");
    } else {
      return null;
    }
  };

  const emptyFirstNameFunct = () => {
    if (firstName === "") {
      showPopUpMessage("Empty first name form, fill this form first", "error");
    } else if (firstName !== "") {
      showPopUpMessage("First name form emptied successfully", "success");

      setFirstName("");
    } else {
      return null;
    }
  };

  const emptyLastNameFunct = () => {
    if (lastName === "") {
      showPopUpMessage("Empty last name form, fill this form first", "error");
    } else if (lastName !== "") {
      showPopUpMessage("Last name form emptied successfully", "success");

      setLastName("");
    } else {
      return null;
    }
  };

  const emptyEmailFunct = () => {
    if (email === "") {
      showPopUpMessage("Empty email form, fill this form first", "error");
    } else if (email !== "") {
      showPopUpMessage("Email form emptied successfully", "success");

      setEmail("");
    } else {
      return null;
    }
  };

  const emptyOpinionMsgFunct = () => {
    if (message === "") {
      showPopUpMessage("Empty message form, fill this form first", "error");
    } else if (message !== "") {
      showPopUpMessage("Message form emptied successfully", "success");

      setMessage("");
    } else {
      return null;
    }
  };

  const incementationlData = generatedIdNum + 1;

  const handleClick = () => {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");

    const minutes = now.getMinutes().toString().padStart(2, "0");

    const seconds = now.getSeconds().toString().padStart(2, "0");

    const day = now.getDate().toString().padStart(2, "0");

    const month = (now.getMonth() + 1).toString().padStart(2, "0");

    const year = now.getFullYear();

    const formattedTime = `${hours}:${minutes}:${seconds} - ${day}/${month}/${year}`;

    const msgSubmitTimeObj: rateMsgSubmitTimeListInterface = {
      id: generatedIdNum,

      submitTime: formattedTime,
    };

    setRatingMessageData([...ratingMessageData, msgSubmitTimeObj]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    try {
      e.preventDefault();

      setIsSubmitted(true);

      const newErrors = {
        firstName: firstName.trim() === "",

        lastName: lastName.trim() === "",

        email: email.trim() === "",

        message: message.trim() === "",
      };

      setErrors(newErrors);

      setGeneratedIdNum(incementationlData);

      handleClick();

      if (
        !newErrors.firstName &&
        !newErrors.lastName &&
        !newErrors.email &&
        !newErrors.message
      ) {
        setSubmitted(true);

        const newClientOpinionMsgObj: opinionMsgListInterface = {
          id: generatedIdNum,

          firstName,

          lastName,

          email,

          message,

          rating,
        };

        const starRatingObj: starRatingListInterface = {
          id: crypto.randomUUID(),

          numberOfStars: rating,
        };

        setOpinionMsgList([...opinionMsgList, newClientOpinionMsgObj]);

        setStarRatingList([...starRatingList, starRatingObj]);

        setTimeout(() => {
          setSubmitted(false);
        }, 3000);

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);

        showPopUpMessage("Rating message submitted successfully", "success");

        setFirstName("");

        setLastName("");

        setEmail("");

        setMessage("");

        setRating(0);
      }
    } catch (error) {
      console.error(error);

      showPopUpMessage("Upps, something went wrong", "error");
    }
  };

  return {
    copyFirstNameFunct,
    copyLastNameFunct,
    copyEmailFunct,
    copyOpinionMsgFunct,
    emptyFirstNameFunct,
    emptyLastNameFunct,
    emptyEmailFunct,
    emptyOpinionMsgFunct,
    handleSubmit,
    firstNameFormValidationFunct,
    lastNameFormValidationFunct,
    emailFormValidationFunct,
    opinionMsgFormValidationFunct,
  };
};
