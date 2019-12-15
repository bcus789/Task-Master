import React from "react";
import Modal from "react-modal";

const OptionModal = props => (
  <Modal isOpen={!!props.selectedOption} contentLabel="Selected Option">
    <h3>It is Decided</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Yes My Lord</button>
  </Modal>
);

export default OptionModal;
