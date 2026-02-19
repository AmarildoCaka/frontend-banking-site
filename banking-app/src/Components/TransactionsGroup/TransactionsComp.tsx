import { useBankStore } from "../../store/FirstGroup/useBankStore";

import OpeningComp from "./OpeningComp";
import TopAlertComp from "../GeneralLogic/TopAlertComp";

const TransactionSystem = () => {
  const { alertVisibility, alertType, alertMessage } = useBankStore();

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <OpeningComp />
    </>
  );
};

export default TransactionSystem;
