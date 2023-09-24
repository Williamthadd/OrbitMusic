import Header from "../Components/Header";
import Footer from "../Components/Footer";
import CartCard from "../Components/CartCard";
import { findServiceByID } from "../Utils/find";

export default function Cart(props) {
  // function calculateTotalPrice(carts) {
  //   let totalPrice = 0;
  //   carts.forEach((cart) => {
  //     totalPrice += findPackagePrice(cart.serv, cart.pack.packname);
  //   });
  //   props.handleChangePrice(totalPrice);
  // }

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
          <div className="flex fd-c ai-c w-100" style={{ gap: "15px" }}>
            {props.carts.map((cart) => (
              <CartCard
                key={cart.serv}
                service={findServiceByID(cart.serv)}
                initialPrice={props.totalPrice}
                handleChangePrice={props.handleChangePrice}
                pack={cart.pack}
                handlePackageChange={props.handlePackageChange}
              />
            ))}
          </div>
        </div>
        <div>{props.totalPrice}</div>
      </div>
      <Footer />
    </div>
  );
}
