import Home from "./Pages/Home/index";
import "./App.css";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import NavBar from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <div className="mb-3"></div>
      <Routes>
        <Route Component={Home} path="/home/:id" />
        <Route Component={Login} path="/" />
        <Route Component={Signup} path="/signup" />
        <Route Component={ProductDetails} path="/productdetails" />
        <Route Component={Cart} path="/cart" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
