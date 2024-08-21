import { createContext, useState, useContext } from "react";

export const GlobalContext = createContext();

const value = {
  isUpdateUser: false,
  setIsUpdateUser: () => {},
};

export const DataProvider = ({ children }) => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentConfirmModalOpen, setPaymentConfirmModalOpen] = useState(false);
  const [proMemebershipModalOpen, setProMembershipModalOpen] = useState(false);
  const [lastModalOpen, setLastModalOpen] = useState(false);
  const [isUpdateUser, setIsUpdateUser] = useState(false);


  const value = {
    isUpdateUser,
    setIsUpdateUser,
    profileModalOpen,
    setProfileModalOpen,
    helpModalOpen,
    setHelpModalOpen,
    membershipModalOpen,
    setMembershipModalOpen,
    paymentModalOpen,
    setPaymentModalOpen,
    paymentConfirmModalOpen,
    setPaymentConfirmModalOpen,
    proMemebershipModalOpen,
    setProMembershipModalOpen,
    lastModalOpen,
    setLastModalOpen,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
