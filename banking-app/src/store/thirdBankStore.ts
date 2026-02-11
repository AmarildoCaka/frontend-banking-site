import { create } from 'zustand';

import { thirdBankStoreInterface } from './storeInterfaces';

import { opinionMsgListFunct, starRatingListFunct, ratingMessageTimeFunct, generatedIdFunct, themeFunct } from './stateFuncts';

export const useThirdBankStore = create<thirdBankStoreInterface>((set, get) => {

  return {

    isOpen: false,

    firstModalState: false,

    secondModalState: false,

    thirdModalState: false,

    teamInformationList: [
      
      {

        id: 0,

        image: '../../public/images/team-img/john-doe-img.jpg',

        name: 'John Doe',

        position: 'CEO & Founder'

      },
      
      {

        id: 1,

        image: '../../public/images/team-img/jane-smith-img.jpg',

        name: 'Jane Smith',

        position: 'Chief Technology Officer'

      },
      
      {

        id: 2,

        image: '../../public/images/team-img/emily-johnson-img.jpg',

        name: 'Emily Johnson',

        position: 'Chief Financial Officer'

      },
      
      {

        id: 3,

        image: '../../public/images/team-img/michael-carter-img.jpeg',

        name: 'Michael Carter',

        position: 'Senior Financial Analyst'

      }
    
    ],

    errors: {

      firstName: false,
    
      lastName: false,

      email: false,
    
      message: false

    },

    id: '',

    firstName: '',
  
    lastName: '',

    email: '',
  
    message: '',

    rating: 0,

    hover: 0,

    ratingStarList: [1, 2, 3, 4, 5],

    opinionMsgList: opinionMsgListFunct(),

    submitted: false,

    validationObj: {

      firstName: '',

      lastName: '',

      email: '',

      message: '',

      rating: 0,

    },

    starRatingList: starRatingListFunct(),

    msgEditUnit: false,

    msgAlertPopUpUnit: false,

    editingId: null,

    editText: '',

    isSubmitted: false,

    ratingInfoUnit: false,

    ratingMessageData: ratingMessageTimeFunct(),

    generatedIdNum: generatedIdFunct(),

    msgPagePopUpUnit: false,

    theme: themeFunct(),

    setIsOpen: (value) => {

      set(

        {

          isOpen: value

        }

      );

    },

    setFirstModalState: (value) => {

      set(

        {

          firstModalState: value

        }

      );

    },

    setSecondModalState: (value) => {

      set(

        {

          secondModalState: value

        }

      );

    },

    setThirdModalState: (value) => {

      set(

        {

          thirdModalState: value

        }

      );

    },

    setErrors: (value) => {

      set(
        
        {

          errors: value

        }
      
      );

    },

    setSubmitted: (value) => {

      set(

        {

          submitted: value

        }

      );

    },

    setRating: (value) => {

      set(

        {

          rating: value

        }

      );

    },

    setHover: (value) => {

      set(

        {

          hover: value

        }

      );

    },

    setOpinionMsgList: (value) => {

      set(

        {

          opinionMsgList: value

        }

      );

      localStorage.setItem('opinionMessages', JSON.stringify(value));

    },

    setFirstName: (value) => {

      set(
         
        {

          firstName: value

        }

      );

    },

    setLastName: (value) => {

      set(
         
        {

          lastName: value

        }

      );

    },

    setEmail: (value) => {

      set(

        {

          email: value

        }

      );

    },

    setMessage: (value) => {

      set(

        {

          message: value

        }

      );

    },

    setValidationObj: (value) => {

      set(

        {

          validationObj: value

        }

      );

    },

    setStarRatingList: (value) => {

      set(

        {

          starRatingList: value

        }

      );

      localStorage.setItem('userStarRating', JSON.stringify(value));

    },

    setMsgEditUnit: (value) => {

      set(

        {

          msgEditUnit: value

        }

      );

    },

    setMsgAlertPopUpUnit: (value) => {

      set(

        {

          msgAlertPopUpUnit: value

        }

      );

    },

    setEditingId: (value) => {

      set(

        {

          editingId: value
          
        }

      );

    },

    setEditText: (value) => {

      set(

        {

          editText: value

        }

      );

    },

    setIsSubmitted: (value) => {

      set(

        {

          isSubmitted: value

        }

      );

    },

    setRatingInfoUnit: (value) => {

      set(

        {

          ratingInfoUnit: value

        }

      );

    },

    setRatingMessageData: (value) => {

      set(

        {

          ratingMessageData: value

        }

      );

      localStorage.setItem('rateMsgSubmitTime', JSON.stringify(value));

    },

    setGeneratedIdNum: (value) => {

      set(

        {

          generatedIdNum: value

        }

      );

      localStorage.setItem('generatedId', JSON.stringify(value));

    },

    setMsgPagePopUpUnit: (value) => {

      set(

        {

          msgPagePopUpUnit: value

        }

      );

    },

    setTheme: (value) => {

      set(

        {

          theme: value

        }

      );

      if(typeof window !== 'undefined')
      {

        localStorage.setItem('theme', JSON.stringify(value));
      
      }

      // localStorage.setItem('theme', JSON.stringify(value));

    },

  };

});