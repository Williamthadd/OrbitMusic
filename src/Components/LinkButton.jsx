import { Link } from "react-router-dom";

export default function LinkButton({
  text,
  target,
  handleChangeServices,
  linkTo,
}) {
  return (
    <Link
      className="button1 LinkButton"
      to={linkTo}
      onClick={() => handleChangeServices(target)}
    >
      {text}
    </Link>
  );
}
