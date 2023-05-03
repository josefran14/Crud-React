import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

export const FormModal = ({handleOpen, open, handleClose, handleChange, handleSubmit, newUser}) => {

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
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <TextField
                sx={{ width: "70%" }}
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Ingrese su nombre"
              />
              <TextField
                sx={{ width: "70%" }}
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Ingrese su Email"
              />
              <TextField
                sx={{ width: "70%" }}
                onChange={handleChange}
                name="city"
                type="text"
                placeholder="Genero"
              />
              <TextField
                sx={{ width: "70%" }}
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="Username"
              />
              <TextField
                sx={{ width: "70%" }}
                onChange={handleChange}
                name="website"
                type="text"
                placeholder="Website"
              />
              <Button onClick={handleSubmit} variant="contained" color="primary">
                Add
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};
