import { useThirdBankStore } from "../../../../store/ThirdGroup/thirdBankStore";

import RatingInfoComp from "./RatingInfoGroup/RatingInfoComp";

const ContactUsOverLoadComp = () => {
  const { ratingInfoUnit } = useThirdBankStore();

  return (
    <>
      {ratingInfoUnit && (
        <>
          <RatingInfoComp />
        </>
      )}
    </>
  );
};

export default ContactUsOverLoadComp;
