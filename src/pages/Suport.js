import React from 'react';
// import logoArticle from '../images/soporte.jpg';
import logoHelpDesk from '../images/logo_app_mini.jpg';
import { Link } from 'react-router-dom';
import ArticleDetails from '../components/ArticleDetails';
import '../styles/articles.css';

const Suport = () => {
  const articleDet = [
    {
      idDiv: 1,
      title:
        '¿Como obtener soporte de sus servicios si ya soy cliente de su empresa?',
      text: `Para cualquier tipo de soporte se lo debe solicitar a través de
              nuestra plataforma web de HelpDesk de soporte y asistencia al
              cliente. Este es un sistema donde se deberá solicitar un Ticket de soporte
              con sus respectivas solicitudes para que estas sean atendidas por
              nuestros agentes de soporte. En donde podrá tener un rastreo en
              tiempo real del estado de su solicitud. Todo esto previo a su
              respectivo registro en el sistema. Puede acceder desde el menú principal en la
              opción “HelpDesk” o dando clic en el siguiente enlace:`,
      link: 'https://soporte.comprobantes-ecuador.com/',
      nameLink: 'HelpDesk - AppWeb de Atención y seguimiento al cliente',
    },
    {
      idDiv: 2,
      title: '¿Cómo puedo crear mi usuario en el sistema de HelpDesk?',
      text: `Para obtener su usuario debe ser un cliente de Capacity-Soft y una
              vez que su empresa este registrada como nuestro cliente, en el
              respectivo formulario de creación de usuario podrá registrarse
              buscando la empresa a la que pertenece (por medio de su RUC) y
              llenar el formulario. Una vez registrado ya podrá hacer uso del
              sistema de HelpDesk. En el siguiente video podrá ver el proceso de
              creación de su cuenta de usuario:`,
      link: 'https://youtu.be/ydgEodv5gfI',
      nameLink: 'HelpDesk - Crear Cuenta de Usuario',
    },
    {
      idDiv: 3,
      title: '¿Cómo ingresar un ticket de soporte?',
      text: `Para ingresar un ticket de soporte solo debe dar clic en la opción
              de “registrar ticket” y proceder a llenar los campos que la
              aplicación le indica. En el siguiente video podrá ver el proceso
              para registrar su ticket de soporte y sus solicitudes:`,
      link: 'https://youtu.be/6cJcEyjyKYk',
      nameLink: 'HelpDesk - Registrar Ticket de Soporte',
    },
    {
      idDiv: 4,
      title: 'Tutoriales del manejo del HelpDesk - HelpCapty',
      text: `Para más información acerca del manejo de la app web HelpDesk
              HelpCapty, en la lista de repoducción de nuestro canal tendrás
              todo el material para conocer más acerca de la herramienta.`,
      link: 'https://youtube.com/playlist?list=PLfjX1LD2x_jUpQGi2JCKV2BjY6A5sRZwA&si=I8WqBCyXo7RjRmLX',
      nameLink: 'HelpDesk - Lista de reproducción / Tutoriales',
    },
    {
      idDiv: 5,
      title:
        '¿Qué hacer si quiero solicitar un soporte, pero la empresa a la que pertenezco no existe?',
      text: `En este caso por favor ponerse en contacto con nosotros, dando
              clic en el botón "contactanos".`,
      link: '',
      nameLink: '',
    },
  ];

  return (
    <>
      <article>
        <h1 className='generalTittle'>Soporte / HelpDesk</h1>
        <main className='article'>
          <a
            href='https://soporte.comprobantes-ecuador.com/'
            target='_blank'
            style={{ width: '45%', textAlign: 'center' }}
          >
            <img src={logoHelpDesk} alt='soporte' className='article-image' />
          </a>
          {articleDet.map((article) => {
            return (
              <ArticleDetails
                key={article.idDiv}
                title={article.title}
                text={article.text}
                link={article.link}
                nameLink={article.nameLink}
              />
            );
          })}

          <Link to='/contactanos' className='btn'>
            Contactanos!
          </Link>
        </main>
      </article>
    </>
  );
};

export default Suport;
