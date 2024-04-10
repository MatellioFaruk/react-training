import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PrivateRoute() {
    const navigate = useNavigate()
    useEffect(() => {
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
