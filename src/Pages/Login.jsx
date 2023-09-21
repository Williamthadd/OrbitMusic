import React, { useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
        <h1>Login</h1>
      </div>

      <div className='Profile-Box'>
        <form onSubmit={handleSubmit}>
          <div className="form-group-Profile">
            <p htmlFor="email">Email:</p>
            <input
              className="Input-Profile"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
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
              required
            />
          </div>
          <Link to="/">
            <button type="submit" className="button1 form-group-Profile">Login</button>
          </Link>
        </form>
        
        <p>Don't have an account yet?</p>
        <Link to="/register">
          <button type="submit" className="button1 form-group-Profile">Register</button>
        </Link>

      </div>

      <Footer />
    </div>
  );
}

export default Login;
