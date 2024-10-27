import "./EditInvoice.scss";
import calenderImage from "../../assets/images/icon-calendar.svg";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import { useEffect } from "react";

interface EditInvoiceProps {
  mode: string;
  invoiceInfo: {
    invoiceId: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    status: string;
    total: number;
    clientName: string;
    clientEmail: string;
    clientaddress_city: string;
    clientaddress_country: string;
    clientaddress_postCode: string;
    clientaddress_street: string;
    senderaddress_city: string;
    senderaddress_country: string;
    senderaddress_postCode: string;
    senderaddress_street: string;
  };
  setInvoiceInfo: any;
}

export default function EditInvoice({
  mode,
  invoiceInfo,
  setInvoiceInfo,
}: EditInvoiceProps) {

  useEffect(() => {
    const originalInvoice = invoiceInfo;
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoiceInfo({
      ...invoiceInfo,
      [name]: value
    });
    console.log(invoiceInfo);
  };
  return (
    <form className="edit">
      <h1 className="edit__invoiceId">EDIT #XM9141</h1>
      <div className="edit__from">
        <h3 className="edit__subheader--purple">Bill From</h3>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Street Address</h2>
          <textarea className="edit__textarea" name="senderaddress_street" value={invoiceInfo.senderaddress_street} onChange={handleChange}/>
        </div>
        <div className="edit__div--multi">
          <div className="edit__single-entry">
            <h2 className="edit__subheader">City</h2>
            <textarea className="edit__textarea" name="senderaddress_city" value={invoiceInfo.senderaddress_city} onChange={handleChange}/>
          </div>
          <div className="edit__single-entry">
            <h2 className="edit__subheader">Post Code</h2>
            <textarea className="edit__textarea" name="senderaddress_postCode" value={invoiceInfo.senderaddress_postCode} onChange={handleChange}/>
          </div>
          <div className="edit__single-entry--country">
            <h2 className="edit__subheader">Country</h2>
            <textarea className="edit__textarea edit__textarea--country" name="senderaddress_country" value={invoiceInfo.senderaddress_country} onChange={handleChange}/>
          </div>
        </div>
      </div>
      <div className="edit__to">
        <h3 className="edit__subheader--purple">Bill To</h3>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Client's Name</h2>
          <textarea className="edit__textarea" name="clientName" value={invoiceInfo.clientName} onChange={handleChange}/>
        </div>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Client's Email</h2>
          <textarea className="edit__textarea" name="clientEmail" value={invoiceInfo.clientEmail} onChange={handleChange}/>
        </div>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Street Address</h2>
          <textarea className="edit__textarea" name="clientaddress_street" value={invoiceInfo.clientaddress_street} onChange={handleChange}/>
        </div>
        <div className="edit__div--multi">
          <div className="edit__single-entry">
            <h2 className="edit__subheader">City</h2>
            <textarea className="edit__textarea" name="clientaddress_city" value={invoiceInfo.clientaddress_city} onChange={handleChange}/>
          </div>
          <div className="edit__single-entry">
            <h2 className="edit__subheader">Post Code</h2>
            <textarea className="edit__textarea" name="clientaddress_postCode" value={invoiceInfo.clientaddress_postCode} onChange={handleChange}/>
          </div>
          <div className="edit__single-entry--country">
            <h2 className="edit__subheader">Country</h2>
            <textarea className="edit__textarea edit__textarea--country" name="clientaddress_country" value={invoiceInfo.clientaddress_country} onChange={handleChange}/>
          </div>
        </div>
        <div className="edit__div--single">
          <h2 className="edit__subheader">Invoice Date</h2>
          <div className="edit__calender">
            <input type="text" className="edit__calender-input" name="clientaddress_postCode" value={invoiceInfo.createdAt}/>
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
    </form>
  );
}
