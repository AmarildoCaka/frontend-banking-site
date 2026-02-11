import { create } from 'zustand';

import { CreditCard, Zap, Droplet, Wifi, Phone, Home, Car, Heart, ShoppingBag } from 'lucide-react';

import { fourthBankStoreInterface } from './fourthBankStoreInterface';

import { billInterface } from './fourthBankStoreInterface';

import { generalBillsElementStorageFunct } from './fourthBankStoreStateFunct';

const initialList: billInterface[] = generalBillsElementStorageFunct();

export const useFourthBankStore = create<fourthBankStoreInterface>((set) => {

  return {

    billCategoriesObj: {
  
      utilities: {

        name: 'Utilities',
        
        icon: Zap,
        
        color: 'bg-yellow-500',
        
        innerData: {
        
          id: 1,
        
          billType: 'Utilities',
        
          billHeader: 'Utilities Bill',
        
          billDescription: 'Covers essential household services such as electricity, gas, and heating usage for the current billing period.'
        
        }
      
      },

      water: {
      
        name: 'Water',
      
        icon: Droplet,
      
        color: 'bg-blue-500',
      
        innerData: {
      
          id: 2,
      
          billType: 'Water',
      
          billHeader: 'Water Bill',
      
          billDescription: 'Represents water consumption charges including supply, usage, and wastewater services for the billing cycle.'
      
        }
      
      },

      internet: {
      
        name: 'Internet',
      
        icon: Wifi,
      
        color: 'bg-purple-500',
      
        innerData: {
      
          id: 3,
      
          billType: 'Internet',
      
          billHeader: 'Internet Bill',
      
          billDescription: 'Monthly charge for internet connectivity services, including data usage and network access.'
      
        }
      
      },

      phone: {
      
        name: 'Phone',
      
        icon: Phone,
      
        color: 'bg-green-500',

        innerData: {
      
          id: 4,
      
          billType: 'Phone',
      
          billHeader: 'Phone Bill',
      
          billDescription: 'Includes mobile or landline service charges such as calls, messages, and data usage for the month.'
      
        }
      
      },

      rent: {
      
        name: 'Rent/Mortgage',
      
        icon: Home,
      
        color: 'bg-orange-500',
      
        innerData: {
      
          id: 5,
    
          billType: 'Rent/Mortgage',
    
          billHeader: 'Rent/Mortgage Bill',
    
          billDescription: 'Monthly payment for housing expenses, including rent or mortgage obligations for the property.'
    
        }
    
      },

      insurance: {
    
        name: 'Insurance',
    
        icon: Heart,
    
        color: 'bg-red-500',
    
        innerData: {
    
          id: 6,
    
          billType: 'Insurance',
    
          billHeader: 'Insurance Bill',
    
          billDescription: 'Recurring insurance premium covering protection plans such as health, home, vehicle, or life insurance.'
    
        }
    
      },

      credit: {
    
        name: 'Credit Card',
    
        icon: CreditCard,
    
        color: 'bg-indigo-500',
    
        innerData: {
    
          id: 7,
    
          billType: 'Credit Card',
    
          billHeader: 'Credit Card Bill',
    
          billDescription: 'Statement balance due for credit card usage, including purchases, fees, and any applicable interest.'
    
        }
    
      },

      subscription: {
    
        name: 'Subscriptions',
    
        icon: ShoppingBag,
    
        color: 'bg-pink-500',
    
        innerData: {
    
          id: 8,
    
          billType: 'Subscriptions',
    
          billHeader: 'Subscriptions Bill',
    
          billDescription: 'Charges for recurring subscription services such as streaming platforms, software, or memberships.'
    
        }
    
      },

      vehicle: {
    
        name: 'Vehicle',
    
        icon: Car,
    
        color: 'bg-gray-600',
    
        innerData: {
    
          id: 9,
    
          billType: 'Vehicle',
    
          billHeader: 'Vehicle Bill',
    
          billDescription: 'Expenses related to vehicle ownership, including fuel, maintenance, insurance, or loan payments.'
    
        }
    
      }

    },

    billCategoriesElementsObj: {
  
      utilities: {
        
        name: 'Utilities',
        
        icon: Zap,
        
        color: 'bg-yellow-500'
      
      },
    
      water: {
        
        name: 'Water',
        
        icon: Droplet,
        
        color: 'bg-blue-500'
      
      },
    
      internet: {
        
        name: 'Internet',
        
        icon: Wifi,
        
        color: 'bg-purple-500'
      
      },
    
      phone: {
        
        name: 'Phone',
        
        icon: Phone,
        
        color: 'bg-green-500'
      
      },
    
      rent: {
        
        name: 'Rent/Mortgage',
        
        icon: Home,
        
        color: 'bg-orange-500'
      
      },
    
      insurance: {
        
        name: 'Insurance',
        
        icon: Heart,
        
        color: 'bg-red-500'
      
      },
    
      credit: {
        
        name: 'Credit Card',
        
        icon: CreditCard,
        
        color: 'bg-indigo-500'
      
      },
    
      subscription: {
        
        name: 'Subscriptions',
        
        icon: ShoppingBag,
        
        color: 'bg-pink-500'
      
      },
    
      vehicle: {
        
        name: 'Vehicle',
        
        icon: Car,
        
        color: 'bg-gray-600'
      
      }
  
    },

    generalBillsElement: initialList,

    selectedBills: [],

    paidBills: initialList.filter((b) => b.status === 'paid').map((b) => b.id),

    unpaidBillsInfoState: false,

    setGeneralBillsElement: (newBills) => {
      
      set((state) => {
      
        const updatedBills = [...newBills, ...state.generalBillsElement];

        localStorage.setItem("generalBillsElementStorage", JSON.stringify(updatedBills));

        return {
        
          generalBillsElement: updatedBills
        
        };
      
      });
    
    },

    setDeleteOneBill: (billId) => {
    
      set((state) => {

        const updated = state.generalBillsElement.filter((b) => b.id !== billId);

        localStorage.setItem("generalBillsElementStorage", JSON.stringify(updated));

        return {
          
          generalBillsElement: updated
        
        };
    
      });
    
    },

    setDeleteAllBills: (value) => {

      set(

        {

          generalBillsElement: value
          
        }

      );

    },

    setSelectedBills: (updater) => {

      set((state) => (
        
        {
        
          selectedBills: (typeof updater === 'function')? updater(state.selectedBills): updater,
    
        }
      
      ))

    },

    setPaidBills: (value) => {

      set((state) => (

          {

            paidBills: (typeof value === 'function')? value(state.paidBills): value,

          }
        
        )

      );

    },

    setUnpaidBillsInfoState: (value) => {

      set(
        
        {

          unpaidBillsInfoState: value

        }
    
      );

    },

  }

});