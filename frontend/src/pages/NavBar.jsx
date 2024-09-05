import { useNavigate,Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
import logoDark from "../assets/images/logo-dark.png";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <nav className="navbar navbar-expand-lg border-radius-lg top-0 z-index-3 shadow-none fixed-top  start-0 end-0  navbar-primary bg-primary"> 
      <div className="container-fluid">
        <div className="auth-brand p-1" onClick={() => handleClick('/')}>
          <Link to="/" className="logo-light">
            <img src={logo} alt="logo" height="30" />
          </Link>
          <Link to="/" className="logo-dark">
            <img src={logoDark} alt="dark logo" height="30" />
          </Link>
        </div>
        <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon mt-2">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navigation">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <button onClick={() => handleClick('/products')} className="btn btn-outline-dark text-white  rounded-pill px-2 py-1 m-2"> 
                <i className="bi bi-box-seam text-white mx-1"></i> Products
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleClick('/services')} className="btn btn-outline-dark text-white   rounded-pill px-2 py-1 m-2"> 
                <i className="bi bi-gear text-white mx-1"></i> Services
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleClick('/offers')} className="btn btn-outline-dark text-white   rounded-pill px-2 py-1 m-2"> 
                <i className="bi bi-gift text-white mx-1"></i> Offers
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => handleClick('/about-us')} className="btn btn-outline-dark text-white  rounded-pill px-2 py-1 m-2 "> 
                <i className="bi bi-info-circle text-white mx-1"></i> About Us
              </button>
            </li>
          </ul>
          <ul className="navbar-nav d-lg-block d-none">
            <li className="nav-item">
              <button onClick={() => handleClick('/login')} className="btn btn-sm mb-0 me-1 btn-outline-dark hover:bg-secondary hover:text-white"> 
                <i className="bi bi-person text-white"></i> Sign In
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;