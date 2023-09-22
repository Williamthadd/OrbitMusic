import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { findServiceByTitle } from "../Utils/find";
import { formatNumberToK } from "../Utils/convert";
import LinkButton from "../Components/LinkButton";

export default function ServiceDetails(props) {
  const selectedService = findServiceByTitle(props.currentServices);

  return (
    <div className="container">
      <Header
        currentPage={props.currentPage}
        handleChangePage={props.handleChangePage}
      />
      <div className="flex jc-c page-title">
        <h1>Services</h1>
      </div>

      <div
        className="Service-Detail-Card"
        style={{ paddingBottom: "30px", paddingRight: "30px" }}
      >
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
              <b>You will get</b>: {selectedService.YouWillGet}
          </p>
          <p className="Description-Services-Detail">
            <b>Requirement</b>: {selectedService.requirements}
          </p>
          <p className="Price-Services-Detail">
            IDR {formatNumberToK(selectedService.price)}
          </p>
          <LinkButton text={"Add To Cart"}></LinkButton>
        </div>
      </div>
      <Footer />
    </div>
  );
}
