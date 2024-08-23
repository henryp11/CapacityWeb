import React, { useState } from "react";
import "../styles/priceList.css";
import PlanesGenList from "../components/PlanesGenList";
import ImgCont from "../images/contaWork.jpg";

function ContList() {
  const planesSigemCont = [
    {
      id: "planContS01",
      name: "Tiny",
      logo: "/images/Version_Tiny.png",
      prices: [
        {
          rate: "tfr1",
          nameRate: "Tarifa Fija Mensual",
          price: "",
          detRate: `Precio Fijo a pagar cada mes (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: `Pago fijo una vez al mes por uso del servicio en la nube`,
          urlRateForm: "",
        },
        {
          rate: "tfr2",
          nameRate: "Tarifa Fija Anual",
          price: "",
          detRate: `Precio fijo a pagar cada año (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: `Pago fijo una vez al año por uso del servicio en la nube, con este plan obtienes un ahorro de 2 meses de pago.`,
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
      id: "planContS02",
      name: "Lite",
      logo: "/images/Version_Lite.png",
      prices: [
        {
          rate: "tfr1",
          nameRate: "Tarifa Fija Mensual",
          price: "",
          detRate: `Precio Fijo a pagar cada mes (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: "Pago fijo una vez al mes por uso del servicio en la nube",
          urlRateForm: "",
        },
        {
          rate: "tfr2",
          nameRate: "Tarifa Fija Anual",
          price: "",
          detRate: `Precio fijo a pagar cada año (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: `Pago fijo una vez al año por uso del servicio en la nube, con este plan obtienes un ahorro de 2 meses de pago.`,
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
      id: "planContS03",
      name: "Pymes",
      logo: "/images/Version_Pymes.png",
      prices: [
        {
          rate: "tfr1",
          nameRate: "Tarifa Fija Mensual",
          price: "",
          detRate: `Precio Fijo a pagar cada mes (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: "Pago fijo una vez al mes por uso del servicio en la nube",
          urlRateForm: "",
        },
        {
          rate: "tfr2",
          nameRate: "Tarifa Fija Anual",
          price: "",
          detRate: `Precio fijo a pagar cada año (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: `Pago fijo una vez al año por uso del servicio en la nube, con este plan obtienes un ahorro de 2 meses de pago.`,
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
      id: "planContS04",
      name: " PRO",
      logo: "/images/Version_Pro.png",
      prices: [
        {
          rate: "tfr1",
          nameRate: "Tarifa Fija Mensual",
          price: "",
          detRate: `Precio Fijo a pagar cada mes (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: "Pago fijo una vez al mes por uso del servicio en la nube",
          urlRateForm: "",
        },
        {
          rate: "tfr2",
          nameRate: "Tarifa Fija Anual",
          price: "",
          detRate: `Precio fijo a pagar cada año (+IVA)`,
          observac: `Se aplica un costo inicial por concepto de implementación, 
          capacitación y asistencia técnica. Costo varía según 
          la versión adquirida y tamaño de su negocio.`,
          observac2: `Pago fijo una vez al año por uso del servicio en la nube, con este plan obtienes un ahorro de 2 meses de pago.`,
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
  ];

  const [openSection, setOpenSection] = useState(false);
  const [planCapture, setPlanCapture] = useState("");
  const [openInfo, setOpenInfo] = useState("");
  const [rateCapture, setRateCapture] = useState("");

  const handleRateDetails = (open, rateCap, idPlanCap) => {
    setOpenInfo(!open);
    setRateCapture(rateCap);
    setPlanCapture(idPlanCap);
  };

  const handleSectionPlan = (openS, idPlanCap) => {
    setOpenSection(!openS);
    setPlanCapture(idPlanCap);
  };

  return (
    <>
      <section className="prices">
        <h1 className="generalTittle">SiGeM Software ERP para contadores</h1>
        <div className="detSectionMain detSectionMain-cont">
          <figure className="imgContaSigem">
            <img src={ImgCont} alt="" />
          </figure>
          <p>
            Si eres contador y necesitas manejar varios clientes, utilizando un
            mismo sistema contable,
            <br />
            tenemos varias versiones especialmente diseñadas para satisfacer
            todas tus necesidades de gestión operativa.
            <br />
            <br />
            Estas versiones trabajan 100% en la nube, dándote la flexibilidad de
            poder conectarte desde cualquier lugar en cualquier momento. Poseen
            la caracteristica de poder manejar varias empresas desde un sitio de
            acceso unificado.
            <br />
            Pagas únicamente por los módulos que utilizas, sin limitación alguna
            en el número de documentos que puedes generar electrónicamente.
            <br />
            Para obtener más información de nuestros planes, ponte en contacto
            con nosotros.
            <br />
            <b>Versiones Disponibles:</b>
          </p>
        </div>
        <PlanesGenList
          planes={planesSigemCont}
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

export default ContList;
