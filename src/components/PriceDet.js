import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class PriceDet extends React.Component {
  render() {
    if (this.props.OpenDet === false) {
      return null;
    }

    return (
      <>
        <div className="pricesDetails">
          <p>
            {this.props.descrip} <br />
            <i>
              - El número de licencias indicado en la siguiente tabla,
              corresponde al uso concurrente (simultáneo) por cada módulo.
            </i>
          </p>
        </div>
        <div className="pricesModules">
          <h3>Contiene:</h3>
          <ul>
            <li className="pricesModules--det">
              <p> </p>
              <p>MÓDULOS INCLUÍDOS:</p>
              <p># Lic.</p>
            </li>
            {this.props.modules.map((mod) => {
              return (
                <li key={mod.idMod} className="pricesModules--det">
                  <FontAwesomeIcon icon={faCheckCircle} className="check" />
                  <p>{mod.nameMod}</p>
                  <p>{mod.cantLic}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default PriceDet;
