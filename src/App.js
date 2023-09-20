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

import AttributeDesignDetails from "./Pages/ServiceDetails/AtributeDesignDetail";
import ConsultingDetail from "./Pages/ServiceDetails/ConsultingDetail";
import ProducingDetail from "./Pages/ServiceDetails/ProducingDetail";
import PromotionDetail from "./Pages/ServiceDetails/PromotionDetail";
import TalentManagementDetail from "./Pages/ServiceDetails/TalentManagementDetail";

import "./Styles/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  function handleChangePage(text) {
    console.log(text);
    setCurrentPage(text);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/services"
            element={<Services handleChangePage={handleChangePage} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/success" element={<PaymentSuccessful />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/*  */}
          {/* Service Details Route */}
          {/*  */}
          <Route
            path="/services/details"
            element={<ServiceDetails currentPage={currentPage} />}
          />
          <Route
            path="/services/AttributeDesign"
            element={<AttributeDesignDetails />}
          />
          <Route path="/services/Consulting" element={<ConsultingDetail />} />{" "}
          <Route path="/services/Producing" element={<ProducingDetail />} />{" "}
          <Route path="/services/Promotion" element={<PromotionDetail />} />{" "}
          <Route
            path="/services/TalentManagement"
            element={<TalentManagementDetail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
