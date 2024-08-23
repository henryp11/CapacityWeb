import React from "react";
import ModalModul from "../components/ModalModul";
import "../styles/modal.css";

function ModulDet(props) {
  const { isOpen, modulName, modulImg, modulDescrip, closeModal, modDetails } =
    props;
  return (
    <ModalModul isOpen={isOpen} onCloseModal={closeModal}>
      <div className="modal_modul_slogan">
        <img src={modulImg} alt="someModule" id="img_modul_alter" />
        <h1>Módulo {modulName}</h1>
        <h3>{modulDescrip}</h3>
      </div>
      <div className="modal_modul_det">
        <img src={modulImg} alt="someModule" className="hide_img_modul" />
        <ul>
          {modDetails.length > 0 ? (
            modDetails.map((det, pos) => {
              return <li key={pos}>{det}</li>;
            })
          ) : (
            <li>---</li>
          )}
        </ul>
      </div>
    </ModalModul>
  );
}

export default ModulDet;
