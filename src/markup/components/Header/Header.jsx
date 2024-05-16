import React from "react";
// Import the Link component from react-router-dom 
import { Link } from 'react-router-dom'
// Import the logo image 
import logo from '../../../assets/images/logo.png';
import logo_tow from '../../../assets/template_assets/images/logos/logo-two.png';
// Import the icon image
import icon_bar from '../../../assets/template_assets/images/icons/icon-bar.png';
// Import the login service to access the logout function
import loginService from '../../../services/login.service';
// Import the custom context hook 
import { useAuth } from '../../../Context/AuthContext';

const Header = () => {

 // Use the custom hook to access the data in the context 
 const { isLogged, setIsLogged, employee } = useAuth();
//  console.log(useAuth());

 // Log out event handler function
 const logOut = () => {
  // Call the logout function from the login service 
  loginService.logOut();
  // Set the isLogged state to false 
  setIsLogged(false);
}


  return (
    <div>
      <header className="main-header header-style-one">
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">Enjoy the Beso while we fix your car</div>
                <div className="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
              </div>
              <div className="right-column" style={{paddingRight:'15px'}}>
              {isLogged ? (
                  <div className="link-btn">
                    <div className="phone-number"><strong>Welcome {employee?.employee_first_name}</strong></div>
                  </div>
                ) : (
                  <div className="phone-number">Schedule Appointment: <strong>1800 456 7890 </strong> </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="right-column">
                <div className="nav-outer">
                  <div className="mobile-nav-toggler">
                    <img src={icon_bar} alt="" />
                  </div>

                  <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="dropdown">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/about">About Us</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/services">Services</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/contact">Contact us</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/admin">Admin</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="search-btn"></div>
                {isLogged ? (
                  <div className="link-btn">
                    <Link to="/" className="theme-btn btn-style-one blue" onClick={logOut} >Log out</Link>
                  </div>
                ) : (
                  <div className="link-btn">
                    <Link to="/login" className="theme-btn btn-style-one">Login</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="header-upper">
            <div className="auto-container">
              <div className="inner-container">
                <div className="logo-box">
                  <div className="logo">
                    <a href="index.html">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                </div>
                <div className="right-column">
                  <div className="nav-outer">
                    <div className="mobile-nav-toggler">
                      <img src={icon_bar} alt="" />
                    </div>

                    <nav className="main-menu navbar-expand-md navbar-light">
                    <div
                      className="collapse navbar-collapse show clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation">
                        <li className="dropdown">
                          <Link to="/">Home</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/about">About Us</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/services">Services</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/contact">Contact us</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/dashboard">Admin</Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  </div>
                  <div className="search-btn"></div>
                  <div className="link-btn">
                    <Link to="/login" className="theme-btn btn-style-one">
                      Log in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-menu">
          <div className="menu-backdrop"></div>
          <div className="close-btn">
            <span className="icon flaticon-remove"></span>
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              <Link href="#">
                <img src={logo_tow} alt="" title="" />
              </Link>
            </div>
            <div className="menu-outer"></div>

            <div className="social-links">
              <ul className="clearfix">
                <li>
                  <a href="#">
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-facebook-square"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-pinterest-p"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="fab fa-youtube"></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="nav-overlay">
          <div className="cursor"></div>
          <div className="cursor-follower"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
