import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../contexts/authentication.context'
import Header from '../layouts/Header'
import { useSelector } from 'react-redux'

export default function PublicRoute({ children }) {
    const navigate = useNavigate()
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticationContext)
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    useEffect(() => {
        if (isAuth) {
            navigate("/", {
                replace: true
            })
        }
    }, [isAuth])
    return (<>
        <Header isAuthenticated={isAuth} setIsAuthenticated={setIsAuthenticated} />
        {children}
    </>)
}
