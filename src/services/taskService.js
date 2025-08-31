import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getTasks = () => axios.get(API_URL);

export const createTask = (data) => axios.post(API_URL, data);

export const updateTask = (id, data) => axios.put(`${API_URL}${id}/`, data);

export const deleteTask = (id) => axios.delete(`${API_URL}${id}/`);
