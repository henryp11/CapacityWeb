import React from "react";

function FormProdSection(props) {
  const { planRate, formProductEsp, formRateEsp, handleChange } = props;

  const productList = [
    {
      idCat: "cat01",
      nomCat: "Sigem Software",
      products: [
        {
          idProd: "planS01",
          nameProd: "Sigem Versión Micro",
          logo: "/images/Version_Micro.png",
          rate: [
            {
              idRate: "planS01-tfr1",
              nameRate: "Fija Mensual",
            },
            {
              idRate: "planS01-tfr2",
              nameRate: "Fija Anual",
            },
            {
              idRate: "planS01-tfr3",
              nameRate: "Un solo Pago",
            },
          ],
        },
        {
          idProd: "planS02",
          nameProd: "Sigem Versión Tiny",
          logo: "/images/Version_Tiny.png",
          rate: [
            {
              idRate: "planS02-tfr1",
              nameRate: "Fija Mensual",
            },
            {
              idRate: "planS02-tfr2",
              nameRate: "Fija Anual",
            },
            {
              idRate: "planS02-tfr3",
              nameRate: "Un solo pago",
            },
          ],
        },
        {
          idProd: "planS03",
          nameProd: "Sigem Versión Lite",
          logo: "/images/Version_Lite.png",
          rate: [
            {
              idRate: "planS03-tfr1",
              nameRate: "Fija Mensual",
            },
            {
              idRate: "planS03-tfr2",
              nameRate: "Fija Anual",
            },
            {
              idRate: "planS03-tfr3",
              nameRate: "Un solo pago",
            },
          ],
        },
        {
          idProd: "planS04",
          nameProd: "Sigem Versión Pymes",
          logo: "/images/Version_Pymes.png",
          rate: [
            {
              idRate: "planS04-tfr1",
              nameRate: "Fija Mensual",
            },
            {
              idRate: "planS04-tfr2",
              nameRate: "Fija Anual",
            },
            {
              idRate: "planS04-tfr3",
              nameRate: "Un solo pago",
            },
          ],
        },
        {
          idProd: "planS05",
          nameProd: "Sigem Versión PRO",
          logo: "/images/Version_Pro.png",
          rate: [
            {
              idRate: "planS05-tfr1",
              nameRate: "Fija Mensual",
            },
            {
              idRate: "planS05-tfr2",
              nameRate: "Fija Anual",
            },
            {
              idRate: "planS05-tfr3",
              nameRate: "Un solo pago",
            },
          ],
        },
      ],
    },
    {
      idCat: "cat02",
      nomCat: "Otros Servicios",
      products: [
        {
          idProd: "prod06",
          nameProd: "Soluciones Web",
          rate: [],
        },
        {
          idProd: "prod07",
          nameProd: "Desarrollo a Medida",
          rate: [],
        },
        {
          idProd: "prod08",
          nameProd: "Capacitaciones, consultoría, Asesorías",
          rate: [],
        },
        {
          idProd: "prod09",
          nameProd: "Soluciones y API's para Desarrolladores",
          rate: [],
        },
      ],
    },
  ];

  return (
    <>
      {planRate.length > 0 && planRate[0] !== "ref" ? (
        <h2>Producto elegido:</h2>
      ) : (
        <h2>En que producto está interesado?</h2>
      )}

      {planRate.length > 0 && planRate[0] !== "ref" ? (
        productList[0].products
          .filter((plan) => {
            return plan.idProd === planRate[0];
          })
          .map((planRate) => {
            return (
              <div
                key={planRate.idProd}
                className="form_section form_product_choiced"
              >
                <img src={planRate.logo} alt="" />
                <div>
                  <h3>{formProductEsp}</h3>
                  <h4>
                    <i>Tarifa:</i> <i>{formRateEsp}</i>
                  </h4>
                </div>
              </div>
            );
          })
      ) : (
        <div className="form_section">
          <select
            name="product"
            onChange={handleChange}
            defaultValue=""
            required
          >
            {planRate.length === 0 && (
              <option value="" disabled>
                Elige una opción
              </option>
            )}

            {planRate[0] === "ref" && (
              <option value="" disabled>
                Elige una opción
              </option>
            )}

            {productList.map((category) => {
              return (
                <optgroup key={category.idCat} label={category.nomCat}>
                  {category.products.map((product) => {
                    return (
                      <option key={product.idProd} value={product.nameProd}>
                        {product.nameProd}
                      </option>
                    );
                  })}
                </optgroup>
              );
            })}
          </select>

          {formProductEsp.slice(0, 5) === "Sigem" ? (
            <fieldset className="optionList">
              <legend>Tarifas:</legend>
              {productList[0].products
                .filter((planSigem) => {
                  return planSigem.nameProd === formProductEsp;
                })[0]
                .rate.map((rates) => {
                  return (
                    <div key={rates.idRate} className="optionList--rates">
                      <label htmlFor={rates.idRate}>{rates.nameRate}</label>
                      <input
                        id={rates.idRate}
                        type="radio"
                        name="rate"
                        onChange={handleChange}
                        value={rates.nameRate}
                      />
                    </div>
                  );
                })}
            </fieldset>
          ) : (
            <i></i>
          )}
        </div>
      )}
    </>
  );
}

export default FormProdSection;
