import React from "react";
import "../styles/modal.css";

function Modal(props) {
  const { onClose } = props;

  return (
    <div className="modal-background">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        {props.children}
      </div>
    </div>
  );
}

export { Modal };