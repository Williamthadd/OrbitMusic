import MerchCard from "../Components/MerchCard";
import Merch from "../Data/MerchData";

export default function MerchCardContainer() {
  return (
    <div className="card-container flex">
      {Merch.map((item) => (
        <MerchCard
          key={item.id} // Add a unique key prop
          image={item.image}
          title={item.title}
          artist={item.artist}
          size={item.size}
          price={item.price}
        />
      ))}
    </div>
  );
}
