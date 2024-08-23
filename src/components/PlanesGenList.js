import React from "react";
import PriceDet from "./PriceDet";
import RateDet from "./RateDet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function PlanesGenList(props) {
  const {
    planes,
    planCapture,
    rateCapture,
    openInfoRate,
    openInfoPlan,
    handleRetDetails,
    handleSectionPlan,
  } = props;

  return (
    <main className="pricesList">
      {planes.map((plan) => {
        return (
          <div key={plan.id} className="pricesList_container">
            <h2>
              <img src={plan.logo} alt="logoVersion" />
              SiGeM Software <br /> versión {plan.name}:
            </h2>
            {plan.prices.map((option, pos) => {
              return (
                <span className="priceRates" key={option.rate}>
                  <div className="priceRates_title">
                    <span>{option.nameRate}</span>
                    {option.price.length > 0 && (
                      <button
                        onClick={() => {
                          handleRetDetails(openInfoRate, option.rate, plan.id);
                        }}
                        type="button"
                        className="buttonInfo"
                      >
                        <FontAwesomeIcon
                          icon={faInfoCircle}
                          className="iconInfo"
                        />
                      </button>
                    )}

                    {planCapture === plan.id && rateCapture === option.rate && (
                      <RateDet
                        OpenDet={openInfoRate}
                        detRate={option.detRate}
                        observac={option.observac}
                      />
                    )}
                  </div>
                  <span className="priceRates_observEsp">
                    <p>{option.observac2}</p>
                  </span>
                  {option.price.length > 0 && (
                    <strong> $ {option.price}</strong>
                  )}

                  <Link
                    to={
                      option.price.length > 0
                        ? `/contactanos/${plan.id}-${option.rate}`
                        : `/contactanos`
                    }
                    className="btn_price"
                  >
                    Lo Quiero!
                  </Link>
                </span>
              );
            })}
            <button
              onClick={() => {
                handleSectionPlan(openInfoPlan, plan.id);
              }}
              type="button"
              className="button-det-modul"
            >
              <h3>
                Detalles de la versión
                {/* <FontAwesomeIcon icon={faChevronCircleDown} /> */}
              </h3>
            </button>
            {planCapture === plan.id && (
              <PriceDet
                OpenDet={openInfoPlan}
                descrip={plan.descrip}
                modules={plan.modules}
              />
            )}
          </div>
        );
      })}
    </main>
  );
}

export default PlanesGenList;
