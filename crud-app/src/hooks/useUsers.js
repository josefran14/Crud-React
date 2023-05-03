import { useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const useUsers = () => {

    const [open, setOpen] = useState(false);

    const [newUser, setNewUser] = useState({});

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewUser({
          ...newUser,
          [name]: value,
        });
      };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setNewUser({...newUser, id: uuidv4()})
        const url = "https://fake-api-spartan.herokuapp.com/users"
        axios.post(url, newUser)
        handleClose()
    };

    const handleDelete = (id) =>{
        console.log("id usuario", id)
        axios.delete(`https://fake-api-spartan.herokuapp.com/users/${id}`)
    }

    return{
        handleChange,
        handleSubmit,
        open,
        handleClose,
        handleOpen,
        newUser,
        handleDelete
    } 
};