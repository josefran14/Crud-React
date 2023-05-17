import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, Typography } from "@mui/material";

 const style = {
  width: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  transform: "translate(-50%, -50%)",
  position: 'absolute',
  top: '50%',
  left: '50%',
 };

export const UserModal = ({openModalView,handleCloseModalView,specificUser,darkStyle}) => {

  return (
    <>
      <Modal
        open={openModalView}
        onClose={handleCloseModalView}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{...style, ...darkStyle}}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              maxHeight: "5%"
            }}
          >
            <Button onClick={handleCloseModalView}>
              <CloseIcon />
            </Button>
          </Box>
          <Stack sx={{display:"flex", alignItems: "center", marginBottom: "20px"}}>
            <Stack sx={{width: "60%", gap: "6px"}}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Name:</Typography>
              <Typography sx={{ gap: "10px" }}>{specificUser.name}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Gender:</Typography>
              <Typography>{specificUser.city}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Email:</Typography>{" "}
              <Typography>{specificUser.email}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Username:</Typography>{" "}
              <Typography>{specificUser.username}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Typography sx={{ fontWeight: "bold" }}>Website:</Typography>{" "}
              <Typography>{specificUser.website}</Typography>
            </Box>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};
