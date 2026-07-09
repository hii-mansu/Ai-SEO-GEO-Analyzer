import { createContext, useContext, useEffect, useState } from "react";
import { login, me, logout } from "../services/auth.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [meloading, setMeLoading] = useState(true);

  const checkAuth = async () => {
   // if(localStorage.getItem("accessToken"))
    try {
      const response = await me();
      setUser(response.user);
    } catch (error) {
      setUser(null);
    } finally {
      setMeLoading(false);
    };
  };

  const logoutUser = async() => {
    await logout();
  localStorage.removeItem("accessToken");
  setUser(null);
};

const loginUser = async(userData)=>{
    
    const response = await login(userData);
    setUser(response.user);
    localStorage.setItem("accessToken", response.accessToken);
    setUser(response.user);


    return response;   
}

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        meloading,
        checkAuth,
        logoutUser,
        loginUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};