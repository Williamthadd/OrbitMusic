import LinkButton from "./LinkButton";

export default function ServiceCard(props) {
  return (
    <div className="inner-card-container">
      <img
        src={props.image}
        alt="service"
        className="inner-card-img mt-2"
      ></img>
      <div className="inner-card-desc flex fd-c ai-c mt-2">
        <h2>{props.title}</h2>
        <p className="mb-4 mt-2">{props.desc}</p>
        <LinkButton
          text={"View More"}
          target={props.id}
          handleSomething={props.handleChangeServices}
          linkTo={"/services/details"}
        />
      </div>
    </div>
  );
}
