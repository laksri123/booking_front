
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

//  const handleChange = (e) => {
// setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
// };
const navigate = useNavigate()

// const { user,loading, error, dispatch } = useContext(AuthContext);
    
 

  // TODO *************
  const handleclick = async(e) =>{
    e.preventDefault();
  
    try {
      
        const base_url= "https://booking-vw91.onrender.com/api";
        const res = await axios.post(`${base_url}/auth/register`, {username,email,password});
       console.log(res);
        navigate("/")


  }
  catch(error)  {
    // Handle error
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Error response:', error.response);
    } else if (error.request) {
      // No response received from the server
      console.error('No response received:', error.request);
    } else {
      // Something else happened in setting up the request
      console.error('Error setting up request:', error.message);
    }
}
  }

  

  return (
    <div className="login">
    <div className="login_box">
      <h1> SignUp</h1>
    
        <input  
        type="text"
         placeholder="username"
        id="username"
        
        onChange={(e) => setUserName(e.target.value)}
       
        ></input>
        <input
          type="text"
          className="register__textBox"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <input
          type="text"
          className="register__textBox"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="register__btn"
          onClick={handleclick}
        >
          Register
        </button>
        <div style={{ marginTop: "20px" }}>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      
    </div>
    </div>
  );

}

export default Register;
