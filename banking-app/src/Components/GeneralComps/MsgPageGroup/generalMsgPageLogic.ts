import { useBankStore } from "../../../store/FirstGroup/useBankStore";

import { useThirdBankStore } from "../../../store/ThirdGroup/thirdBankStore";

export const useGeneralMsgPageLogicHook = () => {
  const showPopUpMessage = useBankStore((state) => state.showPopUpMessage);

  const opinionMsgList = useThirdBankStore((state) => state.opinionMsgList);

  const setOpinionMsgList = useThirdBankStore(
    (state) => state.setOpinionMsgList,
  );

  const ratingMessageData = useThirdBankStore(
    (state) => state.ratingMessageData,
  );

  const setRatingMessageData = useThirdBankStore(
    (state) => state.setRatingMessageData,
  );

  const copyOpinionMsgFunct = () => {
    const selectedMsg = opinionMsgList[opinionMsgList.length - 1];

    try {
      navigator.clipboard.writeText(JSON.stringify(selectedMsg));

      showPopUpMessage("Rating message copied successfully", "success");
    } catch (error) {
      console.log("Error", error);

      showPopUpMessage("Could not copy this rating message", "error");
    }
  };

  const opinionMsgDeletionFunct = () => {
    if (opinionMsgList.length > 0) {
      setOpinionMsgList([]);
    }
  };

  const ratingMsgTimeDeletionFunct = () => {
    if (ratingMessageData.length > 0) {
      setRatingMessageData([]);
    }
  };

  return {
    copyOpinionMsgFunct,
    opinionMsgDeletionFunct,
    ratingMsgTimeDeletionFunct,
  };
};
