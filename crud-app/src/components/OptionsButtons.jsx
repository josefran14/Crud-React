import { Box, Button } from "@mui/material";

export const OptionsButtons = ({
  id,
  handleDelete,
  getUsersDetails,
  handleUpdate,
  handleOpenModalDelete
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={() => handleOpenModalDelete(id)}
        sx={{ width: "20%" }}
        variant="contained"
        color="error"
      >
        Delete
      </Button>
      <Button
        onClick={() => handleUpdate(id)}
        sx={{ width: "20%" }}
        variant="contained"
        color="warning"
      >
        Update
      </Button>
      <Button
        onClick={() => getUsersDetails(id)}
        sx={{ width: "20%" }}
        variant="contained"
        color="primary"
      >
        View
      </Button>
    </Box>
  );
};
