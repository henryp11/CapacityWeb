import React, { useState, useEffect } from "react";
import videoHero from "../videos/present_hd.mp4";
// import LogoHero from "../images/Capacity_Soft_Logo.png";

function Hero() {
  const sloganPhrases = [
    "Impulsamos el crecimiento de tu negocio con Sistemas Informáticos y software de gestión ERP",
    "Obtén el mejor servicio y asistencia técnica con precios justos, al alcance de tu bolsillo",
    "Te ayudamos a mejorar la organización y el control de tu negocio eficazmente",
    "Optimizamos tus tiempos de respuesta para que puedas brindarles una mejor atención a tus clientes",
  ];

  const [counter, setCounter] = useState(0);
  const timer = 9100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter < sloganPhrases.length - 1 ? prevCounter + 1 : 0
      );
    }, timer);
    controlTime();
    return () => clearInterval(interval);
  }, []);

  const controlTime = () => {
    const phrase = document.getElementById("#tittle-phrase");
    var timerAnimation = timer + 400;
    phrase.style.animationDuration = `${timerAnimation}ms`;
  };

  return (
    <>
      <section className="hero">
        <div className="hero_content">
          {/* <figure className="hero_content_slogan">
            <img src={LogoHero} alt="logo_hero" />
          </figure> */}
          <div className="heroTittle">
            <h1 id="#tittle-phrase">{sloganPhrases[counter]}</h1>
          </div>
          <video className="heroVideo" loop muted autoPlay>
            <source src={videoHero} type="video/mp4" />
          </video>
          {/* <div className="hero_content_buttons">
            <button className="btn">
              <a href="/"> Saber más </a>
              <span className="underLine"></span>
            </button>
            <button type="submit" className="btn">
              <a href="/">Contacto</a>
              <span className="underLine"></span>
            </button>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
