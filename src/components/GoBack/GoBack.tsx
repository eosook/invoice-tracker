import "./GoBack.scss";
import arrowLeft from "../../assets/images/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";

interface GoBackProps {
  mode: string;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GoBack({
  mode,
  toggle,
  setToggle,
}: GoBackProps) {
  const navigate = useNavigate();

  function toHome() {
    if (toggle) {
      setToggle(!toggle);
    } else {
      navigate("/");
    }
  }

  return (
    <div className="info__back" onClick={toHome}>
      <img src={arrowLeft} className="info__back-arrow"></img>
      <h2
        className={
          mode === "light"
            ? "info__back-header"
            : "info__back-header info__dark--header"
        }
      >
        Go back
      </h2>
    </div>
  );
}
