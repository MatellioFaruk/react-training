import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../context/authentication.context'

export default function PublicRoute({ children }) {
    const navigate = useNavigate()
    const { isAuthenticated } = useContext(AuthenticationContext)
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/", {
                replace: true
            })
        }
    }, [isAuthenticated])
    return (<>
        {children}
    </>)
}
