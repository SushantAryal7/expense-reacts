import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div>
      <button>click</button>
      {children}
    </div>,
    document.getElementById("root2")
  );
}

export default Modal;
