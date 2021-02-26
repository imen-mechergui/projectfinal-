import axios from "axios";
import { GET_ALL_USERS } from "../constants/ActionsTypes";

export const getAllUsers = (formData) => (dispatch) => {
  axios.get("/api/auth/all", formData)
    .then((res) => dispatch({ type: GET_ALL_USERS, payload: res.data }))
    .catch((err) => console.log(err));
};

export const deleteUser = (idUser) => (dispatch) => {
  axios
    .delete(`/api/auth/delete/${idUser}`)
    .then((res) => dispatch(getAllUsers()))
    .catch((err) => console.log(err));
};

export const editUser = (idUser, editedUser) => (dispatch) => {
  axios
    .put(`/api/auth/edit/${idUser}`, editedUser)
    .then((res) => dispatch(getAllUsers()))
    .catch((err) => console.log(err));
};