import axios from "axios";

const BASE_URL='http://localhost:8000/';
const myAxios = axios.create({
    baseURL:BASE_URL
})

export const getAllUsers=()=>{
    return myAxios.get("users").then(response=>response.data);
}

export const updateUser=(user)=>{
    return myAxios.put(`users/${user._id}`,user).then(response=>response.data);
}

export const createUser=(user)=>{
    return myAxios.post(`users`,user).then(response=>response.data);
}

export const deleteUser=(userId)=>{
    return myAxios.delete(`users/${userId}`).then(response=>response.data);
}