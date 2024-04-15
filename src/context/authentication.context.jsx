import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthenticationContext = createContext({
    isAuthenticated: false
});


export default function AuthenticationProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    useEffect(() => {
        //API Call and check token  from server
        console.log("Hello from AuthenticationProvider")
        if (token === "xyz") {
            setIsAuthenticated(true)
        }
    }, [])

    const logout = () => {
        localStorage.removeItem("token")
        setIsAuthenticated(false)
    }

    const login = () => {
        localStorage.setItem("token", "xyz")
        setIsAuthenticated(true)
        navigate("/")
    }
    useEffect(() => {
        console.log(isAuthenticated, "isAuthenticated from provider")
    }, [isAuthenticated])
    return (
        <AuthenticationContext.Provider value={{ isAuthenticated, setIsAuthenticated, logout, login }}>

            {children}</AuthenticationContext.Provider>
    )
}
