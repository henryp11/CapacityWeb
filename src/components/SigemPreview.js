import React, { useState } from "react";
import SigemLogo from "../images/SiGeM_Cubo_big.png";
import "../styles/services.css";
// import { Link } from "react-router-dom";
import ModulDet from "../pages/ModulDet";

function SigemPreview() {
  const modules = [
    {
      id: "01",
      name: "Inventarios",
      urlImg: "/images/inven2.jpeg",
      altImg: "inven",
      descrip: `Controla el kárdex de tus inventarios de una forma eficiente, poderosa y amigable`,
      details: [
        "Gestión general de Ítems (bienes/servicios)",
        "Control y gestión de múltiples bodegas",
        "Kárdex detallado por tipos de movimientos",
        "Ingreso de toma física de inventarios y generación automática de sus correspondientes ajustes de bodega",
      ],
    },
    {
      id: "02",
      name: "Ventas y Facturación Electrónica",
      urlImg: "/images/ven.jpg",
      altImg: "ventas",
      descrip: `Gestiona el proceso de tus ventas y facturas electrónicas de forma sencilla, y a la vez potente y versátil`,
      details: [
        "Manejo de multiples listas de precios",
        "Asignación personalizada de precios por cliente",
        "Facturación fácil y sencilla de bienes o servicios",
        "Punto de Venta con código de barras e interfaz intuitiva",
        "Control personalizado de ventas a crédito para cada cliente",
        "Conexión automática con inventarios (egreso del kárdex)",
      ],
    },
    {
      id: "03",
      name: "Cuentas x Cobrar (Cartera)",
      urlImg: "/images/cxc.jpg",
      altImg: "cxc",
      descrip: `Administra tu cartera de clientes y cobranzas de forma eficiente, rápida y dinámica`,
      details: [
        "Administración centralizada de cobros y abonos realizados, con conexión a transacciones de clientes",
        "Gestión e ingreso de abonos simples y múltiples de clientes (conectado directamente a caja/bancos)",
        "Obtención de reportes a la fecha e históricos, en diversos formatos de cartera (detallado, resumido, analítico)",
      ],
    },
    {
      id: "04",
      name: "Cuentas x Pagar (Proveedores)",
      urlImg: "/images/cxp.jpg",
      altImg: "cxp",
      descrip: `Administra tus adquisiciones y pagos a proveedores de forma eficiente, rápida y dinámica`,
      details: [
        "Administración centralizada de deudas adquiridas y abonos realizados, con conexión a transacciones de proveedores",
        "Gestión e ingreso de abonos simples y múltiples a proveedores (conectado directamente a caja/bancos)",
        "Obtención de reportes a la fecha e históricos, en diversos formatos (detallado, resumido, analítico)",
      ],
    },
    {
      id: "05",
      name: "Contabilidad y Finanzas",
      urlImg: "/images/cont.jpg",
      altImg: "cont",
      descrip: `Administra la gestión financiera y contable de tu negocio de forma práctica, sencilla, y a la vez potente`,
      details: [
        "Administración centralizada de asientos contables automáticos, provenientes de los módulos del sistema",
        "Parametrización a medida de plantillas contables y mapeo de cuentas para una óptima operación, basado en el plan de cuentas de la empresa",
        "Todos los tipo de balances y estados financieros se generan de forma instantánea sin necesidad de mayorizar cuentas",
        "Cierre contables mensuales y por ejercicio",
      ],
    },
    {
      id: "06",
      name: "Caja Bancos y Tesorería",
      urlImg: "/images/caja_ban.jpg",
      altImg: "bancos",
      descrip: `Gestiona y administra tus transacciones bancarias de manera coordinada y total con tus cuentas`,
      details: [
        "Administración y gestión de bancos y sus cuentas bancarias",
        "Vinculación automática de movimientos bancarios provenientes de otros módulos (CxC, CxP, nómina, etc)",
        "Manejo de conciliaciones bancarias mensuales y obtención de reportes",
      ],
    },
    {
      id: "07",
      name: "Compras o Abastecimiento",
      urlImg: "/images/abast.jpg",
      altImg: "compras",
      descrip: `Gestiona tus compras a proveedores e ingreso de mercancías y servicios de manera integral`,
      details: [
        "Manejo y administración de proveedores",
        "Ingreso centralizado de compras de la empresa o negocio",
        "SiGeM le permite realizar la importación masiva de compras electrónicas desde la plataforma del SRI",
        "Distribución de artículos de inventario de manera directa a bodega desde el proceso de compra",
      ],
    },
    {
      id: "08",
      name: "Producción",
      urlImg: "/images/prod.jpg",
      altImg: "prod",
      descrip: `La mejor y más completa solución! Administra y controla eficazmente tus procesos de producción`,
      details: [
        "Gestión mediante ordenes de trabajo",
        "Manejo mediante recetas de fabricación",
        "Vinculación de pedidos de clientes a ordenes de producción",
        "Control, monitoreo y gestión de procesos y uso de materias primas por cada orden de trabajo con su correspondiente administración y costeo",
      ],
    },
    {
      id: "09",
      name: "Costos",
      urlImg: "/images/cost.jpg",
      altImg: "costos",
      descrip: `SiGeM hace posible la obtención precisa de tus costos de producción, y permite optimizar tus ganancias`,
      details: [
        "Parametrización y asignación de cuentas de costos",
        "Actualización automático del costo real de los productos basandose en los principios de costos (MO, MOI, GF, GFI)",
        "Generación automática de asientos de costeo",
      ],
    },
    {
      id: "10",
      name: "Nómina y Rol de Pagos",
      urlImg: "/images/nom.jpg",
      altImg: "nomina",
      descrip: `Calcular, ingresar, generar e imprimir los roles de pago de tu empresa nunca fue tan sencillo`,
      details: [
        "Administración y gestión de nómina de empleados con todos sus datos laborales de ingresos, salidas y novedades",
        "Parametrización de rubros mediante formulas de cálculo",
        "Generación de rol de pagos, según fechas configuradas para el pago, con su correspondiente vinculación a componentes salariales, rubros, cálculos y contabilización automática",
      ],
    },
    {
      id: "11",
      name: "Administración y Seguridades",
      urlImg: "/images/admin.jpg",
      altImg: "admin",
      descrip: `Maneja, administra y controla de manera centralizada todos tus módulos ¡Nunca fue tan fácil hacerlo`,
      details: [
        "Personalización y parametrización de funcionalidades que controlar el comportamiento general del sistema",
        "Gestión de usuarios, niveles de accesos y seguridades a los diferentes módulos que contiene el sistema",
        "Obtención de reportes de auditoria de transacciones por módulo, usuario y fecha",
      ],
    },
    {
      id: "12",
      name: "Activos fijos",
      urlImg: "/images/a_fijos.jpg",
      altImg: "afijos",
      descrip: `SiGeM maneja, administra, calcula y contabiliza automáticamente las depreciaciones de tus activos fijos`,
      details: [
        "Ámbiente de edición y administración de fichas de activos fijos por categoría y tiempo de vida útil",
        "Cálculo y contabilización automática de la depreciación de los activos fijos, procesados de manera mensual",
        "Obtención de reportes e historial de depreciaciones",
      ],
    },
    {
      id: "13",
      name: "CRM",
      urlImg: "/images/crm.jpg",
      altImg: "crm",
      descrip: `Administra de forma completa y eficaz, la relación con tus consumidores y socios comerciales. ¡Descúbrelo!`,
      details: [
        "Gestión extendida de prospectos, clientes, proveedores y empleados, basada en eventos calendarizados (CRM)",
        "Alertas y envío de mensajes por correo y otras plataformas de manera automatizada según tipo de evento",
        "Obtención de reportes de gestión operativa CRM",
      ],
    },
    {
      id: "14",
      name: "Gerencial",
      urlImg: "/images/geren.jpg",
      altImg: "ger",
      descrip: `Obtén de manera rápida, simple e intuitiva, la información vital e indicadores de gestión de tu negocio`,
      details: [
        "Amplio control y gestión sobre todos los reportes del sistema",
        "Posibilidad de diseñar sus propios reportes personalizados.",
        "Obtención de reportes especiales y estadísticos, junto con sus correspondientes indicadores y gráficas",
      ],
    },
    {
      id: "15",
      name: "Importaciones",
      urlImg: "/images/import.jpg",
      altImg: "import",
      descrip: `Con SIGEM: no más complicados cálculos, ni dolores de cabeza a la hora de liquidar tus importaciones`,
      details: [
        "Gestión de compras en el exterior y vinculación de transacciones locales para su posterior liquidación",
        "Cálculo y asignación de costos a las mercancías importadas",
        "Consolidación de valores y liquidación de aduana con su respectiva contabilización de forma automática",
      ],
    },
    {
      id: "16",
      name: "Logística",
      urlImg: "/images/logis.jpg",
      altImg: "logistica",
      descrip: `Administra y gestiona de forma completa y eficaz, todas las operaciones de logística en tu negocio`,
      details: [
        "Administración de operaciones logísticas (transporte)",
        "Control de rutas, conductores, carga y novedades",
        "Gestión de procesos y obtención de reportes",
      ],
    },
    {
      id: "17",
      name: "Proyectos",
      urlImg: "/images/proy.jpg",
      altImg: "proy",
      descrip: `SiGeM maneja, administra y costea por completo tus proyectos de principio a fin. ¡Nunca fue tan fácil hacerlo!`,
      details: [
        "Administración centralizada de proyectos",
        "Subdivisión de proyectos y control de avance",
        "Costeo de proyectos y balance contable por proyecto",
      ],
    },
    {
      id: "18",
      name: "Presupuestación",
      urlImg: "/images/presup.jpg",
      altImg: "presup",
      descrip: `Proyecta tus ingresos y gastos del ejercicio, compara y controla tu gestión ¡Nunca fue tan fácil hacerlo!`,
      details: [
        "Ingreso de presupuestos por tipos de gasto e ingreso",
        "Comparativa de valores: presupuestado vs real ejecutado",
        "Reportes y proyecciones del ejercicio",
      ],
    },
    {
      id: "19",
      name: "Tributación",
      urlImg: "/images/tribut.jpg",
      altImg: "tribut",
      descrip:
        "Genera y obtiene de una forma fácil y amigable los informes, declaraciones y anexos tributarios SRI",
      details: [
        "Reportes de IVA y retenciones",
        "Reportes para declaración SRI",
        "Generación anexos ATS",
      ],
    },
    {
      id: "20",
      name: "Restaurantes",
      urlImg: "/images/rest.jpg",
      altImg: "rest",
      descrip:
        "Administra la gestión de ventas de tu restaurante de forma completa y dinámica. ¡Nunca fue tan fácil hacerlo!",
      details: [
        "Administración de mesas y meseros",
        "Generación de cuentas y precuentas",
        "Reporte de ventas diarias y semanales",
      ],
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [modulCapture, setModulCapture] = useState("");

  return (
    <>
      <section className="sigem">
        <h1 className="generalTittle">SiGeM Business Software ERP</h1>
        <main className="sigemContainer">
          <figure className="sigemLogo">
            <img src={SigemLogo} alt="sigemLogo" />
          </figure>
          <div className="sigemText">
            <h2>
              ¿Que es SiGeM ERP?
              {/* <span className="underLine_tittle"></span> */}
            </h2>
            <p>
              El sistema SiGeM es un software integral, que le permite manejar y
              gestionar todas las áreas de su empresa o negocio de una manera
              completa, eficaz, intuitiva, fácil de usar, poderosa y abierta a
              la vez. Ya sea que se trate de un negocio pequeño, mediano o
              grande, de tipo comercial, industrial o de servicios, SiGeM
              Software ERP lo manejará eficazmente y al día en todas sus áreas
              de gestión.
            </p>
            <p>
              Y lo más importante : El sistema SiGeM Software ERP Es un producto
              100% hecho en Ecuador, de excelente calidad y rendimiento, trabaja
              con la legislación de nuestro país, por lo que no necesita de
              adaptaciones complicadas ni costosas. Proveemos a nuestros
              clientes de las respectivas actualizaciones tan pronto como surgen
              cambios en la legislación tributaria, contable o laboral de
              nuestro país.
            </p>
            <strong>
              <p>
                SiGeM Software ERP cuenta con una base estándar de varios
                módulos que le permiten llevar a cabo la gestión y control de
                las siguientes áreas de su negocio:
              </p>
              <br />
              <br />
              <br />
            </strong>
          </div>
          <div className="galleryMod">
            {modules.map((mod) => {
              return (
                <div key={mod.id} className="gallery_item">
                  <img src={mod.urlImg} alt={mod.altImg} />
                  {/* <span className="overlay">
                    <Link to="/" className="overlay_descrip">
                      +
                    </Link>
                  </span> */}
                  <button
                    onClick={() => {
                      setModalOpen(!modalOpen);
                      setModulCapture(mod.id);
                    }}
                    className="overlay"
                  >
                    +
                  </button>
                  {modulCapture === mod.id && (
                    <ModulDet
                      isOpen={modalOpen}
                      closeModal={() => {
                        setModalOpen(!modalOpen);
                      }}
                      modulName={mod.name}
                      modulImg={mod.urlImg}
                      modulDescrip={mod.descrip}
                      modDetails={mod.details}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </section>
    </>
  );
}

export default SigemPreview;
