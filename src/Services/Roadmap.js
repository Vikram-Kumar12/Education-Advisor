import axios from "./axiosInstance.js";

export const roadmap = async (data)=>{
    return axios.post("/quiz/roadmap",data)
}