import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({
  cartItems: [],
  updateCart: () => {},
  handleUpdateCartItemQuantity: () => {},
  cartTotal: { subTotal: 0, gstTotal: 0, grandTotal: 0 },
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState({
    subTotal: 0,
    gstTotal: 0,
    grandTotal: 0,
  });

  const standardDeliveryCharge = 50;

  useEffect(() => {
    let total = 0;
    if (cart.length > 0) {
      cart.forEach((item) => {
        total += item.actualCost * item.quantity;
      });
      let gst = (total / 100) * 18;
      setCartTotal({
        subTotal: total,
        gstTotal: gst,
        grandTotal: total + gst + standardDeliveryCharge,
      });
    }
  }, [cart]);

  const cartContextValue = {
    cartItems: cart,
    updateCart: setCart,
    handleUpdateCartItemQuantity: handleUpdateCartItemQuantity,
    cartTotal: cartTotal,
  };

  function handleUpdateCartItemQuantity(id = 0, type = "increment") {
    if (id && type) {
      const cartCopy = [...cart];
      const matchingItem = cartCopy.find((data) => data.id === id);
      if (matchingItem) {
        matchingItem.quantity =
          type === "increment"
            ? matchingItem.quantity + 1
            : matchingItem.quantity - 1;
      }
      setCart(cartCopy);
    }
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: [PropTypes.node].isRequired,
};
