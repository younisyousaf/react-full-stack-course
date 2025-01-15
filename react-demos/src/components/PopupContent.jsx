import React from "react";
import { createPortal } from "react-dom";

const PopupContent = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div className="popup d-flex justify-content-center align-items-center">
          <p>Copied!</p>
        </div>
      )}
    </section>,
    document.getElementById("portal")
  );
};

export default PopupContent;
