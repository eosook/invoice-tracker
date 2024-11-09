import "./EditInvoice.scss";
import calenderImage from "../../assets/images/icon-calendar.svg";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import { useEffect, useState } from "react";
import garbageCan from "../../assets/images/icon-delete.svg";
import GoBack from "../../components/GoBack/GoBack";
import axios from "axios";

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
  editToggle: boolean;
  setEditToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggleEditModal: () => void;
}

interface Errors{
  [key: string]: string;
}

export default function EditInvoice({
  mode,
  invoiceInfo,
  setInvoiceInfo,
  items,
  setItems,
  editToggle,
  setEditToggle,
  toggleEditModal,
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
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    setEditedInfo(invoiceInfo);
  }, [invoiceInfo]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Removes red border if user types in the input box
    setErrors({
      ...errors,
      [name]: ""
    })
    setEditedInfo({
      ...editedInfo,
      [name]: value,
    });
  };

  const validateForm = ():Errors => {
    const validationErrors:Errors = {};

    // Description Validation
    if (!editedInfo.description) validationErrors.description = 'Project description is required';

    // Bill From - Validations
    if (!editedInfo.senderaddress_street) validationErrors.senderaddress_street = 'Street address is required';
    if (!editedInfo.senderaddress_city) validationErrors.senderaddress_city = 'City is required';
    if (!editedInfo.senderaddress_postCode) validationErrors.senderaddress_postCode = 'Post Code is required';
    if (!editedInfo.senderaddress_country) validationErrors.senderaddress_country = 'Country is required';

    // Bill To - Validations
    if (!editedInfo.clientName) validationErrors.clientName = "Client's name is required";
    if (!editedInfo.clientEmail) {
      validationErrors.clientEmail = "Client's email is required";
    } else if (!/\S+@\S+\.\S+/.test(editedInfo.clientEmail)) {
      validationErrors.clientEmail = "Email format is invalid";
    }
    if (!editedInfo.clientaddress_street) validationErrors.clientaddress_street = 'Street address is required';
    if (!editedInfo.clientaddress_city) validationErrors.clientaddress_city = 'City is required';
    if (!editedInfo.clientaddress_postCode) validationErrors.clientaddress_postCode = 'Post Code is required';
    if (!editedInfo.clientaddress_country) validationErrors.clientaddress_country = 'Country is required';

    // Item - Validations
    items.forEach((item, index) => {
      if (!item.name) validationErrors[`item_name_${index}`] = 'Item name is required';
      if (!item.quantity || isNaN(item.quantity) || item.quantity <= 0) validationErrors[`item_quantity_${index}`] = 'Quantity must be a positive number';
      if (!item.price || isNaN(item.price) || item.price <= 0) validationErrors[`item_price_${index}`] = 'Price must be a positive number';
    });
    return validationErrors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0){
      saveChanges();
    }
  };

  const saveChanges = () => {
    const updateData = async () => {
      console.log(editedInfo);
      const response = await axios.put(`http://localhost:8080/invoices/${invoiceInfo.invoiceId}/edit`, editedInfo, {
        headers: {
          "Content-Type": "application/json"
        },
      });
      console.log(response.data);
    }
    updateData();
  }

  return (
    <div className="edit" id="edit">
      <form onSubmit={handleSubmit}>
        <div className="modal__go-back">
          <GoBack mode={mode} toggle={editToggle} setToggle={setEditToggle} />
        </div>
        <h1 className="edit__header">
          Edit <span className="edit__span-grey">#</span>
          {invoiceInfo.invoiceId}
        </h1>
        <div className="edit__from">
          <h2 className="edit__subheader--purple">Bill From</h2>
          <div className="edit__div--single">
            <h3 className="edit__subheader">Street Address</h3>
            <textarea
              className={(errors.senderaddress_street) ? "edit__textarea edit__textarea--error" : "edit__textarea"}
              name="senderaddress_street"
              value={editedInfo.senderaddress_street}
              onChange={handleChange}
            />
            {errors.senderaddress_street && <p className="error">{errors.senderaddress_street}</p>}
          </div>
          <div className="edit__div--multi">
            <div className="edit__single-entry">
              <h3 className="edit__subheader">City</h3>
              <textarea
                className={(errors.senderaddress_city) ? "edit__textarea edit__textarea--error" : "edit__textarea"}
                name="senderaddress_city"
                value={editedInfo.senderaddress_city}
                onChange={handleChange}
              />
            </div>
            <div className="edit__single-entry">
              <h3 className="edit__subheader">Post Code</h3>
              <textarea
                className={(errors.senderaddress_postCode) ? "edit__textarea edit__textarea--error" : "edit__textarea"}
                name="senderaddress_postCode"
                value={editedInfo.senderaddress_postCode}
                onChange={handleChange}
              />
            </div>
            <div className="edit__single-entry--country">
              <h3 className="edit__subheader">Country</h3>
              <textarea
                className={(errors.senderaddress_country) ? "edit__textarea edit__textarea--country edit__textarea--error" : "edit__textarea edit__textarea--country"}
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
                  <p className="edit__textarea edit__items-total">
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <img className="edit__image" src={garbageCan}></img>
              </div>
            );
          })}
        </div>
        <button type="button" className="edit__new-item">Add New Item</button>
        <div className="modal-buttons">
          <button type="button" className="modal-buttons__cancel" onClick={toggleEditModal}>Cancel</button>
          <button type="submit" className="modal-buttons__save">Save Changes</button>
        </div>
      </form>
    </div>
  );
}
