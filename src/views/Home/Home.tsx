import Slider from "react-slick";

import styles from './Home.module.scss';
import Navbar from "src/components/Navbar/Navbar";
import Products from "./Products/Products";

const App = () => {

  const settings = {
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.homeContainer}>

      <Navbar/>

      <div>
        <Slider {...settings}>
          <div className={`${styles.sliderItem}`}>
            <div className={`${styles.itemsContainer}`}>
              <div>
                <h1>
                  Inmobiliaria Diaz & Castillo
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <button type={'button'}>
                  Haz click para coner mas...
                </button>
              </div>
            </div>
          </div>
          <div className={`${styles.sliderItem2}`}>
            <div className={`${styles.itemsContainer}`}>
              <div>
                <h1>
                  Inmobiliaria Diaz & Castillo
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <button type={'button'}>
                  Haz click para coner mas...
                </button>
              </div>
            </div>
          </div>
        </Slider>

        <Products/>
      </div>

    </div>
  );
}

export default App;