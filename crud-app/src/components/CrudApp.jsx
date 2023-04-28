import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getAllUsers } from "../api/getAllUsers"
import { FormModal } from "./FormModal"
import { TableUsers } from "./TableUsers"

export const CrudApp = () => {

    const [users, setUsers] = useState([])

    const getUsers = async() =>{
        const allUsers = await getAllUsers()
        setUsers(allUsers)
    }

     useEffect(() => {
      getUsers()
    }, []) 

  return (
    <>
        <Typography variant="h4">CrudApp</Typography>
        <FormModal/>
        <TableUsers users={users}/>
    </>
  )
}
