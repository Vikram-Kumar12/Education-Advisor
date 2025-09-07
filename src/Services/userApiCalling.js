import axios from "./axiosInstance.js";

export const registerUser = async (data) =>{
    console.log("Hello")
    return axios.post("/user/register",data)
}

export const loginUser = async (data) =>{
  return axios.post("/user/login",data)
}