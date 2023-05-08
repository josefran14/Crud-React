import { Box, Typography } from "@mui/material";
import { useUsers } from "../hooks/useUsers";
import { DeleteModal } from "./DeleteModal";
import { FormModal } from "./FormModal";
import { TableUsers } from "./TableUsers";
import { UserModal } from "./UserModal";

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
    handleAddUpdate,
    openModalDelete,
    handleOpenModalDelete,
    handleCloseModalDelete,
  } = useUsers();

  /* const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const allUsers = await getAllUsers();
    setUsers(allUsers);
  };

  useEffect(() => {
    getUsers();
  }, [users]); */

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">CrudApp</Typography>
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
      />
      <UserModal
        openModalView={openModalView}
        handleCloseModalView={handleCloseModalView}
        specificUser={specificUser}
      />
      <TableUsers
        users={users}
        getUsersDetails={getUsersDetails}
        handleUpdate={handleUpdate}
        handleOpenModalDelete={handleOpenModalDelete}
      />
      <DeleteModal
        handleDelete={handleDelete}
        openModalDelete={openModalDelete}
        handleCloseModalDelete={handleCloseModalDelete}
        updateUser={updateUser}
        specificUser={specificUser}
      />
    </>
  );
};
