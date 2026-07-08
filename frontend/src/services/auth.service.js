import api from '../lib/api'

export const register = async(userData)=>{
    const response = await api.post("/auth/register",userData);
    console.log(response);
    return response.data;
}

export const login = async(userData)=>{
    const response = await api.post("/auth/login", userData);
    return response.data;
}

export const forget = async(userData)=>{
    const response = await api.post("/auth/forget", userData);
    return response.data;
}


export const reset = async(userData)=>{
    const response = await api.post("/auth/reset", userData);
    return response.data;
}