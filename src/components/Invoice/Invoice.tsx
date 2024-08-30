import "./Invoice.scss";

type Props = {
    mode: string,
    id: string,
    name: string,
    date: string,
    amount: number,
    status: string
}

export default function Invoice({mode, id, name, date, amount, status}: Props) {
  return (
    <div className={mode === "light" ? "invoice" : "invoice invoice--dark"}>
      <div className="invoice__top-section">
        <h2 className={mode === "light" ? "invoice__header" : "invoice__header invoice__header--dark"}>
          <span className="invoice--hashtag">#</span>{id}
        </h2>
        <h3 className={mode === "light" ? "invoice__subheader" : "invoice__subheader invoice__subheader--dark"}>{name}</h3>
      </div>
      <div className="invoice__bottom-section">
        <div className="invoice__info-section">
          <h3 className={mode === "light" ? "invoice__subheader" : "invoice__subheader invoice__subheader--dark"}>Due {date}</h3>
          <h2 className={mode === "light" ? "invoice__header" : "invoice__header invoice__header--dark"}>${amount}</h2>
        </div>
        <div className={(status == "paid") ? "invoice__status-section invoice__status-paid" : "invoice__status-section invoice__status-pending"}>
          <div className={(status == "paid") ? "invoice__status-green" : "invoice__status-orange"}></div>
          <h2 className="invoice__status-header">{status}</h2>
        </div>
      </div>
    </div>
  );
}
