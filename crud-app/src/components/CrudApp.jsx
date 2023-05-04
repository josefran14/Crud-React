import { Typography } from "@mui/material";
import { useUsers } from "../hooks/useUsers";
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
      <Typography variant="h4">CrudApp</Typography>
      <FormModal
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        newUser={newUser}
      />
      <UserModal
        openModalView={openModalView}
        handleCloseModalView={handleCloseModalView}
        specificUser={specificUser}
      />
      <TableUsers
        users={users}
        handleDelete={handleDelete}
        getUsersDetails={getUsersDetails}
      />
    </>
  );
};
