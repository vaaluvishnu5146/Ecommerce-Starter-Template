import PropTypes from "prop-types";
import "./style.css";
import Quantity from "../Quantity/Quantity";
import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.context";

export default function CartCard({ data = {} }) {
  const { handleUpdateCartItemQuantity = () => {} } = useContext(CartContext);
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-3">
              <img className="cart-item-image" src={data.image} />
            </div>
            <div className="col-6">
              <h6 className="text-w-bold">{data.name}</h6>
              <p className="text-w-500">{data.category}</p>
            </div>
            <div className="col-3">
              <Quantity
                id={data.id}
                quantity={data.quantity}
                setQuantity={handleUpdateCartItemQuantity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  data: PropTypes.object.isRequired,
};
