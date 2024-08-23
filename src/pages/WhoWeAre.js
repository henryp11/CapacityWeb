import React from "react";
import logoArticle from "../images/quienes_somos.jpg";
import { Link } from "react-router-dom";
import "../styles/articles.css";

const WhoWeAre = () => {
  return (
    <>
      <article>
        <h1 className="generalTittle">Quienes Somos</h1>
        <main className="article">
          <img
            src={logoArticle}
            alt="quienes-somos"
            className="article-image"
          />
          <div className="article-det">
            <p>
              Somos una empresa{" "}
              <b>
                <i>orgullosamente ecuatoriana</i>
              </b>
              , especializada en brindar soluciones tecnológicas óptimas y de
              vanguardia a sus clientes desde Enero del año 2015.
            </p>

            <p>
              Actualmente cubrimos en especial las áreas de Ingeniería y
              re-Ingeniería de Sistemas de tipo Contable - Administrativo,
              Gestión Empresarial, Nómina y Recursos Humanos y Gestión de
              Procesos Productivos, mediante el uso e implementación de
              herramientas como SiGeM Business Software ERP / MRP / CRM.
            </p>

            <p>
              Somos{" "}
              <b>
                <i>expertos en el desarrollo de soluciones a medida </i>
              </b>
              orientados a toda clase de ámbito de negocios o empresarial.
              tenemos un staff muy experimentado, con amplios conocimientos y
              experiencia desarrollando e implementando{" "}
              <b>
                <i>óptimas soluciones para toda clase de empresas y negocios</i>
              </b>
              , no importa su tamaño, actividad o nivel de complejidad.
            </p>

            <p>
              <b>
                {" "}
                <i>
                  Estamos a la vanguardia en el desarrollo de soluciones,
                </i>{" "}
              </b>
              utilizando las últimas tecnologías disponibles, en plataformas
              web, cliente/servidor, híbridas y móviles; junto con sus redes y
              conectividad entre sistemas y bases de datos, tanto en modelos
              relacionales (SQL) como no SQL.
            </p>

            <p>
              Además, contamos con una
              <b>
                <i> amplia experiencia en asesoría y capacitación</i>
              </b>{" "}
              en herramientas tecnológicas y soluciones para diferentes áreas;
              asesoramos y brindamos servicios de capacitación y entrenamiento a
              empresas, profesionales y estudiantes. Sí desea mayor información
              dejenos sus inquietudes o preguntas en la sección de contactos.
            </p>
          </div>
          <Link to="/contactanos" className="btn">
            Contactanos!
          </Link>
        </main>
      </article>
    </>
  );
};

export default WhoWeAre;
