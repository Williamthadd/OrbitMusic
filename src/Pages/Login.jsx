import React, { useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { auth, database, createUserWithEmailAndPassword, ref, set, signInWithEmailAndPassword } from "../Firebase/FirebaseConfig";

const Login = () => {

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const email = e.target[0].value;
    const password = e.target[1].value;
    
    console.log("First step");
    e.preventDefault();
    console.log("start");

    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully!');
      // You can redirect the user or perform other actions upon successful login
      navigate('/');
    } catch (error) {
      setErr(error.message);
      console.error('Login error:', error.message);
      // Handle login errors (e.g., display an error message)
    }
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
              placeholder='email...'
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
              placeholder='password...'
              required
            />
          </div>

          {err && <span style={{ color: 'red' }}>Email or password is not matched</span>}
          <br />
          
          <button type="submit" className="button1 form-group-Profile">Login</button>
          
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
