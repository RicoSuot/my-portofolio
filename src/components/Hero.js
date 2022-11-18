import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500">
          <h1>Rico Suot</h1>
          <h2>I'm a Frontend Web Developer from Manado</h2>
          <Link to="/about" className="btn-about">
            About Me
          </Link>
        </div>
      </section>

      {/* <!-- ======= Footer ======= --> */}
      <footer className="footer">
        <ul className="social-icon">
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.facebook.com/suot.oliver" rel="noreferrer" target="_blank">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://twitter.com/RicoOliverS" rel="noreferrer" target="_blank">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.linkedin.com/in/rico-suot-09495a209/" rel="noreferrer" target="_blank">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://www.instagram.com/ricooliver_/" rel="noreferrer" target="_blank">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="social-icon__link" href="https://github.com/RicoSuot" rel="noreferrer" target="_blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        </ul>
        <p>Copyright Rico Suot | All Rights Reserved</p>
      </footer>
      {/* <!-- End  Footer --> */}
    </div>
  );
};

export default Hero;
