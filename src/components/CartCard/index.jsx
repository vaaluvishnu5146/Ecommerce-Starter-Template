import PropTypes from "prop-types";
import "./style.css";

export default function CartCard({ data = {} }) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-2">
            <img className="cart-item-image" src={data.image} />
          </div>
          <div className="col-3">
            <h6 className="text-w-bold">{data.name}</h6>
            <p className="text-w-500">{data.category}</p>
          </div>
          <div className="col-3">{data.quantity}</div>
          <div className="col-2">
            <p className="text-w-bold">{data.actualCost}</p>
          </div>
          <div className="col-2">
            {" "}
            <p className="text-w-bold">{data.quantity * data.actualCost}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

CartCard.propTypes = {
  data: PropTypes.object.isRequired,
};
