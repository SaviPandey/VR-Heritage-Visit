import React, {useEffect , useContext} from 'react'
import { useHistory, Link } from "react-router-dom"
import { UserContext } from "../App"

 const Logout = () => {

    const {state , dispatch} = useContext(UserContext);

    const navigate = useHistory();
    useEffect(() => {
        // Redirect to the login page
        dispatch({type:'USER' , payload:false})
        navigate.push("/");
      }, [navigate]);

  return (
    <div>logout</div>
  )
}
export default Logout;