import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CartCard from "../Components/CartCard";
import { findServiceByID } from "../Utils/find";
import { useState } from "react";

export default function Cart(props) {
  const [totalPrice, setTotalPrice] = useState(
    findServiceByID(props.carts[0]).package[0].price
  );

  const handleChangePrice = (newPrice) => {
    setTotalPrice(newPrice);
  };

  return (
    <div className="container w-100">
      <Header
        currentPage={props.currentPage}
        handleChangePage={props.handleChangePage}
      />
      <div className="flex jc-c fd-c page-title body-content ">
        <h1>Cart</h1>
        <div className="flex fd-c ai-s w-100">
          <h4>Service Choosen</h4>
          <div className="flex fd-c ai-c w-100" style={{ gap: "15px" }}>
            {props.carts.map((service) => (
              <CartCard
                key={service}
                service={findServiceByID(service)}
                initialPrice={totalPrice}
                handleChangePrice={handleChangePrice}
              />
            ))}
          </div>
        </div>
        <div>{totalPrice}</div>
      </div>
      <Footer />
    </div>
  );
}
