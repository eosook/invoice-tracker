import "./InvoiceHeader.scss";
import plus from "../../assets/images/icon-plus.svg";

export default function InvoiceHeader() {
  return (
    <div className="InvoiceHeader">
      <div>
        <h1>Invoices</h1>
        <h2>7 Invoices</h2>
      </div>
      <div className="InvoiceHeader__buttons">
        <div className="buttons__filter">Filter</div>
        <button className="buttons__new">
          <div>
            <img className="buttons__plus" src={plus}></img>
          </div>{" "}
          New
        </button>
      </div>
    </div>
  );
}
