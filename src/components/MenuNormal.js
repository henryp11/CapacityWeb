import React from "react";
import MenuLinks from "./MenuLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const MenuNormal = () => {
  return (
    <nav className="menu">
      <MenuLinks
        className="menu_links_normal"
        home={<FontAwesomeIcon icon={faHome} />}
      />
    </nav>
  );
};

export default MenuNormal;
