import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ServiceCardContainer from "../Elements/ServiceCardContainer";

const Services = (props) => {
  return (
    <div className="container">
      <Header
        currentPage={props.currentPage}
        handleChangePage={props.handleChangePage}
      />
      <div className="flex jc-c page-title">
        <h1>Services</h1>
      </div>
      <ServiceCardContainer handleChangeServices={props.handleChangeServices} />
      <Footer />
    </div>
  );
};

export default Services;
