import "./style.css";
import PropTypes from "prop-types";

export default function Quantity({
  id = "",
  quantity = 0,
  setQuantity = () => {},
}) {
  return (
    <div className="d-flex align-items-center">
      <button
        className="btn btn-sm btn-primary mr-1"
        onClick={() => setQuantity(id, "decrement")}
      >
        -
      </button>
      <p className="mx-3 m-0">{quantity}</p>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => setQuantity(id, "increment")}
      >
        +
      </button>
    </div>
  );
}

Quantity.propTypes = {
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
};
