import { Link } from "react-router-dom";
import logo from "../assets/logo-colored.png";

export const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Snake hugs WoW icon" />
    </Link>
  );
};
