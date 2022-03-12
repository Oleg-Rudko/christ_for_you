import React, { useCallback, useEffect } from "react";
import ReactDom from "react-dom";
import "./Portal.scss";

const Portal = ({ open, onClose, children }) => {
  const escFunction = useCallback((e) => {
    if (e.keyCode === 27) {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction);

    return () => {
      document.removeEventListener("keydown", escFunction);
    };
  }, [escFunction]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return ReactDom.createPortal(
    <div className="Portal">
      <div className="Portal_Overlay" onClick={onClose} />
      <div className="Portal_Style">
        <>{children}</>
        <div onClick={onClose} className="Portal_Close">
          ⓧ
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Portal;
