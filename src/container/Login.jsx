import React from 'react'
// import Main_panel from '../container/Main_panel';
import { useNavigate } from 'react-router-dom';
import "../container/login.css"
// import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const navigate = useNavigate();

  // const { loginWithRedirect } = useAuth0();
  const navigateToSignUp = () => {
    navigate('/signin');
  }
  function handleSignIn  ()  {
   navigate("/mainpanel")
  };
  return (
    <div>
      <main className="main-section">
      <div className="card-container">
        <form>
          <input type="text" className="form-input" placeholder=" User's ID" />
          <br />
          <input type="password" className="form-input" placeholder="Password" />
          <br />
          <div className="checkbox-container">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me" className="checkbox-label">Remember me</label>
          </div>
          <span className="forgot-password">Forgot your password?</span>
          <br />
          <button  onClick= {handleSignIn} type="submit" className="sign-in-button">Sign In</button>
          <br />
          <span className="register-link" onClick={navigateToSignUp}>Register</span>
        </form>
      </div>
    </main>

    </div>
  )
}

export default Login
