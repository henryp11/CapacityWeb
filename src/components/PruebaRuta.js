import React from "react";
import { Link, useParams } from "react-router-dom";

function PruebaRuta() {
  let params = useParams();

  console.log(params);

  return (
    <>
      <a href="/">solo tag a</a>
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contactanos">Contact</Link>
        </li>
      </ol>
    </>
  );
}

export default PruebaRuta;
