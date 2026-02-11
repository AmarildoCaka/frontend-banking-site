import { useBankStore } from "../../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../../store/secondBankStore";

export const useDeleteSpecificCardHook = () => {

  const showPopUpMessage = useBankStore((state) => state.showPopUpMessage);

  const cards = useConditionalBankStore((state) => state.cards);

  const setCards = useConditionalBankStore((state) => state.setCards);

  const deleteSpecificCardFunct = (id: number) => {

    const findSpecificCard = cards.findIndex((card) => card.id === id);
  
    if(findSpecificCard !== -1)
    {

      setCards(cards.filter((card) => card.id !== id));
  
      showPopUpMessage(`Card number #${findSpecificCard + 1} deleted successfully`, 'success');
  
    }

  }

  return { deleteSpecificCardFunct };

};