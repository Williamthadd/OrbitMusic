import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ServiceCardContainer from "../Elements/ServiceCardContainer";

const Services = () => {
  return (
    <div className="container">
      <Header />
      <div className="flex jc-c page-title">
        <h1>Services</h1>
      </div>
      <ServiceCardContainer />
      <Footer />
    </div>
  );
};

export default Services;
