import React from 'react'

export default function Header({ isAuthenticated, setIsAuthenticated }) {
    return (
        <div>Header

            <button onClick={() => {
                setIsAuthenticated(false)

            }}>
                Logout
            </button>
        </div>
    )
}
