import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../../context/authentication.context'

export default function Login() {
    const { login } = useContext(AuthenticationContext)
    return (
        <div>Login
            <button onClick={() => {
                login()

            }}>
                Login
            </button>

        </div>
    )
}
