import React from 'react';
import logoSigem from '../images/Logo_cubo_sigem.png';
import logoHelpDesk from '../images/logo_app_mini.jpg';
import { Link } from 'react-router-dom';
import ArticleDetails from '../components/ArticleDetails';
import '../styles/articles.css';

const Tutorials = () => {
  const articleDet = [
    {
      idDiv: 1,
      title: 'Manual Online Sigem Software',
      text: `Accede a nuestro manual en linea para el manejo de nuestro ERP SiGeM Software. Así como aprender varios conceptos y funcionalidades de cada módulo.`,
      link: 'https://capacity-soft.com/manual_online',
      nameLink: 'SiGeM - Manual Online',
    },
    {
      idDiv: 2,
      title: 'Video Tutoriales Sigem Software',
      text: `Conoce el funcionamiento de nuestro ERP Sigem Software mediante videos detallados de cada módulo, con ejemplos, explicaciones y todo el recorrido desde lo más básico hasta los temas mas específicos para cada módulo`,
      link: 'https://capacity-soft.com/tutoriales_online',
      nameLink: 'SiGeM - Videos Online',
    },
    {
      idDiv: 3,
      title: 'Tutoriales del manejo del HelpDesk - HelpCapty',
      text: `Accede a tutoriales para el  manejo de nuestra app web HelpDesk
              HelpCapty, en la lista de repoducción de nuestro canal tendrás
              todo el material para conocer más acerca de la herramienta.`,
      link: 'https://youtube.com/playlist?list=PLfjX1LD2x_jUpQGi2JCKV2BjY6A5sRZwA&si=I8WqBCyXo7RjRmLX',
      nameLink: 'HelpDesk - Lista de reproducción / Tutoriales',
    },
  ];

  return (
    <>
      <article>
        <h1 className='generalTittle'>Tutoriales / Manuales Online</h1>
        <main className='article'>
          <a
            href='https://soporte.comprobantes-ecuador.com/'
            target='_blank'
            style={{ width: '45%', textAlign: 'center' }}
          >
            <img
              src={logoSigem}
              alt='sigemTut'
              className='article-image'
              style={{ height: '100px' }}
            />
            <img
              src={logoHelpDesk}
              alt='soporte'
              className='article-image'
              style={{ height: '100px' }}
            />
          </a>
          {articleDet.map((article) => {
            return (
              <ArticleDetails
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

export default Tutorials;
