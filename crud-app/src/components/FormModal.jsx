import { Box, Button, Modal, TextField } from "@mui/material";
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
  p: 1,
  pb: 3,
};

export const FormModal = ({
  handleOpen,
  open,
  handleClose,
  handleChange,
  handleSubmit,
  handleAddUpdate,
  newUser,
  updateUser,
  darkStyle,
  borderDarkStyle
}) => {
  return (
    <>
      <Box sx={{width: "89%", display: "flex", justifyContent: "flex-end"}}>
        <Button onClick={handleOpen}>Add User</Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{...style, ...darkStyle}}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button onClick={handleClose}>
              <CloseIcon />
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
                paddingTop: "0px",
              }}
            >
              <TextField
                sx={{ width: "70%", ...borderDarkStyle }}
                onChange={handleChange}
                value={newUser.name}
                name="name"
                type="text"
                placeholder="Ingrese su nombre"
              />
              <TextField
                sx={{ width: "70%", ...borderDarkStyle }}
                onChange={handleChange}
                value={newUser.email}
                name="email"
                type="email"
                placeholder="Ingrese su Email"
              />
              <TextField
                sx={{ width: "70%", ...borderDarkStyle }}
                onChange={handleChange}
                value={newUser.city}
                name="city"
                type="text"
                placeholder="Genero"
              />
              <TextField
                sx={{ width: "70%", ...borderDarkStyle }}
                onChange={handleChange}
                value={newUser.username}
                name="username"
                type="text"
                placeholder="Username"
              />
              <TextField
                sx={{ width: "70%", ...borderDarkStyle }}
                onChange={handleChange}
                value={newUser.website}
                name="website"
                type="text"
                placeholder="Website"
              />
              {newUser.id === null ? (
                <Button
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                >
                  Add
                </Button>
              ) : (
                <Button
                  onClick={() => handleAddUpdate(updateUser)}
                  variant="contained"
                  color="primary"
                >
                  Update
                </Button>
              )}
            </Box>
          </form>
        </Box>
      </Modal>
    </>
  );
};
