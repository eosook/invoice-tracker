import "./EmptyInvoiceList.scss";
import emptyImage from "../../assets/images/illustration-empty.svg";

export default function EmptyInvoiceList() {
  return (
    <main className="emptyInvoice">
      <img className="emptyInvoice__image" src={emptyImage}></img>
      <div className="emptyInvoice__text">
        <h2 className="emptyInvoice__header">There is nothing here</h2>
        <h3 className="emptyInvoice__subheader">
          Create an invoice by clicking the{" "}
          <span className="emptyInvoice--new">New</span> button and get started
        </h3>
      </div>
    </main>
  );
}
