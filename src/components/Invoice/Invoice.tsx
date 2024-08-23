import "./Invoice.scss";

type Props = {
    id: string,
    name: string,
    date: string,
    amount: number,
    status: string
}

export default function Invoice({id, name, date, amount, status}: Props) {
  return (
    <div className="invoice">
      <div className="invoice__top-section">
        <h2 className="invoice__header">
          <span className="invoice--hashtag">#</span>{id}
        </h2>
        <h3 className="invoice__subheader">{name}</h3>
      </div>
      <div className="invoice__bottom-section">
        <div className="invoice__info-section">
          <h3 className="invoice__subheader">Due {date}</h3>
          <h2 className="invoice__header">${amount}</h2>
        </div>
        <div className={(status == "paid") ? "invoice__status-section invoice__status-paid" : "invoice__status-section invoice__status-pending"}>
          <div className={(status == "paid") ? "invoice__status-green" : "invoice__status-orange"}></div>
          <h2 className="invoice__status-header">{status}</h2>
        </div>
      </div>
    </div>
  );
}
