import "./Invoice.scss";

export default function Invoice(id: string, name: string, date: string, amount: number, status: string) {
  return (
    <div className="invoice">
      <div className="invoice__top-section">
        <h2 className="invoice__header">
          <span className="invoice--hashtag">#</span>RT3080
        </h2>
        <h3 className="invoice__subheader">Jensen Huang</h3>
      </div>
      <div className="invoice__bottom-section">
        <div className="invoice__info-section">
          <h3 className="invoice__subheader">Due 19 Aug 2021</h3>
          <h2 className="invoice__header">$1,800.90</h2>
        </div>
        <div className="invoice__status-section">
          <div className="invoice__status-dot"></div>
          <h2 className="invoice__header invoice__status">Paid</h2>
        </div>
      </div>
    </div>
  );
}
