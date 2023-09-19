import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="flex jc-c page-title">
        <h1>Home</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
