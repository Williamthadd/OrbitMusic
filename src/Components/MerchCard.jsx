import Button1 from "./Button1";

export default function MerchCard({ image, title, artist, size, price }) {
  return (
    <div className="merch-card-container">
      <img src={image} alt="tshirts" className="merch-card-img"></img>
      <div className="merch-card-desc flex fd-c ai-c">
        <h3>{title}</h3>
        <h3>{artist}</h3>
        <p>{size}</p>
        <h4>{price}</h4>
        <Button1 text={"Purchase"} />
      </div>
    </div>
  );
}
