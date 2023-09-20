import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { findServiceByTitle } from "../Utils/find";
import { formatNumberToK } from "../Utils/convert";

export default function ServiceDetails(props) {
  const selectedService = findServiceByTitle(props.currentPage);

  return (
    <div className="container">
      <Header />
      <div className="flex jc-c page-title">
        <h1>Services</h1>
      </div>

      <div className="Service-Detail-Card">
        <img
          src={selectedService.image}
          alt="Promotion"
          className="Service-Image"
        ></img>
        <div className="Service-Detail-Text">
          <p className="Title-Services-Detail">{selectedService.title}</p>
          <p className="Description-Services-Detail">
            {selectedService.details}
          </p>
          <p className="Description-Services-Detail">
            <b>Requirement</b>: {selectedService.requirements}
          </p>
          <p className="Price-Services-Detail">
            IDR {formatNumberToK(selectedService.price)}
          </p>
          <button className="Button-Services-Detail">Add To Cart</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
