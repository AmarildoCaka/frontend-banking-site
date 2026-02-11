import { useConditionalBankStore } from '../../../store/secondBankStore';

import AccountBlockingState from './AccountBlockingState';
import DepositBlockConfirm from './DepositBlockConfirm';
import AmountErasingHistoryComp from './AmountErasingHistoryComp';
import DepositHistoryComp from './DepositHistoryComp';
import WithdrawHistoryComp from './WithdrawHistoryComp';
import DepositDetailsComp from './DepositDetailsComp';
import WithdrawDetailsComp from './WithdrawDetailsComp';
import MoreActionsComp from './MoreActionsComp';

const GlobalOverlayComp = () => {

  const accountBlockingStateData = useConditionalBankStore((state) => state.accountBlockingState);

  const confirmDepositStateData = useConditionalBankStore((state) => state.confirmDepositState);

  const amountErasingHistoryStateData = useConditionalBankStore((state) => state.amountErasingHistoryState);

  const depositHistoryStateData = useConditionalBankStore((state) => state.depositHistoryState);

  const withdrawHistoryStateData = useConditionalBankStore((state) => state.withdrawHistoryState);

  const depositGeneralDetailsStateData = useConditionalBankStore((state) => state.depositGeneralDetailsState);

  const withdrawGeneralDetailsStateData = useConditionalBankStore((state) => state.withdrawGeneralDetailsState);

  const modalStateData = useConditionalBankStore((state) => state.modalState);

  return (
  
    <>
    
      {accountBlockingStateData && <AccountBlockingState/>}

      {confirmDepositStateData && <DepositBlockConfirm/>}

      {amountErasingHistoryStateData && <AmountErasingHistoryComp/>}

      {depositHistoryStateData && <DepositHistoryComp/>}

      {withdrawHistoryStateData && <WithdrawHistoryComp/>}

      {depositGeneralDetailsStateData && <DepositDetailsComp/>}

      {withdrawGeneralDetailsStateData && <WithdrawDetailsComp/>}

      {modalStateData && <MoreActionsComp/>}
    
    </>
  
  );

}

export default GlobalOverlayComp;