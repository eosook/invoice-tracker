import "./Items.scss";

type ItemsProps = {
  mode: string;
  items: item[];
};

interface item {
  id: number;
  invoiceId: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
}

export default function Items({ mode, items }: ItemsProps) {
  var total = 0;

  return (
    <div className={mode === "light" ? "item" : "item item__dark--div"}>
      <div className="item__single item__categories">
        <h3 className="item__grey item__name">Item Name</h3>
        <h3 className="item__grey item__quantity">QTY.</h3>
        <h3 className="item__grey item__price">Price</h3>
        <h3 className="item__grey item__total">Total</h3>
      </div>
      {items.map((item) => {
        total += Number(item.price);
        return (
          <div className="item__single" key={item.id}>
            <div className="item__container">
              <h2
                className={
                  mode === "light"
                    ? "item__black item__name"
                    : "item__black item__name item__dark--text"
                }
              >
                {item.name}
              </h2>
              <h4 className="item__calculate">
                {item.quantity + " X $" + item.price}
              </h4>
            </div>
            <h3 className="item__data-grey item__quantity">{item.quantity}</h3>
            <h3 className="item__data-grey item__price">{"$" + item.price}</h3>
            <h2
              className={
                mode === "light"
                  ? "item__black item__total"
                  : "item__black item__dark--text item__total"
              }
            >
              {item.price}
            </h2>
          </div>
        );
      })}
      <div
        className={
          mode === "light"
            ? "item__grand-total"
            : "item__grand-total item__dark--black"
        }
      >
        <h3 className="info-main--white">Amount Due</h3>
        <h2 className="item__total-price">{"$" + total}</h2>
      </div>
    </div>
  );
}
