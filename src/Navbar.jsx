import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
        <div className="container-fluid d-flex justify-content-spacebetween align-items-center">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="https://s3-alpha-sig.figma.com/img/7220/1328/eefc66cd70960daab6449206c3540858?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZj9rZ8pk0DIPcS2gKzcDeslH6xchJ--XbU~C~owkS5n12psMSHEc5JLnmtBqZj7Vn~PDRKvvfd3LMAAqOLeS8rUSTIaBpqfw1IH~RarF6TEPIpWDQcLG4mPhvhaGl52L0aF7TV5uyRtFDsS3r0eqIy6sM8vBwxGiPHU0NUoV9ryEbIuJz4StnWANiDRBUP5-niwgRODOkPjFHOLb-2mnal4LB9Gz104NjhXPLD4qI-l79aNCrAfVhZAMCsyksp6liOQ5gM1cl-KIp2J0o6gs6SOhmmHmrjz25yGvb9mNGsWoUxa25a6sLeVS4mYChjxGFOL0rsZ-GZ663dYfGLLNg__"
              alt="Logo"
              width="70"
              height="54"
              className="d-inline-block align-text-center m-4"
            />
            chapaerone
          </a>

          {/* Navbar toggle button for mobile view */}
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

          {/* Navbar links and icons */}
          <div
            className="collapse navbar-collapse d-flex justify-content-between"
            id="navbarSupportedContent"
          >
            {/* Navigation links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Plants & Pots
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
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>

            {/* Right-side icons (Profile and Cart) */}
            <div className="d-flex icon-el">
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faUser} /> {/* Profile icon */}
              </a>
              <a href="#" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} /> {/* Cart icon */}
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className='input-el mx-auto p-2" style="width: 100px; mt-3'>
        <input
          className="form-control me-2 d-flex flex-row justify-content-center"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </div>
      {/* button element */}
  
        <div>
          <button type="button" class="btn btn-success m-3 btn-lg">
            Plants
          </button>
          <button type="button" class="btn btn-none border-secondary btn-lg">
            plots
          </button>
          <p className="m-3 fs-6 fw-bold font-sansserif">
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae
            voluptates ut porro excepturi sit molestiae obcaecati qui quis
            beatae est voluptatem eius. Et architecto nihil id labore omnis hic
            iste deleniti et porro aspernatur.
          </p>
        </div>
        
      </div>
  
  );
}
