import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CartCard from "../Components/CartCard";
import { findServiceByID } from "../Utils/find";
import { formatNumberToK } from "../Utils/convert";
import { Link } from "react-router-dom";
import RadioGroup from "../Components/RadioButton";
import PaymentData from "../Data/PaymentData";
import InputField from "../Components/InputField";
import { useState } from "react";

export default function Cart(props) {
  // function calculateTotalPrice(carts) {
  //   let totalPrice = 0;
  //   carts.forEach((cart) => {
  //     totalPrice += findPackagePrice(cart.serv, cart.pack.packname);
  //   });
  //   props.handleChangePrice(totalPrice);
  // }

  const [selectedOption, setSelectedOption] = useState(PaymentData[0].value);

  const handleOptionChange = (newValue) => {
    setSelectedOption(newValue);
  };

  return (
    <div className="container w-100" onLoad={console.log(props.carts)}>
      <Header
        currentPage={props.currentPage}
        handleChangePage={props.handleChangePage}
      />
      <div className="flex jc-c fd-c page-title body-content ">
        <h1>Cart</h1>
        <div className="flex fd-c ai-s w-100">
          <h4>Service Choosen</h4>
          {props.carts.length > 0 ? (
            <div className="w-100">
              <div className="flex fd-c ai-c w-100" style={{ gap: "15px" }}>
                {props.carts.map((cart) => (
                  <CartCard
                    key={cart.serv}
                    service={findServiceByID(cart.serv)}
                    initialPrice={props.totalPrice}
                    handleChangePrice={props.handleChangePrice}
                    pack={cart.pack}
                    handlePackageChange={props.handlePackageChange}
                    handleDeleteCart={props.handleDeleteCart}
                  />
                ))}
              </div>

              <div className="mt-2 flex fd-c ai-s">
                <div
                  style={{
                    color: "#FFF",
                    fontFamily: "Orbitron",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                  }}
                >
                  Total Price
                </div>
                <div className="cart-total-price">
                  {formatNumberToK(props.totalPrice)}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ fontWeight: "400" }}>Cart is Empty</div>
          )}

          <div
            className="w-100 mt-3 mb-2"
            style={{ width: "100%", flexGrow: "1" }}
          >
            <Link
              className="cart-add-more-services w-100"
              style={{ flexGrow: "1" }}
            >
              Add More Services
            </Link>
          </div>
        </div>

        <div className="flex ai-s fd-c">
          <div className="mt-4 mb-2">Choose Payment Method</div>
          <div className="">
            <RadioGroup
              options={PaymentData}
              selectedValue={selectedOption}
              onChange={handleOptionChange}
              className={"payment-radio"}
            />
          </div>

          <div
            className="flex fd-c ai-c jc-c mt-3 w-100"
            style={{ gap: "20px" }}
          >
            <InputField text={"Phone Number"} placeholder={"+62xxxxxxxxx"} />
            <InputField
              text={"Email Address"}
              placeholder={"example@domain.com "}
            />
            <button
              className="w-100 flex jc-c ai-c mb-4"
              style={{
                background: "#6b79bd",
                padding: "10px",
                color: "#FFF",
                border: "none",
                borderRadius: "5px",
                fontWeight: "600",
              }}
            >
              One tap purchase
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
