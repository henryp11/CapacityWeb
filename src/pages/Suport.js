import React from 'react';
// import logoArticle from '../images/soporte.jpg';
import logoHelpDesk from '../images/logo_app_mini.jpg';
import { Link } from 'react-router-dom';
import '../styles/articles.css';

const Suport = () => {
  return (
    <>
      <article>
        <h1 className='generalTittle'>Soporte / HelpDesk</h1>
        <main className='article'>
          {/* <img src={logoArticle} alt='soporte' className='article-image' /> */}
          <a href='https://soporte.comprobantes-ecuador.com/' target='_blank'>
            <img src={logoHelpDesk} alt='soporte' className='article-image' />
          </a>

          <div className='article-det'>
            <h4>
              ¿ Como obtener soporte de sus servicios si ya soy cliente de su
              empresa?
            </h4>
            <p>
              Para cualquier tipo de soporte se lo debe solicitar a través de
              nuestra plataforma web de HelpDesk de soporte y asistencia al
              cliente. El cual puede acceder desde el menú principal en la
              opción “HelpDesk” o dando clic en el siguiente enlace:
              <br />
              <br />
              <a
                href='https://soporte.comprobantes-ecuador.com/'
                target='_blank'
                style={{
                  border: '1px solid #6C91C8',
                  padding: '8px',
                  borderRadius: '8px',
                  fontStyle: 'oblique',
                  boxShadow: 'inset 2px -2px 7px 0px #6C91C8',
                  color: '#39ACF3',
                }}
              >
                <strong>
                  HelpDesk - AppWeb de Atención y seguimiento al cliente
                </strong>
              </a>
              <br />
              <br />
              Este es un sistema donde se deberá solicitar un Ticket de soporte
              con sus respectivas solicitudes para que estas sean atendidas por
              nuestros agentes de soporte. En donde podrá tener un rastreo en
              tiempo real del estado de su solicitud. Todo esto previo a su
              respectivo registro en el sistema.
            </p>
            <h4>¿Cómo puedo crear mi usuario en el sistema de HelpDesk?</h4>
            <p>
              Para obtener su usuario debe ser un cliente de Capacity-Soft y una
              vez que su empresa este registrada como nuestro cliente, en el
              respectivo formulario de creación de usuario podrá registrarse
              buscando la empresa a la que pertenece (por medio de su RUC) y
              llenar el respectivo formulario. Una vez registrado ya podrá hacer
              uso del sistema de HelpDesk. En el siguiente video podrá ver el
              proceso de creación de su cuenta de usuario:
            </p>
            {/* <h4>¿Tiene algún costo el uso de mi cuenta de usuario?</h4>
            <p>
              No, no tiene costo alguno, ya que por el hecho de ser nuestro
              cliente, tendrá derecho a estar informado permanentemente de
              nuestras novedades, actualizaciones, renovaciones y cambios
              tecnológicos, conforme vayan presentándose. Solamente facturamos a
              nuestros clientes en caso de requerir soporte presencial o
              asesoría personalizada para resolver situaciones puntuales o
              especiales.
            </p> */}
            <h4>¿Cómo ingresar un ticket de soporte?</h4>
            <p>
              Para ingresar un ticket de soporte solo debe dar clic en la opción
              de “registrar ticket” y proceder a llenar los campos que la
              aplicación le indica. En el siguiente video podrá ver el proceso
              para registrar su ticket de soporte y sus solicitudes:
            </p>
            <h4>
              ¿Qué hacer si quiero solicitar un soporte, pero la empresa a la
              que pertenezco no existe?
            </h4>
            <p>
              En este caso por favor ponerse en contacto con nosotros, dando
              clic en el botón "contactanos".
            </p>
          </div>
          <Link to='/contactanos' className='btn'>
            Contactanos!
          </Link>
        </main>
      </article>
    </>
  );
};

export default Suport;
