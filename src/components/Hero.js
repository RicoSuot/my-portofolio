import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
        <h1>Rico Suot</h1>
        <h2>I'm a Frontend Web Developer from Manado</h2>
        <Link to="/about" className="btn-about">
          About Me
        </Link>
      </div>
    </section>
  );
};

export default Hero;
