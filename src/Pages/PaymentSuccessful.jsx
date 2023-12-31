import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const PaymentSuccessful = (props) => {
  return (
    <div className="container">
      <Header
        currentPage={props.currentPage}
        handleChangePage={props.handleChangePage}
      />
      <div className="Payment-Successful">
        <h1>Payment Successful 🥳</h1>

        <h3>Please check your email tomorrow...</h3>
        <Link to="/">
          <button className="button1">Back To Home</button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default PaymentSuccessful;
