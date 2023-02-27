import { Visibility } from "@mui/icons-material";
import { Box, Button, Table } from "@mui/material";

export const UserItem = ({ name, id, email, gender, lastname }) => {
  return (
    <Box sx={{display: "flex", justifyContent: "space-between"}}>

    <Box>
        
    <Table name={name} id={id} email={email} gender={gender} lastname={lastname}/>
      
    </Box>

      <Box sx={{display: "flex", justifyContent: "space-around"}}>

      <Button variant="contained" sx={{margin: "10px"}}>Edit</Button>
      <Button variant="contained" sx={{ bgcolor: "aqua", margin: "10px"}}>
        <Visibility />
      </Button>
      <Button variant="contained" color="error" sx={{margin: "10px"}}>
        Delete
      </Button>

      </Box>


    </Box>

);
};
