import React, { useState } from 'react'
import "../container/applyloan.css"
const Applyloan = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        panCardNumber: '',
        employeeType: '',
        address: '',
        loanType: '',
        requiredLoanAmount: '',
        requiredTenure: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = () => {
        alert('Form submitted');
        // Handle form submission logic here
      };
  return (
    <div className="form-card">
      <h1 className="form-heading">Loan Application Form</h1>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>PAN Card Number</label>
        <input
          type="text"
          name="panCardNumber"
          value={formData.panCardNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Employee Type</label>
        <select
          name="employeeType"
          value={formData.employeeType}
          onChange={handleChange}
          required
        >
          <option value="">Select Employee Type</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="contract">Contract</option>
        </select>
      </div>
      <div className="form-group">
        <label>Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Type of Loan</label>
        <select
          name="loanType"
          value={formData.loanType}
          onChange={handleChange}
          required
        >
          <option value="">Select Loan Type</option>
          <option value="personal">Personal Loan</option>
          <option value="home">Home Loan</option>
          <option value="auto">Auto Loan</option>
        </select>
      </div>
      <div className="form-group">
        <label>Required Loan Amount</label>
        <input
          type="number"
          name="requiredLoanAmount"
          value={formData.requiredLoanAmount}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Required Tenure (in months)</label>
        <input
          type="number"
          name="requiredTenure"
          value={formData.requiredTenure}
          onChange={handleChange}
          required
        />
      </div>
      <button className="submit-button" onClick={handleSubmit}>Proceed</button>
    </div>
  )
}

export default Applyloan
