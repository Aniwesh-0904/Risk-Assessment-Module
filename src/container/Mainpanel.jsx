import React from 'react'
import "../container/mainpanel.css"
import { useNavigate } from 'react-router-dom'; 
const Mainpanel = () => {
    const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/apply'); // Replace '/apply' with your desired route
  };
  return (
    
    <div>
    <div className="container3">
      <h1 className="heading">Welcome, Let's get Started</h1>
      <div className="card">
        <button onClick={handleApplyClick} className="button-64">
          <span className="text">Apply for Loan</span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Mainpanel
