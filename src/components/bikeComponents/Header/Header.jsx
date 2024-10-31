// // components/Header.js
// "use client";
// import { useState, useEffect } from "react";
// import { Menu, MenuItem, Avatar } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import SearchIcon from "@mui/icons-material/Search";
// import AppsIcon from "@mui/icons-material/Apps";
// import MicIcon from "@mui/icons-material/Mic";
// import Link from "next/link";

// const Header = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [isMobile, setIsMobile] = useState(false); // State to track mobile view
//   const open = Boolean(anchorEl);

//   const handleLocationClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleLocationClose = () => {
//     setAnchorEl(null);
//   };

//   // Update isMobile based on screen width
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768); // You can adjust the breakpoint here
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Set initial value on mount

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       {!isMobile ? (
//         <>
//           {" "}
//           <header style={isMobile ? styles.headerMobile : styles.header}>
//             <div style={styles.leftSection}>
//               {/* Logo */}
//               <Link href="/">
//                 <div style={styles.logo}>
//                   <img
//                     src="/bikeImages/Sitelogo.png"
//                     alt="Six Logo"
//                     style={{ height: "60px", width: "95px" }}
//                   />
//                 </div></Link>

//               {/* Location Dropdown */}
//               {!isMobile && (
//                 <div style={styles.location} onClick={handleLocationClick}>
//                   <LocationOnIcon
//                     style={{
//                       height: 18,
//                       width: 19,
//                       color: "#F40000",
//                       marginRight: "5px",
//                     }}
//                   />
//                   <span>Deoghar</span>
//                 </div>
//               )}

//               {/* Location Menu */}
//               <Menu
//                 anchorEl={anchorEl}
//                 open={open}
//                 onClose={handleLocationClose}
//                 anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//               >
//                 <MenuItem onClick={handleLocationClose}>Deoghar</MenuItem>
//                 <MenuItem onClick={handleLocationClose}>Mumbai</MenuItem>
//                 <MenuItem onClick={handleLocationClose}>Delhi</MenuItem>
//               </Menu>
//             </div>

//             {/* Search Input */}
//             <div
//               style={
//                 isMobile ? styles.searchContainerMobile : styles.searchContainer
//               }
//             >
//               <SearchIcon style={styles.searchIcon} />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 style={styles.searchInput}
//               />
//             </div>

//             {/* User Profile */}
//             {!isMobile && (
//               <div style={styles.rightSection}>
//                 <span style={styles.welcomeText}>
//                   Welcome <span style={styles.username}>Arya Utkarsh</span>
//                 </span>
//                 <Avatar
//                   src="/bikeImages/avatar.jpg"
//                   alt="Arya Utkarsh"
//                   style={styles.avatar}
//                 />
//               </div>
//             )}
//           </header>
//         </>
//       ) : (
//         <>
//           {" "}
//           <header style={styles.mobheader}>
//             {/* Top Section */}
//             <div style={styles.topSection}>
//               {/* Location Dropdown */}
//               <div style={styles.moblocation} onClick={handleLocationClick}>
//                 <LocationOnIcon style={styles.locationIcon} />
//                 <span>Deoghar</span>
//               </div>

//               {/* Logo */}
//               <Link href="/">
//                 <div style={styles.logo}>
//                   <img
//                     src="/bikeImages/Sitelogo.png"
//                     alt="Six Logo"
//                     style={styles.logoImage}
//                   />
//                 </div>
//               </Link>

//               {/* Grid Icon */}
//               <div style={styles.gridIcon}>
//                 <AppsIcon style={styles.appsIcon} />
//               </div>
//             </div>

//             {/* Search Input */}
//             <div style={styles.searchContainer}>
//               <SearchIcon style={styles.searchIcon} />
//               <input
//                 type="text"
//                 placeholder="Search"
//                 style={styles.searchInput}
//               />
//               <MicIcon style={styles.micIcon} />
//             </div>

//             {/* Location Menu */}
//             <Menu
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleLocationClose}
//               anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//             >
//               <MenuItem onClick={handleLocationClose}>Deoghar</MenuItem>
//               <MenuItem onClick={handleLocationClose}>Mumbai</MenuItem>
//               <MenuItem onClick={handleLocationClose}>Delhi</MenuItem>
//             </Menu>
//           </header>
//         </>
//       )}
//     </>
//   );
// };

// const styles = {
//   mobheader: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0px 20px",
//     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//     backgroundColor: "#fff",
//   },
//   topSection: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     width: "100%",
//     padding: "10px 0",
//   },
//   moblocation: {
//     display: "flex",
//     alignItems: "center",
//     cursor: "pointer",
//     padding: 4,
//     // backgroundColor: "white",
//     // borderRadius: 21,
//   },
//   locationIcon: {
//     height: 18,
//     width: 19,
//     color: "#F40000",
//     marginRight: "5px",
//   },
//   logo: {
//     flexGrow: 1,
//     display: "flex",
//     justifyContent: "center",
//   },
//   logoImage: {
//     height: "85px",
//     width: "133px",
//     marginRight: 37
//   },
//   gridIcon: {
//     display: "flex",
//     alignItems: "center",
//   },
//   appsIcon: {
//     height: 25,
//     width: 25,
//     color: "#F40000",
//   },
//   searchContainer: {
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     borderRadius: "10px",
//     padding: "9px 16px",
//     width: "90%",
//     marginTop: "10px",
//     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//   },
//   searchIcon: {
//     marginRight: "10px",
//     color: "#303030",
//   },
//   searchInput: {
//     border: "none",
//     background: "transparent",
//     outline: "none",
//     width: "100%",
//     color: "#303030",
//   },
//   micIcon: {
//     marginLeft: "10px",
//     color: "#303030",
//   },

//   // Responsive Styles
//   "@media (min-width: 769px)": {
//     header: {
//       flexDirection: "row", // Desktop layout
//       justifyContent: "space-between",
//     },
//     searchContainer: {
//       width: "100%", // Adjust search bar width for desktop
//     },
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "10px 20px",
//     boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
//     backgroundColor: "#fff",
//   },
//   headerMobile: {
//     flexDirection: "column", // Stack items on mobile
//     alignItems: "center",
//     padding: "10px",
//   },
//   leftSection: {
//     display: "flex",
//     alignItems: "center",
//     gap: 20,
//   },
//   logo: {},
//   location: {
//     display: "flex",
//     alignItems: "center",
//     cursor: "pointer",
//     padding: 4,
//     paddingRight: 14,
//     backgroundColor: "white",
//     borderRadius: 21,
//     boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//   },
//   searchContainer: {
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     borderRadius: "10px",
//     padding: "9px 16px",
//     flex: 1,
//     margin: "0 20px",
//     width: "100%",
//     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//   },
//   searchContainerMobile: {
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "#ffffff",
//     borderRadius: "10px",
//     padding: "9px 16px",
//     width: "100%",
//     margin: "10px 0",
//     boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//   },
//   searchIcon: {
//     marginRight: "10px",
//     color: "#303030",
//   },
//   searchInput: {
//     border: "none",
//     background: "transparent",
//     outline: "none",
//     width: "100%",
//     color: "#303030",
//   },
//   rightSection: {
//     display: "flex",
//     alignItems: "center",
//   },
//   welcomeText: {
//     fontSize: 11,
//     fontWeight: "700",
//     lineHeight: "14px",
//   },
//   username: {
//     display: "block",
//     fontSize: 24,
//     fontWeight: "700",
//   },
//   avatar: {
//     marginLeft: "10px",
//   },
// };

// export default Header;

// "use client";
// import { useState } from "react";
// import { Menu, MenuItem, Avatar } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import SearchIcon from "@mui/icons-material/Search";
// import AppsIcon from "@mui/icons-material/Apps";
// import MicIcon from "@mui/icons-material/Mic";
// import Link from "next/link";
// import LoginModal from "../../signIn-signUp-password/LoginModal";

// import { useGlobalContext } from "../../../pages/api/context/context";

// const Header = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

//   const handleLocationClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleLocationClose = () => {
//     setAnchorEl(null);
//   };

//   const toggleAuthModal = () => {
//     setModalOpen(true); // Show the modal by setting modalOpen to true
//   };
  

//   return (
//     <>
//     <header className="w-full bg-white shadow-md fixed top-0 z-50 ">
//       {/* Desktop Header */}
//       <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
//         {/* Left Section */}
//         <div className="flex items-center space-x-4">
//           {/* Logo */}
//           <Link href="/">
//             <img src="/bikeImages/Sitelogo.png" alt="Six Logo" className="h-12 cursor-pointer" />
//           </Link>
  
//           {/* Location Dropdown */}
//           <div
//             className="flex items-center cursor-pointer px-2 py-1 bg-white rounded-full shadow-sm hover:shadow-md"
//             onClick={handleLocationClick}
//           >
//             <LocationOnIcon className="text-red-500 h-5 w-5 mr-1" />
//             <span className="text-sm font-medium text-gray-700">Deoghar</span>
//           </div>
  
//           {/* Location Menu */}
//           <Menu
//             anchorEl={anchorEl}
//             open={open}
//             onClose={handleLocationClose}
//             anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//           >
//             <MenuItem onClick={handleLocationClose}>Deoghar</MenuItem>
//             <MenuItem onClick={handleLocationClose}>Mumbai</MenuItem>
//             <MenuItem onClick={handleLocationClose}>Delhi</MenuItem>
//           </Menu>
//         </div>
  
//         {/* Search Bar */}
//         <div className="flex items-center w-full max-w-lg bg-white rounded-md shadow-lg px-4 py-2">
//           <SearchIcon className="text-gray-500 mr-2" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-400"
//           />
//         </div>
  
//         {/* Right Section - User Profile */}
//         <div className="flex items-center space-x-4" onClick={toggleAuthModal} >
//           <span className="text-sm font-medium text-gray-700">
//             Welcome, <span className="font-bold">Arya Utkarsh</span>
//           </span>
//           <Avatar src="/bikeImages/auction.png" alt="Arya Utkarsh" className="cursor-pointer" />
//         </div>
//       </div>
  
//       {/* Mobile Header */}
//       <div className="flex md:hidden items-center justify-between px-4 py-3 bg-white shadow-md">
//         {/* Left Section */}
//         <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLocationClick}>
//           <LocationOnIcon className="text-red-500 h-5 w-5" />
//           <span className="text-sm font-medium text-gray-700">Deoghar</span>
//         </div>
  
//         {/* Logo */}
//         <Link href="/">
//           <img src="/bikeImages/Sitelogo.png" alt="Six Logo" className="h-10 cursor-pointer" />
//         </Link>
  
//         {/* Right Section - Login Icon */}
//         <div onClick={toggleAuthModal} className="text-red-500 cursor-pointer">
//           <AppsIcon className="h-6 w-6" /> {/* Replace with a user icon if needed */}
//         </div>
//       </div>
  
//       {/* Mobile Search Bar */}
//       <div className="md:hidden flex items-center w-full max-w-lg bg-white rounded-md shadow-lg px-4 py-2 mx-4 mt-2">
//         <SearchIcon className="text-gray-500 mr-2" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-400"
//         />
//         <MicIcon className="text-gray-500 ml-2" />
//       </div>
  
//       {/* Location Menu for Mobile */}
//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleLocationClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
//       >
//         <MenuItem onClick={handleLocationClose}>Deoghar</MenuItem>
//         <MenuItem onClick={handleLocationClose}>Mumbai</MenuItem>
//         <MenuItem onClick={handleLocationClose}>Delhi</MenuItem>
//       </Menu>
//     </header>
    
//     {/* Login Modal */}
//     <LoginModal isOpen={isAuthModalOpen} onClose={toggleAuthModal} />
//   </>
  
//   );
// };

// export default Header;
"use client";
import { useState } from "react";
import { Menu, MenuItem, Avatar } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import MicIcon from "@mui/icons-material/Mic";
import Link from "next/link";
import LoginModal from "../../signIn-signUp-password/LoginModal";
import { useGlobalContext } from "../../../pages/api/context/context";

const Header = () => {
    const { isLoggedin, user, modalOpen, setModalOpen, handleLogout } = useGlobalContext();
    const [anchorEl, setAnchorEl] = useState(null);
    const [logoutMenuAnchorEl, setLogoutMenuAnchorEl] = useState(null); // New state for logout menu
    const open = Boolean(anchorEl);
    const openLogoutMenu = Boolean(logoutMenuAnchorEl); // Check if logout menu is open

    const handleLocationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLocationClose = () => {
        setAnchorEl(null);
    };

    const toggleAuthModal = () => {
        setModalOpen(true); // Show the modal by setting modalOpen to true
    };

    const handleAvatarClick = (event) => {
        setLogoutMenuAnchorEl(event.currentTarget); // Open logout menu
    };

    const handleLogoutMenuClose = () => {
        setLogoutMenuAnchorEl(null); // Close logout menu
    };

    return (
        <>
            <header className="w-full bg-white shadow-md fixed top-0 z-50 ">
                {/* Desktop Header */}
                <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
                    {/* Left Section */}
                    <div className="flex items-center space-x-4">
                        {/* Logo */}
                        <Link href="/">
                            <img src="/bikeImages/Sitelogo.png" alt="Six Logo" className="h-12 cursor-pointer" />
                        </Link>

                        {/* Location Dropdown */}
                        <div
                            className="flex items-center cursor-pointer px-2 py-1 bg-white rounded-full shadow-sm hover:shadow-md"
                            onClick={handleLocationClick}
                        >
                            <LocationOnIcon className="text-red-500 h-5 w-5 mr-1" />
                            <span className="text-sm font-medium text-gray-700">Deoghar</span>
                        </div>

                        {/* Location Menu */}
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleLocationClose}
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        >
                            <MenuItem onClick={handleLocationClose}>Deoghar</MenuItem>
                            <MenuItem onClick={handleLocationClose}>Mumbai</MenuItem>
                            <MenuItem onClick={handleLocationClose}>Delhi</MenuItem>
                        </Menu>
                    </div>

                    {/* Search Bar */}
                    <div className="flex items-center w-full max-w-lg bg-white rounded-md shadow-lg px-4 py-2">
                        <SearchIcon className="text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    {/* Right Section - User Profile or Login */}
                    <div className="flex items-center space-x-4">
                        {isLoggedin ? (
                            // Show user details if logged in
                            <>
                                <span className="text-sm font-medium text-gray-700">
                                    Welcome, <span className="font-bold">{user?.name}</span>
                                </span>
                                <Avatar
                                    src={user?.avatar || "/bikeImages/default-avatar.png"} // Fallback to default avatar if no avatar
                                    alt={user?.name}
                                    className="cursor-pointer"
                                    onClick={handleAvatarClick} // Open logout menu on click
                                />
                                {/* Logout Menu */}
                                <Menu
                                    anchorEl={logoutMenuAnchorEl}
                                    open={openLogoutMenu}
                                    onClose={handleLogoutMenuClose}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                >
                                    <MenuItem onClick={handleLogout}>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            // Show login button if not logged in
                            <div className="flex items-center space-x-1 cursor-pointer" onClick={toggleAuthModal}>
                                <span className="text-sm font-medium text-gray-700">New user?</span>
                                <span className="text-lg font-bold text-black">Login</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="flex md:hidden items-center justify-between px-4 py-3 bg-white shadow-md">
                    {/* Left Section */}
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLocationClick}>
                        <LocationOnIcon className="text-red-500 h-5 w-5" />
                        <span className="text-sm font-medium text-gray-700">Deoghar</span>
                    </div>

                    {/* Logo */}
                    <Link href="/">
                        <img src="/bikeImages/Sitelogo.png" alt="Six Logo" className="h-10 cursor-pointer" />
                    </Link>

                    {/* Right Section - Login or User Avatar */}
                    <div onClick={!isLoggedin ? toggleAuthModal : handleAvatarClick} className="text-red-500 cursor-pointer">
                        {isLoggedin ? (
                            <Avatar
                                src={user?.avatar || "/bikeImages/default-avatar.png"}
                                alt={user?.name}
                                className="cursor-pointer"
                            />
                        ) : (
                            <AppsIcon className="h-6 w-6" /> // Show login icon if not logged in
                        )}
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="md:hidden flex items-center w-full max-w-lg bg-white rounded-md shadow-lg px-4 py-2 mx-4 mt-2">
                    <SearchIcon className="text-gray-500 mr-2" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none flex-grow text-gray-700 placeholder-gray-400"
                    />
                    <MicIcon className="text-gray-500 ml-2" />
                </div>

                {/* Location Menu for Mobile */}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleLocationClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                >
                    <MenuItem onClick={handleLocationClose}>Deoghar</MenuItem>
                    <MenuItem onClick={handleLocationClose}>Mumbai</MenuItem>
                    <MenuItem onClick={handleLocationClose}>Delhi</MenuItem>
                </Menu>
            </header>

            {/* Login Modal */}
            <LoginModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </>
    );
};

export default Header;

