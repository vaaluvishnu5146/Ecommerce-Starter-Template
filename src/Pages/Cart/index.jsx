import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.context";
import "./style.css";
import CartCard from "../../components/CartCard";

export default function Cart() {
  const { cartItems = [], cartTotal = 0 } = useContext(CartContext);
  return (
    <div className="container cart-page-container">
      <div className="items-listing-container">
        <div className="listing-header mb-3">
          <h1>Shopping Cart</h1>
          <h3>{cartItems.length} Items</h3>
        </div>
        <div className="row">
          {cartItems.map((product, index) => (
            <CartCard data={product} key={`${product.name}-${index}`} />
          ))}
        </div>
      </div>
      <div className="cart-calculator-container">
        <div className="card">
          <div className="card-body">
            <h3 className="mb-5">Total</h3>
            <div className="pricing-list">
              <div className="item">
                <h6>Sub Total</h6>
                <h6>{cartTotal.subTotal}</h6>
              </div>
              <div className="item">
                <h6>Standard Delivery Charge</h6>
                <h6>50</h6>
              </div>
              <div className="item mb-5">
                <h6>GST</h6>
                <h6>18%</h6>
              </div>
              <div className="item">
                <h2>Grand Total</h2>
                <h2>{cartTotal.grandTotal}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
