import { useBankStore } from "../../../../../../store/useBankStore";

import { useConditionalBankStore } from "../../../../../../store/secondBankStore";

export const useFormValidationSystemHook = () => {

  const { showPopUpMessage } = useBankStore();

  const { loanFirstName, loanLastName, jobTitle, monthlyIncome, setTrueFirstStepFormFieldErrors, setFirstLoanForm, setSecondLoanForm, setFalseFirstStepFormFieldErrors, setMonthlyIncome, setLoanFirstName, setLoanLastName, setJobTitle, setLoanFirstStepToTrue, monthlyIncomeCurrency } = useConditionalBankStore();

  // First Name Functions:

  const copyFirstNameFormFunct = () => {

    if(loanFirstName !== '')
    {

      navigator.clipboard.writeText(loanFirstName);
      
      showPopUpMessage('First name copied successfully', 'success');

    }
    
    else if(loanFirstName === '')
    {

      showPopUpMessage('Cannot copy first name, empty form', 'error');
      
    }

    else
    {

      return null;

    }

  }

  const emptyFirstNameFormFunct = () => {

    if(loanFirstName !== '')
    {

      setLoanFirstName('');
      
      showPopUpMessage('First name form emptied successfully', 'success');

    }
    
    else if(loanFirstName === '')
    {

      showPopUpMessage('First name form empty, nothing to delete', 'error');
      
    }

    else
    {

      return null;

    }

  }

  // Last Name Functions:

  const copyLastNameFormFunct = () => {

    if(loanLastName !== '')
    {

      navigator.clipboard.writeText(loanLastName);
      
      showPopUpMessage('Last name copied successfully', 'success');

    }
    
    else if(loanLastName === '')
    {

      showPopUpMessage('Cannot copy last name, empty form', 'error');
      
    }

    else
    {

      return null;

    }

  }

  const emptyLastNameFormFunct = () => {

    if(loanLastName !== '')
    {

      setLoanLastName('');
      
      showPopUpMessage('Last name form emptied successfully', 'success');

    }
    
    else if(loanLastName === '')
    {

      showPopUpMessage('Last name form empty, nothing to delete', 'error');
      
    }

    else
    {

      return null;

    }

  }

  // Job Title Functions:

  const copyJobTitleFormFunct = () => {

    if(jobTitle !== '')
    {

      navigator.clipboard.writeText(jobTitle);
      
      showPopUpMessage('Job title copied successfully', 'success');

    }
    
    else if(jobTitle === '')
    {

      showPopUpMessage('Cannot copy job title, empty form', 'error');
      
    }

    else
    {

      return null;

    }

  }

  const emptyJobTitleFormFunct = () => {

    if(jobTitle !== '')
    {

      setJobTitle('');
      
      showPopUpMessage('Job title form emptied successfully', 'success');

    }
    
    else if(jobTitle === '')
    {

      showPopUpMessage('Job title form empty, nothing to delete', 'error');
      
    }

    else
    {

      return null;

    }

  }

  // Monthly Income Functions:

  const copyMonthlyIncomeFormFunct = () => {

    if(monthlyIncome !== 0)
    {

      navigator.clipboard.writeText(JSON.stringify(monthlyIncome));
      
      showPopUpMessage('Monthly income copied successfully', 'success');

    }
    
    else if(monthlyIncome === 0)
    {

      showPopUpMessage('Cannot copy monthly income, empty form', 'error');
      
    }

    else
    {

      return null;

    }

  }

  const emptyMonthlyIncomeFormFunct = () => {

    if(monthlyIncome !== 0)
    {

      setMonthlyIncome(0);
      
      showPopUpMessage('Monthly income form emptied successfully', 'success');

    }
    
    else if(monthlyIncome === 0)
    {

      showPopUpMessage('Monthly income form empty, nothing to delete', 'error');
      
    }

    else
    {

      return null;

    }

  }

  const formValidationSystem = () => {

    switch(true)
    {

      case loanFirstName === "" || loanLastName === "" || jobTitle === "" || monthlyIncome === 0 || monthlyIncomeCurrency === '':
        
        setTrueFirstStepFormFieldErrors();

        setFirstLoanForm(true);

        setSecondLoanForm(false);

        showPopUpMessage("Please fill all the fields before the next step", "error");

        break;

      case loanFirstName !== "" || loanLastName !== "" || jobTitle !== "" || monthlyIncome !== 0 || monthlyIncomeCurrency === '':

        setFalseFirstStepFormFieldErrors();

        setFirstLoanForm(false);

        setSecondLoanForm(true);

        setLoanFirstStepToTrue(true);

        showPopUpMessage("First step completed", "info");

        break;

      default:

        return null;
    
    }

  };

  return { formValidationSystem, copyMonthlyIncomeFormFunct, emptyMonthlyIncomeFormFunct, emptyFirstNameFormFunct, copyFirstNameFormFunct, emptyLastNameFormFunct, copyLastNameFormFunct, copyJobTitleFormFunct, emptyJobTitleFormFunct };

};