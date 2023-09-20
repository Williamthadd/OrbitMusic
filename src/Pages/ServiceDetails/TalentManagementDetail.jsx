import React from "react";
import Header from "../../Components/Header";
import TalentManagementLogo from "../../Assets/ManagementLogo.png";
import Footer from "../../Components/Footer";

const TalentManagementDetail = () => {
  return (
    <div className="Service-Detail">
      <Header></Header>
      <h1 className="Service-Title">Services</h1>
      <div className="Service-Detail-Card">
        <img
          src={TalentManagementLogo}
          alt="Promotion"
          className="Service-Image"
        ></img>
        <div className="Service-Detail-Text">
          <p className="Title-Services-Detail">Talent Management</p>
          <p className="Description-Services-Detail">
            Join our music agency, and unlock a world of opportunities to propel
            your music career to new heights. With our extensive network,
            industry expertise, and a dedicated team of professionals, you'll
            gain access to invaluable resources and support tailored to your
            unique musical journey. We're not just an agency; we're your
            partners in success. Together, we'll navigate the music industry's
            complexities, expand your fan base, and help you achieve your
            dreams. Join us today, and let's make your music aspirations a
            reality.
          </p>
          <p className="Description-Services-Detail">
            <b>Requirement</b>: Must be willing to take part in training for 6
            months after passing the test{" "}
          </p>
          <p className="Price-Services-Detail">IDR 400K (Regist Fee)</p>
          <button className="Button-Services-Detail">Add To Cart</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default TalentManagementDetail;
