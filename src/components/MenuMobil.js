import React, { useState } from "react";
import MenuLinks from "./MenuLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuMobil = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
        className="ham_menu"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {openMenu && (
        <nav className="menu menuMovil">
          <MenuLinks
            className="menu_links_responsive"
            closeMenu={() => {
              setOpenMenu(false);
            }}
          />
        </nav>
      )}
    </>
  );
};

export default MenuMobil;
