import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavBar({ quantity = 0 }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#!">
          ZHA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/home/MensTees"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home/mens"
                  >
                    Mens Collections
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home/womens"
                  >
                    Womens Collections
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <Link to="/cart">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {quantity}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  quantity: PropTypes.number,
};
