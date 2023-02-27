import { Visibility } from "@mui/icons-material";
import { Box, Button, TableCell, TableRow } from "@mui/material";
import { Modal } from "./Modal";


export const UserList = ({ users, setModal, modal, uniqueData, setUniqueData, open, setOpen}) => {

   const searchById = (id) =>{
     //console.log("Ojito", id)
     setModal(!modal)
     let result = users.filter((user) => user.id === id)
      setUniqueData(result)
      setOpen(true)
      console.log('filter', result)
      console.log('open', open)
    }

   const handleEdit = (id) =>{
    console.log("Edit", id)
   }

   const handleDelete = (id) =>{
    console.log("Delete", id);
   }

  return (
    <>
      {users.map(({ name, id, lastName, gender, email }) => (
        <TableRow key={id}>
          <TableCell>
            {/* <UserItem name={name}/> */}
            {id}
          </TableCell>

          <TableCell>
            {/* <UserItem name={name}/> */}
            {name}
          </TableCell>

          <TableCell>
            {/* <UserItem name={name}/> */}
            {lastName}
          </TableCell>

          <TableCell>
            {/* <UserItem name={name}/> */}
            {gender}
          </TableCell>

          <TableCell>
            {/* <UserItem name={name}/> */}
            {email}
          </TableCell>

          <TableCell>
            {/* <UserItem name={name}/> */}
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              <Button onClick={() => handleEdit(id)} variant="contained" sx={{ margin: "10px" }}>
                Edit
              </Button>

              <Button
               onClick={() => searchById(id)}
               open={open}
                variant="contained"
                sx={{ bgcolor: "aqua", margin: "10px" }}
              >
                <Visibility />
                

              </Button>

              <Button onClick={ () => handleDelete(id)} variant="contained" color="error" sx={{ margin: "10px" }}>
                Delete
              </Button>

            </Box>
          </TableCell>
        </TableRow>
      ))}
      
    </>
  );
};
