import "./InvoiceInfo.scss";
import arrowLeft from "../../assets/images/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";
import StatusBar from "../../components/StatusBar/StatusBar";
import Charges from "../../components/Charges/Charges";

type InvoiceInfoProps = {
  mode: string;
};

export default function InvoiceInfo({ mode }: InvoiceInfoProps) {
  const navigate = useNavigate();

  function toHome() {
    navigate("/");
  }
  return (
    <div className={mode === "light" ? "info" : "info info__dark"}>
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
      <StatusBar mode={mode} />
      <div
        className={mode === "light" ? "info-main" : "info-main info__dark--div"}
      >
        <div className="info-main__flexbox">
          <div className="info-main__container">
            <h2
              className={
                mode === "light"
                  ? "info-main--black"
                  : "info-main--black info__dark--header"
              }
            >
              #XM9141
            </h2>
            <h4 className="info-main--grey">Graphic Design</h4>
          </div>
          <div className="info-main__container">
            <h4 className="info-main--grey">19 Union Terrace</h4>
            <h4 className="info-main--grey">London</h4>
            <h4 className="info-main--grey">E1 3EZ</h4>
            <h4 className="info-main--grey">United Kingdom</h4>
          </div>
        </div>
        <div className="info-main__body">
          <div className="info-main__body-top">
            <div className="info-main__dates">
              <div className="info-main__date">
                <h2 className="info-main__subheader">Invoice Date</h2>
                <h2
                  className={
                    mode === "light"
                      ? "info-main--black"
                      : "info-main--black info__dark--header"
                  }
                >
                  21 Aug 2021
                </h2>
              </div>
              <div className="info-main__payment-due">
                <h2 className="info-main__subheader">Payment Due</h2>
                <h2
                  className={
                    mode === "light"
                      ? "info-main--black"
                      : "info-main--black info__dark--header"
                  }
                >
                  20 Sep 2021
                </h2>
              </div>
            </div>
            <div className="info-main__bill-to">
              <h2 className="info-main__subheader">Bill To</h2>
              <h2
                className={
                  mode === "light"
                    ? "info-main--black info-main--margin"
                    : "info-main--black info-main--margin info__dark--header"
                }
              >
                Alex Grim
              </h2>
              <h4 className="info-main--grey">84 Church Way</h4>
              <h4 className="info-main--grey">Bradford</h4>
              <h4 className="info-main--grey">BD1 9PB</h4>
              <h4 className="info-main--grey">United Kingdom</h4>
            </div>
            <div className="info-main__email">
              <h4 className="info-main__subheader">Sent to</h4>
              <h2
                className={
                  mode === "light"
                    ? "info-main--black"
                    : "info-main--black info__dark--header"
                }
              >
                alexgrim@mail.com
              </h2>
            </div>
          </div>
        </div>
        <Charges mode={mode}/>
      </div>

      <div className={mode === "light" ? "buttons" : "buttons buttons--dark"}>
        <button
          className={
            mode === "light"
              ? "buttons__button buttons--edit"
              : "buttons__button buttons--edit buttons--edit-dark"
          }
        >
          Edit
        </button>
        <button className="buttons__button buttons--delete">Delete</button>
        <button className="buttons__button buttons--paid">Mark as Paid</button>
      </div>
    </div>
  );
}
