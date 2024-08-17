import "./Header.scss";
import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src={logo} className="logo__image"></img>
      </div>
    </header>
  );
}
