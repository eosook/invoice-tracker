import './Charges.scss';

type ChargesProps = {
    mode : string;
}

export default function Charges({ mode }: ChargesProps){
    return (
        <div
          className={mode === "light" ? "charge" : "charge charge__dark--div"}
        >
          <div className="charge__single charge__categories">
            <h3 className="charge__grey charge__name">Item Name</h3>
            <h3 className="charge__grey charge__quantity">QTY.</h3>
            <h3 className="charge__grey charge__price">Price</h3>
            <h3 className="charge__grey charge__total">Total</h3>
          </div>
          <div className="charge__single">
            <div className="charge__container">
              <h2
                className={
                  mode === "light"
                    ? "charge__black charge__name"
                    : "charge__black charge__name charge__dark--text"
                }
              >
                Banner Design
              </h2>
              <h4 className="charge__calculate">1 x $156.00</h4>
            </div>
            <h3 className="charge__data-grey charge__quantity">1</h3>
            <h3 className="charge__data-grey charge__price">$156.00</h3>
            <h2
              className={
                mode === "light"
                  ? "charge__black"
                  : "charge__black charge__dark--text"
              }
            >
              $156.00
            </h2>
          </div>
          <div className="charge__single">
            <div className="charge__container">
              <h2
                className={
                  mode === "light"
                    ? "charge__black charge__name"
                    : "charge__black charge__name charge__dark--text"
                }
              >
                Email Design
              </h2>
              <h4 className="charge__calculate">2 x $200.00</h4>
            </div>
            <h3 className="charge__data-grey charge__quantity">2</h3>
            <h3 className="charge__data-grey charge__price">$200.00</h3>
            <h2
              className={
                mode === "light"
                  ? "charge__black charge__total"
                  : "charge__black charge__total charge__dark--text"
              }
            >
              $400.00
            </h2>
          </div>
          <div
            className={
              mode === "light"
                ? "charge__grand-total"
                : "charge__grand-total charge__dark--black"
            }
          >
            <h3 className="info-main--white">Amount Due</h3>
            <h2 className="charge__total-price">$556.00</h2>
          </div>
        </div>
    )
}