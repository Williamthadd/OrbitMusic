import "./App.css";
import Home from "./Pages/Home";
import Merch from "./Pages/Merch";
import Cart from "./Pages/Payment";
import Services from "./Pages/Services";
import Profile from "./Pages/Profile";
import AboutUs from "./Pages/AboutUs";
import PaymentSuccessful from "./Pages/PaymentSuccessful";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import "./Styles/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/success" element={<PaymentSuccessful />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
