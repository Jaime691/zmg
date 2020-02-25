import React from "react";

const Modal = ({ handleClose }) => {
  return (
    <div>
      <section>
        <header>Thank you for voting!</header>
        <button onClick={handleClose}>Vote again</button>
      </section>
    </div>
  );
};
export default Modal;
