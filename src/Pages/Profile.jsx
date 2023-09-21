import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function Profile() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //dummy
  const username = "Christian Nabil";
  const email = "nabil@gmail.com";
  const phoneNumber = "+62 9612737123";
  //dummy

  return (
    <div>
      <Header />
      <div className="flex jc-c page-title">
        <h1>Profile</h1>
      </div>

      <div className="Profile-Data">
        <p><b>Username</b>: {username}</p> 
        <p><b>Email</b>: {email}</p>
        <p><b>Phone Number</b>: {phoneNumber}</p>
      </div>

      <div className="Profile-Box">
        <h2 className="Update-Profile-Title">Update Profile?</h2>
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
          <button type="submit" className="button1 form-group-Profile">Update</button>
        </form>
        <Link to="/login">
          <button className="button1 form-group-Profile Profile-Button2">LogOut</button>
        </Link>
        
      </div>

      <Footer />
    </div>
  );
}
