import { useThirdBankStore } from "../../../store/thirdBankStore";

export const useDarkModeLogicHook = () => {

  const theme = useThirdBankStore((state) => state.theme);

  const applyTheme = (selectedTheme: string) => {

    const root = document.documentElement;

    if(selectedTheme === 'dark')
    {

      root.classList.add('dark');

      root.classList.remove('light');

    }
    
    else if(selectedTheme === 'light')
    {

      root.classList.add('light');

      root.classList.remove('dark');

    }
    
    else
    {

      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      if(prefersDark)
      {

        root.classList.add('dark');

        root.classList.remove('light');

      }
      
      else
      {

        root.classList.add('light');

        root.classList.remove('dark');

      }

    }

  };

  const getThemeLabel = () => {

    if(theme === 'light')
    {

      return 'Light Mode';

    }

    if(theme === 'dark')
    {

      return 'Dark Mode';

    }

    return 'System';

  };

  return { applyTheme, getThemeLabel };

}