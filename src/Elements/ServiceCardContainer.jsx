import ServiceCard from "../Components/ServiceCard";
import Services from "../Data/ServicesData";

export default function ServiceCardContainer(props) {
  return (
    <div className="card-container flex">
      {Services.map((item) => (
        <ServiceCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          desc={item.desc}
          link={item.link}
          handleChangeServices={props.handleChangeServices}
        />
      ))}
    </div>
  );
}
