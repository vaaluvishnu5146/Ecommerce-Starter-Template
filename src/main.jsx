import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import CartContextProvider from "./Contexts/Cart.context.jsx";
import AuthContextProvider from "./Contexts/Auth.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </Router>
);
