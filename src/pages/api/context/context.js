import { createContext, useState, useContext } from 'react';

export const GlobalContext = createContext();

const value = {
  isUpdateUser: false,
  setIsUpdateUser: ()=> {}
};

export const DataProvider = ({ children }) => {
  const [isUpdateUser, setIsUpdateUser] = useState(false);

  const value = {
    isUpdateUser,
    setIsUpdateUser
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};