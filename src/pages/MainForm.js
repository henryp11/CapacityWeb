import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/forms.css';
import InputCustom from '../components/InputCustom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faIndustry } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import FormProdSection from '../components/FormProdSection';
import ReCAPTCHA from 'react-google-recaptcha';
// import {
//   GoogleReCaptchaProvider,
//   GoogleReCaptcha,
//   useGoogleReCaptcha,
// } from "react-google-recaptcha-v3";

//const keyRecap = "6LcXCMchAAAAANwNnXAf2w94nffghtojHom26Ft0"; //LocalHost Pruebas
const keyRecap = '6LdZVPshAAAAAOO-M3xChYwB2ZazXkM9r_OTlxGe'; //capacity-soft V2
//const keyRecap = "6Ld0UO0hAAAAAPIUA-1DgZ4bTy9AobOPuWd-QQ5V"; //Capacity-soft;

//Función fuera del componente para ejecutar una unica vez al cargar el componente
const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

function MainForm() {
  //Aquí ejecuto antes de la carga del componente la función para que siempre empiece desde
  //el principio, otra forma de usar useState.
  useState(scrollUp);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openSection, setOpenSection] = useState(false);
  const [openSectionDay, setOpenSectionDay] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    telFijo: '',
    cel: '',
    countryPers: 'Ecuador',
    cityPers: '',
    enterprise: '',
    industry: '',
    countryEnt: 'Ecuador',
    cityEnt: '',
    sizeEnt: '',
    obligCont: '',
    product: '',
    rate: '',
    observac: '',
    dayMeet: '',
    time: '',
    agente: '',
  });

  const [capchaOk, setCapchaOk] = useState(null);
  const [formOk, setFormOk] = useState(false);
  const [responseConfirm, setResponseConfirm] = useState(null);
  // const [token, setToken] = useState();
  // const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  // const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  // const handleReCaptchaVerify = useCallback(async () => {
  //   if (!executeRecaptcha) {
  //     console.log("Execute recaptcha not yet available");
  //     return;
  //   }

  //   const token = await executeRecaptcha("yourAction");
  //   // Do whatever you want with the token
  // }, [executeRecaptcha]);

  // const refresh = () => {
  //   /* do something like submit a form and then refresh recaptcha */
  //   setRefreshReCaptcha((r) => !r);
  // };

  const capcha = useRef(null);

  const sector = [
    'SERV. EDUCACIÓN',
    'SERV. SALUD',
    'SERV. VIVIENDA',
    'SERV. ALIMENTACIÓN',
    'SERVICIOS BÁSICOS',
    'CONSTRUCCIÓN',
    'SERV. JURÍDICOS',
    'SERV. TECNOLOGÍA',
    'SERV. CONTABLES',
    'SERV. FINANCIEROS',
    'SERV. ASESORÍA',
    'RECURSOS HUMANOS',
    'VENTA DE INSUMOS',
    'PAPELERÍA Y BAZAR',
    'FERRETERÍA',
    'MANUFACTURA/PRODUCCIÓN',
    'GESTIÓN DE PROYECTOS',
    'COMERCIO EXTERIOR',
    'PESCA Y ACUACULTURA',
    'AGRICULTURA/GANADERÍA',
    'FERTILIZANTES Y AGRÍCOLA',
    'OTRO',
  ];

  const productList = [
    {
      idCat: 'cat01',
      nomCat: 'Sigem Software',
      products: [
        {
          idProd: 'planS01',
          nameProd: 'Sigem Versión Micro',
          rate: [
            {
              idRate: 'planS01-tfr1',
              nameRate: 'Fija Mensual',
            },
            {
              idRate: 'planS01-tfr2',
              nameRate: 'Fija Anual',
            },
            {
              idRate: 'planS01-tfr3',
              nameRate: 'Un solo Pago',
            },
          ],
        },
        {
          idProd: 'planS02',
          nameProd: 'Sigem Versión Tiny',
          rate: [
            {
              idRate: 'planS02-tfr1',
              nameRate: 'Fija Mensual',
            },
            {
              idRate: 'planS02-tfr2',
              nameRate: 'Fija Anual',
            },
            {
              idRate: 'planS02-tfr3',
              nameRate: 'Un solo Pago',
            },
          ],
        },
        {
          idProd: 'planS03',
          nameProd: 'Sigem Versión Lite',
          rate: [
            {
              idRate: 'planS03-tfr1',
              nameRate: 'Fija Mensual',
            },
            {
              idRate: 'planS03-tfr2',
              nameRate: 'Fija Anual',
            },
            {
              idRate: 'planS03-tfr3',
              nameRate: 'Un solo Pago',
            },
          ],
        },
        {
          idProd: 'planS04',
          nameProd: 'Sigem Versión Pymes',
          rate: [
            {
              idRate: 'planS04-tfr1',
              nameRate: 'Fija Mensual',
            },
            {
              idRate: 'planS04-tfr2',
              nameRate: 'Fija Anual',
            },
            {
              idRate: 'planS04-tfr3',
              nameRate: 'Un solo Pago',
            },
          ],
        },
        {
          idProd: 'planS05',
          nameProd: 'Sigem Versión PRO',
          rate: [
            {
              idRate: 'planS05-tfr1',
              nameRate: 'Fija Mensual',
            },
            {
              idRate: 'planS05-tfr2',
              nameRate: 'Fija Anual',
            },
            {
              idRate: 'planS05-tfr3',
              nameRate: 'Un solo Pago',
            },
          ],
        },
      ],
    },
    {
      idCat: 'cat02',
      nomCat: 'Otros Servicios',
      products: [
        {
          idProd: 'prod06',
          nameProd: 'Soluciones Web',
          rate: [],
        },
        {
          idProd: 'prod07',
          nameProd: 'Desarrollo a Medida',
          rate: [],
        },
        {
          idProd: 'prod08',
          nameProd: 'Capacitaciones, consultoría, Asesorías',
          rate: [],
        },
        {
          idProd: 'prod09',
          nameProd: "Soluciones y API's para Desarrolladores",
          rate: [],
        },
      ],
    },
  ];

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ]{3,20}\s[a-zA-ZÀ-ÿ]{3,20}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telf: /^(\+\d+)?\d+((\s|-)?(\d{1,14})){4}$/, // 7 a 14 numeros. ^(\+\d{2,14})?\d{7,14}?(\d+[\s-]+\d)?$
    celular: /^(\+\d+)?\d+((\s|-)?(\d{1,14})){4}$/, // 10 a 14 numeros.
    ciudad: /^[a-zA-ZÀ-ÿ]{3,20}\s?([a-zA-ZÀ-ÿ]{2,20})?$/,
    empresa: /\w{3,20}[\s]?\w{3,20}/,
  };

  let params = useParams();

  // const ruta = useRef(window.location.pathname.split("/"));
  const urlCapture = useRef(window.location);
  const ruta = urlCapture.current.hash.split('/');
  console.log(ruta);

  // const planRate =
  //   ruta.current.length > 2 && ruta.current[2].length > 0
  //     ? params.planId.split("-")
  //     : [];

  const planRate =
    ruta.length > 2 && ruta[2].length > 0 ? params.planId.split('-') : [];

  useEffect(() => {
    if (planRate.length > 0) {
      fetchDataPlan();
    }
  }, []);

  // useEffect(() => {
  //   handleReCaptchaVerify();
  // }, [handleReCaptchaVerify]);

  // const onVerify = useCallback(
  //   (token) => {
  //     setToken(token);
  //   },
  //   [token]
  // );

  // let navegar = useNavigate();

  const fetchDataPlan = () => {
    if (planRate.length > 0) {
      if (planRate[0] !== 'ref') {
        let planSigem = productList[0].products.filter((planS) => {
          return planS.idProd === planRate[0];
        });

        console.log(planSigem);

        let planSigemName = planSigem.map((planSigemFind) => {
          return planSigemFind.nameProd;
        });

        let planSigemRate = planSigem.map((rateSigemFind) => {
          return rateSigemFind.rate
            .filter((rate) => {
              return rate.idRate === params.planId;
            })
            .map((rateFind) => {
              return rateFind.nameRate;
            })[0];
        });

        setForm({
          ...form,
          product: planSigemName[0],
          rate: planSigemRate[0],
        });
      } else {
        let agente = planRate[1];

        setForm({
          ...form,
          agente: agente,
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (capcha.current.getValue()) {
      console.log('No eres un Robot');
      setFormOk(true);
      setCapchaOk(true);
      try {
        const response = await fetch(
          `https://www.capacity-ecuador.com/utiles/sendformdata.php?p1=1`,
          {
            method: 'POST',
            body: JSON.stringify(form),
          }
        );
        console.log(response);
        // const data = await response.json();
        const data = await response.text();
        console.log(data); //Devuelve 2 cuando se envía todos los correos, 1 cuando llega la info pero no envía correos y 0 si hay error
        setLoading(false);
        setResponseConfirm(data);
        // this.props.history.push(
        //   `/produccion/${this.props.match.params.ordenId}`
        // );
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error);
      }
    } else {
      console.log('Por Favor Acepta el Captcha');
      setFormOk(false);
      setCapchaOk(false);
    }
  };

  // Separo los productos de Sigem y los demás en dos arrays distintos
  // sigem = (product) => product.category === "Sigem"; //Predicado para Sigem
  // otros = (product) => !this.sigem(product); //Predicado para el resto negando el resultado anterior
  // prodSigem = this.state.productList.filter(this.sigem);
  // prodGeneral = this.state.productList.filter(this.otros);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  //console.log(this.state.form);
  // console.log(this.state.form.product.slice(0, 5));

  // console.log(
  //   this.state.productList[0].products.filter((planSigem) => {
  //     return planSigem.nameProd === this.state.form.product;
  //   })
  // );

  const onChangeRecap = () => {
    if (capcha.current.getValue()) {
      console.log('No eres un Robot');
      setCapchaOk(true);
    }
  };

  console.log(form);
  console.log(planRate);
  console.log(responseConfirm);
  // console.log(token);
  // console.log(planRate.length);
  return (
    <>
      <h1 className='generalTittle'>Ponte en contacto con nosotros</h1>
      <article className='contact'>
        <div className='contact_det'>
          <h3>Impulsa tu negocio!!</h3>
          <p>
            Envíanos tu requerimiento a través del formulario de contacto a
            continuación, y nos pondremos en contacto contigo lo más pronto
            posible! <br />
          </p>
          <div className='contact_det_data'>
            <span>
              <h4>
                <FontAwesomeIcon
                  icon={faEnvelopeOpenText}
                  className='iconContact'
                />
                O puedes envianos un correo a:
              </h4>
              <i>
                <a href='mailto:info@capacity-soft.com'>
                  info@capacity-soft.com
                </a>
              </i>
            </span>
            <span>
              <h4>
                <FontAwesomeIcon
                  icon={faPhoneSquareAlt}
                  className='iconContact'
                />
                Teléfonos:
              </h4>
              <ul>
                <li>
                  <i>+593 (02)2323-279</i>
                </li>
                <li>
                  <i>+593 (09)91989-296</i>
                </li>
                <li>
                  <i>+593 (09)80497-018</i>
                </li>
              </ul>
            </span>
          </div>
        </div>
        {/* <GoogleReCaptchaProvider reCaptchaKey="6LfS6vchAAAAAE7opl5LUdF25sVGD_Rz4khMq9sj"> */}
        <form className='form' onSubmit={handleSubmit}>
          <FormProdSection
            planRate={planRate}
            formProductEsp={form.product}
            formRateEsp={form.rate}
            handleChange={handleChange}
          />
          <h2>Datos Personales</h2>
          <div className='form_section'>
            <InputCustom
              type='text'
              placeholder='Nombre y Apellido *'
              name='name'
              value={form.name}
              onChange={handleChange}
              required={true}
              textError={
                'Colocar un nombre y un apellido / El nombre y apellido deben poseer al menos 3 caracteres / no se permiten números ni caracteres especiales'
              }
              expresRegular={expresiones.nombre}
              icon={faAddressCard}
            />
            <label htmlFor=''>Información de contacto:</label>
            <InputCustom
              type='email'
              placeholder='Correo Electrónico *'
              name='email'
              value={form.email}
              onChange={handleChange}
              required={true}
              textError={'Correo electrónico Inválido'}
              expresRegular={expresiones.correo}
              icon={faEnvelope}
            />
            <div className='formSplit3'>
              <InputCustom
                type='tel'
                placeholder='Teléfono Convencional'
                name='telFijo'
                value={form.telFijo}
                onChange={handleChange}
                required={false}
                textError={'Teléfono Inválido'}
                expresRegular={expresiones.telf}
                icon={faPhoneAlt}
              />
              <InputCustom
                type='tel'
                placeholder='Celular *'
                name='cel'
                value={form.cel}
                onChange={handleChange}
                required={true}
                textError={'Celular Inválido'}
                expresRegular={expresiones.celular}
                icon={faMobileAlt}
              />
            </div>
            <div className='formSplit'>
              <label htmlFor=''>País y Ciudad:</label>
              <InputCustom
                type='text'
                placeholder='País'
                name='countryPers'
                value={form.countryPers}
                onChange={handleChange}
                required={false}
                icon={faFlag}
              />
              <InputCustom
                type='text'
                placeholder='Ciudad *'
                name='cityPers'
                value={form.cityPers}
                onChange={handleChange}
                required={true}
                textError={'Nombre de Ciudad Inválida'}
                expresRegular={expresiones.ciudad}
                icon={faCity}
              />
            </div>
          </div>
          <h2>
            Datos Corporativos o de Empresa (opcional)
            <button
              onClick={() => {
                setOpenSection(!openSection);
              }}
              type='button'
              className='buttonWrap'
            >
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </button>
          </h2>
          {openSection && (
            <div className='form_section'>
              <InputCustom
                type='text'
                placeholder='Nombre de la Empresa o Negocio'
                name='enterprise'
                value={form.enterprise}
                onChange={handleChange}
                required={false}
                textError={'Empresa Inválida'}
                expresRegular={expresiones.empresa}
                icon={faIndustry}
              />
              <div className='formSplit formSplit2'>
                <label>Tipo de Industria o Sector:</label>
                <select name='industry' onChange={handleChange} defaultValue=''>
                  <option value='' disabled>
                    Elige una opción
                  </option>
                  <optgroup label='Industria'>
                    {sector.sort().map((sector, pos) => {
                      return (
                        <option key={pos} value={sector}>
                          {sector}
                        </option>
                      );
                    })}
                  </optgroup>
                </select>
              </div>
              <div className='formSplit'>
                <label>País y Ciudad:</label>
                <InputCustom
                  type='text'
                  placeholder='País'
                  name='countryEnt'
                  onChange={handleChange}
                  required={false}
                  value={form.countryPers}
                  icon={faFlag}
                />
                <InputCustom
                  type='text'
                  placeholder='Ciudad'
                  name='cityEnt'
                  value={form.cityEnt}
                  onChange={handleChange}
                  required={false}
                  textError={'Nombre de Ciudad Inválida'}
                  expresRegular={expresiones.ciudad}
                  icon={faCity}
                />
              </div>
              <div className='formSplit formSplit2'>
                <label htmlFor=''>Tamaño de la Empresa:</label>
                <select name='sizeEnt' onChange={handleChange} defaultValue=''>
                  <option value='' disabled>
                    Elige una opción
                  </option>
                  <option value='micro'>MICRO</option>
                  <option value='pymes'>PYMES</option>
                  <option value='mediana'>MEDIANA</option>
                  <option value='grande'>GRANDE</option>
                </select>
              </div>
              <div className='formSplit formSplit2 formSplitCheck'>
                <label htmlFor=''>Obligado a llevar Contabilidad?</label>
                <input
                  type='checkbox'
                  name='obligCont'
                  className='checkBox'
                  onChange={handleCheckForm}
                />
              </div>
            </div>
          )}
          <div className='form_section'>
            <label>Observaciones o consultas adicionales:</label>
            <textarea
              name='observac'
              onChange={handleChange}
              cols='30'
              rows='5'
            ></textarea>
            <div className='formSplit formSplit2 formSplitCheck'>
              <label>
                Deseo que se pongan en contacto conmigo para una reunión o
                demostración.
              </label>
              <input
                type='checkbox'
                name=''
                className='checkBox'
                onClick={() => {
                  setOpenSectionDay(!openSectionDay);
                }}
              />
            </div>
            {openSectionDay && (
              <div className='formSplit formSplit2'>
                <label>
                  ¿Qué día y hora es más <br /> adecuado para ti?
                </label>
                <div>
                  <select name='dayMeet' onChange={handleChange}>
                    <option value='lunes'>Lunes</option>
                    <option value='martes'>Martes</option>
                    <option value='miércoles'>Miércoles</option>
                    <option value='jueves'>Jueves</option>
                    <option value='viernes'>Viernes</option>
                    <option value='sabado'>Sábado</option>
                  </select>
                  <input type='time' name='time' onChange={handleChange} />
                </div>
              </div>
            )}
          </div>
          <div className='form_section captcha'>
            <ReCAPTCHA
              ref={capcha}
              sitekey={keyRecap}
              onChange={onChangeRecap}
            />
            {capchaOk === false && (
              <div className='captcha-error'>
                Por favor acepta el Captcha!!!
              </div>
            )}
          </div>
          {responseConfirm === '2' && (
            <div className='confirmMessage'>
              Datos recibidos con éxito, le llegará un correo de confirmación!
            </div>
          )}
          {responseConfirm === '1' && (
            <div className='confirmMessage'>
              Datos recibidos con éxito, pero existen problemas con el correo
              electrónico ingresado, por favor verificar que sea un correo
              válido
            </div>
          )}
          {responseConfirm === '0' && (
            <div className='confirmMessage error-confirmMessage'>
              No se pudo enviar el formulario por favor reintente
            </div>
          )}

          <button className='btn'>Enviar</button>
          {/* <button onClick={handleReCaptchaVerify}>refrescar</button> */}
        </form>
        {/* </GoogleReCaptchaProvider> */}
      </article>
    </>
  );
}

export default MainForm;
