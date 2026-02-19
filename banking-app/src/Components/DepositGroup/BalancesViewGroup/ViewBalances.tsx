import { useEffect } from "react";

import { useBankStore } from "../../../store/FirstGroup/useBankStore.ts";

import CardBalancesComp from "./CardBalancesComp.tsx";
import AccountSumComp from "./AccountSumComp.tsx";
import GlobalOverlayComp from "./GlobalOverlayComp.tsx";
import TopAlertComp from "../../GeneralLogic/TopAlertComp.tsx";

const AccountBalances = () => {
  const {
    initializeFirstBalanceState,
    initializeSecondBalanceState,
    initializeThirdBalanceState,
    initializeGeneralAccountState,
    alertVisibility,
    alertType,
    alertMessage,
  } = useBankStore();

  useEffect(() => {
    try {
      initializeFirstBalanceState();

      initializeSecondBalanceState();

      initializeThirdBalanceState();
    } catch (error) {
      console.error(error);
    }
  }, [
    initializeFirstBalanceState,
    initializeSecondBalanceState,
    initializeThirdBalanceState,
  ]);

  useEffect(() => {
    initializeGeneralAccountState();
  }, [initializeGeneralAccountState]);

  return (
    <>
      <TopAlertComp
        alertVisibility={alertVisibility}
        alertType={alertType}
        alertMessage={alertMessage}
      />

      <div className="flex flex-col justify-evenly min-h-screen dark:bg-black py-10 px-4">
        <CardBalancesComp />

        <br />

        <br />

        <br />

        <AccountSumComp />

        <GlobalOverlayComp />
      </div>
    </>
  );
};

export default AccountBalances;
