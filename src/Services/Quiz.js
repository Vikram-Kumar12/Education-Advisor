import axios from "./axiosInstance.js";

export const getQuiz = async ()=>{
    return axios.post("/quiz/questions")
}

export const submitQuiz = async (data)=>{
    return axios.post("/quiz/analyze-quiz",data)
}

// shape it 
export const shape = async (data)=>{
    return axios.post("/quiz/dream",data)

}
