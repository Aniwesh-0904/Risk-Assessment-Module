// Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../containar/header.css"

const Header = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
      navigate('/main');
    };
  

  return (
    <>
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
          <span className="register-link" onClick={handleRegisterClick}>Register</span>
        </form>
      </div>
    </main>

    </>
  );
}

export default Header;
