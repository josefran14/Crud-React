import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export const DeleteModal = ({
  handleDelete,
  updateUser,
  openModalDelete,
  handleCloseModalDelete,
  darkStyle
}) => {
  
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

  return (
    <>
      <div>
        <Modal
          open={openModalDelete}
          onClose={handleCloseModalDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{...style, ...darkStyle}}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography>
                ¿Estas seguro que deseas eliminar este usuario?
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "80px",
                  marginTop: "20px",
                }}
              >
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => handleDelete(updateUser)}
                >
                  Si
                </Button>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handleCloseModalDelete}
                >
                  No
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
};
