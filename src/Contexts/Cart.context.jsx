import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext({
  cartItems: [],
  updateCart: () => {},
});

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const cartContextValue = {
    cartItems: cart,
    updateCart: setCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}

CartContextProvider.propTypes = {
  children: [PropTypes.node].isRequired,
};
