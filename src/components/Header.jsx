import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="top">
      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <img
              className="slightly-righta mt-2"
              src="src/assets/plants-store-logo-green.svg"
              alt="Simply Natural Logo"
              width="50"
              height="50"
            />
            <span className="slightly-right fs-4">Simply Natural</span>
          </a>

          <ul className="nav nav-pills d-flex align-items-center">
            <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Home</a></li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="storeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Store
              </a>
              <ul className="dropdown-menu" aria-labelledby="storeDropdown">
                <li><a className="dropdown-item" href="#">Cactus</a></li>
                <li><a className="dropdown-item" href="#">Indoor Plants</a></li>
                <li><a className="dropdown-item" href="#">Outdoor Plants</a></li>
              </ul>
            </li>
            <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
            <li className="nav-item"><a href="#" className="nav-link">My Account</a></li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                ₹0.00
                <svg
                  width="15"
                  height="15"
                  fill="red"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="ast-bag-icon-svg"
                  x="0px"
                  y="0px"
                  viewBox="826 826 140 140"
                  enableBackground="new 826 826 140 140"
                  xmlSpace="preserve"
                >
                  <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424  c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29H831.77  l6.468-58.29c0.15-1.203,0.677-2.218,1.58-3.045c0.903-0.827,1.981-1.241,3.234-1.241h19.254v9.627c0,2.658,0.94,4.927,2.82,6.807  s4.149,2.82,6.807,2.82c2.658,0,4.926-0.94,6.807-2.82s2.821-4.149,2.821-6.807v-9.627h28.882v9.627  c0,2.658,0.939,4.927,2.819,6.807c1.881,1.88,4.149,2.82,6.807,2.82s4.927-0.94,6.808-2.82c1.879-1.88,2.82-4.149,2.82-6.807v-9.627  h19.253c1.255,0,2.332,0.414,3.235,1.241C953.086,869.187,953.612,870.202,953.763,871.405z M924.881,857.492v19.254  c0,1.304-0.476,2.432-1.429,3.385s-2.08,1.429-3.385,1.429c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.43-2.081-1.43-3.385  v-19.254c0-5.315-1.881-9.853-5.641-13.613c-3.76-3.761-8.298-5.641-13.613-5.641s-9.853,1.88-13.613,5.641  c-3.761,3.76-5.641,8.298-5.641,13.613v19.254c0,1.304-0.476,2.432-1.429,3.385c-0.953,0.953-2.081,1.429-3.385,1.429  c-1.303,0-2.432-0.477-3.384-1.429c-0.953-0.953-1.429-2.081-1.429-3.385v-19.254c0-7.973,2.821-14.779,8.461-20.42  c5.641-5.641,12.448-8.461,20.42-8.461c7.973,0,14.779,2.82,20.42,8.461C922.062,842.712,924.881,849.519,924.881,857.492z"></path>
                </svg>
              </a>
            </li>
            <li>
              <svg
                width="20"
                height="20"
                fill="black"
                version="1.1"
                className="account-icon m-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 120 120"
                enableBackground="new 0 0 120 120"
                xmlSpace="preserve"
              >
                <path d="M84.6,62c-14.1,12.3-35.1,12.3-49.2,0C16.1,71.4,3.8,91,3.8,112.5c0,2.1,1.7,3.8,3.8,3.8h105c2.1,0,3.8-1.7,3.8-3.8 C116.2,91,103.9,71.4,84.6,62z"></path>
                <circle cx="60" cy="33.8" r="30"></circle>
              </svg>
            </li>
          </ul>
        </header>
      </div>

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6"></div>
          <div className="col-lg-6">
            <p>Best Quality Plants</p>
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Amazing Variety Of Plants Starting At Just $6
            </h1>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-outline-primary mt-2 rounded-pill px-4">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
