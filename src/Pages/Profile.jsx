import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { auth, database, ref, get, update } from "../Firebase/FirebaseConfig";

export default function Profile(props) {
  const [dataUser, setUserData] = useState(null);
  const user = auth.currentUser;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (user) {
      const userRef = ref(database, `users/${user.uid}`);

      get(userRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            setUserData(data);

            // Initialize the form data with existing user data
            setFormData({
              username: data.username || '',
              email: data.email || '',
              password: data.password || '',
              phoneNumber: data.phoneNumber || '',
            });
          } else {
            console.log('No data available for the current user');
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error.message);
        });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedUserData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
      };

      // Update user data in the Realtime Database
      const userRef = ref(database, `users/${auth.currentUser.uid}`);
      await update(userRef, updatedUserData);

      // Check if the user's authentication object exists and has the updateEmail method
    if (auth.currentUser && auth.currentUser.updateEmail) {
      // Update email if it has changed
      if (auth.currentUser.email !== formData.email) {
        await auth.currentUser.updateEmail(formData.email);
      }
    }

    // Check if the user's authentication object exists and has the updatePassword method
    if (auth.currentUser && auth.currentUser.updatePassword) {
      // Update password if it has changed
      if (formData.password) {
        await auth.currentUser.updatePassword(formData.password);
      }
    }

      console.log('User profile updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating user profile:', error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/Login');
    } catch (error) {
      console.error('Error during logout:', error.message);
    }
  };

  if (user) {
    const { username, email, phoneNumber } = dataUser || {};

    return (
      <div className="container">
        <Header
          currentPage={props.currentPage}
          handleChangePage={props.handleChangePage}
        />
        <div className="flex jc-c page-title">
          <h1>Profile</h1>
        </div>

        <div className="Profile-Data">
          <p>
            <b>Username</b>: {username || ''}
          </p>
          <p>
            <b>Email</b>: {email || ''}
          </p>
          <p>
            <b>Phone Number</b>: {phoneNumber || ''}
          </p>
        </div>

        <div className="Profile-Box">
          <h2 className="Update-Profile-Title">Update Profile?</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group-Profile">
              <p htmlFor="username">Username:</p>
              <input
                placeholder="Username..."
                className="Input-Profile"
                type="text"
                id="username"
                name="username"
                value={formData.username || ''}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
            <div className="form-group-Profile">
              <p htmlFor="email">Email:</p>
              <input
                placeholder="Email..."
                className="Input-Profile"
                type="email"
                id="email"
                name="email"
                value={formData.email || ''}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group-Profile">
              <p htmlFor="password">Password:</p>
              <input
                placeholder="Password..."
                className="Input-Profile"
                type="password"
                id="password"
                name="password"
                value={formData.password || ''}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            <div className="form-group-Profile">
              <p htmlFor="phoneNumber">Phone Number:</p>
              <input
                placeholder="Phone Number..."
                className="Input-Profile"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber || ''}
                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              />
            </div>
            <button type="submit" className="button1 form-group-Profile">
              Update
            </button>
          </form>
          
          <button onClick={handleLogout} className="button1 form-group-Profile Profile-Button2">
            Logout
          </button>
          
        </div>

        <Footer />
      </div>
    );
  } else {
    return (
      <div className="container">
        <Header
          currentPage={props.currentPage}
          handleChangePage={props.handleChangePage}
        />
        <div className="distance-unlogin"></div>
        <center>
        <h2 className="Update-Profile-Title">Seems you haven't logged in yet</h2>
        <Link to="/Login">
        <button type="submit" className="button1">
          Login?
        </button>
        </Link>
        </center>

        <div className="distance-unlogin"></div>

        <Footer />
      </div>
    );
  }
}