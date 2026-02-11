import { useState } from 'react';

interface fieldErrorsInterface {
  
  accountNumber: boolean,

  iban: boolean,

  accountId: boolean

};

const AccountCredentials = () => {

  const [accountNumber, setAccountNumber] = useState('');

  const [iban, setIban] = useState('');
  
  const [accountId, setAccountId] = useState('');

  const [fieldErrors, setFieldErrors] = useState<fieldErrorsInterface>(
      
    {
  
      accountNumber: false,

      iban: false,

      accountId: false
  
    }
    
  );

  const [error] = useState<string>("");

  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
    setAccountNumber(e.target.value);
  
  };

  const handleIBANChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
    setIban(e.target.value);
  
  };

  const handleAccountIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  
    setAccountId(e.target.value);
  
  };

  const generateAccountNumber = (): string => {

    return 'AC' + Math.floor(Math.random() * 10000000000).toString();

  };

  const generateIBAN = (accountNumber: string, countryCode: string): string => {
  
    return `${countryCode}29NWBK6016${accountNumber}`;
  
  };

  const generateAccountId = (): string => {
  
    return 'ID' + Math.floor(Math.random() * 10000000).toString();

  };

  const handleSubmit = (e: React.FormEvent) => {
  
    e.preventDefault();

    const generatedAccountNumber = generateAccountNumber();
  
    const generatedIBAN = generateIBAN(generatedAccountNumber, 'GB');
  
    const generatedAccountId = generateAccountId();
  
    setAccountNumber(generatedAccountNumber);
  
    setIban(generatedIBAN);
  
    setAccountId(generatedAccountId);
  
  };

  return (
  
    <>
    
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">

        <form onSubmit={handleSubmit} className="space-y-4">
        
          <div className="flex flex-col justify-center place-items-center text-center">
                
            <input type="text" id="accountNumber" value={accountNumber} onChange={handleAccountNumberChange} placeholder="Generated Account Number" className={`text-gray-600 text-md font-semibold shadow-2xl ${(fieldErrors.accountNumber)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} readOnly/>

            {error && (

              <>

                <p className="text-red-500 font-semibold text-md pt-2">Please enter your account number</p>

              </>

            )}

          </div>

          <div className="flex flex-col justify-center place-items-center text-center">
                        
            <input type="text" id="iban" value={iban} onChange={handleIBANChange} placeholder="Generated IBAN" className={`text-gray-600 text-md font-semibold shadow-2xl ${(fieldErrors.iban)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} readOnly/>

            {error && (

              <>

                <p className="text-red-500 font-semibold text-md pt-2">Please enter your IBAN</p>

              </>

            )}

          </div>

          <div className="flex flex-col justify-center place-items-center text-center">
                        
            <input type="text" id="accountId" value={accountId} onChange={handleAccountIdChange} placeholder="Generated Account ID" className={`text-gray-600 text-md font-semibold shadow-2xl ${(fieldErrors.accountId)? 'border border-red-500': 'border border-black'} rounded-xl transform transition duration-300 hover:scale-105 dark:bg-gray-500 dark:text-black p-2`} readOnly/>

            {error && (

              <>

                <p className="text-red-500 font-semibold text-md pt-2">Please enter your account Id</p>

              </>

            )}

          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-4">Generate</button>

        </form>

      </div>

    </>

  );

};

export default AccountCredentials;