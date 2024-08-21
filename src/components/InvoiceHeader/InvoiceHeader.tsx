import "./InvoiceHeader.scss";
import plus from "../../assets/images/icon-plus.svg";
import arrowDown from '../../assets/images/icon-arrow-down.svg';

export default function InvoiceHeader() {
  return (
    <div className="InvoiceHeader">
      <div className="InvoiceHeader__headers">
        <h1 className="InvoiceHeader__header">Invoices</h1>
        <h2 className="InvoiceHeader__subheader">7 Invoices</h2>
      </div>
      <div className="InvoiceHeader__buttons">
        <div className="buttons__filter">
          <h3 className="buttons__filter--text">Filter</h3>
          <img className="buttons__filter--arrow" src={arrowDown}></img>  
        </div>
        <button className="buttons__new">
          <div className="buttons__plus--div">
            <img className="buttons__plus" src={plus}></img>
          </div>{" "}
          <h3 className="buttons__new--text">New</h3>
        </button>
      </div>
    </div>
  );
}
