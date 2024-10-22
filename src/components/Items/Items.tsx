import { useEffect, useState } from 'react';
import './Items.scss';
import axios from 'axios';

type ItemsProps = {
    mode : string,
    invoiceId: string
}

export default function Items({ mode, invoiceId }: ItemsProps){
  const [items, setItems] = useState<string[]>([])

  useEffect(() => {
    const getItems = async () => {
      const response = await axios.get('http://localhost:8080/items/' + invoiceId);
      setItems(response.data);
    }
    getItems();
  }, [])
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
          <div className="item__single">
            <div className="item__container">
              <h2
                className={
                  mode === "light"
                    ? "item__black item__name"
                    : "item__black item__name item__dark--text"
                }
              >
                Banner Design
              </h2>
              <h4 className="item__calculate">1 x $156.00</h4>
            </div>
            <h3 className="item__data-grey item__quantity">1</h3>
            <h3 className="item__data-grey item__price">$156.00</h3>
            <h2
              className={
                mode === "light"
                  ? "item__black"
                  : "item__black item__dark--text"
              }
            >
              $156.00
            </h2>
          </div>
          <div className="item__single">
            <div className="item__container">
              <h2
                className={
                  mode === "light"
                    ? "item__black item__name"
                    : "item__black item__name item__dark--text"
                }
              >
                Email Design
              </h2>
              <h4 className="item__calculate">2 x $200.00</h4>
            </div>
            <h3 className="item__data-grey item__quantity">2</h3>
            <h3 className="item__data-grey item__price">$200.00</h3>
            <h2
              className={
                mode === "light"
                  ? "item__black item__total"
                  : "item__black item__total item__dark--text"
              }
            >
              $400.00
            </h2>
          </div>
          <div
            className={
              mode === "light"
                ? "item__grand-total"
                : "item__grand-total item__dark--black"
            }
          >
            <h3 className="info-main--white">Amount Due</h3>
            <h2 className="item__total-price">$556.00</h2>
          </div>
        </div>
    )
}