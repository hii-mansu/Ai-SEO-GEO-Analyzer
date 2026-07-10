import api from "../lib/api"


export const getPlans = async()=>{
    const response = await api.get("/subscriptions/plans");
    return response.data;
}