import "./InvoiceInfo.scss";
import arrowLeft from "../../assets/images/icon-arrow-left.svg";
import { useNavigate, useParams } from "react-router-dom";
import StatusBar from "../../components/StatusBar/StatusBar";
import { useEffect, useState } from "react";
import axios from "axios";
import EditInvoice from "../../modals/EditInvoice/EditInvoice";
import Items from "../../components/Items/Items";

type InvoiceInfoProps = {
  mode: string;
};

interface invoice {
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

interface item{
  id: number,
  invoiceId: string,
  name: string,
  price: number,
  quantity: number,
  total: number
}

export default function InvoiceInfo({ mode }: InvoiceInfoProps) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [items, setItems] = useState<item[]>([]);

  const [invoiceInfo, setInvoiceInfo] = useState<invoice>({
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

  function toHome() {
    navigate("/");
  }

  useEffect(() => {
    const getInvoiceInfo = async () => {
      const response = await axios.get("http://localhost:8080/invoices/" + id);
      setInvoiceInfo(response.data[0]);
    };
    getInvoiceInfo();
  }, []);

  useEffect(() => {
    if (invoiceInfo.invoiceId){
      const getItems = async () => {
        const response = await axios.get('http://localhost:8080/items/' + invoiceInfo.invoiceId);
        setItems(response.data);
      }
      getItems();
    }
  }, [invoiceInfo.invoiceId])

  return (
    <div className={mode === "light" ? "info" : "info info__dark"}>
      <div className="info__back" onClick={toHome}>
        <img src={arrowLeft} className="info__back-arrow"></img>
        <h2
          className={
            mode === "light"
              ? "info__back-header"
              : "info__back-header info__dark--header"
          }
        >
          Go back
        </h2>
      </div>
      <StatusBar mode={mode} status={invoiceInfo.status} />
      <div
        className={mode === "light" ? "info-main" : "info-main info__dark--div"}
      >
        <div className="info-main__flexbox">
          <div className="info-main__container">
            <h2
              className={
                mode === "light"
                  ? "info-main--black"
                  : "info-main--black info__dark--header"
              }
            >
              #{id}
            </h2>
            <h4 className="info-main--grey">{invoiceInfo.description}</h4>
          </div>
          <div className="info-main__container">
            <h4 className="info-main--grey">
              {invoiceInfo.senderaddress_street}
            </h4>
            <h4 className="info-main--grey">
              {invoiceInfo.senderaddress_city}
            </h4>
            <h4 className="info-main--grey">
              {invoiceInfo.senderaddress_postCode}
            </h4>
            <h4 className="info-main--grey">
              {invoiceInfo.senderaddress_country}
            </h4>
          </div>
        </div>
        <div className="info-main__body">
          <div className="info-main__body-top">
            <div className="info-main__dates">
              <div className="info-main__date">
                <h2 className="info-main__subheader">Invoice Date</h2>
                <h2
                  className={
                    mode === "light"
                      ? "info-main--black"
                      : "info-main--black info__dark--header"
                  }
                >
                  {invoiceInfo.createdAt}
                </h2>
              </div>
              <div className="info-main__payment-due">
                <h2 className="info-main__subheader">Payment Due</h2>
                <h2
                  className={
                    mode === "light"
                      ? "info-main--black"
                      : "info-main--black info__dark--header"
                  }
                >
                  {invoiceInfo.paymentDue}
                </h2>
              </div>
            </div>
            <div className="info-main__bill-to">
              <h2 className="info-main__subheader">Bill To</h2>
              <h2
                className={
                  mode === "light"
                    ? "info-main--black info-main--margin"
                    : "info-main--black info-main--margin info__dark--header"
                }
              >
                {invoiceInfo.clientName}
              </h2>
              <h4 className="info-main--grey">
                {invoiceInfo.clientaddress_street}
              </h4>
              <h4 className="info-main--grey">
                {invoiceInfo.clientaddress_city}
              </h4>
              <h4 className="info-main--grey">
                {invoiceInfo.clientaddress_postCode}
              </h4>
              <h4 className="info-main--grey">
                {invoiceInfo.clientaddress_country}
              </h4>
            </div>
            <div className="info-main__email">
              <h4 className="info-main__subheader">Sent to</h4>
              <h2
                className={
                  mode === "light"
                    ? "info-main--black"
                    : "info-main--black info__dark--header"
                }
              >
                {invoiceInfo.clientEmail}
              </h2>
            </div>
          </div>
        </div>
        <Items mode={mode} items={items} />
      </div>

      <div className={mode === "light" ? "buttons" : "buttons buttons--dark"}>
        <button
          className={
            mode === "light"
              ? "buttons__button buttons--edit"
              : "buttons__button buttons--edit buttons--edit-dark"
          }
        >
          Edit
        </button>
        <button className="buttons__button buttons--delete">Delete</button>
        <button className="buttons__button buttons--paid">Mark as Paid</button>
      </div>
      <EditInvoice mode={mode} invoiceInfo={invoiceInfo} setInvoiceInfo={setInvoiceInfo} items={items} setItems={setItems}/>
    </div>
  );
}
