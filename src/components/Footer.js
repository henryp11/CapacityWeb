import React from "react";

const fecha = new Date();
const anio = fecha.getFullYear();

function Footer() {
  return (
    <>
      <footer>
        <div>
          <p>
            Copyright © {anio} Capacity-Soft / Expertos en soluciones
            informáticas inteligentes
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
