import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllUsers } from "../api/getAllUsers";
import { useUsers } from "../hooks/useUsers";
import { FormModal } from "./FormModal";
import { TableUsers } from "./TableUsers";

export const CrudApp = () => {

  const { handleChange, handleSubmit, handleClose, handleOpen, open, newUser, handleDelete } = useUsers();

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const allUsers = await getAllUsers();
    setUsers(allUsers);
  };

  useEffect(() => {
    getUsers();
  }, [users]);

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
      <TableUsers users={users} handleDelete={handleDelete} />
    </>
  );
};
