import React from "react";
import "../styles/categories.css";
import { Link } from "react-router-dom";

function Services() {
  const catProductos = [
    {
      id: "cat01",
      name: "SiGeM Business Software ERP",
      urlImg: "/images/SiGeM_Cubo_big.png",
      altImg: "sigem",
      urlCat: "/contactanos",
      caract: [
        `Software para gestión y control de su negocio.`,
        `Manejo completo de:
          Puntos de Ventas, Compras,
          Bodegas, Cuentas x Cobrar,
          Bancos, Cuentas x Pagar y
          Contabilidad general.`,
        `Para micro, pequeñas y medianas empresas. Tenemos
          soluciones para toda clase de necesidad.`,
        `Adicionales:
          Inventarios, Activos Fijos, Nómina, Reportes, Producción,
          Importaciones, Costos, etc.`,
      ],
    },
    {
      id: "cat02",
      name: "Soluciones para la Web",
      urlImg: "/images/web-design-pdv.svg",
      altImg: "webDev",
      urlCat: "/contactanos",
      caract: [
        `Somos Proveedores de Hosting,
          mailing, marketing digital,
          posicionamiento SEO. Gestión
          y contratación de dominios.`,
        `Diseño, planificación y desarrollo de sitios web
          estándar y para comercio electrónico.`,
        `Hacemos refactoring de su sitio web y lo mejoramos 100%`,
        `Usamos tecnología responsive que se adapta a todo tipo de
          dispositivo sea fijo o móvil.`,
      ],
    },

    {
      id: "cat03",
      name: "Desarrollo de Software a medida",
      urlImg: "/images/app-dev.svg",
      altImg: "development",
      urlCat: "/contactanos",
      caract: [
        `Somos expertos en el desarrollo
        de soluciones a la medida de las
        necesidades.`,
        `No importa el área, ámbito o tema a ser solucionado. Nuestro equipo
        de ingenieros cuenta con amplia experiencia implementando toda
        clase de soluciones a medida.`,
        `Trabajamos con plataformas en red
        local, remota, en la nube y apps móviles android o iOS.`,
        `Ofrecemos soluciones y API's para desarrolladores.`,
      ],
    },
    {
      id: "cat04",
      name: "Capacitación, consultoría y asesoría.",
      urlImg: "/images/consultoria.svg",
      altImg: "consult",
      urlCat: "/contactanos",
      caract: [
        `Ofrecemos servicios de Capacitación
          especializada en diversas áreas de
          gestión tecnológica e información.`,
        `Dirigido a Empresas, instituciones y profesionales en áreas como:

        Ofimática, Gestión Documental,
        Contabilidad, Costos, Ingeniería,
        Arquitectura (CAD/CAM/BIM), etc.`,
        `Integración e implementación de
        soluciones y soporte de calidad.`,
      ],
    },
  ];

  return (
    <>
      <h1 className="generalTittle">Nuestros Productos y Servicios</h1>
      <section className="category">
        <div className="category_container">
          {catProductos.map((category) => {
            return (
              <div key={category.id} className="category_post">
                <h2>{category.name}</h2>
                <figure className="category_post_image">
                  <img src={category.urlImg} alt={category.altImg} />
                </figure>
                <ul>
                  {category.caract.map((detail, index) => {
                    return (
                      <li key={index} className="cat_detail">
                        {detail}
                      </li>
                    );
                  })}
                </ul>

                <Link to={category.urlCat} className="btn_cat">
                  Saber Más
                  <span className="underLine"></span>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Services;
