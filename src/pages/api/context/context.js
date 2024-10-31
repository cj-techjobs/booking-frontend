// import { createContext, useState, useContext } from "react";
// import { signIn, signUp } from "../api";

// export const GlobalContext = createContext();

// const value = {
//   isUpdateUser: false,
//   setIsUpdateUser: () => {},
// };

// export const DataProvider = ({ children }) => {
//   const [profileModalOpen, setProfileModalOpen] = useState(false);
//   const [helpModalOpen, setHelpModalOpen] = useState(false);
//   const [membershipModalOpen, setMembershipModalOpen] = useState(false);
//   const [paymentModalOpen, setPaymentModalOpen] = useState(false);
//   const [paymentConfirmModalOpen, setPaymentConfirmModalOpen] = useState(false);
//   const [proMemebershipModalOpen, setProMembershipModalOpen] = useState(false);
//   const [lastModalOpen, setLastModalOpen] = useState(false);
//   const [isUpdateUser, setIsUpdateUser] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [otpModalOpen, setOtpModalOpen] = useState(false);
//   const [forgotPassModal, setForgotPassModal] = useState(false);
//   const [newPassModal, setNewPassModal] = useState(false);
//   const [name, setName] = useState("");
//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoggedin, setIsLoggedin] = useState(false)

//   const [youraddresses, setYouraddresses] = useState(false);
//   const handleSignIn = async (mobileNumber, password) => {
//     try {
//       const data = await signIn(mobileNumber, password);
//       setIsLoggedin(true);
//       setModalOpen(false); // Close modal on successful login
//       return data;
//     } catch (error) {
//       console.error("Error during sign-in:", error.message);
//       throw error;
//     }
//   };

//   const handleSignUp = async (mobileNumber, password) => {
//     try {
//       const data = await signUp(mobileNumber, password);
//       setIsSignUp(false); // Switch to login after successful sign-up
//       setModalOpen(false); // Close modal on successful sign-up
//       return data;
//     } catch (error) {
//       console.error("Error during sign-up:", error.message);
//       throw error;
//     }
//   };

//   const value = {
//     isUpdateUser,
//     setIsUpdateUser,
//     profileModalOpen,
//     setProfileModalOpen,
//     helpModalOpen,
//     setHelpModalOpen,
//     membershipModalOpen,
//     setMembershipModalOpen,
//     paymentModalOpen,
//     setPaymentModalOpen,
//     paymentConfirmModalOpen,
//     setPaymentConfirmModalOpen,
//     proMemebershipModalOpen,
//     setProMembershipModalOpen,
//     lastModalOpen,
//     setLastModalOpen,
//     isSignUp,
//     setIsSignUp,
//     modalOpen,
//     setModalOpen,
//     otpModalOpen,
//     setOtpModalOpen,
//     forgotPassModal,
//     setForgotPassModal,
//     newPassModal,
//     setNewPassModal,
//     name,
//     setName,
//     isLogin,
//     setIsLogin,
//     isLoggedin,
//     setIsLoggedin,
//     youraddresses,
//     setYouraddresses,
//     handleSignIn,
//     handleSignUp,
//   };
  
//   return (
//     <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
//   );
// };
// import { createContext, useState, useContext } from "react";
// import { signIn, signUp } from "../api";

// export const GlobalContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [profileModalOpen, setProfileModalOpen] = useState(false);
//   const [helpModalOpen, setHelpModalOpen] = useState(false);
//   const [membershipModalOpen, setMembershipModalOpen] = useState(false);
//   const [paymentModalOpen, setPaymentModalOpen] = useState(false);
//   const [paymentConfirmModalOpen, setPaymentConfirmModalOpen] = useState(false);
//   const [proMemebershipModalOpen, setProMembershipModalOpen] = useState(false);
//   const [lastModalOpen, setLastModalOpen] = useState(false);
//   const [isUpdateUser, setIsUpdateUser] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [otpModalOpen, setOtpModalOpen] = useState(false);
//   const [forgotPassModal, setForgotPassModal] = useState(false);
//   const [newPassModal, setNewPassModal] = useState(false);
//   const [name, setName] = useState("");
//   const [isLogin, setIsLogin] = useState(true);
//   const [isLoggedin, setIsLoggedin] = useState(false);
//   const [youraddresses, setYouraddresses] = useState(false);

//   const handleSignIn = async (mobileNumber, password) => {
//     try {
//       const data = await signIn(mobileNumber, password);
//       setIsLoggedin(true);
//       setModalOpen(false); // Close modal on successful login
//       return data;
//     } catch (error) {
//       console.error("Error during sign-in:", error.message);
//       throw error;
//     }
//   };

