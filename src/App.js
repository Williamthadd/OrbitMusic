import "./App.css";
import Home from "./Pages/Home";
import Merch from "./Pages/Merch";
import Cart from "./Pages/Cart";
import Services from "./Pages/Services";
import Profile from "./Pages/Profile";
import AboutUs from "./Pages/AboutUs";
import PaymentSuccessful from "./Pages/PaymentSuccessful";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

import ServiceDetails from "./Pages/ServiceDetails";

import "./Styles/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentServices, setCurrentServices] = useState("");
  const [carts, setCarts] = useState([""]);

  function handleChangeCarts(carts) {
    setCarts(carts);
  }

  function handleChangePage(text) {
    console.log(text);
    setCurrentPage(text);
  }

  function handleChangeServices(text) {
    console.log(text);
    console.log(currentPage);
    setCurrentServices(text);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currentPage={currentPage}
                handleChangePage={handleChangePage}
              />
            }
          />
          <Route
            path="/merch"
            element={
              <Merch
                currentPage={currentPage}
                handleChangePage={handleChangePage}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                currentPage={currentPage}
                handleChangePage={handleChangePage}
                carts={carts}
                handleChangeCarts={handleChangeCarts}
              />
            }
          />
          <Route
            path="/services"
            element={
              <Services
                currentPage={currentPage}
                handleChangePage={handleChangePage}
                handleChangeServices={handleChangeServices}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                currentPage={currentPage}
                handleChangePage={handleChangePage}
              />
            }
          />
          <Route
            path="/about-us"
            element={
              <AboutUs
                currentPage={currentPage}
                handleChangePage={handleChangePage}
              />
            }
          />
          <Route
            path="/success"
            element={
              <PaymentSuccessful
                currentPage={currentPage}
                handleChangePage={handleChangePage}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                currentPage={currentPage}
                handleChangePage={handleChangePage}
              />
            }
          />
          <Route
            path="/login"
            element={
              <Login
                currentPage={currentPage}
                handleChangePage={handleChangePage}
              />
            }
          />
          <Route
            path="/services/details"
            element={
              <ServiceDetails
                currentServices={currentServices}
                currentPage={currentPage}
                handleChangePage={handleChangePage}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
