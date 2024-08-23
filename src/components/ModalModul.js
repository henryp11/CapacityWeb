import React from "react";
import ReactDOM from "react-dom";

function ModalModul(props) {
  if (!props.isOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal_container">
        <button onClick={props.onCloseModal} className="modal_btn"></button>
        <div className="modal_container_children">{props.children}</div>
      </div>
    </div>,
    document.getElementById("modalModul")
  );
}

export default ModalModul;
