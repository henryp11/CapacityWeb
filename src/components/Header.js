import React from "react";
import MenuNormal from "./MenuNormal";
import MenuMobil from "./MenuMobil";
import Logo from "../images/Capacity_Soft_Logo.png";

function Header() {
  return (
    <>
      {/* <section className="sticky"> */}
      <header className="header">
        <figure className="header_logo">
          <img src={Logo} alt="logo" />
          <a href="/" className="header_logo_Link">
            {" "}
          </a>
        </figure>
        <MenuNormal />
        <MenuMobil />
      </header>
      {/* </section> */}
    </>
  );
}

export default Header;
