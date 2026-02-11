import { useThirdBankStore } from '../../../../../../store/thirdBankStore';

import MsgEditPopUpComp from './MsgEditPopUpComp';
import AlertPopUpComp from './AlertPopUpComp';

const FilledListOverlayComp = ({ indexData }: { indexData: number }) => {

  const { msgEditUnit, msgAlertPopUpUnit } = useThirdBankStore();

  return (

    <>
    
      {msgEditUnit && (

        <>
        
          <MsgEditPopUpComp/>
        
        </>

      )}
    
      {msgAlertPopUpUnit && (

        <>
        
          <AlertPopUpComp indexData={indexData}/>
        
        </>

      )}

    </>

  );

}

export default FilledListOverlayComp;