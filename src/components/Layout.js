import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
// import { useEffect } from "react";

function Layout(props) {
  // useEffect(() => {
  //   detectScroll();
  // });

  // const scrollUp = () => {
  //   let currentScroll = document.documentElement.scrollTop;

  //   if (currentScroll > 0) {
  //     window.requestAnimationFrame(scrollUp);
  //     window.scrollTo(0, currentScroll - currentScroll / 2);
  //   }
  // };

  // const detectScroll = () => {
  //   let buttonUp = document.getElementById("button-up");
  //   window.onscroll = () => {
  //     let scroll = document.documentElement.scrollTop;

  //     if (scroll > 250) {
  //       buttonUp.style.transform = "scale(1)";
  //     } else if (scroll < 250) {
  //       buttonUp.style.transform = "scale(0)";
  //     }
  //   };
  // };

  return (
    <>
      <Header />
      {props.children}
      {/* <button id="button-up" onClick={scrollUp}>
        <FontAwesomeIcon icon={faChevronUp} />
      </button> */}
      <BackToTop />
      <Footer />
    </>
  );
}

export default Layout;
