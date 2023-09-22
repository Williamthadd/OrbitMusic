import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Cart(props) {
  return (
    <div className="container">
      <Header
        currentPage={props.currentPage}
        handleChangePage={props.handleChangePage}
      />
      <div className="flex jc-c page-title">
        <h1>Cart</h1>
      </div>
      <Footer />
    </div>
  );
}
