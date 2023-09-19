import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MerchCardContainer from "../Elements/MerchCardContainer";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <MerchCardContainer />
      <Footer />
    </div>
  );
};

export default Home;
