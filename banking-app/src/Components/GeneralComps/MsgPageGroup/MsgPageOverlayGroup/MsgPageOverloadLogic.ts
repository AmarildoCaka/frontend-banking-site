import { useBankStore } from "../../../../store/useBankStore";

import { useThirdBankStore } from "../../../../store/thirdBankStore";

export const useMsgPageOverloadLogicHook = () => {

  const showPopUpMessage = useBankStore((state) => state.showPopUpMessage);

  const ratingMessageData = useThirdBankStore((state) => state.ratingMessageData);

  const opinionMsgList = useThirdBankStore((state) => state.opinionMsgList);

  const setRatingMessageData = useThirdBankStore((state) => state.setRatingMessageData);

  const copyOpinionMsgFunct = () => {
    
    if(!ratingMessageData.length)
    {
    
      showPopUpMessage("No timestamp available to copy", "error");
    
      return;
    
    }
    
    const selectedTimeStamp = ratingMessageData[ratingMessageData.length - 1];
  
    try
    {
    
      const submitTimeValue = selectedTimeStamp?.submitTime || "";
    
      navigator.clipboard.writeText(submitTimeValue);
  
      showPopUpMessage("Timestamp copied successfully", "success");
    
    }
    
    catch(error)
    {

      console.log("Error", error);
      
      showPopUpMessage("Could not copy this timestamp", "error");
    
    }
  
  };

  const deleteSingleTimestamp = (id: number) => {

    const index = opinionMsgList.findIndex((unit) => unit.id === id);

    if(index !== -1)
    {
    
      setRatingMessageData(ratingMessageData.filter((unit) => unit.id !== id));

      showPopUpMessage(`Timestamp number #${index + 1} deleted successfully`, "success");
    
    }
  
  };

  const getTimestamp = (id: number | string): string => {
  
    const item = ratingMessageData.find((r) => r.id === id);
  
    return (item)? item.submitTime: "Timestamp Unavailable";
  
  };

  return { copyOpinionMsgFunct, deleteSingleTimestamp, getTimestamp };

}