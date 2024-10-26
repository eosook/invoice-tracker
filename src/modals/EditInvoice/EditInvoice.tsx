import "./EditInvoice.scss";
import calenderImage from "../../assets/images/icon-calendar.svg";
import arrowDown from "../../assets/images/icon-arrow-down.svg";

interface EditInvoiceProps {
  mode: string;
  invoiceData: object;
}

export default function EditInvoice({ mode, invoiceData }: EditInvoiceProps) {
  return (
    <div className="edit">
      <h1 className="edit__invoiceId">EDIT #XM9141</h1>
      <div className="edit__from">
        <h3 className="edit__subheader--purple">Bill From</h3>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Street Address</h2>
          <textarea className="edit__textarea" />
        </div>
        <div className="edit__div--multi">
          <div className="edit__single-entry">
            <h2 className="edit__subheader">City</h2>
            <textarea className="edit__textarea" />
          </div>
          <div className="edit__single-entry">
            <h2 className="edit__subheader">Post Code</h2>
            <textarea className="edit__textarea" />
          </div>
          <div className="edit__single-entry--country">
            <h2 className="edit__subheader">Country</h2>
            <textarea className="edit__textarea edit__textarea--country" />
          </div>
        </div>
      </div>
      <div className="edit__to">
        <h3 className="edit__subheader--purple">Bill To</h3>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Client's Name</h2>
          <textarea className="edit__textarea" />
        </div>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Client's Email</h2>
          <textarea className="edit__textarea" />
        </div>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Street Address</h2>
          <textarea className="edit__textarea" />
        </div>
        <div className="edit__div--multi">
          <div className="edit__single-entry">
            <h2 className="edit__subheader">City</h2>
            <textarea className="edit__textarea " />
          </div>
          <div className="edit__single-entry">
            <h2 className="edit__subheader">Post Code</h2>
            <textarea className="edit__textarea" />
          </div>
          <div className="edit__single-entry--country">
            <h2 className="edit__subheader">Country</h2>
            <textarea className="edit__textarea edit__textarea--country" />
          </div>
        </div>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Invoice Date</h2>
          <div className="edit__calender">
            <input type="text" className="edit__calender-input" />
            <img className="edit__calender-image" src={calenderImage}></img>
          </div>
        </div>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Payment Terms</h2>
          <div className="edit__select-div">
            <select className="edit__select">
              <option value={30}>Net 30 Days</option>
              <option value={60}>Net 60 Days</option>
              <option value={90}>Net 90 Days</option>
              <option value={365}>Net 1 Year</option>
            </select>
            <img className="edit__select-image" src={arrowDown}></img>
          </div>
        </div>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Project Description</h2>
          <textarea className="edit__textarea" />
        </div>
      </div>
    </div>
  );
}
