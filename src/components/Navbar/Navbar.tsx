import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {

  var settings = {
    autoplay: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <header className="navigation fixed-top">
        <div className="container">
          {/* main nav */}
          <nav className="navbar navbar-expand-lg navbar-light">
            {/* logo */}
            <a className="navbar-brand logo" href="index.html">
              <img className="logo-default" src="images/logo.png" alt="logo" />
              <img className="logo-white" src="images/logo-white.png" alt="logo" />
            </a>
            {/* /logo */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navigation">
              <ul className="navbar-nav ml-auto text-center">
                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Homepage
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="index.html">Homepage</a>
                    <a className="dropdown-item" href="onepage-slider.html">Onepage</a>
                    <a className="dropdown-item" href="onepage-text.html">Onepage 2</a>
                  </div>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="about.html">About Us</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="service.html">Services</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="team.html">Team</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="pricing.html">Pricing</a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="404.html">404 Page</a>
                    <a className="dropdown-item" href="blog.html">Blog Page</a>
                    <a className="dropdown-item" href="single-post.html">Blog Single Page</a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          {/* /main nav */}
        </div>
      </header>

    </div>
  );
}

export default Navbar;
