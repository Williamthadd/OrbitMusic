import React, { useState } from 'react';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from 'react-router-dom';
import { auth, database, createUserWithEmailAndPassword, ref, set } from "../Firebase/FirebaseConfig";

const Register = () => {

  const [err, setErr] = useState(null);

  // Use useNavigate instead of useHistory
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const phoneNumber = e.target[3].value;
    
    console.log("First step");
    e.preventDefault();
    console.log("start");
  
    try {
      
      // Create a new user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("run usercredential");
  
      // Store additional user information in Firebase Realtime Database
      await set(ref(database, 'users/' + userCredential.user.uid), {
        username,
        email,
        password,
        phoneNumber
      });
      console.log("Final Step");
      // Redirect to the login page or perform any other action
      // You can use React Router for navigation
      navigate('/Login');
    } catch (error) {
      // Log the entire error object to get more information
      setErr(error.message);
      console.error('Error registering user:', error);
  
    }
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
              placeholder='name...'
              required
            />
          </div>
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
              placeholder='Must be Alphanumberic & Symbolic...'
              required
            />
          </div>
          <div className="form-group-Profile">
            <p htmlFor="phoneNumber">Phone Number:</p>
            <input
              className="Input-Profile"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder='Phone Number...'
              required
            />
          </div>

          {err && <span style={{ color: 'red' }}>Something went wrong</span>}
          <br />

          <button className="button1 form-group-Profile" type="submit">
            Register
          </button>

          
        </form>

        <p>Already have an account?</p>
        <Link to="/login">
          <button className="button1 form-group-Profile">Login</button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Register;
