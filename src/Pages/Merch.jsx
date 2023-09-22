import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MerchCardContainer from "../Elements/MerchCardContainer";

const Merch = (props) => {
  return (
    <div className="container">
      <Header
        currentPage={props.currentPage}
        handleChangePage={props.handleChangePage}
      />
      <div className="flex jc-c page-title">
        <h1>Merch</h1>
      </div>
      <MerchCardContainer />
      <Footer />
    </div>
  );
};

export default Merch;
