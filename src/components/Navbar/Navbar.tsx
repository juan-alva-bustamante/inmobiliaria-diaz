import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div>
      <div style={{paddingBottom: '4rem'}}>
        {/* component */}
        <div className={`w-screen flex flex-row items-center p-1 justify-between shadow-xs fixed ${styles.navbar}`}>
          <div className="flex justify-center items-center cursor-pointer">
            <img
              className="w-16 ml-8 rounded-2xl cursor-pointer"
              src="https://scontent.fmex12-1.fna.fbcdn.net/v/t39.30808-6/241818217_101916745582049_1941194979437688303_n.png?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG1HzdA3ITFn9xBil09pJWk4liCMs97xAPiWIIyz3vEA_KLBB23rAjkiQgn0Bldh-1rCoLp35-WsfwLLeljBDWQ&_nc_ohc=u6pK6UC2hIEAX97NQN0&_nc_ht=scontent.fmex12-1.fna&oh=6e84cce4c785c9246c178a64d9ef605d&oe=614DAE7F"
              alt=""/>
            <div className={`ml-2 text-lg text-gray-700 hidden md:flex ${styles.textLogo}`}>Inmobiliaria Diaz & Castillo</div>
          </div>
          <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
            <i className="fas fa-bars"/>
          </div>
          <div className={`flex flex-row-reverse mr-8 hidden md:flex ${styles.linksContainer}`}>
            <p>Nosotros</p>
            <p>Ofertas</p>
            <p>Contacto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
