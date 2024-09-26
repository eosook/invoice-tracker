import "./InvoiceInfo.scss";
import arrowLeft from "../../assets/images/icon-arrow-left.svg";
import { useNavigate } from "react-router-dom";

type InvoiceInfoProps = {
  mode: string
}

export default function InvoiceInfo({mode}: InvoiceInfoProps) {
  const navigate = useNavigate();

  function toHome(){
    navigate("/")
  }
  return (
    <div className={mode === "light" ? "info" : "info info__dark"}>
      <div className="info__back" onClick={toHome}>
        <img src={arrowLeft} className="info__back-arrow"></img>
        <h2 className={mode === "light" ? "info__back-header" : "info__back-header info__dark--header"}>Go back</h2>
      </div>
      <div className={mode === "light" ? "info-status" : "info-status info__dark--div"}>
        <h4 className="info-status__header">Status</h4>
        <div className="info-status__box">
          <div className="info-status__circle"></div>
          <h3 className="info-status__status">Pending</h3>
        </div>
      </div>
      <div className={mode === "light" ? "info-main" : "info-main info__dark--div"}>
        <div className="info-main__container">
          <h2 className={mode === "light" ? "info-main--black" : "info-main--black info__dark--header"}>#XM9141</h2>
          <h4 className="info-main--grey">Graphic Design</h4>
        </div>
        <div className="info-main__container">
          <h4 className="info-main--grey">19 Union Terrace</h4>
          <h4 className="info-main--grey">London</h4>
          <h4 className="info-main--grey">E1 3EZ</h4>
          <h4 className="info-main--grey">United Kingdom</h4>
        </div>
        <div className="info-main__body">
          <div className="info-main__body-top">
            <div className="info-main__dates">
              <div className="info-main__date">
                <h2 className="info-main__subheader">Invoice Date</h2>
                <h2 className={mode === "light" ? "info-main--black" : "info-main--black info__dark--header"}>21 Aug 2021</h2>
              </div>
              <div className="info-main__payment-due">
                <h2 className="info-main__subheader">Payment Due</h2>
                <h2 className={mode === "light" ? "info-main--black" : "info-main--black info__dark--header"}>20 Sep 2021</h2>
              </div>
            </div>
            <div className="info-main__bill-to">
              <h2 className="info-main__subheader">Bill To</h2>
              <h2 className={mode === "light" ? "info-main--black info-main--margin" : "info-main--black info-main--margin info__dark--header"}>Alex Grim</h2>
              <h4 className="info-main--grey">84 Church Way</h4>
              <h4 className="info-main--grey">Bradford</h4>
              <h4 className="info-main--grey">BD1 9PB</h4>
              <h4 className="info-main--grey">United Kingdom</h4>
            </div>
          </div>
          <div className="info-main__email">
            <h4 className="info-main__subheader">Sent to</h4>
            <h2 className={mode === "light" ? "info-main--black" : "info-main--black info__dark--header"}>alexgrim@mail.com</h2>
          </div>
        </div>
        <div className={mode === "light" ? "charge" : "charge charge__dark--div"}>
          <div className="charge__single">
            <div className="charge__container">
              <h2 className={mode === "light" ? "charge__black" : "charge__black charge__dark--text"}>Banner Design</h2>
              <h4 className="charge__calculate">1 x $156.00</h4>
            </div>
            <h2 className={mode === "light" ? "charge__black" : "charge__black charge__dark--text"}>$156.00</h2>
          </div>
          <div className="charge__single">
            <div className="charge__container">
              <h2 className={mode === "light" ? "charge__black" : "charge__black charge__dark--text"}>Email Design</h2>
              <h4 className="charge__calculate">2 x $200.00</h4>
            </div>
            <h2 className={mode === "light" ? "charge__black" : "charge__black charge__dark--text"}>$400.00</h2>
          </div>
          <div className={mode === "light" ? "charge__grand-total" : "charge__grand-total charge__dark--black"}>
            <h3 className="info-main--white">Grand Total</h3>
            <h2 className="charge__price">$556.00</h2>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="buttons--edit">Edit</button>
        <button className="buttons--delete">Delete</button>
        <button className="buttons--paid">Mark as Paid</button>
      </div>
    </div>
  );
}
