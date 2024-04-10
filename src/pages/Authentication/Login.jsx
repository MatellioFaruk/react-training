import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login({ isAuthenticated, setIsAuthenticated }) {
    const navigate = useNavigate()
    return (
        <div>Login
            <button onClick={() => {
                setIsAuthenticated(true)
                navigate("/")
            }}>
                Login
            </button>

        </div>
    )
}
