import React from "react";
import { Modal, Box } from "@mui/material";

const CustomModal = ({ open, onClose, children }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
