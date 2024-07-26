import React from 'react';
import { useNavigate } from 'react-router-dom';
// import sampleImage from '../image/loan.jpg'; // Make sure to replace with your actual image path
import "../container/main.css"
const Main = () => {
    const navigate = useNavigate();

    const navigateToSignIn = () => {
      navigate('/signin');
    };
  
    const navigateToLogin = () => {
      navigate('/login');
    };
  return (
    <main className="main-section1">
      <div className="left-section">
        <h1>
          Get Instant <span className="highlight">Loan</span>
        </h1>
        <p className="paragraph">
          Unlock your future with tailored loans, where we calculate your credit risk to empower your financial journey.
        </p>
        <div className="buttons">
          <button className="button" onClick={navigateToSignIn}>Sign In</button>
          <button className="button" onClick={navigateToLogin}>Login</button>
        </div>
      </div>
      <div className="right-section">
        <img src={"https://img.freepik.com/premium-vector/loan-agreement-concept-illustration-suitable-landing-page-ui-web-app-intro-card-editorial_566886-11276.jpg"} alt="Sample" className="main-image" />
      </div>
    </main>
  )
}

export default Main
