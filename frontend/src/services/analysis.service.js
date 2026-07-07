import api from "../lib/api.js";

export const analyseWebsite = async(url)=>{
    console.log(url);
    const response = await api.post("/analysis",{
        url,
    })

    return response.data;
}