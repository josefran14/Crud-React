import { useState } from "react"
import { FormAdd } from "./components/FormAdd"
import { TableUser } from "./components/TableUser"
import { UserModal } from "./components/UserModal"
import { useFetch } from "./hooks/useFetch"

export const App = () => {

    const {data, isLoading} = useFetch("http://localhost:5000/usuarios")

    const [modal, setModal] = useState(false)

    const [uniqueData, setUniqueData] = useState({})

    const [open, setOpen] = useState(false);

    // const handleOpen = () => {
    //   setOpen(true);
    // };

    // const handleClose = () => {
    //   setOpen(false);
    // };

    console.log("Unique", uniqueData)

    //console.log("data", data)

    if(isLoading){
      return <p>Cargando...</p>
    }
    console.log("Modal", modal)

  return (
    <>
    <h1>Crud</h1>
    {/* {
    modal 
  } */}
      <UserModal users={data} uniqueData={uniqueData}/> 
    <hr />

    <TableUser users={data} setModal={setModal} modal={modal} uniqueData={uniqueData} setUniqueData={setUniqueData} open={open} setOpen={setOpen}/>

    </>
  )
}
