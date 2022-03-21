import React, { useEffect } from "react";
import { Button, Box } from "@mui/material";
import Header from "./Header";
import "../css/modal.css";

const Modal = ({ title, onClose, children }) => {
  const closeOnEscapeKeydown = (e) => {
    if ((e.charCode || e.keyCode) === 27) onClose();
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeydown);
  });

  return (
    <div className="modal" onClick={onClose}>
      <Box
        component="form"
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => alert("Submitted")}
      >
        <Header className="modal__header" />

        <div className="modal__body">{children}</div>

        <div className="modal__footer">
          <Button type="submit" variant="contained" onClick={onClose}>
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Modal;
