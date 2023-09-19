import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function Profile() {
  return (
    <div className="container">
      <Header />
      <div className="flex jc-c page-title">
        <h1>Profile</h1>
      </div>
      <Footer />
    </div>
  );
}
