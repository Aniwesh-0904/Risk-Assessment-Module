import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../container/signin.css"
const Signin = () => {
    
        const navigate = useNavigate();
    
    
        const navigateToLogin = () => {
            navigate('/login');
          };
        
    
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
          <span className="login-link" onClick={navigateToLogin}>Login</span>
        </form>
      </div>
    </main>

    </>
  )
}

export default Signin
