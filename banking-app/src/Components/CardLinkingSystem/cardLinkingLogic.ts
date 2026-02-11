import { useBankStore } from "../../store/useBankStore";

import { useConditionalBankStore } from "../../store/secondBankStore";

import { Card } from '../../store/functInterfaces';

import { isValidCardNumber } from './generalLogic';

export const useCardLinkingSystemHook = () => {

  const showPopUpMessageData = useBankStore((state) => state.showPopUpMessage);

  const cardsData = useConditionalBankStore((state) => state.cards);

  const setCardsData = useConditionalBankStore((state) => state.setCards);

  const cardsHistory = useConditionalBankStore((state) => state.cardsHistory);

  const setCardsHistory = useConditionalBankStore((state) => state.setCardsHistory);

  const firstNameData = useConditionalBankStore((state) => state.firstName);

  const lastNameData = useConditionalBankStore((state) => state.lastName);

  const cardNumberData = useConditionalBankStore((state) => state.cardNumber);

  const expiryData = useConditionalBankStore((state) => state.expiry);

  const setExpiryData = useConditionalBankStore((state) => state.setExpiry);

  const getCardBrand = (num: string): string => {

    const firstDigit = num[0];
    
    switch(firstDigit)
    {
      
      case "4":

        return "Visa";

      case "5":

        return "MasterCard";

      case "3":

        return "American Express";

      case "6":

        return "Discover";

      default:

        return "Unknown";

    }

  };

  const cardAddingLogicFunct = () => {
  
    if(cardNumberData.length < 16 || !isValidCardNumber(cardNumberData))
    {

      showPopUpMessageData('Invalid card number, please enter a valid number', 'error');

    }
  
    else if(cardNumberData.length > 16 || isValidCardNumber(cardNumberData))
    {
  
      const last4 = cardNumberData.slice(-4);

      const brand = getCardBrand(cardNumberData);

      const newCard: Card = {
      
        id: Date.now(),

        firstNameData,

        lastNameData,
      
        last4,
      
        brand,
      
        expiryData,

        cardNumberData,
      
        locked: false,
      
      };

      setCardsData([...cardsData, newCard]);

      setCardsHistory([...cardsHistory, newCard]);
        
      setExpiryData("");

    }
  
    if(!expiryData.match(/^(0[1-9]|1[0-2])\/\d{2}$/))
    {

      showPopUpMessageData('Invalid expiry date. Format should be MM/YY', 'error');
    
    }

  }
  
  const handleAddCard = () => {

    switch(true)
    {

      case firstNameData === '' || lastNameData === '' || cardNumberData === '' || expiryData === '':

        showPopUpMessageData('Empty input fields, fill all the input fields first', 'error');

        break;

      case firstNameData !== '' || lastNameData !== '' || cardNumberData !== '' || expiryData !== '':

        cardAddingLogicFunct();

        showPopUpMessageData('Your card was added successfully', 'success');

        break;

      default:

        return null;

    }

  };

  return handleAddCard;

};