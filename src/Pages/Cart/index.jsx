import { useContext, useEffect } from "react";
import { CartContext } from "../../Contexts/Cart.context";
import "./style.css";
import CartCard from "../../components/CartCard";

export default function Cart() {
  const { cartItems = [] } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/cart", {
      headers: {
        "Content-Type": "application/json",
        token: sessionStorage.getItem("_tk"),
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
    return () => {};
  }, []);

  return (
    <div className="container cart-page-container">
      <div className="col-md-8 col-sm-12">
        <div className="row mb-3">
          <div className="col-6 gx-0">
            <h3>Shopping Cart</h3>
          </div>
          <div className="col-6 gx-0">
            <h3 className="text-end">{cartItems.length} Items</h3>
          </div>
        </div>
        <div className="row row-gap-3">
          {cartItems.map((product, index) => (
            <CartCard data={product} key={`${product.name}-${index}`} />
          ))}
        </div>
      </div>
      <div className="col-md-4 col-sm-12"></div>
    </div>
  );
}

// <div className="container cart-page-container">
//   <div className="items-listing-container">
//     <div className="listing-header">
//       <h1>Shopping Cart</h1>
//       <h3>3 Items</h3>
//     </div>
//     <div className="cart-items-listing">
//       {cartItems.map((product, index) => (
//         <CartCard data={product} key={`${product.name}-${index}`} />
//       ))}
//     </div>
//   </div>
//   <div className="cart-calculator-container"></div>
// </div>;
