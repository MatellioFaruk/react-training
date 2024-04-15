import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../context/authentication.context'

export default function PrivateRoute({ children }) {
    const navigate = useNavigate()
    const { isAuthenticated } = useContext(AuthenticationContext)
    useEffect(() => {

        console.log(isAuthenticated, "isAuthenticate")
        if (!isAuthenticated) {
            navigate("login", {
                replace: true
            })
        }
    }, [isAuthenticated])
    return (<>
        {children}
    </>)
}
