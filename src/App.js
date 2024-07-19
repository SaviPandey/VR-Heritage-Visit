import React, { createContext, useReducer,useContext,useEffect,useRef } from "react";
import { initialState , reducer , actionTypes} from "./reducer/UseReducer";
// import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Pilgrimage from "./components/Pilgrimage";
// import Login from "./components/Login"
import Login from './components/user/login'
import Reg from "./components/Reg"
import Akshardham from "./blogs/akshardham";
import rammandir from "./pilgrimages/rammandir";
import { Switch, Route } from "react-router-dom";
import Logout from "./components/logout";
import ScheduleMeet from "./components/meeting";
import Rammandir from "./pilgrimages/rammandir";
import Apsit from "./pilgrimages/apsit"
import Location from "./components/Location";
import AddLocation from "./components/AddLocation";
import Notification from "./components/Notification";
import Loading from "./components/Loading";
import PILGRIM from "./components/pilgrims/pilgrim";
import Razer from "./components/razer";
import Lotus from "./blogs/lotus";

  //Context API to use useState in every single so we dont have to call it again and again
export const UserContext = createContext();

export const useValue = () => {
  return useContext(UserContext)
}


const App = () => {

  const [state,dispatch] = useReducer(reducer, initialState) 
  
  const mapRef = useRef()

  const containerRef = useRef();
  
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      dispatch({ type: 'UPDATE_USER', payload: currentUser });
    }
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{state , dispatch , mapRef , containerRef}}>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/blog">
        <Blog />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/pilgrimage">
        <Pilgrimage />
      </Route>

      <Route path= "/Akshardham">
        <Akshardham />
      </Route>

      <Route path= "/rammandir">
        <Rammandir />
      </Route>
      <Route path= "/apsit">
        <Apsit />
      </Route>
{/* 
      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Reg />
      </Route>

      <Route path="/logout">
    <Logout />
      </Route> */}
      <Route path="/submit-meeting-form">
        <ScheduleMeet />
      </Route>
      <Route path="/location">
        <Location />
      </Route>
      <Route path="/addlocation">
        <AddLocation />
      </Route>
      <Route path="/Razor">
        <Razer />
      </Route>
      <Route path="/lotus">
        <Lotus />
      </Route>
    </Switch>
    <Login />
    <Notification />
    <Loading />
    <PILGRIM />
    </UserContext.Provider>
    </div>
  );
};

export default App;
