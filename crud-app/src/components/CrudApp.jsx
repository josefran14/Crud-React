import { Box, Stack, Typography } from "@mui/material";
import { useModeDark } from "../hooks/useModeDark";
import { useUsers } from "../hooks/useUsers";
import { ButtonDarkMode } from "./ButtonDarkMode";
import { DeleteModal } from "./DeleteModal";
import { FormModal } from "./FormModal";
import { TableUsers } from "./TableUsers";
import { UserModal } from "./UserModal";
import logo from "../assets/reactjs.svg";
import logo2 from "../assets/react-2.svg";

export const CrudApp = () => {
  const {
    handleChange,
    handleSubmit,
    handleClose,
    handleOpen,
    open,
    newUser,
    handleDelete,
    openModalView,
    handleCloseModalView,
    getUsersDetails,
    users,
    specificUser,
    handleUpdate,
    updateUser,
    openModalDelete,
    handleOpenModalDelete,
    handleCloseModalDelete,
    handleAddUpdate,
  } = useUsers();

  const { darkMode, darkStyle, handleDarkMode, borderDarkStyle } =
    useModeDark();

  const date = new Date();

  const currentYear = date.getFullYear();

  return (
    <Box sx={{ ...darkStyle, minHeight: "100vh", minWidth: "100vw" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <img src={logo} width="60px" height="40px" />
              <Typography sx={{ ...darkStyle, fontWeight: "700" }}>
                ® {currentYear}
              </Typography>
          </Stack>
        <Typography variant="h4">CrudApp</Typography>
        <ButtonDarkMode
          darkMode={darkMode}
          darkStyle={darkStyle}
          handleDarkMode={handleDarkMode}
        />
      </Box>
      <FormModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        newUser={newUser}
        handleUpdate={handleUpdate}
        updateUser={updateUser}
        handleAddUpdate={handleAddUpdate}
        darkStyle={darkStyle}
        borderDarkStyle={borderDarkStyle}
      />
      <UserModal
        openModalView={openModalView}
        handleCloseModalView={handleCloseModalView}
        specificUser={specificUser}
        darkStyle={darkStyle}
      />
      <TableUsers
        users={users}
        getUsersDetails={getUsersDetails}
        handleUpdate={handleUpdate}
        handleOpenModalDelete={handleOpenModalDelete}
        darkStyle={darkStyle}
      />
      <DeleteModal
        handleDelete={handleDelete}
        openModalDelete={openModalDelete}
        handleCloseModalDelete={handleCloseModalDelete}
        updateUser={updateUser}
        specificUser={specificUser}
        darkStyle={darkStyle}
      />
    </Box>
  );
};
