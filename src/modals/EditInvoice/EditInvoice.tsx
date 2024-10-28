import "./EditInvoice.scss";
import calenderImage from "../../assets/images/icon-calendar.svg";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import { useEffect, useState } from "react";
import garbageCan from "../../assets/images/icon-delete.svg";

interface invoiceInfo {
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
}

interface item {
  id: number;
  invoiceId: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

interface EditInvoiceProps {
  mode: string;
  invoiceInfo: invoiceInfo;
  setInvoiceInfo: any;
  items: item[];
  setItems: any;
}

export default function EditInvoice({
  mode,
  invoiceInfo,
  setInvoiceInfo,
  items,
  setItems,
}: EditInvoiceProps) {
  const [editedInfo, setEditedInfo] = useState<invoiceInfo>({
    invoiceId: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: 0,
    status: "",
    total: 0,
    clientName: "",
    clientEmail: "",
    clientaddress_city: "",
    clientaddress_country: "",
    clientaddress_postCode: "",
    clientaddress_street: "",
    senderaddress_city: "",
    senderaddress_country: "",
    senderaddress_postCode: "",
    senderaddress_street: "",
  });

  useEffect(() => {
    setEditedInfo(invoiceInfo);
  }, [invoiceInfo]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditedInfo({
      ...editedInfo,
      [name]: value,
    });
  };
  return (
    <form className="edit">
      <h1 className="edit__header">Edit <span className="edit__span-grey">#</span>{invoiceInfo.invoiceId}</h1>
      <div className="edit__from">
        <h2 className="edit__subheader--purple">Bill From</h2>
        <div className="edit__div--single">
          <h3 className="edit__subheader">Street Address</h3>
          <textarea
            className="edit__textarea"
            name="senderaddress_street"
            value={editedInfo.senderaddress_street}
            onChange={handleChange}
          />
        </div>
        <div className="edit__div--multi">
          <div className="edit__single-entry">
            <h3 className="edit__subheader">City</h3>
            <textarea
              className="edit__textarea"
              name="senderaddress_city"
              value={editedInfo.senderaddress_city}
              onChange={handleChange}
            />
          </div>
          <div className="edit__single-entry">
            <h3 className="edit__subheader">Post Code</h3>
            <textarea
              className="edit__textarea"
              name="senderaddress_postCode"
              value={editedInfo.senderaddress_postCode}
              onChange={handleChange}
            />
          </div>
          <div className="edit__single-entry--country">
            <h3 className="edit__subheader">Country</h3>
            <textarea
              className="edit__textarea edit__textarea--country"
              name="senderaddress_country"
              value={editedInfo.senderaddress_country}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="edit__to">
        <h2 className="edit__subheader--purple">Bill To</h2>
        <div className="edit__div--single">
          <h3 className="edit__subheader">Client's Name</h3>
          <textarea
            className="edit__textarea"
            name="clientName"
            value={editedInfo.clientName}
            onChange={handleChange}
          />
        </div>
        <div className="edit__div--single">
          <h3 className="edit__subheader">Client's Email</h3>
          <textarea
            className="edit__textarea"
            name="clientEmail"
            value={editedInfo.clientEmail}
            onChange={handleChange}
          />
        </div>
        <div className="edit__div--single">
          <h3 className="edit__subheader">Street Address</h3>
          <textarea
            className="edit__textarea"
            name="clientaddress_street"
            value={editedInfo.clientaddress_street}
            onChange={handleChange}
          />
        </div>
        <div className="edit__div--multi">
          <div className="edit__single-entry">
            <h3 className="edit__subheader">City</h3>
            <textarea
              className="edit__textarea"
              name="clientaddress_city"
              value={editedInfo.clientaddress_city}
              onChange={handleChange}
            />
          </div>
          <div className="edit__single-entry">
            <h3 className="edit__subheader">Post Code</h3>
            <textarea
              className="edit__textarea"
              name="clientaddress_postCode"
              value={editedInfo.clientaddress_postCode}
              onChange={handleChange}
            />
          </div>
          <div className="edit__single-entry--country">
            <h3 className="edit__subheader">Country</h3>
            <textarea
              className="edit__textarea edit__textarea--country"
              name="clientaddress_country"
              value={editedInfo.clientaddress_country}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="edit__div--single">
          <h3 className="edit__subheader">Invoice Date</h3>
          <div className="edit__calender">
            <input
              type="text"
              className="edit__calender-input"
              value={editedInfo.createdAt}
              readOnly
            />
            <img className="edit__calender-image" src={calenderImage}></img>
          </div>
        </div>
        <div className="edit__div--single">
          <h3 className="edit__subheader">Payment Terms</h3>
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
          <h3 className="edit__subheader">Project Description</h3>
          <textarea
            className="edit__textarea"
            name="description"
            value={editedInfo.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="edit__items">
        <h2 className="edit__subheader--grey">Item List</h2>
        {items.map((item) => {
          console.log(item);
          return (
            <div className="edit__items-single" key={item.id}>
              <div className="edit__div--single edit__items-name">
                <h3 className="edit__subheader">Item Name</h3>
                <textarea
                  className="edit__textarea"
                  name="name"
                  value={item.name}
                  onChange={handleChange}
                />
              </div>
              <div className="edit__div--single edit__items-quantity">
                <h3 className="edit__subheader">Qty.</h3>
                <textarea
                  className="edit__textarea"
                  name="quantity"
                  value={item.quantity}
                  onChange={handleChange}
                />
              </div>
              <div className="edit__div--single edit__items-price">
                <h3 className="edit__subheader">Price</h3>
                <textarea
                  className="edit__textarea"
                  name="price"
                  value={item.price}
                  onChange={handleChange}
                />
              </div>
              <div className="edit__div--single">
                <h3 className="edit__subheader" edit__items-total>
                  Total
                </h3>
                <p className="edit__textarea edit__items-total">{(item.price * item.quantity).toFixed(2)}</p>
              </div>
              <img className="edit__image" src={garbageCan}></img>
            </div>
          );
        })}
      </div>
    </form>
  );
}
