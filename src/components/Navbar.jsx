import React, { useState, useEffect,useContext } from "react";
import "./css/navbar.css";
import logo from '../assets/logoN.png';

import { NavLink, useHistory, useLocation} from "react-router-dom";
import { useValue } from "../App";
import UserIcons from './user/UserIcons';
import { Lock, Menu } from '@mui/icons-material';
import { Button,IconButton } from '@mui/material'
import Sidebar from './sidebar/Sidebar'


const Navbar = () => {
  // const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history = useHistory(); 
  //   // Check session storage for login status on component mount
  //   useEffect(() => {
  //     const storedLoginStatus = sessionStorage.getItem('isLoggedIn');
  //     if (storedLoginStatus && storedLoginStatus === 'true') {
  //       setIsLoggedIn(true);
  //     }
  //   }, []);
  
  //   const handleLogin = () => {
  //     setIsLoggedIn(true);
  //     // Store login status in session storage
  //     sessionStorage.setItem('isLoggedIn', 'true');
  //     // Redirect to the desired page
  //     history.push("/login");
  //   };
  
  //   const handleLogout = () => {
  //     setIsLoggedIn(false);
  //     // Remove login status from session storage
  //     sessionStorage.removeItem('isLoggedIn');
  //     history.push("/");
  //   };

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  // const Navigate = useHistory();
  // const handleClick1 = () => {
  //   Navigate.push('/login')
  // }
  // const handleClick2 = () => {
  //   Navigate.push('/logout')
  // }


  // const RenderMenu = () => {
  //   if (state.user) {
  //     return(
  //       <nav className="main-nav">
  //       {/* 1st logo part  */}
  //       <div className="logo">
  //         {/* <h2>
  //           <span>V</span>r
  //           <span>B</span>rahman
  //         </h2> */}
  //         <img src={logo} alt="logo" className="logo-img" />
  //       </div>

  //       {/* 2nd menu part  */}
  //       <div
  //         className={
  //           showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
  //         }>
  //         <ul>
  //           <li>
  //             <NavLink to="/">Home</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/location">Location</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/about">About</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/blog">Blog</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/contact">Contact</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/pilgrimage">Pilgrimages</NavLink>
  //           </li>
  //           {/* <li className="button-item">
  //             <button className="nav-button" onClick={handleClick1}>Login</button> */}
  //             {/* <NavLink to="/login" className={"nav-button"}>Login</NavLink> */}
  //           {/* </li> */}
  //           <li>
  //             <button className="nav-button" onClick={handleClick2}>Logout</button>
  //           </li>
  //           <li>
  //             <button className="nav-button donate-button">
  //               <span className="plus-icon">+</span>
  //               <span className="donate-text">Donate Now!</span>
  //             </button>
  //           </li>
  //         </ul>
  //       </div>
  //     </nav>
  //     )
  //   }
  //   else {
  //     return (
  //       <nav className="main-nav">
  //       {/* 1st logo part  */}
  //       <div className="logo">
  //         {/* <h2>
  //           <span>V</span>r
  //           <span>B</span>rahman
  //         </h2> */}
  //         <img src={logo} alt="logo" className="logo-img" />
  //       </div>

  //       {/* 2nd menu part  */}
  //       <div
  //         className={
  //           showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
  //         }>
  //         <ul>
  //           <li>
  //             <NavLink to="/">Home</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/location">Location</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/about">About</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/blog">Blog</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/contact">Contact</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/pilgrimage">Pilgrimages</NavLink>
  //           </li>
  //           <li className="button-item">
  //             <button className="nav-button" onClick={handleClick1}>Login</button>
  //             {/* <NavLink to="/login" className={"nav-button"}>Login</NavLink> */}
  //           </li>
  //           {/* <li>
  //             <button className="nav-button" onClick={handleClick2}>Logout</button>
  //           </li> */}
  //           <li>
  //             <button className="nav-button donate-button">
  //               <span className="plus-icon">+</span>
  //               <span className="donate-text">Donate Now!</span>
  //             </button>
  //           </li>
  //         </ul>
  //       </div>
  //     </nav>
  //     )
  //   }
  // }

  // const {state , dispatch} = useContext(UserContext)
  const [isSticky, setIsSticky] = useState(false);
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

const [isOpen , setIsOpen] = useState(false)
const { pathname } = useLocation();

const addlocation = '/addlocation';


const Navigate = useHistory();
const handleDonation = () => {
  Navigate.push('/Razor')
}

// Function to handle scroll event and toggle sticky navbar
const handleScroll = () => {
  if (window.scrollY > 0) {
    setIsSticky(true);
  } else {
    setIsSticky(false);
  }
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <>
    {/* <Sidebar {...{isOpen,setIsOpen}}/>
    { pathname === addlocation && (
        <IconButton size="small" color='inherit' onClick={()=>setIsOpen(true)}>
          <Menu />
        </IconButton>
        )} */}
      <nav className={isSticky ? "main-nav sticky" : "main-nav"} >
        {/* 1st logo part  */}
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/addlocation">Location</NavLink>
             </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/pilgrimage">Pilgrimages</NavLink>
            </li>
            <li>
              <NavLink to="/name">Gautam</NavLink>
          
            </li>
            <li>
              <button className="nav-button donate-button" onClick={handleDonation}>
                <span className="plus-icon">+</span>
                <span className="donate-text">Donate Now!</span>
              </button>
            </li>
            {!currentUser ? (
              <Button
                // className="nav-button"
                sx={{marginLeft:'50px' }}
                color="inherit"
                startIcon={<Lock />}
                onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
              >
                Login
              </Button>
            ) : (
              <UserIcons />
            )}
          </ul>
        </div>
      </nav>
      
    </>
    // <RenderMenu />
  );
};

export default Navbar;

