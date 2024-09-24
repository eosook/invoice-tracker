import "./InvoiceInfo.scss";
import arrowLeft from "../../assets/images/icon-arrow-left.svg";

export default function InvoiceInfo() {
  return (
    <div className="info">
      <div className="info__back">
        <img src={arrowLeft} className="info__back-arrow"></img>
        <h2 className="info__back-header">Go back</h2>
      </div>
      <div className="info-status">
        <h4 className="info-status__header">Status</h4>
        <div className="info-status__box">
          <div className="info-status__circle"></div>
          <h3 className="info-status__status">Pending</h3>
        </div>
      </div>
      <div className="info-main">
        <div className="info-main__container">
          <h2 className="info-main--black">#XM9141</h2>
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
                <h2 className="info-main--black">21 Aug 2021</h2>
              </div>
              <div className="info-main__payment-due">
                <h2 className="info-main__subheader">Payment Due</h2>
                <h2 className="info-main--black">20 Sep 2021</h2>
              </div>
            </div>
            <div className="info-main__bill-to">
              <h2 className="info-main__subheader">Bill To</h2>
              <h2 className="info-main--black info-main--margin">Alex Grim</h2>
              <h4 className="info-main--grey">84 Church Way</h4>
              <h4 className="info-main--grey">Bradford</h4>
              <h4 className="info-main--grey">BD1 9PB</h4>
              <h4 className="info-main--grey">United Kingdom</h4>
            </div>
          </div>
          <div className="info-main__email">
            <h4 className="info-main__subheader">Sent to</h4>
            <h2 className="info-main--black">alexgrim@mail.com</h2>
          </div>
        </div>
        <div className="charge">
          <div className="charge__single">
            <div className="charge__container">
              <h2 className="charge__black">Banner Design</h2>
              <h4 className="charge__calculate">1 x $156.00</h4>
            </div>
            <h2 className="charge__black">$156.00</h2>
          </div>
          <div className="charge__single">
            <div className="charge__container">
              <h2 className="charge__black">Email Design</h2>
              <h4 className="charge__calculate">2 x $200.00</h4>
            </div>
            <h2 className="charge__black">$400.00</h2>
          </div>
          <div className="charge__grand-total">
            <h3 className="info-main--white">Grand Total</h3>
            <h2 className="charge__price">$556.00</h2>
          </div>
        </div>
      </div>
      {/* <div className="info__buttons">
        <button className="info__buttons--edit">Edit</button>
        <button className="info__buttons--delete">Delete</button>
        <button className="info__buttons--paid">Mark as Paid</button>
      </div> */}
    </div>
  );
}
