import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MerchCardContainer from "../Elements/MerchCardContainer";

const Merch = () => {
  return (
    <div className="container">
      <Header />
      <MerchCardContainer />
      <Footer />
    </div>
  );
};

export default Merch;
