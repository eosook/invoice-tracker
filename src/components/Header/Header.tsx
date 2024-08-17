import "./Header.scss";
import logo from "../../assets/images/favicon-32x32.png";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import profile from "../../assets/images/image-avatar.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} className="logo__image" />
      </div>
      <div className="header__div-right">
        <div className="mode">
          <img src={moon} className="mode__image" />
          {/* <img src={sun} className="mode__image" /> */}
        </div>
        <div className="profile">
          <img src={profile} className="profile__image"></img>
        </div>
      </div>
    </header>
  );
}
