import React from 'react';

import styles from './App.module.scss';
import Slider from "react-slick";
import Navbar from './components/Navbar/Navbar';

const App = () => {

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
      {/**
       * 
       
      <div id="preloader">
        <div className='preloader'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      */}

      <Navbar />

      <Slider {...settings}>
        <div className={`slider-item ${styles.sliderItem}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".1"
                >
                  Crafting Digital <br />
                  Experience
                </h1>
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".5"
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,{" "}
                  <br /> veritatis tempore nostrum id officia quaerat eum corrupti,{" "}
                  <br /> ipsa aliquam velit.
                </p>
                <a
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".8"
                  className="btn btn-main"
                  href="service.html"
                >
                  Explore Us
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-item th-fullpage hero-area" style={{ backgroundImage: "url(images/slider/slider-bg-3.jpg)" }}        >
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInDown"
                  data-delay-in=".1"
                >
                  We Combine Design
                  <br /> and Creativity
                </h1>
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInDown"
                  data-delay-in=".5"
                >
                  Create just what you need for your Perfect Website. Choose from a
                  wide range
                  <br /> of Elements &amp; simply put them on our Canvas.
                </p>
                <a
                  data-duration-in=".3"
                  data-animation-in="fadeInDown"
                  data-delay-in=".8"
                  className="btn btn-main"
                  href="service.html"
                >
                  Explore Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Slider >

    </div>
  );
}

export default App;
