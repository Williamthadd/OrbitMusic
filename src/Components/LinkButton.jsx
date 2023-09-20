import { Link } from "react-router-dom";

export default function Button1({ text, target, handleChangePage }) {
  return (
    <Link
      className="button1 LinkButton"
      to="/services/details"
      onClick={() => handleChangePage(target)}
    >
      {text}
    </Link>
  );
}
