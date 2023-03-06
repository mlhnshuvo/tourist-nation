import React from "react";
import PropTypes from "prop-types";

function Modal({ children, modalHandler }) {
  return (
    <div>
      <div className="modal">{children}</div>
      <p className="modal-opacity" onClick={modalHandler} aria-hidden />
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  modalHandler: PropTypes.func.isRequired,
};

export default Modal;
