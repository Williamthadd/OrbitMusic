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
import { findPackagePrice, findServiceByID } from "./Utils/find";

import "./Styles/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentServices, setCurrentServices] = useState(0);
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChangePrice = (newPrice) => {
    setTotalPrice(newPrice);
  };

  function handleDeleteCart(service) {
    const serviceIndex = carts.findIndex((cart) => cart.serv === service);

    if (serviceIndex !== -1) {
      handleChangePrice(
        totalPrice -
          findPackagePrice(carts[serviceIndex].serv, carts[serviceIndex].pack)
      );
      setCarts([
        ...carts.slice(0, serviceIndex),
        ...carts.slice(serviceIndex + 1),
      ]);
    }
  }

  function handlePackageChange(service, pack) {
    const serviceIndex = carts.findIndex((cart) => cart.serv === service);
    console.log(serviceIndex);
    console.log(carts[serviceIndex]);

    // Change service package in carts
    if (serviceIndex !== -1) {
      setCarts([
        ...carts.slice(0, serviceIndex),
        { serv: service, pack: pack },
        ...carts.slice(serviceIndex + 1),
      ]);
    }
  }

  function handleChangeCarts(service) {
    const foundService = findServiceByID(service);
    // const serviceIndex = carts.findIndex((cart) => cart.serv === service);
    console.log(foundService);

    if (
      foundService &&
      carts.findIndex((cart) => cart.serv === service) === -1
    ) {
      // Check if the service was found before adding it to the cart
      setCarts([
        ...carts,
        { serv: foundService.id, pack: foundService.package[0].packname },
      ]);
      handleChangePrice(totalPrice + foundService.package[0].price);
    }
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
                totalPrice={totalPrice}
                handleChangePrice={handleChangePrice}
                handlePackageChange={handlePackageChange}
                handleDeleteCart={handleDeleteCart}
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
                handleChangeCarts={handleChangeCarts}
              />
            }
          />
          <Route
            path="/PaymentSuccessful"
            element={
              <PaymentSuccessful
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
