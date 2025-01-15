import React, { useState } from "react";
import PopupContent from "./PopupContent";

const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <>
      <div className="main d-flex justify-content-center align-items-center mt-3 w-50 mx-auto">
        <input
          className="form-control"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy
        </button>
      </div>
      <PopupContent copied={copied} />
    </>
  );
};

export default CopyInput;
