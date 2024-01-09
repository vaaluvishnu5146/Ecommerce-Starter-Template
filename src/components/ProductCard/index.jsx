import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../Contexts/Cart.context";
import { AuthContext } from "../../Contexts/Auth.context";
import { useNavigate } from "react-router";

export default function ProductCard({ data = {}, handleAddToCart = () => {} }) {
  const { cartItems = [] } = useContext(CartContext);
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const isDisabled =
    cartItems.filter((item) => item.id === data.id).length > 0 ? true : false;

  function renderRatings(rating = 0) {
    let ratingsNode = [];
    for (let i = 0; i < rating; i++) {
      ratingsNode.push(<div className="bi-star-fill"></div>);
    }
    return ratingsNode;
  }

  function handleAddToCartSituation() {
    if (isLoggedIn) {
      handleAddToCart(data);
    } else {
      navigate("/");
    }
  }

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <div
          className="badge bg-dark text-white position-absolute"
          style={{
            top: "0.5rem",
            right: "0.5rem",
          }}
        >
          Sale
        </div>

        <img className="card-img-top" src={data.image} alt="..." />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{data.name}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              {renderRatings(data.rating)}
            </div>
            <span className="text-muted text-decoration-line-through">
              ${data.normalCost}
            </span>
            ${data.actualCost}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={handleAddToCartSituation}
              disabled={isDisabled}
            >
              {isDisabled ? "Added to cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};
