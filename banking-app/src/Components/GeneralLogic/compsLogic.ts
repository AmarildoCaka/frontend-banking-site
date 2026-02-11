import { useBankStore } from '../../store/useBankStore';

interface chartDataInterface {

  labels: [string, string, string],

  datasets: [

    {

      label: string,

      data: [number, number, number],

      backgroundColor: [string, string, string],

      borderColor: [string, string, string],

      borderWidth: number,

    },

  ],

}

interface chartOptionsInterface {

  cutout: string;

  plugins: {

    legend: {

      position: "bottom";

      labels: {

        padding: number;

        usePointStyle: boolean;

      };

    };

    tooltip: {

      callbacks: {

        label: (context: any) => string;

      };

    };

  };

  responsive: boolean;

  maintainAspectRatio: boolean;

}

const balancesStateFunct = () => {

  return useBankStore.getState().balances;

}

const balancesFunct = balancesStateFunct();

const totalBalance = balancesFunct.USD + balancesFunct.EUR + balancesFunct.GBP;

export const chartData: chartDataInterface = {

  labels: ["USD", "EUR", "GBP"],

  datasets: [

    {

      label: "Balance",

      data: [balancesFunct.USD, balancesFunct.EUR, balancesFunct.GBP],

      backgroundColor: ["#FFD700", "#87CEFA", "#FFA500"],

      borderColor: ["#DAA520", "#4682B4", "#FF8C00"],

      borderWidth: 2,

    },

  ],

};

export const chartOptions: chartOptionsInterface = {

  cutout: "60%",

  plugins: {

    legend: {

      position: "bottom",

      labels: {

        padding: 20,


        usePointStyle: true,

      },

    },

    tooltip: {

      callbacks: {

        label: (context) => {

          const label = context.label || "";

          const value = context.parsed;

          const percentage = ((value / totalBalance) * 100).toFixed(1);

          return `${label}: ${value.toLocaleString(undefined, {

            minimumFractionDigits: 2,

            maximumFractionDigits: 2,

          })} (${percentage}%)`;

        },

      },

    },

  },

  responsive: true,

  maintainAspectRatio: false,

};