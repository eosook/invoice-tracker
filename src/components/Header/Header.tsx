import "./Header.scss";
import logo from "../../assets/images/favicon-32x32.png";
import moon from "../../assets/images/icon-moon.svg";
import sun from "../../assets/images/icon-sun.svg";
import profile from "../../assets/images/image-avatar.jpg";

type props = {
  mode: string,
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({mode, setMode}: props){

  const changeMode = () =>{
    if(mode === "light"){
      setMode("dark");
    } else {
      setMode("light")
    }
  }
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} className="logo__image" />
      </div>
      <div className="header__div-right">
        <div className="mode">
          <img src={(mode === "light") ? sun : moon} className="mode__image" onClick={changeMode}/>
        </div>
        <div className="profile">
          <img src={profile} className="profile__image"></img>
        </div>
      </div>
    </header>
  );
}
