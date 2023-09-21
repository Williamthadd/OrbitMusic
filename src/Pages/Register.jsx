import React, { useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <Header />
      <div className="flex jc-c page-title">
        <h1>Register</h1>
      </div>

      <div className='Profile-Box'>
       
      <form onSubmit={handleSubmit}>
          <div className="form-group-Profile">
            <p htmlFor="username">Username:</p>
            <input
              className="Input-Profile"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group-Profile">
            <p htmlFor="email">Email:</p>
            <input
              className="Input-Profile"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group-Profile">
            <p htmlFor="password">Password:</p>
            <input
              className="Input-Profile"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group-Profile">
            <p htmlFor="phoneNumber">Phone Number:</p>
            <input
              className="Input-Profile"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <Link to="/">
          <button type="submit" className="button1 form-group-Profile">Register</button>
          </Link>
        </form>
        <p>Already have an account?</p>
        <Link to="/login">
          <button type="submit" className="button1 form-group-Profile">Login</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
