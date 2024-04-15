import React, { useContext } from 'react'
import { AuthenticationContext } from '../context/authentication.context'

export default function Header() {
    const { logout } = useContext(AuthenticationContext)
    return (
        <div>Header

            <button onClick={() => {
                logout()

            }}>
                Logout
            </button>
        </div>
    )
}
