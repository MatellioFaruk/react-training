import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PublicRoute() {
    const navigate = useNavigate()
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
