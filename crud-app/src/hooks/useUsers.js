import { useEffect, useState } from "react";
import { getAllUsers } from "../api/getAllUsers";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';

export const useUsers = () => {

    const [open, setOpen] = useState(false);

    const [openModalView, setOpenModalView] = useState(false);

    const [newUser, setNewUser] = useState({});

    const [specificUser, setSpecificUser] = useState([])

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const allUsers = await getAllUsers();
        setUsers(allUsers);
    };

    useEffect(() => {
        getUsers();
    }, [users]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenModalView = () => {
        setOpenModalView(true);
      };

    const handleCloseModalView = () => {
        setOpenModalView(false);
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
        axios.delete(`https://fake-api-spartan.herokuapp.com/users/${id}`)
    }

    const getUsersDetails = (id) =>{
        let usuario = users.filter((user) => user.id === id)
        setSpecificUser(usuario)
        handleOpenModalView()
    }

    useEffect(() => {
      getUsersDetails
    }, [specificUser])
    

    return{
        handleChange,
        handleSubmit,
        open,
        handleClose,
        handleOpen,
        newUser,
        handleDelete,
        openModalView,
        handleOpenModalView,
        handleCloseModalView,
        getUsersDetails,
        users,
        specificUser
    } 
};