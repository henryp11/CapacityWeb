import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';

function MenuLinks(props) {
  const menuElements = [
    {
      idList: '01',
      name: 'Quienes Somos',
      url: '/quienes-somos',
      specialClass: '',
    },
    {
      idList: '02',
      name: 'Soporte',
      url: '/soporte',
      specialClass: '',
    },
    {
      idList: '03',
      name: 'Tutoriales',
      url: '/tutoriales',
      specialClass: '',
    },

    {
      idList: '04',
      name: '¿Eres Contador?',
      url: '/sigem-contadores',
      specialClass: '',
    },
    {
      idList: '05',
      name: 'Trabaja con Nosotros',
      url: '/trabaja-con-nosotros',
      specialClass: '',
    },
    {
      idList: '06',
      name: 'Contacto',
      url: '/contactanos',
      specialClass: '',
    },
  ];

  return (
    <>
      <ol className={props.className}>
        <Link to='/' id='home'>
          {props.home}
        </Link>
        {menuElements.map((element) => {
          return (
            <li key={element.idList}>
              <NavLink
                activeclassname='active'
                to={element.url}
                onClick={props.closeMenu}
              >
                {element.name}
              </NavLink>
            </li>
          );
        })}
        <li>
          <a
            href='https://soporte.comprobantes-ecuador.com/'
            target='_blank'
            style={{
              flexDirection: 'column',
              gap: '4px',
              alignItems: 'center',
            }}
          >
            HelpDesk
            <FontAwesomeIcon icon={faHeadset} />
          </a>
        </li>
      </ol>
    </>
  );
}

export default MenuLinks;
