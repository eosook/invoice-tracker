import { useEffect, useState } from 'react';
import './Items.scss';
import axios from 'axios';

type ItemsProps = {
    mode : string,
    invoiceId: string
}

interface item{
  id: number,
  invoiceId: string,
  name: string,
  price: number,
  quantity: number,
  total: number
}

export default function Items({ mode, invoiceId }: ItemsProps){
  const [items, setItems] = useState<item[]>([])
  const [grandTotal, setGrandTotal] = useState<number>(0);
  var total = 0;

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('http://localhost:8080/items/' + invoiceId);
      setItems(response.data);
      console.log(response.data);
    }
    getItems();
  }, [invoiceId])
    return (
        <div
          className={mode === "light" ? "item" : "item item__dark--div"}
        >
          <div className="item__single item__categories">
            <h3 className="item__grey item__name">Item Name</h3>
            <h3 className="item__grey item__quantity">QTY.</h3>
            <h3 className="item__grey item__price">Price</h3>
            <h3 className="item__grey item__total">Total</h3>
          </div>
          {items.map((item) => {
            total += item.price;
            return(<div className="item__single">
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
                <h4 className="item__calculate">{item.quantity + " X $" + item.price + ".00"}</h4>
              </div>
              <h3 className="item__data-grey item__quantity">{item.quantity}</h3>
              <h3 className="item__data-grey item__price">{"$" + item.price + ".00"}</h3>
              <h2
                className={
                  mode === "light"
                    ? "item__black"
                    : "item__black item__dark--text"
                }
              >
                {item.price}
              </h2>
            </div>)
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
    )
}