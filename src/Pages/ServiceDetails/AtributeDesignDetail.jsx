import React from "react";
import Header from "../../Components/Header";
import AttributeDesign from "../../Assets/DesignLogo.png";
import Footer from "../../Components/Footer";

const AtributeDesignDetail = () => {
  return (
    <div className="Service-Detail">
      <Header></Header>
      <h1 className="Service-Title">Services</h1>
      <div className="Service-Detail-Card">
        <img
          src={AttributeDesign}
          alt="Promotion"
          className="Service-Image"
        ></img>
        <div className="Service-Detail-Text">
          <p className="Title-Services-Detail">Attribute Design</p>
          <p className="Description-Services-Detail">
            We will design your music attributes and branding to resonate with
            your target audience, creating a cohesive and memorable identity
            that sets you apart in the music industry. Our creative team will
            work closely with you to develop a unique visual style, logo, and
            album artwork that reflect your music's essence and connect with
            your fans on a deeper level. This branding will not only enhance
            your online presence but also leave a lasting impression on your
            listeners, helping to foster a strong and loyal fan base for your
            music career.
          </p>
          <p className="Description-Services-Detail">
            <b>Requirement</b>: Design can't contain hate speech, racism, or any
            kind of discrimination
          </p>
          <p className="Price-Services-Detail">IDR 500K</p>
          <button className="Button-Services-Detail">Add To Cart</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AtributeDesignDetail;
