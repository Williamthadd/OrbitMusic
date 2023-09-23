import { Link } from "react-router-dom";

export default function LinkButton({ text, target, handleSomething, linkTo }) {
  return (
    <Link
      className="button1 LinkButton"
      to={linkTo}
      onClick={() => handleSomething(target)}
    >
      {text}
    </Link>
  );
}
