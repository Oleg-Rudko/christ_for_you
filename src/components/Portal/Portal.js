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
      document.body.style.position = "fixed";
      document.body.style.top = `-${0}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("position");
      document.body.style.removeProperty("top");
      document.body.style.removeProperty("width");
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
