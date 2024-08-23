import React, { useState } from "react";
import "../styles/priceList.css";
import PlanesGenList from "./PlanesGenList";

function PriceList() {
  const planesSigem = [
    {
      id: "planS01",
      name: "Micro",
      logo: "/images/Version_Micro.png",
      prices: [
        {
          rate: "tfr1",
          nameRate: "Tarifa Fija Mensual",
          price: "40*",
          detRate: `Precio Fijo a pagar cada mes (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: "",
          urlRateForm: "",
        },
        {
          rate: "tfr2",
          nameRate: "Tarifa Fija Anual",
          price: "400*",
          detRate: `Precio fijo a pagar cada año (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: `Al contratar este plan obtienes un ahorro de 2 meses de pago.`,
          urlRateForm: "",
        },
        {
          rate: "tfr3",
          nameRate: "Un solo Pago",
          price: "750",
          detRate: `Precio a pagar por UNA SOLA VEZ al comprar el sistema (+IVA)`,
          observac: "",
          observac2: "",
          urlRateForm: "",
        },
      ],
      descrip: `Instalación, capacitación y soporte por 60 días.`,
      modules: [
        {
          idMod: "m01",
          nameMod: "INVENTARIOS E ITEMS",
          cantLic: "1",
        },
        {
          idMod: "m02",
          nameMod: "VENTAS CON FACTURACIÓN ELECTRÓNICA",
          cantLic: "1",
        },
        {
          idMod: "m03",
          nameMod: "CUENTAS POR COBRAR",
          cantLic: "1",
        },
        {
          idMod: "m04",
          nameMod: "COMPRAS Y ABASTECIMIENTO",
          cantLic: "1",
        },
        {
          idMod: "m05",
          nameMod: "CUENTAS POR PAGAR",
          cantLic: "1",
        },
        {
          idMod: "m06",
          nameMod: "CAJA-BANCOS Y TESORERÍA",
          cantLic: "1",
        },
      ],
    },
    {
      id: "planS02",
      name: "Tiny",
      logo: "/images/Version_Tiny.png",
      prices: [
        {
          rate: "tfr1",
          nameRate: "Tarifa Fija Mensual",
          price: "50*",
          detRate: `Precio Fijo a pagar cada mes (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: "",
          urlRateForm: "",
        },
        {
          rate: "tfr2",
          nameRate: "Tarifa Fija Anual",
          price: "500*",
          detRate: `Precio fijo a pagar cada año (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: `Al contratar este plan obtienes un ahorro de 2 meses de pago.`,
          urlRateForm: "",
        },
        {
          rate: "tfr3",
          nameRate: "Un solo Pago",
          price: "950",
          detRate: `Precio a pagar por UNA SOLA VEZ al comprar el sistema (+IVA)`,
          observac: "",
          observac2: "",
          urlRateForm: "",
        },
      ],
      descrip: `Instalación, capacitación y soporte por 3 meses.`,
      modules: [
        {
          idMod: "m01",
          nameMod: "INVENTARIOS E ITEMS",
          cantLic: "1",
        },
        {
          idMod: "m02",
          nameMod: "VENTAS CON FACTURACIÓN ELECTRÓNICA",
          cantLic: "1",
        },
        {
          idMod: "m03",
          nameMod: "CUENTAS POR COBRAR",
          cantLic: "1",
        },
        {
          idMod: "m04",
          nameMod: "COMPRAS Y ABASTECIMIENTO",
          cantLic: "1",
        },
        {
          idMod: "m05",
          nameMod: "CUENTAS POR PAGAR",
          cantLic: "1",
        },
        {
          idMod: "m06",
          nameMod: "CAJA-BANCOS Y TESORERÍA",
          cantLic: "1",
        },
        {
          idMod: "m07",
          nameMod: "CONTABILIDAD, BALANCES, ATS",
          cantLic: "1",
        },
      ],
    },
    {
      id: "planS03",
      name: "Lite",
      logo: "/images/Version_Lite.png",
      prices: [
        {
          rate: "tfr1",
          nameRate: "Tarifa Fija Mensual",
          price: "60*",
          detRate: `Precio Fijo a pagar cada mes (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: "",
          urlRateForm: "",
        },
        {
          rate: "tfr2",
          nameRate: "Tarifa Fija Anual",
          price: "600*",
          detRate: `Precio fijo a pagar cada año (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: `Al contratar este plan obtienes un ahorro de 2 meses de pago.`,
          urlRateForm: "",
        },
        {
          rate: "tfr3",
          nameRate: "Un solo Pago",
          price: "1.235",
          detRate: `Precio a pagar por UNA SOLA VEZ al comprar el sistema (+IVA)`,
          observac: "",
          observac2: "",
          urlRateForm: "",
        },
      ],
      descrip: `Instalación, capacitación y soporte por 3 meses.`,
      modules: [
        {
          idMod: "m01",
          nameMod: "INVENTARIOS E ITEMS",
          cantLic: "2",
        },
        {
          idMod: "m02",
          nameMod: "VENTAS CON FACTURACIÓN ELECTRÓNICA",
          cantLic: "2",
        },
        {
          idMod: "m03",
          nameMod: "CUENTAS POR COBRAR",
          cantLic: "2",
        },
        {
          idMod: "m04",
          nameMod: "COMPRAS Y ABASTECIMIENTO",
          cantLic: "2",
        },
        {
          idMod: "m05",
          nameMod: "CUENTAS POR PAGAR",
          cantLic: "2",
        },
        {
          idMod: "m06",
          nameMod: "CAJA-BANCOS Y TESORERÍA",
          cantLic: "2",
        },
        {
          idMod: "m07",
          nameMod: "CONTABILIDAD, BALANCES, ATS",
          cantLic: "2",
        },
      ],
    },
    {
      id: "planS04",
      name: "Pymes",
      logo: "/images/Version_Pymes.png",
      prices: [
        {
          rate: "tfr1",
          nameRate: "Tarifa Fija Mensual",
          price: "75*",
          detRate: `Precio Fijo a pagar cada mes (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: "",
          urlRateForm: "",
        },
        {
          rate: "tfr2",
          nameRate: "Tarifa Fija Anual",
          price: "750*",
          detRate: `Precio fijo a pagar cada año (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: `Al contratar este plan obtienes un ahorro de 2 meses de pago.`,
          urlRateForm: "",
        },
        {
          rate: "tfr3",
          nameRate: "Un solo Pago",
          price: "1.770",
          detRate: `Precio a pagar por UNA SOLA VEZ al comprar el sistema (+IVA)`,
          observac: "",
          observac2: "",
          urlRateForm: "",
        },
      ],
      descrip: `Instalación, capacitación y soporte por 3 meses.`,
      modules: [
        {
          idMod: "m01",
          nameMod: "INVENTARIOS E ITEMS",
          cantLic: "3",
        },
        {
          idMod: "m02",
          nameMod: "VENTAS CON FACTURACIÓN ELECTRÓNICA",
          cantLic: "3",
        },
        {
          idMod: "m03",
          nameMod: "CUENTAS POR COBRAR",
          cantLic: "3",
        },
        {
          idMod: "m04",
          nameMod: "COMPRAS Y ABASTECIMIENTO",
          cantLic: "3",
        },
        {
          idMod: "m05",
          nameMod: "CUENTAS POR PAGAR",
          cantLic: "3",
        },
        {
          idMod: "m06",
          nameMod: "CAJA-BANCOS Y TESORERÍA",
          cantLic: "3",
        },
        {
          idMod: "m07",
          nameMod: "CONTABILIDAD, BALANCES, ATS",
          cantLic: "3",
        },
        {
          idMod: "m08",
          nameMod: "NÓMINA",
          cantLic: "1",
        },
      ],
    },
    {
      id: "planS05",
      name: " PRO",
      logo: "/images/Version_Pro.png",
      prices: [
        {
          rate: "tfr1",
          nameRate: "Tarifa Fija Mensual",
          price: "85*",
          detRate: `Precio Fijo a pagar cada mes (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: "",
          urlRateForm: "",
        },
        {
          rate: "tfr2",
          nameRate: "Tarifa Fija Anual",
          price: "850*",
          detRate: `Precio fijo a pagar cada año (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: `Al contratar este plan obtienes un ahorro de 2 meses de pago.`,
          urlRateForm: "",
        },
        {
          rate: "tfr3",
          nameRate: "Un solo Pago",
          price: "2.270",
          detRate: `Precio a pagar por UNA SOLA VEZ al comprar el sistema (+IVA)`,
          observac: "",
          observac2: "",
          urlRateForm: "",
        },
      ],
      descrip: `Instalación, capacitación y soporte por 120 días`,
      modules: [
        {
          idMod: "m01",
          nameMod: "INVENTARIOS E ITEMS",
          cantLic: "3",
        },
        {
          idMod: "m02",
          nameMod: "VENTAS CON FACTURACIÓN ELECTRÓNICA",
          cantLic: "3",
        },
        {
          idMod: "m03",
          nameMod: "CUENTAS POR COBRAR",
          cantLic: "3",
        },
        {
          idMod: "m04",
          nameMod: "COMPRAS Y ABASTECIMIENTO",
          cantLic: "3",
        },
        {
          idMod: "m05",
          nameMod: "CUENTAS POR PAGAR",
          cantLic: "3",
        },
        {
          idMod: "m06",
          nameMod: "CAJA-BANCOS Y TESORERÍA",
          cantLic: "3",
        },
        {
          idMod: "m07",
          nameMod: "CONTABILIDAD, BALANCES, ATS",
          cantLic: "3",
        },
        {
          idMod: "m08",
          nameMod: "NÓMINA",
          cantLic: "1",
        },
        {
          idMod: "m09",
          nameMod: "PRODUCCIÓN",
          cantLic: "1",
        },
        {
          idMod: "m10",
          nameMod: "COSTOS",
          cantLic: "1",
        },
      ],
    },
    {
      id: "planS06",
      name: " Especial",
      logo: "/images/Logo_cubo_sigem.png",
      prices: [
        {
          rate: "tfr1",
          nameRate: (
            <h2 className="anuncioSpecial">
              Si deseas configurar una solución personalizada a la medida, con
              los módulos que tu negocio requiere... <br />
              <br /> Ponte en contacto con nuestra área comercial en el
              siguiente enlace:
            </h2>
          ),

          price: "",
          detRate: `Precio varia según los módulos deseados (+IVA)`,
          observac: ``,
          observac2: "",
          urlRateForm: "",
        },
      ],
      descrip: `Instalación, capacitación y soporte por 120 días`,
      modules: [
        {
          idMod: "m01",
          nameMod: "INVENTARIOS E ITEMS",
          cantLic: "X",
        },
        {
          idMod: "m02",
          nameMod: "VENTAS CON FACTURACIÓN ELECTRÓNICA",
          cantLic: "X",
        },
        {
          idMod: "m03",
          nameMod: "CUENTAS POR COBRAR",
          cantLic: "X",
        },
        {
          idMod: "m04",
          nameMod: "COMPRAS Y ABASTECIMIENTO",
          cantLic: "X",
        },
        {
          idMod: "m05",
          nameMod: "CUENTAS POR PAGAR",
          cantLic: "X",
        },
        {
          idMod: "m06",
          nameMod: "CAJA-BANCOS Y TESORERÍA",
          cantLic: "X",
        },
        {
          idMod: "m07",
          nameMod: "CONTABILIDAD, BALANCES, ATS",
          cantLic: "X",
        },
        {
          idMod: "m08",
          nameMod: "NÓMINA",
          cantLic: "X",
        },
        {
          idMod: "m09",
          nameMod: "PRODUCCIÓN",
          cantLic: "X",
        },
        {
          idMod: "m10",
          nameMod: "COSTOS",
          cantLic: "X",
        },
        {
          idMod: "m11",
          nameMod: "ACTIVOS FIJOS",
          cantLic: "X",
        },
        {
          idMod: "m12",
          nameMod: "PRESUPUESTOS",
          cantLic: "X",
        },
        {
          idMod: "m13",
          nameMod: "IMPORTACIONES",
          cantLic: "X",
        },
        {
          idMod: "m14",
          nameMod: "PROYECTOS",
          cantLic: "X",
        },
        {
          idMod: "m15",
          nameMod: "GERENCIAL",
          cantLic: "X",
        },
        {
          idMod: "m16",
          nameMod: "CRM",
          cantLic: "X",
        },
        {
          idMod: "m17",
          nameMod: "SMARTPOS PARA RESTAURANTES",
          cantLic: "X",
        },
      ],
    },
  ];

  const [openSection, setOpenSection] = useState(false);
  const [planCapture, setPlanCapture] = useState("");
  const [openInfo, setOpenInfo] = useState("");
  const [rateCapture, setRateCapture] = useState("");

  const handleRateDetails = (open, rateCap, idPlanCap) => {
    // setOpenInfo(!openInfo);
    // setRateCapture(option.rate);
    // setPlanCapture(plan.id);
    setOpenInfo(!open);
    setRateCapture(rateCap);
    setPlanCapture(idPlanCap);
  };

  const handleSectionPlan = (openS, idPlanCap) => {
    //  onClick={() => {
    //   setOpenSection(!openSection);
    // setPlanCapture(plan.id);
    // }}
    setOpenSection(!openS);
    setPlanCapture(idPlanCap);
  };

  return (
    <>
      <section className="prices">
        <h2 className="generalTittle2">
          Optimiza la gestión y recursos de tu negocio o empresa
          <br />
          SiGeM Software ERP con sus soluciones; ¡Lo hacen posible!
          <br />
        </h2>
        <h1 className="generalTittle">
          Mira nuestro catálogo de precios y versiones disponibles:
        </h1>
        <p className="detSectionMain">
          A continuación se muestra una lista con las diferentes versiones y
          precios que tenemos disponibles:
        </p>
        <PlanesGenList
          planes={planesSigem}
          planCapture={planCapture}
          rateCapture={rateCapture}
          openInfoRate={openInfo}
          openInfoPlan={openSection}
          handleRetDetails={handleRateDetails}
          handleSectionPlan={handleSectionPlan}
        />
      </section>
    </>
  );
}

export default PriceList;
