import Button1 from "./LinkButton";

export default function SongCard(props) {
  return (
    <div
      className="inner-card-container"
      style={{
        width: "250px",
        maxHeight: "600px",
        paddingBottom: "30px",
      }}
    >
      <img
        src={props.image}
        alt="song"
        className="inner-card-img mt-2 "
        style={{ marginBottom: "-20px", width: "250px" }}
      ></img>
      <div className="inner-card-desc flex fd-c ai-c mt-2">
        <div className="mt-2">{props.name}</div>
        <div className="card-p">{props.artist}</div>
        <div
          className="flex"
          style={{
            marginTop: "10px",
            flexWrap: "wrap",
            marginLeft: "40px",
            marginRight: "40px",
          }}
        >
          {props.genres.map((genre) => (
            <div key={genre} className="card-p" style={{ marginRight: "10px" }}>
              {genre}
            </div>
          ))}
        </div>

        <div className="mt-2 mb-2">{props.duration}</div>

        <Button1 text={"Play"} />
      </div>
    </div>
  );
}
