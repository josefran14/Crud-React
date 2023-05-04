import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const UserModal = ({openModalView, handleCloseModalView, specificUser}) => {

  return (
    <>
      <Modal
        open={openModalView}
        onClose={handleCloseModalView}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
        <Button onClick={handleCloseModalView}>
              {" "}
              <CloseIcon />{" "}
            </Button>
          {
            specificUser.map((user) =>(
                <Box key={user.id}>
                    <Typography>{user.name}</Typography>
                    <Typography>{user.email}</Typography>
                    <Typography>{user.city}</Typography>
                    <Typography>{user.username}</Typography>
                    <Typography>{user.website}</Typography>
                </Box>
            ))
          }
        </Box>
      </Modal>
    </>
  )
}
