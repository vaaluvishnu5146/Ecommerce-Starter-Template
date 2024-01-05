import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.context";
import "./style.css";
import CartCard from "../../components/CartCard";

export default function Cart() {
  const { cartItems = [] } = useContext(CartContext);
  return (
    <div className="container cart-page-container">
      <div className="items-listing-container">
        <div className="listing-header">
          <h1>Shopping Cart</h1>
          <h3>3 Items</h3>
        </div>
        <div className="cart-items-listing">
          {cartItems.map((product, index) => (
            <CartCard data={product} key={`${product.name}-${index}`} />
          ))}
        </div>
      </div>
      <div className="cart-calculator-container"></div>
    </div>
  );
}
