import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../container/login.css"
const Login = () => {
  const navigate = useNavigate();


  const navigateToSignUp = () => {
    navigate('/signin');
  }
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
          <button type="submit" className="sign-in-button">Sign In</button>
          <br />
          <span className="register-link" onClick={navigateToSignUp}>Register</span>
        </form>
      </div>
    </main>

    </div>
  )
}

export default Login
