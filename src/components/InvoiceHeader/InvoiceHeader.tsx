import "./InvoiceHeader.scss";
import plus from "../../assets/images/icon-plus.svg";
import arrowDown from '../../assets/images/icon-arrow-down.svg';

type InvoiceHeaderProps = {
  mode: string
}

export default function InvoiceHeader({mode}: InvoiceHeaderProps) {
  return (
    <div className="InvoiceHeader">
      <div className="InvoiceHeader__headers">
        <h1 className={mode === "light" ? "InvoiceHeader__header" : "InvoiceHeader__header InvoiceHeader__header--dark"}>Invoices</h1>
        <h2 className={mode === "light" ? "InvoiceHeader__subheader" : "InvoiceHeader__subheader InvoiceHeader__subheader--dark"}>7 Invoices</h2>
      </div>
      <div className="InvoiceHeader__buttons">
        <div className="buttons__filter">
          <h3 className={mode === "light" ? "buttons__filter--text" : "buttons__filter--text buttons__filter--dark-text"}>Filter</h3>
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
