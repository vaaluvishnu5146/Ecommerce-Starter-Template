import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import CartContextProvider from "./Contexts/Cart.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </Router>
);
