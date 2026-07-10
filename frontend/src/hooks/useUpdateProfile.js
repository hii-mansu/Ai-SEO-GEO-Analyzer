import { useMutation } from "@tanstack/react-query"
import { updateProfile } from "../services/user.service"
import { useAuth } from "../context/AuthContext";



export const useUpdateProfile = ()=>{
    const {setUser} = useAuth();
    return useMutation({
        mutationFn:updateProfile,
            onSuccess(data) {
        setUser(data.user);
        alert(data.message);
    },

    onError(err) {
        alert(err.response?.data?.message);
        console.log(err.response);
    }
    });
};