import Button1 from "./Button1";

export default function MerchCard({ image, title, artist, size, price }) {
  return (
    <div className="inner-card-container merchflexbox" style={{height:"550px"}}>
      <img src={image} alt="tshirts" id="merchimg"></img>
      <div className="inner-card-desc flex fd-c ai-c">
        <h3>{title}</h3>
        <h3>{artist}</h3>
        <p className="mt-2">{size}</p>
        <h4>{price}</h4>
        <Button1 text={"Purchase"} />
      </div>
    </div>
  );
}
