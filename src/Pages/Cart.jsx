import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CartCard from "../Components/CartCard";
import { findServiceByID } from "../Utils/find";
import { formatNumberToK } from "../Utils/convert";
import { Link, useNavigate } from "react-router-dom";
import RadioGroup from "../Components/RadioButton";
import PaymentData from "../Data/PaymentData";
import InputField from "../Components/InputField";
import { useState, useEffect } from "react";
import { auth, database, ref, get, update } from "../Firebase/FirebaseConfig";

export default function Cart(props) {
  // function calculateTotalPrice(carts) {
  //   let totalPrice = 0;
  //   carts.forEach((cart) => {
  //     totalPrice += findPackagePrice(cart.serv, cart.pack.packname);
  //   });
  //   props.handleChangePrice(totalPrice);
  // }

  const user = auth.currentUser;

  const [selectedOption, setSelectedOption] = useState(PaymentData[0].value);
  const handleOptionChange = (newValue) => {
    setSelectedOption(newValue);
  };

  // validate input
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [file, setFile] = useState('');
  const navigate = useNavigate();
  const [err, setErr] = useState(false);

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.value);
  };

  const handleButtonClick = () => {
    if (phoneNumber.trim() === '' || email.trim() === '' || file.trim() === '') {
      setErr(true);
    } else {
      setErr(false);
      console.log('Navigating to /PaymentSuccessful');
      navigate('/PaymentSuccessful');
      window.location.reload();
    }
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
              to="/Services"
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
          
          <input
            text={"Phone Number"} 
            type="number"
            placeholder={"+62xxxxxxxxx"} 
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="w-100"
            style={{ padding: "10px", borderRadius: "5px", outline: "none" }}
          />

          <input
            text={"Email Address"}
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={"example@domain.com "}
            className="w-100"
            style={{ padding: "10px", borderRadius: "5px", outline: "none"}}
          />
          
          <div className="fileinput">
            <label htmlFor="fileInput" className="labelforfile">Submit your music zip folder  </label>
            <input
              className="inputforfile"
              type="file"
              value={file}
              onChange={handleFileChange}
            />
          </div>
          

          {err && <span style={{ color: 'red' }}>Please fill all informations correctly</span>}
          <br />

          {user ? (
          
            <button
              className="flex jc-c ai-c mb-4"
              onClick={handleButtonClick}
              type="submit"
              style={{
                background: "#6b79bd",
                padding: "10px",
                color: "#FFF",
                border: "none",
                borderRadius: "5px",
                fontWeight: "600",
                fontSize: "20px",
                width: "102%"
              }}
            >
              Purchase
            </button>
          
        ) : (
          <Link to="/Login" style={{ textDecoration: 'none' }}>
            <button
              className="flex jc-c ai-c mb-4"
              style={{
                background: "#6b79bd",
                padding: "10px",
                color: "#FFF",
                border: "none",
                borderRadius: "5px",
                fontWeight: "600",
                fontSize: "20px",
                width: "102%"
              }}
            >
              Do Login First
            </button>
          </Link>
        )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
