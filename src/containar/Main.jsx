import React from 'react'
import "../containar/main.css"
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/')};
  return (
 <>
  <main className="main-section">
      <div className="card-container">
        <form>
          <input type="text" className="form-input" placeholder="Create User ID" />
          <br />
          <input type="email" className="form-input" placeholder="Email ID" />
          <br />
          <input type="password" className="form-input" placeholder="Password" />
          <br />
          <input type="tel" className="form-input" placeholder="Mobile Number" />
          <br />
          <button type="submit" className="sign-in-button">Submit</button>
          <br />
          <span className="login-link" onClick={handleLoginClick}>Login</span>
        </form>
      </div>
    </main>
 </>
  );
}

export default Main
