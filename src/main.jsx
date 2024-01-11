import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import CartContextProvider from "./Contexts/Cart.context.jsx";
import AuthContextProvider from "./Contexts/Auth.context.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <AuthContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </AuthContextProvider>
    </Provider>
  </Router>
);
