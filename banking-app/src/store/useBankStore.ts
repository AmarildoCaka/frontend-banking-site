import { amountStateFunction, withdrawStateFunction, depositHistoryUnitFunct, withdrawHistoryUnitFunct, loadBalancesFromLocalStorage, timeStatementFunction, resetToZeroCapturedTimeDataFunct, dayMonthYearDataFunct, capturedTimeFunct, isActiveStateFunct, graphDataFunct, depostitMsgFunct, firstAmountVisibilityStorageFunct, secondAmountVisibilityStorageFunct, thirdAmountVisibilityStorageFunct, generalAccountStateStoreFunct, generalCardListFunct, dashboardModeFunct } from './stateFuncts';

import { BankState } from './storeInterfaces';

import { dayMonthYearStringInterface } from './functInterfaces';

import { create } from 'zustand';

export const useBankStore = create<BankState>((set, get) => {

  return {

    userGrowthSwitch: 'LineChart',

    userGrowthData: [

      { index: 0, month: "Jan", users: 120 },
      
      { index: 1, month: "Feb", users: 180 },
      
      { index: 2, month: "Mar", users: 250 },
      
      { index: 3, month: "Apr", users: 320 },
      
      { index: 4, month: "May", users: 410 },
      
      { index: 5, month: "Jun", users: 530 },
      
      { index: 6, month: "Jul", users: 640 },
      
      { index: 7, month: "Aug", users: 710 },
      
      { index: 8, month: "Sep", users: 820 },
      
      { index: 9, month: "Oct", users: 950 },
      
      { index: 10, month: "Nov", users: 1080 },
      
      { index: 11, month: "Dec", users: 1200 }
  
    ],

    userActivityData: [
  
      { name: "Active Users", value: 700 },
  
      { name: "Inactive Users", value: 500 },
      
      { name: "Total Users", value: 1200 }
    
    ],

    amountState: amountStateFunction(),

    withdrawState: withdrawStateFunction(),

    balances: loadBalancesFromLocalStorage(),

    depositHistoryUnitState: depositHistoryUnitFunct(),

    withdrawHistoryUnitState: withdrawHistoryUnitFunct(),

    timeStatementUpdate: timeStatementFunction(),

    resetToZeroCapturedTime: resetToZeroCapturedTimeDataFunct(),

    dayMonthYearData: dayMonthYearDataFunct(),

    capturedTimeData: capturedTimeFunct(),

    isActiveState: isActiveStateFunct(),

    graphData: graphDataFunct(),

    depostiConfirmationMsg: depostitMsgFunct(),

    firstAmountVisibility: firstAmountVisibilityStorageFunct(),

    secondAmountVisibility: secondAmountVisibilityStorageFunct(),

    thirdAmountVisibility: thirdAmountVisibilityStorageFunct(),

    firstBalanceActivityState: 'Enabled',

    secondBalanceActivityState: 'Enabled',

    thirdBalanceActivityState: 'Enabled',

    generalAccountState: generalAccountStateStoreFunct(),

    cardslList: generalCardListFunct(),

    services: [

      {
  
        serviceName: "Personal Loans",
  
        serviceText: "Access flexible, low-interest loans for personal needs, with easy approval and repayment terms.",
  
        feature: {
  
          firstFeature: "Flexible repayment terms to suit your financial situation.",
  
          secondFeature: "No hidden fees—just clear, upfront terms.",
  
          thirdFeature: "Quick approval and disbursement."
  
        }
  
      },
  
      {
  
        serviceName: "Investment Plans",
  
        serviceText: "Grow your wealth with tailored investment strategies designed to maximize returns and minimize risks.",
  
        feature: {
  
          firstFeature: "Tailored investment strategies to match your risk tolerance.",
  
          secondFeature: "Diversification across various asset classes.",
  
          thirdFeature: "Ongoing portfolio management and market insights."
  
        }
  
      },
  
      {
  
        serviceName: "Credit & Debit Cards",
  
        serviceText: "Manage your finances seamlessly with our wide range of credit and debit card options, offering rewards and benefits.",
  
        feature: {
  
          firstFeature: "Rewards program for every dollar spent.",
  
          secondFeature: "Zero fraud liability for peace of mind.",
  
          thirdFeature: "Special offers on travel, dining, and entertainment."
  
        }
  
      },
  
      {
  
        serviceName: "Wealth Management",
  
        serviceText: "Comprehensive wealth management services to help you achieve long-term financial stability and growth.",
  
        feature: {
  
          firstFeature: "Personalized financial planning and advice.",
  
          secondFeature: "Retirement and estate planning to ensure your future is secure.",
  
          thirdFeature: "Asset protection strategies to safeguard your wealth."
  
        }
  
      },
  
      {
  
        serviceName: "Insurance Services",
  
        serviceText: "Protect yourself and your loved ones with our customizable insurance solutions, covering health, life, and property.",
  
        feature: {
  
          firstFeature: "Tailored insurance plans to fit your specific needs.",
  
          secondFeature: "Competitive premiums with extensive coverage options.",
  
          thirdFeature: "Easy claims process with 24/7 support."
  
        }
  
      },
  
      {
  
        serviceName: "Home & Auto Loans",
  
        serviceText: "Affordable home and auto loans with competitive rates and flexible terms to help you secure your dream home or vehicle.",
  
        feature: {
  
          firstFeature: "Low interest rates and flexible repayment plans.",
  
          secondFeature: "Pre-approval options for faster processing.",
  
          thirdFeature: "Customizable loan amounts to suit your budget."
  
        }
  
      },
  
    ],

    selectedMonth: null,

    selectedYear: new Date().getFullYear(),

    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],

    popUpState: false,

    index: 0,

    dashboardDataState: dashboardModeFunct(),

    setUserGrowthSwitch: (value) => {

      set(

        {

          userGrowthSwitch: value

        }

      );

    },

    setAmountState: (value) => {

      localStorage.getItem('setAmountState');

      set(
        
        {
          
          amountState: value
        
        }
      
      )

      localStorage.setItem('setAmountState', JSON.stringify(value));

    },

    setWithdrawState: (value) => {

      localStorage.getItem('setWithdrawState');

      set(
        
        {
          
          withdrawState: value
        
        }
      
      )

      localStorage.setItem('setWithdrawState', JSON.stringify(value));

    },

    deposit: (amount, currency) => {
    
      const newBalances = {
    
        ...get().balances,
    
        [currency]: get().balances[currency] + amount * 0.99,
    
      };
    
      set(
        
        {
          
          balances: newBalances
        
        }
      
      );
    
      localStorage.setItem('bank_balances', JSON.stringify(newBalances));
    
    },

    setDepositHistoryUnit: (value) => {

      localStorage.getItem('depositHistoryUnit');

      set(
        
        {

          depositHistoryUnitState: value

        }
      
      );

      localStorage.setItem('depositHistoryUnit', JSON.stringify(value));

    },

    deleteSingleDepositUnit: (id) => {

      set((state) => {
      
        const updated = state.depositHistoryUnitState.filter((d) => d.id !== id);
      
        localStorage.setItem('depositHistoryUnit', JSON.stringify(updated));
      
        return {
          
          depositHistoryUnitState: updated
        
        };
      
      })

    },

    copySingleDepositUnit: (id) => {

      const original = get().depositHistoryUnitState.find((d) => d.id === id);

      const depositUnit = `Id: ${original?.id}, Amount: ${original?.amount}, Currency: ${original?.currency}, TimeDisplayState: ${original?.timeDisplayState}, Interest: ${original?.interest}`;

      navigator.clipboard.writeText(JSON.stringify(depositUnit));
      
    },

    setEmptyDepositHistoryUnit: () => {

      let data = get().depositHistoryUnitState;

      if(data.length > 0)
      {

        data = [];

      }

      set(
        
        {

          depositHistoryUnitState: data,

        }
      
      );

      localStorage.setItem('depositHistoryUnit', JSON.stringify(data));

    },

    withdraw: (amount, currency) => {

      const newBalances = {
      
        ...get().balances,
      
        [currency]: Math.max(0, get().balances[currency] - amount),
      
      };
      
      set(
        
        {
          
          balances: newBalances
        
        }
      
      );
      
      localStorage.setItem('bank_balances', JSON.stringify(newBalances));
    
    },

    setWithdrawHistoryUnit: (value) => {

      localStorage.getItem('withdrawHistoryUnit');

      set(
        
        {

          withdrawHistoryUnitState: value

        }
      
      );

      localStorage.setItem('withdrawHistoryUnit', JSON.stringify(value));

    },

    deleteSingleWithdrawUnit: (id) => {

      set((state) => {
      
        const updated = state.withdrawHistoryUnitState.filter((d) => d.id !== id);
      
        localStorage.setItem('withdrawHistoryUnit', JSON.stringify(updated));
      
        return {
          
          withdrawHistoryUnitState: updated
        
        };
      
      })

    },

    copySingleWithdrawUnit: (id: string) => {

      const original = get().withdrawHistoryUnitState.find((d) => d.id === id);

      const depositUnit = `Id: ${original?.id}, Amount: ${original?.withdrawAmount}, Currency: ${original?.withdrawAmount}, TimeDisplayState: ${original?.timeDisplayState}`;

      navigator.clipboard.writeText(JSON.stringify(depositUnit));
      
    },

    setEmptyWithdrawHistoryUnit: () => {

      set(
        
        {

          withdrawHistoryUnitState: [],

        }
      
      );

      localStorage.setItem('withdrawHistoryUnit', JSON.stringify([]));

    },

    timeStatementUpdateFunct: () => {

      const convertUnit = get().timeStatementUpdate;

      const newValue = !convertUnit;

      set(
        
        {
          
          timeStatementUpdate: newValue
        
        }
      
      );

      localStorage.setItem('timeStatementUpdate', JSON.stringify(newValue));

    },

    resetAmountToZeroTimeCapture: () => {

      const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      const now = new Date();

      const hours = now.getHours().toString().padStart(2, '0');

      const minutes = now.getMinutes().toString().padStart(2, '0');

      const seconds = now.getSeconds().toString().padStart(2, '0');

      const date = now.getDate().toString().padStart(2, '0');

      const day = daysOfTheWeek[now.getDay()];

      const month = now.getMonth().toString().padStart(2, '0');

      const year = now.getFullYear().toString().padStart(2, '0');

      const timeString = `${hours}:${minutes}:${seconds}`;

      const day_month_year_object: dayMonthYearStringInterface = {

        date: date,

        day: day,

        month: month,

        year: year

      }

      set((state) => (
        
        { 
      
          ...state,
      
          resetToZeroCapturedTime: timeString,

          dayMonthYearData: day_month_year_object
      
        }
      
      ));

      localStorage.setItem('amountErase', timeString);

      localStorage.setItem('dayMonthYearEraseData', JSON.stringify(day_month_year_object));

    },

    resetBalancesToZero: (currency) => {

      const currencyUnit = get().balances;

      const newBalances = {

        ...currencyUnit,

        [currency]: 0

      }

      set(
        
        {

          balances: newBalances

        }
      
      );

      switch(true)
      {

        case currency === 'USD':

          get().resetAmountToZeroTimeCapture();

          break;

        case currency === 'EUR':

          get().resetAmountToZeroTimeCapture();

          break;

        case currency === 'GBP':

          get().resetAmountToZeroTimeCapture();

          break;

        default:

          return null;

      }

      localStorage.setItem('bank_balances', JSON.stringify(newBalances));

    },

    timeCapturingFunct: () => {

      const now = new Date();

      const hours = now.getHours().toString().padStart(2, '0');

      const minutes = now.getMinutes().toString().padStart(2, '0');

      const seconds = now.getSeconds().toString().padStart(2, '0');

      const timeString = `${hours}:${minutes}:${seconds}`;

      set((state) => (
        
        { 
      
          ...state,
      
          capturedTimeData: timeString 
      
        }
      
      ));

      localStorage.setItem('capturedTime', timeString);

    },

    loadSavedTime: () => {

      const savedTime = localStorage.getItem('capturedTime');
      
      if(savedTime)
      {

        set((state) => (
          
          {
          
            ...state,
          
            capturedTimeData: savedTime 
        
          }
        
        ));
      
      }
    
    },

    toCardToggleSwitchBtn: () => {

      const setUp: string = 'card';

      localStorage.getItem('toggleSwitchState');

      set(
        
        {

          isActiveState: setUp

        }
      
      );

      localStorage.setItem('toggleSwitchState', setUp);

    },

    toDashboardToggleSwitchBtn: () => {

      const setUp: string = 'dashboard';

      localStorage.getItem('toggleSwitchState');

      set(
        
        {

          isActiveState: setUp

        }
      
      );

      localStorage.setItem('toggleSwitchState', setUp);

    },

    toChartToggleSwitchBtn: () => {

      const setUp: string = 'chart';

      localStorage.getItem('toggleSwitchState');

      set(
        
        {

          isActiveState: setUp

        }
      
      );

      localStorage.setItem('toggleSwitchState', setUp);

    },

    toBarChartToggleSwitchBtn: () => {

      const setUp: string = 'bar-chart';

      localStorage.getItem('toggleSwitchState');

      set(
        
        {

          isActiveState: setUp

        }
      
      );

      localStorage.setItem('toggleSwitchState', setUp);

    },

    depositConfirmationMsgFunct: () => {

      const msgData = get().depostiConfirmationMsg;

      const reversedMsgData = !msgData;

      set(
        
        {

          depostiConfirmationMsg: reversedMsgData

        }
      
      );

      localStorage.setItem('storedMessageData', JSON.stringify(reversedMsgData));

    },

    setFirstAmountVisibilityFunct: () => {

      const innerData = get().firstAmountVisibility;

      const innerDataUtilisation = !innerData;

      set(
        
        {

          firstAmountVisibility: innerDataUtilisation

        }
      
      );

      localStorage.setItem('firstStoredAmountVisibility', JSON.stringify(innerDataUtilisation));

    },

    setSecondAmountVisibilityFunct: () => {

      const innerData = get().secondAmountVisibility;

      const innerDataUtilisation = !innerData;

      set(
        
        {

          secondAmountVisibility: innerDataUtilisation

        }
      
      );

      localStorage.setItem('secondStoredAmountVisibility', JSON.stringify(innerDataUtilisation));

    },

    setThirdAmountVisibilityFunct: () => {

      const innerData = get().thirdAmountVisibility;

      const innerDataUtilisation = !innerData;

      set(
        
        {

          thirdAmountVisibility: innerDataUtilisation

        }
      
      );

      localStorage.setItem('thirdStoredAmountVisibility', JSON.stringify(innerDataUtilisation));

    },

    firstDepositStateFunct: () => {

      const current = get().firstBalanceActivityState;
  
      let nextState: 'Enabled' | 'Disabled' = 'Enabled';
  
      switch(true) 
      {
      
        case current === 'Enabled':
      
          nextState = 'Disabled';
        
          break;
      
        case current !== 'Enabled':
      
          nextState = 'Enabled';
        
          break;
      
        default:
      
          nextState = 'Enabled';
        
          break;
      
      }
        
      set(
        
        {
          
          firstBalanceActivityState: nextState

        }
      
      );
  
      localStorage.setItem('firstBalanceActivityState', nextState);
  
    },

    secondDepositStateFunct: () => {

      const current = get().secondBalanceActivityState;
  
      let nextState: 'Enabled' | 'Disabled' = 'Enabled';
  
      switch(true) 
      {
      
        case current === 'Enabled':
      
          nextState = 'Disabled';
        
          break;
      
        case current !== 'Enabled':
      
          nextState = 'Enabled';
        
          break;
      
        default:
      
          nextState = 'Enabled';
        
          break;
      
      }
        
      set(
        
        {
          
          secondBalanceActivityState: nextState

        }
      
      );
  
      localStorage.setItem('secondBalanceActivityState', nextState);
  
    },

    thirdDepositStateFunct: () => {

      const current = get().thirdBalanceActivityState;
  
      let nextState: 'Enabled' | 'Disabled' = 'Enabled';
  
      switch(true) 
      {
      
        case current === 'Enabled':
      
          nextState = 'Disabled';
        
          break;
      
        case current !== 'Enabled':
      
          nextState = 'Enabled';
        
          break;
      
        default:
      
          nextState = 'Enabled';
        
          break;
      
      }
        
      set(
        
        {
          
          thirdBalanceActivityState: nextState

        }
      
      );
  
      localStorage.setItem('thirdBalanceActivityState', nextState);
  
    },

    initializeFirstBalanceState: () => {

      const savedState = localStorage.getItem('firstBalanceActivityState');
      
      if(savedState) 
      {
        
        set(
          
          {
            
            firstBalanceActivityState: savedState
          
          }
        
        );
      
      }
    
    },

    initializeSecondBalanceState: () => {

      const savedState = localStorage.getItem('secondBalanceActivityState');
      
      if(savedState) 
      {
      
        set(
          
          { 
            
            secondBalanceActivityState: savedState

          }
        
        );
      
      }
    
    },

    initializeThirdBalanceState: () => {

      const savedState = localStorage.getItem('thirdBalanceActivityState');
      
      if(savedState) 
      {
      
        set(
          
          { 
            
            thirdBalanceActivityState: savedState

          }
        
        );
      
      }
    
    },

    accountFreezingFunct: () => {

      const currentState = get().generalAccountState;
    
      const newState = (currentState === 'Enabled')? 'Disabled': 'Enabled';
    
      set(
        
        {
          
          generalAccountState: newState
        
        }
      
      );
    
      localStorage.setItem('generalAccountStateStorage', JSON.stringify(newState));
    
    },

    accountUnfreezingFunct: () => {

      const stateData = get().generalAccountState;
    
      if(stateData === 'Disabled')
      {

        const newState = 'Enabled';
    
        set(
          
          {
            
            generalAccountState: newState
          
          }
        
        );
    
        localStorage.setItem('generalAccountStateStorage', JSON.stringify(newState));
      
      }
    
    },

    initializeGeneralAccountState: () => {
    
      const savedState = JSON.parse(localStorage.getItem('generalAccountStateStorage') || '"Enabled"');
    
      set(
        
        {
          
          generalAccountState: savedState

        }
      
      );
    
    },

    generalAccountBlockingFunct: () => {

      const stateArray = [get().firstBalanceActivityState, get().secondBalanceActivityState, get().thirdBalanceActivityState, get().generalAccountState];
    
      const [firstDeposit, secondDeposit, thirdDeposit, accountFreezing, accountUnfreezing] = [get().firstDepositStateFunct, get().secondDepositStateFunct, get().thirdDepositStateFunct, get().accountFreezingFunct, get().accountUnfreezingFunct];
    
      const anyDisabled = stateArray.some((state) => state === 'Disabled');

      const anyEnabled = stateArray.some((state) => state === 'Enabled');
    
      switch(true)
      {

        case anyDisabled && anyEnabled:

          set(
            
            {
            
              firstBalanceActivityState: 'Disabled',
            
              secondBalanceActivityState: 'Disabled',
            
              thirdBalanceActivityState: 'Disabled',
            
              generalAccountState: 'Disabled'
          
            }
          
          );
          
          break;
    
        case anyDisabled && !anyEnabled:
          
          firstDeposit();
          
          secondDeposit();
          
          thirdDeposit();
          
          accountUnfreezing();
          
          break;
    
        case anyEnabled && !anyDisabled:
          
          firstDeposit();
          
          secondDeposit();
          
          thirdDeposit();
          
          accountFreezing();
          
          break;
    
        default:
          
          return null;
      
      }

    },

    cardLinkingSystemFunct: (value) => {

      set(
        
        {

          cardslList: value

        }
      
      );

      localStorage.setItem('cardLinkingSystemStorage', JSON.stringify(value));

    },

    selectedMonthFunct: (value) => {

      set(
        
        {

          selectedMonth: value

        }
      
      );

      localStorage.setItem('selectedMonthStorage', JSON.stringify(value));

    },

    setPopUpState: (value) => {

      set(

        {

          popUpState: value

        }

      );

    },

    setIndex: (value) => {

      set(

        {

          index: value

        }

      );

    },

    showPopUpMessage: (message, type) => {

      set(
        
        {

          alertVisibility: true,

          alertType: type,

          alertMessage: message

        }
      
      );

    },

    hidePopUpMessage: () => {

      set(
        
        {

          alertVisibility: false,

          alertType: '',

          alertMessage: ''

        }
      
      );

    },

    cancelAlertVisibility: () => {

      set(
        
        {

          alertVisibility: false

        }
      
      );

    },

    setDataToDashboardFunct: () => {

      const setUpData = 'dashboard';

      set(

        {

          dashboardDataState: setUpData

        }

      );

      localStorage.setItem('dashboardMode', setUpData);

    },
    
    setDataToCardFunct: () => {

      const setUpData = 'card';

      set(

        {

          dashboardDataState: setUpData

        }

      );

      localStorage.setItem('dashboardMode', setUpData);

    },

  };

});