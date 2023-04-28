import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const FormModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Add User</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
          >
            <Button onClick={handleClose}>
              {" "}
              <CloseIcon />{" "}
            </Button>
          </Box>
          <form>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <TextField sx={{width: "70%"}} type="text" placeholder="Ingrese su nombre" />
              <TextField sx={{width: "70%"}} type="email" placeholder="Ingrese su Email" />
              <TextField sx={{width: "70%"}} type="text" placeholder="Genero" />
              <TextField sx={{width: "70%"}} type="text" placeholder="Username" />
              <TextField sx={{width: "70%"}} type="text" placeholder="Website" />
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};
