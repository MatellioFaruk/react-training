import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthenticationContext } from '../context/authentication.context'
import Header from '../layouts/Header'
import { useSelector } from 'react-redux'

export default function PrivateRoute({ children }) {
    const navigate = useNavigate()
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthenticationContext)


    const isAuth = useSelector(state => state.auth.isAuthenticated)
    useEffect(() => {

        console.log(isAuth, "isAuthenticate")
        if (!isAuth) {
            navigate("login", {
                replace: true
            })
        }
    }, [isAuth])
    return (<>
        <Header isAuthenticated={isAuth} setIsAuthenticated={setIsAuthenticated} />
        {children}
    </>)
}
