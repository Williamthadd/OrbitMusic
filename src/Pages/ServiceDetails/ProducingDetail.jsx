import React from "react";
import Header from "../../Components/Header";
import Producing from "../../Assets/ProducingLogo.png";
import Footer from "../../Components/Footer";

const ProducingDetail = () => {
  return (
    <div className="Service-Detail">
      <Header></Header>
      <h1 className="Service-Title">Services</h1>
      <div className="Service-Detail-Card">
        <img src={Producing} alt="Promotion" className="Service-Image"></img>
        <div className="Service-Detail-Text">
          <p className="Title-Services-Detail">Producing</p>
          <p className="Description-Services-Detail">
            We can edit your music video to ensure it aligns perfectly with your
            artistic vision and enhances the overall impact of your music. Our
            skilled video editors will bring creativity and technical expertise
            to the table, crafting visuals that captivate your audience and
            complement your music's narrative. Furthermore, if you're looking
            for lyrical expertise or assistance with songwriting, we can also
            serve as your ghostwriter. Our team of talented wordsmiths can
            collaborate with you to create compelling lyrics that convey your
            message and emotions with authenticity and finesse.
          </p>
          <p className="Description-Services-Detail">
            <b>Requirement</b>: Music can't contain hate speech, racism, or any
            kind of discrimination
          </p>
          <p className="Price-Services-Detail">IDR 950K</p>
          <button className="Button-Services-Detail">Add To Cart</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProducingDetail;
