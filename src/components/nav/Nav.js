import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import "./Nav.css";

function Nav({ cartCount }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light" id="nav-bar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            The Mall
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Don't Miss
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Sale
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New Arrivals
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Top Rated
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                <FontAwesomeIcon icon={faCartShopping} />
                <span> </span>
                Cart<span> </span>
                {/* Cart Count value is updated dynamically whenever a update is made to an item(add item/remove item) */}
                <span className="item-count">{cartCount}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