//   const handleSignUp = async (mobileNumber, password) => {
//     try {
//       const data = await signUp(mobileNumber, password);
//       setIsSignUp(false); // Switch to login after successful sign-up
//       setModalOpen(false); // Close modal on successful sign-up
//       return data;
//     } catch (error) {
//       console.error("Error during sign-up:", error.message);
//       throw error;
//     }
//   };

//   const value = {
//     isUpdateUser,
//     setIsUpdateUser,
//     profileModalOpen,
//     setProfileModalOpen,
//     helpModalOpen,
//     setHelpModalOpen,
//     membershipModalOpen,
//     setMembershipModalOpen,
//     paymentModalOpen,
//     setPaymentModalOpen,
//     paymentConfirmModalOpen,
//     setPaymentConfirmModalOpen,
//     proMemebershipModalOpen,
//     setProMembershipModalOpen,
//     lastModalOpen,
//     setLastModalOpen,
//     isSignUp,
//     setIsSignUp,
//     modalOpen,
//     setModalOpen,
//     otpModalOpen,
//     setOtpModalOpen,
//     forgotPassModal,
//     setForgotPassModal,
//     newPassModal,
//     setNewPassModal,
//     name,
//     setName,
//     isLogin,
//     setIsLogin,
//     isLoggedin,
//     setIsLoggedin,
//     youraddresses,
//     setYouraddresses,
//     handleSignIn,
//     handleSignUp,
//   };

//   return (
//     <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
//   );
// };

// export const useGlobalContext = () => useContext(GlobalContext);
import { createContext, useState, useContext, useEffect } from "react";
import { signIn, signUp } from "../api";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

export const DataProvider = ({ children }) => {
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentConfirmModalOpen, setPaymentConfirmModalOpen] = useState(false);
  const [proMemebershipModalOpen, setProMembershipModalOpen] = useState(false);
  const [lastModalOpen, setLastModalOpen] = useState(false);
  const [isUpdateUser, setIsUpdateUser] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [forgotPassModal, setForgotPassModal] = useState(false);
  const [newPassModal, setNewPassModal] = useState(false);
  const [name, setName] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState(null);
  const [youraddresses, setYouraddresses] = useState(false);

  useEffect(() => {
    // Check for auth_token in localStorage
    const authToken = localStorage.getItem("auth_token");
    if (authToken) {
      setIsLoggedin(true);
      // Assuming you would fetch user data here based on authToken
      setUser({ name: "Arya Utkarsh", avatar: "/path/to/avatar.jpg" }); // Example data; replace with real data from an API call
    }
  }, []);

  const handleSignIn = async (mobileNumber, password,deviceType, appVersion) => {
    try {
      const data = await signIn(mobileNumber, password, deviceType, appVersion);
      console.log("API Response:", data); // Log the API response for debugging

  
      // Adjust the following line based on where authToken is located in your response
      const authToken = data.data.authToken; // Update the path if authToken is nested
  
      if (authToken) {
        setIsLoggedin(true);
        localStorage.setItem("auth_token", authToken); // Save token in local storage
        setUser({ name: "Arya Utkarsh", avatar: "/path/to/avatar.jpg" }); // Replace with actual data from API
        setModalOpen(false); // Close modal on successful login
        toast.success("Login successful!");
        return data;
      } else {
        throw new Error("Authentication token not found in response");
      }
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      toast.error("Error during sign-in: " + error.message);  
      throw error;
    }
  };
  

  const handleSignUp = async (mobileNumber, password,deviceType, appVersion) => {
    try {
      const data = await signUp(mobileNumber, password, deviceType, appVersion);
      localStorage.setItem("auth_token", data.data.verifyToken); // Save token in local storage
      setIsLoggedin(true);
      setUser({ name: "Arya Utkarsh", avatar: "/path/to/avatar.jpg" }); // Replace with actual data from API
      setModalOpen(false); // Close modal on successful sign-up
      return data;
    } catch (error) {
      console.error("Error during sign-up:", error.message);
      throw error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("auth_token"); // Clear token from local storage
    setIsLoggedin(false);
    setUser(null); // Clear user data
    toast.success("Logout successful!");
  };

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
    isSignUp,
    setIsSignUp,
    modalOpen,
    setModalOpen,
    otpModalOpen,
    setOtpModalOpen,
    forgotPassModal,
    setForgotPassModal,
    newPassModal,
    setNewPassModal,
    name,
    setName,
    isLogin,
    setIsLogin,
    isLoggedin,
    setIsLoggedin,
    user,
    setUser,
    youraddresses,
    setYouraddresses,
    handleSignIn,
    handleSignUp,
    handleLogout,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
